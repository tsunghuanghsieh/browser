document.addEventListener('DOMContentLoaded', function () {
    var script = document.createElement("script");
    script.id = 'jsinjected';
    script.async = true;
    // TODO: specify the url to js for injection
    script.src = chrome.runtime.getURL("custom_action.js");

    // Attach handlers for all browsers
    script.onload = script.onreadystatechange = function (e, isAbort) {
        if (isAbort || !script.readyState || /loaded|complete/.test(script.readyState)) {
            // Handle memory leak in IE
            script.onload = script.onreadystatechange = null;

            // Callback if not aborted
            if (!isAbort) {
                // callback();
            }
        }
    };

    var head = document.getElementsByTagName('head')[0];
    head.insertBefore(script, head.firstChild);

    // To send message to background process
    // chrome.runtime.sendMessage({"message": "someEvent"});
});

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.message === "message4Content") {
            // do something on the page
        }
    }
);