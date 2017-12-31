# Wechat-minigame-hack
> 破解微信小游戏跳一跳，博客地址[https://johnwong.github.io/mobile/2017/12/31/hack-wechat-minigame.html](https://johnwong.github.io/mobile/2017/12/31/hack-wechat-minigame.html)

微信小游戏跳一跳上线后一下子火起来，不用烧钱光靠产品体验就轻轻松松拉动活跃用户。试着研究了一下怎样破解顺带研究下小游戏。最后成果就是能够加速每次跳成功的分数，轻轻松松登上朋友圈榜首。排行榜的更新可能有点延迟，也可能是短时间内多次上传高分会被控制。我登录到这个包打了一千多分别人看不到。重新登录打了五百多分，过了会能看到，稳稳的第一😑。

![2017-12-31-hack-wechat-minigame-1.png](https://dn-johnwong.qbox.me/images/2017-12-31-hack-wechat-minigame-1.png)

## 准备安装包重签名

手里设备都没有越狱，所以用越狱包重签名的方式来准备应用，这样就可以安装在非越狱机上。越狱包可以用PP助手下载。新建一个越狱包调试的工程，我用同事的工具新建的，网上类似的教程有很多。简单说来就是构建的时候加一段脚本用越狱包替换工程编译好的应用。需要调试可以用optool注入代码。工程准备好后，能够正常运行手机还有一段距离。

1. 删除包里`PlugIns`和`Watch`目录。当然也可以保留病自己处理签名的问题。
2. 把包里`Frameworks`下的库拖进工程，这样库才能正常签名。
3. 为了方便查看沙盒内容，给`Info.plist`增加一项`UIFileSharingEnabled`。
4. 运行时候如果遇到报错，先`Clean`再`Run`可能会解决问题。

这样的包运行到非越狱机上，一个问题是无法收到通知。这个是签名的原因无法解决，所以这样的包登陆一下装个B就够了，平时不方便使用。

## 提取小程序文件

这时候应该可以正常运行项目到手机上。打开跳一跳游戏后，用Xcode导出应用沙盒，就可以从里面找到小程序的包，扩展名是`wxapkg`。解压可以使用工具`https://github.com/billfeller/billfeller.github.io/issues/200`。解压之后可以看到内容包括`app-config.json`、`game.js`和资源目录`res`。可以看出游戏核心就是`game.js`。其中内容是压缩的，格式化一下方便阅读。方法是把文件拖进Chrome浏览器，打开开发者工具，切到Source，然后选中文件点击下面的格式化。大概研读了一下，每次跳成功增加分数的逻辑就是这样一段代码：

```javascript
{
    key: "addScore",
    value: function(t, e, i)
    {
        e ? 1 === this.double ? this.double = 2 : this.double += 2 : this.double = 1,
        i && this.double <= 2 && (this.double *= 2),
        this.double = Math.min(32, this.double),
        t *= this.double,
        this.score += t,
        this.setScore(this.score)
    }
}
```

那么这里就是比较好的切入点，想要2倍加速，那么每次增加的分数乘2就好了。接下来想想怎么把修改后的`game.js`替换应用执行的原始文件。这就需要调试应用找到合适的地方。


## 恢复符号表

这时候应用运行起来调试会是一堆乱码，可以借助工具[https://github.com/tobefuturer/restore-symbol](https://github.com/tobefuturer/restore-symbol)来恢复符号表，里面签名一块可以略过。记得先把越狱包里可执行文件的arm64架构提取出来，按照这个工具的说明一顿操作，然后在放回越狱包。

## 寻找注入点

运行起来用断点查看进入小游戏的VC，是`WAGameViewController`。用`Hopper`打开应用的可执行文件分析这个类，`-[WAGameViewController injectGameScript:]`方法，hook这个方法看入参实际上传入的并不是JS代码。顺着找到了`-[WAJSCoreService injectGameScript:]`，传入参数也不是。

断电查看游戏界面，发现游戏是在`EJJavaScriptView`这个视图中。hook这个类的方法`-[EJJavaScriptView evaluateScript:sourceURL:]`发现传入的就是JS代码。先传入的是应用中的`NativeGlobal.js`文件，随后才是游戏的`game.js`。

## 替换资源

接下来就是把修改后的`game.js`打入包里，hook方法`-[EJJavaScriptView evaluateScript:sourceURL:]`，判断参数是`game.js`中的代码时，读取修改后的文件替换。

为了加速的参数可以方便地修改，又加入了[Tweaks](https://github.com/facebook/Tweaks)这个库。修改加速倍率后，需要杀进程再进入才有效。这是因为小程序有缓存，修改了参数再次进入小程序并不会重新启动小程序。


过程介绍比较简略，工程是[https://github.com/JohnWong/Wechat-minigame-hack](https://github.com/JohnWong/Wechat-minigame-hack)。
