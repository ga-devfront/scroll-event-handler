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

        this.currentNavigator = null;
        this.trigger = {
            scroll: 0,
            touch: 0
        };

        if (navigators.chrome.regex.test(userAgent) && !navigators.opera.regex.test(userAgent) && !navigators.edge.regex.test(userAgent)) {
            this.currentNavigator = navigators.chrome;
        }

        if (navigators.edge.regex.test(userAgent)) {
            this.currentNavigator = navigators.edge;
        }

        if (navigators.firefox.regex.test(userAgent)) {
            this.currentNavigator = navigators.firefox;
        }

        if (navigators.ie.regex.test(userAgent)) {
            this.currentNavigator = navigators.ie;
        }

        if (navigators.opera.regex.test(userAgent)) {
            this.currentNavigator = navigators.opera;
        }

        // console.log test
        if (this.currentNavigator !== null) {
            console.log(this.currentNavigator);
        }

        if (this.currentNavigator === null) {
            console.log('sorry but scroll listener do not run on this navigator');
            return
        }

        if (this.currentNavigator.name === 'chrome' || 'edge' || 'firefox' || 'ie' || 'opera') {
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
        
        return this;
    };