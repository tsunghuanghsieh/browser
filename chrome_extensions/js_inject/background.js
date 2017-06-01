chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.message === "someEvent") {
            // do something

            var queryInfo = {
                active: true,
                currentWindow: true
            };

            chrome.tabs.query(queryInfo, function(tabs) {
                var activeTab = tabs[0];

                chrome.tabs.sendMessage(activeTab.id, {"message": "message4Content", "additionalParam": "additionalParamVal"});
            });
        }
    }
);
