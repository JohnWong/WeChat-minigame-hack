//
//  UIApplication+Hook.m
//  PDebug
//
//  Created by John Wong on 31/12/2017.
//  Copyright © 2017 com. All rights reserved.
//

#import "UIApplication+Hook.h"
#import "FBTweakViewController.h"
#import "FBTweak.h"
#import "FBTweakInline.h"
#import <objc/runtime.h>

@interface UIApplication (HookDelegate) <FBTweakViewControllerDelegate>

@end

@implementation UIApplication (Hook)

+ (void)load
{
    Method original = class_getInstanceMethod(self, @selector(sendEvent:));
    Method swizzled = class_getInstanceMethod(self, @selector(hook_sendEvent:));
    method_exchangeImplementations(original, swizzled);
}

- (void)hook_sendEvent:(UIEvent *)event
{
    [self hook_sendEvent:event];
    if (event && (event.subtype == UIEventSubtypeMotionShake)) {
        if ([[event valueForKey:@"shakeState"] boolValue]) {
            UIWindow *window = [UIApplication sharedApplication].keyWindow;
            UIViewController *vc = window.rootViewController;
            while (vc != nil && ![vc isKindOfClass:[FBTweakViewController class]]) {
                vc = vc.presentedViewController;
            }
            if (vc) {
                return;
            }
            
            FBTweakViewController *viewController = [[FBTweakViewController alloc] initWithStore:[FBTweakStore sharedInstance] category:@"跳一跳"];
            viewController.tweaksDelegate = self;
            [window.rootViewController presentViewController:viewController animated:YES completion:nil];
        }
    }
}

- (void)tweakViewControllerPressedDone:(FBTweakViewController *)tweakViewController
{
    [tweakViewController dismissViewControllerAnimated:YES completion:NULL];
}

@end
