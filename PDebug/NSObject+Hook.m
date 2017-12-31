//
//  NSObject+Hook.m
//  PDebug
//
//  Created by John Wong on 31/12/2017.
//  Copyright © 2017 com. All rights reserved.
//

#import "NSObject+Hook.h"
#import "FBTweakInline.h"
#import <objc/runtime.h>

@implementation NSObject (Hook)

+ (void)load
{
    dispatch_after(dispatch_time(DISPATCH_TIME_NOW, (int64_t)(1 * NSEC_PER_SEC)), dispatch_get_main_queue(), ^{
        Class clz = NSClassFromString(@"EJJavaScriptView");
        Method m1 = class_getInstanceMethod(clz, @selector(evaluateScript:sourceURL:));
        Method m2 = class_getInstanceMethod(clz, @selector(hook_evaluateScript:sourceURL:));
        method_exchangeImplementations(m1, m2);
        
    });
}

- (void)hook_evaluateScript:(NSString *)script sourceURL:(id)url
{
    if (script.length > 20 && [[script substringToIndex:20] containsString:@"define(\"game.js\""]) {
        NSString *path = [[NSBundle mainBundle] pathForResource:@"game" ofType:@"js"];
        NSError *error = nil;
        NSString *newScript = [[NSString alloc] initWithContentsOfFile:path encoding:NSUTF8StringEncoding error:&error];
        newScript = [newScript stringByReplacingOccurrencesOfString:@"0x0000000000001" withString:[NSString stringWithFormat:@"%d", FBTweakValue(@"跳一跳", @"跳一跳", @"加速", 1)]];
        if (newScript.length > 0) {
            script = newScript;
        }
    }
    [self hook_evaluateScript:script sourceURL:url];
}

@end
