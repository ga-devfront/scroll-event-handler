export default function ScrollListener(settings) {
    this.container = settings.container ? document.querySelector(settings.container) : window;
    if (this.container === null) {
        throw Error('your container is not available');
    }

    if (typeof settings.callback === 'object') {
        this.callback = {
            next: (settings.callback.next) ? settings.callback.next : () => {},
            prev: (settings.callback.prev) ? settings.callback.prev : () => {},
        }
    } else if (typeof settings.callback === 'function') {
        this.callback = {
            next: settings.callback,
            prev: settings.callback,
        }
    }

    const userAgent = window.navigator.userAgent;
    console.log(userAgent);
    const navigators = {
        chrome: {
            desktop: {
                name: 'chrome',
                regex: /\(KHTML, like Gecko\) Chrome/,
                deltaY: 100
            },
            mobile: {
                name: 'chrome mobile',
                regex: /Mobile/,
                deltaY: 100
            },
        },
        edge: {
            desktop: {
                name: 'edge',
                regex: /Edge[\/\s](\d+\.\d+)/,
                deltaY: 145.0500030517578
            },
        },
        edgeChromium: {
            desktop: {
                name: 'edge chromium',
                regex: /Edg[\/\s](\d+\.\d+)/,
                deltaY: 100
            },
        },
        firefox: {
            desktop: {
                name: 'firefox',
                regex: /Firefox[\/\s](\d+\.\d+)/,
                deltaY: 3
            },
            mobile: {
                name: 'firefox mobile',
                regex: /Mobile/,
                deltaY: 100
            },
        },
        ie: {
            desktop: {
                name: 'ie',
                regex: /MSIE (\d+\.\d+);/,
                deltaY: 0
            },
        },
        opera: {
            desktop: {
                name: 'opera',
                regex: /OPR[\/\s](\d+\.\d+)/,
                deltaY: 100
            },
            mobile: {
                name: 'opera mini',
                regex: /Mobile/,
                deltaY: 100
            },
        },
        safari: {
            desktop: {
                name: 'safari',
                regex: /AppleWebKit[\/\s](\d+)/,
                deltaY: 10,
            },
            mobile: {
                name: 'safari mobile',
                regex: /Mobile/,
                deltaY: 100
            },
        },
        samsungInternet: {
            mobile: {
                name: 'samsung internet',
                regex: /SamsungBrowser[\/\s](\d+\.\d+)/,
                deltaY: 100
            },
        }
    }

    this.currentNavigator = null;
    this.trigger = {
        scroll: 0,
        touch: 0
    };

    // desktop navigators tests

    if (navigators.chrome.desktop.regex.test(userAgent) && !navigators.opera.desktop.regex.test(userAgent) && !navigators.edge.desktop.regex.test(userAgent) && !navigators.chrome.mobile.regex.test(userAgent)) {
        this.currentNavigator = navigators.chrome.desktop;
    }

    if (navigators.edge.desktop.regex.test(userAgent)) {
        this.currentNavigator = navigators.edge.desktop;
    }

    if (navigators.edgeChromium.desktop.regex.test(userAgent)) {
        this.currentNavigator = navigators.edgeChromium.desktop;
    }

    if (navigators.firefox.desktop.regex.test(userAgent) && !navigators.firefox.mobile.regex.test(userAgent)) {
        this.currentNavigator = navigators.firefox.desktop;
    }

    if (navigators.ie.desktop.regex.test(userAgent)) {
        this.currentNavigator = navigators.ie.desktop;
    }

    if (navigators.opera.desktop.regex.test(userAgent) && !navigators.opera.mobile.regex.test(userAgent)) {
        this.currentNavigator = navigators.opera.desktop;
    }

    if (navigators.safari.desktop.regex.test(userAgent) && !navigators.edgeChromium.desktop.regex.test(userAgent) && !navigators.chrome.desktop.regex.test(userAgent) && !navigators.safari.mobile.regex.test(userAgent)) {
        this.currentNavigator = navigators.safari.desktop;
    }

    // mobile navigators tests

    if (navigators.chrome.desktop.regex.test(userAgent) && !navigators.opera.desktop.regex.test(userAgent) && navigators.chrome.mobile.regex.test(userAgent)) {
        this.currentNavigator = navigators.chrome.mobile;
    }

    if (navigators.firefox.desktop.regex.test(userAgent) && navigators.firefox.mobile.regex.test(userAgent)) {
        this.currentNavigator = navigators.firefox.mobile;
    }

    if (navigators.opera.desktop.regex.test(userAgent) && navigators.opera.mobile.regex.test(userAgent)) {
        this.currentNavigator = navigators.opera.mobile;
    }

    if (navigators.safari.desktop.regex.test(userAgent) && !navigators.chrome.desktop.regex.test(userAgent) && navigators.safari.mobile.regex.test(userAgent)) {
        this.currentNavigator = navigators.safari.mobile;
    }

    if (navigators.samsungInternet.mobile.regex.test(userAgent)) {
        this.currentNavigator = navigators.samsungInternet.mobile;
    }

    // console.log test
    if (this.currentNavigator !== null) {
        console.log(this.currentNavigator);
    }

    if (this.currentNavigator === null) {
        console.log('sorry but scroll listener do not run on this navigator');
        return
    }

    //test for see result on mobile

    const uaDOM = document.querySelector('#userAgent');
    uaDOM.textContent = userAgent;
    const navDOM = document.querySelector('#browser');
    navDOM.textContent = this.currentNavigator.name;
    const deltaDOM = document.querySelector('#deltaY');

    if (this.currentNavigator.name === 'chrome' || 'edge' || 'edge chromium' || 'firefox' || 'ie' || 'opera' || 'safari') {
        this.eventListener = (event) => {
            event.preventDefault();
            event.stopPropagation();
            const calcForOneScroll = event.deltaY / this.currentNavigator.deltaY;

            if (settings.cancelOnDirectionChange) {
                if (Math.sign(calcForOneScroll) !== Math.sign(this.trigger.scroll)) {
                    this.trigger.scroll = 0;
                }
            }
            this.trigger.scroll += calcForOneScroll;
            if (settings.trigger.scroll.next === this.trigger.scroll) {
                this.callback.next(true);
                this.trigger.scroll = 0;
            }
            if (settings.trigger.scroll.prev === Math.abs(this.trigger.scroll)) {
                this.callback.prev(false);
                this.trigger.scroll = 0;
            }
        };

        this.container.addEventListener('wheel', this.eventListener);
    }

    if (this.currentNavigator.name === 'chrome mobile' || 'firefox mobile' || 'opera mini' || 'safari mobile' || 'samsung internet') {
        this.allowScroll = false;

        this.handleStar = (event) => {
            this.touchStart = event.touches[0].screenY;
            this.allowScroll = true;
        }

        this.handleMove = (event) => {
            event.preventDefault();
            event.stopPropagation();
            this.trigger.touch = this.touchStart - event.touches[0].screenY;

            if (!this.allowScroll) return;

            if (settings.trigger.touch.next <= this.trigger.touch) {
                this.callback.next(true);
                this.trigger.touch = 0;
                this.allowScroll = false;
            }

            if (settings.trigger.touch.prev <= Math.abs(this.trigger.touch) && this.trigger.touch < 0) {
                this.callback.prev(true);
                this.trigger.touch = 0;
                this.allowScroll = false;
            }
        }

        this.handleEnd = () => {
            this.allowScroll = false;
            this.trigger.touch = 0;
        }


        this.container.addEventListener('touchstart', this.handleStar);
        this.container.addEventListener('touchmove', this.handleMove);
        this.container.addEventListener('touchend', this.handleEnd);

    }

    this.removeScrollListener = () => {
        this.container.removeEventListener('wheel', this.eventListener)
    }

    return this;
}