//
//  NSObject+Hook.h
//  PDebug
//
//  Created by John Wong on 31/12/2017.
//  Copyright © 2017 com. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface NSObject (Hook)

- (void)evaluateScript:(id)script sourceURL:(id)url;

@end
