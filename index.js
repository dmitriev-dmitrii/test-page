// console.log('hui')

// alert ('navigator :' + window.navigator.userAgent ) 
// alert ('devicePixelRatio:' +  window.devicePixelRatio) 


function* visitCssRule(cssRule) {
    // visit imported stylesheet
    if (cssRule.type == cssRule.IMPORT_RULE)
        yield* visitStyleSheet(cssRule.styleSheet);

    // yield media rule
    if (cssRule.type == cssRule.MEDIA_RULE)
        yield cssRule;
}

function* visitStyleSheet(styleSheet) {
    try {
        // visit every rule in the stylesheet
        var cssRules = styleSheet.cssRules;
        for (var i = 0, cssRule; cssRule = cssRules[i]; i++)
            yield* visitCssRule(cssRule);
    } catch (ignored) {}
}

function* findAllMediaRules() {
    // visit all stylesheets
    var styleSheets = document.styleSheets;
    for (var 
