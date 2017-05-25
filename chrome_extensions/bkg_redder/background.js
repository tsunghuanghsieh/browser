// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Page Redder
// https://developer.chrome.com/extensions/samples

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function (tab) {
    // No tabs or host permissions needed!
    console.log('Turning ' + tab.url + ' red!');
    // chrome.tabs.executeScript({
    //     code: 'document.body.style.backgroundColor="red"'
    // });

    // let's change all (google.com) tabs instead of just active tab
    chrome.tabs.query({}, function (tabs) {
        for (var i = 0; i < tabs.length; i++) {
            if (tabs[i].url.indexOf("google.com") != -1) {
                // does not work on mail.google.com and some google subdomains
                chrome.tabs.executeScript(tabs[i].id, {
                    code: 'document.body.style.backgroundColor="red"'
                });
            }
        }
    });
});