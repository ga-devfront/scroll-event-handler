export default (settings) => {
    const container = document.querySelector(settings.container);
    const userAgent = window.navigator.userAgent;
    console.log(userAgent);
    const navigators = {
        chrome: {
            name: 'chrome',
            regex: /\(KHTML, like Gecko\) Chrome/,
            deltaY: 100
        },
        edge: {
            name: 'edge',
            regex: /Edge[\/\s](\d+\.\d+)/,
            deltaY: 145.0500030517578
        },
        firefox: {
            name: 'firefox',
            regex: /Firefox[\/\s](\d+\.\d+)/,
            deltaY: 3
        },
        ie: {
            name: 'ie',
            regex: /MSIE (\d+\.\d+);/,
            deltaY: 0
        },
        opera: {
            name: 'opera',
            regex: /OPR[\/\s](\d+\.\d+)/,
            deltaY: 100
        },
    }

    let currentNavigator = null;
    let scrollCount = 0;

    if (navigators.chrome.regex.test(userAgent) && !navigators.opera.regex.test(userAgent) && !navigators.edge.regex.test(userAgent)) {
        currentNavigator = navigators.chrome;
    }

    if (navigators.edge.regex.test(userAgent)) {
        currentNavigator = navigators.edge;
    }

    if (navigators.firefox.regex.test(userAgent)) {
        currentNavigator = navigators.firefox;
    }

    if (navigators.ie.regex.test(userAgent)) {
        currentNavigator = navigators.ie;
    }

    if (navigators.opera.regex.test(userAgent)) {
        currentNavigator = navigators.opera;
    }

    // console.log test
    if (currentNavigator !== null) {
        console.log(currentNavigator);
    }

    if (currentNavigator === null) {
        console.log('sorry but scroll listener do not run on this navigator');
        return
    }

    if (currentNavigator.name === 'chrome' || 'edge' || 'firefox' || 'ie' || 'opera') {
        container.addEventListener('wheel', (element) => {
            element.preventDefault();
            element.stopPropagation();
            const calcForOneScroll = element.deltaY / currentNavigator.deltaY;
            scrollCount += calcForOneScroll;
            console.log(scrollCount);
        });
    }

}