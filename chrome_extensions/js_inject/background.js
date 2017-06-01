//
// Per manifest.json, background.js will be run by browser to add a listener
//
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        // handle some event
        if (request.message === "someEvent") {
            // do something

            var queryInfo = {
                active: true,
                currentWindow: true
            };

            // send message to active tab
            chrome.tabs.query(queryInfo, function(tabs) {
                var activeTab = tabs[0];

                chrome.tabs.sendMessage(activeTab.id, {"message": "message4Content", "additionalParam": "additionalParamVal"});
            });
        }
    }
);
