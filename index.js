export default (settings) => {
    const userAgent = window.navigator.userAgent;
    const regex = {
        firefox: /Firefox[\/\s](\d+\.\d+)/,
        ie: /MSIE (\d+\.\d+);/,
        edge: /Edge[\/\s](\d+\.\d+)/,
        chrome: /\(KHTML, like Gecko\) Chrome/,
        opera: /OPR[\/\s](\d+\.\d+)/,
    }

    let navigator = null;

    if (regex.firefox.test(userAgent)) {
       navigator = 'firefox';
    }

    if (regex.ie.test(userAgent)) {
        navigator = 'ie';
    }

    if (regex.edge.test(userAgent)) {
        navigator = 'edge';
    }

    if (regex.chrome.test(userAgent) && !regex.opera.test(userAgent) && !regex.edge.test(userAgent)) {
        navigator = 'chrome';
    }

    if (regex.opera.test(userAgent)) {
        navigator = 'opera';
    }

    if (navigator !== null) {
        console.log(navigator);
    }

    const container = document.querySelector(settings.container);

    container.addEventListener('wheel', (element) => {
        console.log(element);
        element.preventDefault();
        element.stopPropagation();
    });

}