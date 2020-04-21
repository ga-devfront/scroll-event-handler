export default function ScrollListener(settings) {
    this.container = settings.container ? document.querySelector(settings.container) : document.querySelector('main');
    if (this.container === null) {
        throw Error('your container is not available');
    }

    if (typeof settings.callback === 'object') {
        this.callback = {
            nextY: (settings.callback.nextY) ? settings.callback.nextY : () => {},
            prevY: (settings.callback.prevY) ? settings.callback.prevY : () => {},
        }
    } else if (typeof settings.callback === 'function') {
        this.callback = {
            nextY: settings.callback,
            prevY: settings.callback,
        }
    }

    this.cancelOnDirectionChange = (settings.cancelOnDirectionChange) ? settings.cancelOnDirectionChange : true;

    this.triggerSettings = {};
    if (typeof settings.trigger.scroll !== 'undefined') {
        if (typeof settings.trigger.scroll === 'object') {
            this.triggerSettings.scroll = {
                nextY: (settings.trigger.scroll.nextY) ? settings.trigger.scroll.nextY : 5,
                prevY: (settings.trigger.scroll.prevY) ? settings.trigger.scroll.prevY : 5,
            }
        } else if (typeof settings.trigger.scroll === 'number') {
            this.triggerSettings.scroll = {
                nextY: (settings.trigger.scroll) ? settings.trigger.scroll : 5,
                prevY: (settings.trigger.scroll) ? settings.trigger.scroll : 5,
            }
        }
    } else {
        this.triggerSettings.scroll = {
            nextY: 5,
            prevY: 5,
        }
    }

    if (typeof settings.trigger.touch !== 'undefined') {
        if (typeof settings.trigger.touch === 'object') {
            this.triggerSettings.touch = {
                nextY: (settings.trigger.touch.nextY) ? settings.trigger.touch.nextY : 200,
                prevY: (settings.trigger.touch.prevY) ? settings.trigger.touch.prevY : 200,
            }
        } else if (typeof settings.trigger.touch === 'number') {
            this.triggerSettings.touch = {
                nextY: (settings.trigger.touch) ? settings.trigger.touch : 200,
                prevY: (settings.trigger.touch) ? settings.trigger.touch : 200,
            }
        }
    } else {
        this.triggerSettings.touch = {
            nextY: 200,
            prevY: 200,
        }
    }

    const userAgent = window.navigator.userAgent;

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
            },
        },
        samsungInternet: {
            mobile: {
                name: 'samsung internet',
                regex: /SamsungBrowser[\/\s](\d+\.\d+)/,
            },
        }
    }

    this.currentNavigator = null;
    this.trigger = {
        scrollY: 0,
        scrollX: 0,
        touchY: 0,
        touchX: 0,
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

    if (this.currentNavigator === null) {
        throw Error('sorry but scroll listener do not run on this navigator');
    }

    if (this.currentNavigator.name === 'chrome' || 'edge' || 'edge chromium' || 'firefox' || 'ie' || 'opera' || 'safari') {
        this.eventListener = (event) => {
            event.preventDefault();
            event.stopPropagation();
            const calcForOneScroll = event.deltaY / this.currentNavigator.deltaY;

            if (this.cancelOnDirectionChange) {
                if (Math.sign(calcForOneScroll) !== Math.sign(this.trigger.scrollY)) {
                    this.trigger.scrollY = 0;
                }
                if (Math.sign(calcForOneScroll) !== Math.sign(this.trigger.scrollX)) {
                    this.trigger.scrollX = 0;
                }
            }

            if (event.shiftKey === false) {
                this.trigger.scrollY += calcForOneScroll;
            }
            if (event.shiftKey === true) {
                this.trigger.scrollX += calcForOneScroll;
            }

            if (this.triggerSettings.scroll.nextY === this.trigger.scrollY) {
                this.callback.nextY(true);
                this.trigger.scrollY = 0;
            }
            if (this.triggerSettings.scroll.prevY === Math.abs(this.trigger.scrollY) && this.trigger.scrollY < 0) {
                this.callback.prevY(false);
                this.trigger.scrollY = 0;
            }
        };

        this.container.addEventListener('wheel', this.eventListener);
    }

    if (this.currentNavigator.name === 'chrome mobile' || 'firefox mobile' || 'opera mini' || 'safari mobile' || 'samsung internet') {
        this.allowScroll = false;

        this.handleStar = (event) => {
            this.touchStartY = event.touches[0].screenY;
            this.allowScroll = true;
        }

        this.handleMove = (event) => {
            event.preventDefault();
            event.stopPropagation();
            this.trigger.touchY = this.touchStartY - event.touches[0].screenY;

            if (!this.allowScroll) return;

            if (this.triggerSettings.touch.nextY <= this.trigger.touchY) {
                this.callback.nextY(true);
                this.trigger.touchY = 0;
                this.allowScroll = false;
            }

            if (this.triggerSettings.touch.prevY <= Math.abs(this.trigger.touchY) && this.trigger.touchY < 0) {
                this.callback.prevY(true);
                this.trigger.touchY = 0;
                this.allowScroll = false;
            }
        }

        this.handleEnd = () => {
            this.allowScroll = false;
            this.trigger.touchY = 0;
        }


        this.container.addEventListener('touchstart', this.handleStar);
        this.container.addEventListener('touchmove', this.handleMove);
        this.container.addEventListener('touchend', this.handleEnd);

    }

    this.removeScrollListener = () => {
        this.container.removeEventListener('wheel', this.eventListener)
    }

    this.changeTrigger = (settings) => {
        if (typeof settings !== 'object') return

        if (typeof settings.scroll === 'object') {
            this.triggerSettings.scroll.nextY = (settings.scroll.nextY) ? settings.scroll.nextY : this.triggerSettings.scroll.nextY;
            this.triggerSettings.scroll.prevY = (settings.scroll.prevY) ? settings.scroll.prevY : this.triggerSettings.scroll.prevY;
        }
        if (typeof settings.scroll === 'number') {
            this.triggerSettings.scroll.nextY = (settings.scroll) ? settings.scroll : this.triggerSettings.scroll.nextY;
            this.triggerSettings.scroll.prevY = (settings.scroll) ? settings.scroll : this.triggerSettings.scroll.prevY;
        }

        if (typeof settings.touch === 'object') {
            this.triggerSettings.touch.nextY = (settings.touch.nextY) ? settings.touch.nextY : this.triggerSettings.touch.nextY;
            this.triggerSettings.touch.prevY = (settings.touch.prevY) ? settings.touch.prevY : this.triggerSettings.touch.prevY;
        }
        if (typeof settings.touch === 'number') {
            this.triggerSettings.touch.nextY = (settings.touch) ? settings.touch : this.triggerSettings.touch.nextY;
            this.triggerSettings.touch.prevY = (settings.touch) ? settings.touch : this.triggerSettings.touch.prevY;
        }
    }

    this.switchcancelOnDirectionChange = () => {
        this.cancelOnDirectionChange = !this.cancelOnDirectionChange;
    }

    return this;
}