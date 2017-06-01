(function (doc, src, id, attributeMap, callback) {
    var script = doc.createElement("script");
    script.id = id;
    script.async = true;
    script.src = src;

    for (var attribute in attributeMap) {
        if (attributeMap.hasOwnProperty(attribute)) {
            script.setAttribute("data-" + attribute, attributeMap[attribute]);
        }
    }

    // handle onload and onreadystatechange event
    script.onload = script.onreadystatechange = function (e, isAbort) {
        if (isAbort || !script.readyState || /loaded|completed/.test(script.readyState)) {
            // Handle memory leak in IE
            script.onload = script.onreadystatechange = null;

            if (!isAbort) {
                callback();
            }
        }
    }
})(
    window.document,
    "https://blahblahblah.domain.com/path/to/js.js",
    "some-id-for-js",
    {},
    function () {
        // callback
        // do something
    }
);