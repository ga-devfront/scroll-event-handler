/**
 * Export the main function
 * @param {Object} settings 
 * This object can contain the following options elements
 * 
 * @param {String} container
 * @param {Bolean} cancelOnDirectionChange
 * @param {Object} trigger  (need scroll or touch element)
 *   @param {Number || Object} scroll
 *      @param {Number} nextY
 *      @param {Number} prevY
 *      @param {Number} nextX
 *      @param {Number} prevY
 *   @param {Number || Object} touch
 *      @param {Number} nextY
 *      @param {Number} prevY
 *      @param {Number} nextX
 *      @param {Number} prevY
 *@param {Function || Object} callback
 *   @param {Function} nextY
 *   @param {Function} prevY
 *   @param {Function} nextX
 *   @param {Function} prevY
 * 
 * Refer to the documentation for more information.
 */
export default function ScrollListener(settings) {

    // get the navigator user agent
    const userAgent = window.navigator.userAgent;

    // browser setting
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
                regex: /Edge[/\s](\d+\.\d+)/,
                deltaY: 145.0500030517578
            },
        },
        edgeChromium: {
            desktop: {
                name: 'edge chromium',
                regex: /Edg[/\s](\d+\.\d+)/,
                deltaY: 100
            },
        },
        firefox: {
            desktop: {
                name: 'firefox',
                regex: /Firefox[/\s](\d+\.\d+)/,
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
                regex: /OPR[/\s](\d+\.\d+)/,
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
                regex: /AppleWebKit[/\s](\d+)/,
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
                regex: /SamsungBrowser[/\s](\d+\.\d+)/,
            },
        }
    }

    this.currentNavigator = null;

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

    // generates an error if the browser is not available
    if (this.currentNavigator === null) {
        throw Error('sorry but scroll listener do not run on this navigator');
    }

    // get the container
    this.container = settings.container ? document.querySelector(settings.container) : document.querySelector('main');

    // generates an error if the container is null
    if (this.container === null) {
        throw Error('your container is not available');
    }

    // check the cancelOnDirectionChange parameter or set it to true if it is not provided
    this.cancelOnDirectionChange = (settings.cancelOnDirectionChange) ? settings.cancelOnDirectionChange : true;

    this.scrollSettings = {
        x: {
            next: {
                value: (settings.scroll.x.next.value) ? (settings.scroll.x.next.value) : 2,
                callback: (settings.scroll.x.next.callback) ? (settings.scroll.x.next.callback) : () => {},
            },
            prev: {
                value: (settings.scroll.x.prev.value) ? (settings.scroll.x.prev.value) : 2,
                callback: (settings.scroll.x.prev.callback) ? (settings.scroll.x.prev.callback) : () => {},
            },
        },
        y: {
            next: {
                value: (settings.scroll.y.next.value) ? (settings.scroll.y.next.value) : 5,
                callback: (settings.scroll.y.next.callback) ? (settings.scroll.y.next.callback) : () => {},
            },
            prev: {
                value: (settings.scroll.y.prev.value) ? (settings.scroll.y.prev.value) : 5,
                callback: (settings.scroll.y.prev.callback) ? (settings.scroll.y.prev.callback) : () => {},
            },
        }
    }

    this.touchSettings = {
        x: {
            next: {
                value: (settings.touch.x.next.value) ? (settings.touch.x.next.value) : 80,
                callback: (settings.touch.x.next.callback) ? (settings.touch.x.next.callback) : () => {},
            },
            prev: {
                value: (settings.touch.x.prev.value) ? (settings.touch.x.prev.value) : 80,
                callback: (settings.touch.x.prev.callback) ? (settings.touch.x.prev.callback) : () => {},
            },
        },
        y: {
            next: {
                value: (settings.touch.y.next.value) ? (settings.touch.y.next.value) : 200,
                callback: (settings.touch.y.next.callback) ? (settings.touch.y.next.callback) : () => {},
            },
            prev: {
                value: (settings.touch.y.prev.value) ? (settings.touch.y.prev.value) : 200,
                callback: (settings.touch.y.prev.callback) ? (settings.touch.y.prev.callback) : () => {},
            },
        }
    }

    this.trigger = {
        scrollY: 0,
        scrollX: 0,
        touchY: 0,
        touchX: 0,
    };

    // check if the browser is used on desktop
    // eslint-disable-next-line no-constant-condition
    if (this.currentNavigator.name === 'chrome' || 'edge' || 'edge chromium' || 'firefox' || 'ie' || 'opera' || 'safari') {
        // created our function to call when the eventListener snaps
        this.eventListener = (event) => {
            event.preventDefault();
            event.stopPropagation();
            // calculate the scroll according to the browser
            const calcForOneScroll = event.deltaY / this.currentNavigator.deltaY;

            // resets the data to 0 when the user changes direction. If the option is activated.
            if (this.cancelOnDirectionChange) {
                if (Math.sign(calcForOneScroll) !== Math.sign(this.trigger.scrollY)) {
                    this.trigger.scrollY = 0;
                }
                if (Math.sign(calcForOneScroll) !== Math.sign(this.trigger.scrollX)) {
                    this.trigger.scrollX = 0;
                }
            }

            // check if we are scrolling vertically or horizontally
            if (event.shiftKey === false) {
                this.trigger.scrollY += calcForOneScroll;
            }
            if (event.shiftKey === true) {
                this.trigger.scrollX += calcForOneScroll;
            }

            // test when the nextY trigger is reached.
            if (this.triggerSettings.scroll.nextY !== 0) {
                if (this.triggerSettings.scroll.nextY === this.trigger.scrollY) {
                    this.callback.nextY(true);
                    this.trigger.scrollY = 0;
                }
            }

            // test when the prevY trigger is reached.
            if (this.triggerSettings.scroll.prevY !== 0) {
                if (this.triggerSettings.scroll.prevY === Math.abs(this.trigger.scrollY) && this.trigger.scrollY < 0) {
                    this.callback.prevY(false);
                    this.trigger.scrollY = 0;
                }
            }

            // test when the nextX trigger is reached.
            if (this.triggerSettings.scroll.nextX !== 0) {
                if (this.triggerSettings.scroll.nextX === this.trigger.scrollX) {
                    this.callback.nextX(true);
                    this.trigger.scrollX = 0;
                }
            }

            // test when the prevX trigger is reached.
            if (this.triggerSettings.scroll.prevX !== 0) {
                if (this.triggerSettings.scroll.prevX === Math.abs(this.trigger.scrollX) && this.trigger.scrollX < 0) {
                    this.callback.prevX(false);
                    this.trigger.scrollX = 0;
                }
            }
        };

        // add our EventListener to our container
        this.container.addEventListener('wheel', this.eventListener);
    }

    // check if the browser is used on mobile
    // eslint-disable-next-line no-constant-condition
    if (this.currentNavigator.name === 'chrome mobile' || 'firefox mobile' || 'opera mini' || 'safari mobile' || 'samsung internet') {
        // defined if scrolling should continue to be calculated
        this.allowScroll = false;

        // create a function that activates when you start to touch the screen
        this.handleStar = (event) => {
            // indicates the starting points
            this.touchStartY = event.touches[0].screenY;
            this.touchStartX = event.touches[0].screenX;
            // lets start calculating the scrolling
            this.allowScroll = true;
        }

        // created a function that will be used when we move on the screen
        this.handleMove = (event) => {
            event.preventDefault();
            event.stopPropagation();
            // verify that we have to calculate the move
            if (!this.allowScroll) return;

            // calculates the distance from the starting point to the current location
            this.trigger.touchY = this.touchStartY - event.touches[0].screenY;
            this.trigger.touchX = this.touchStartX - event.touches[0].screenX;

            // test when the nextY trigger is reached.
            if (this.triggerSettings.touch.nextY !== 0) {
                if (this.triggerSettings.touch.nextY <= this.trigger.touchY) {
                    this.callback.nextY(true);
                    this.trigger.touchY = 0;
                    this.allowScroll = false;
                }
            }

            // test when the prevY trigger is reached.
            if (this.triggerSettings.touch.prevY !== 0) {
                if (this.triggerSettings.touch.prevY <= Math.abs(this.trigger.touchY) && this.trigger.touchY < 0) {
                    this.callback.prevY(true);
                    this.trigger.touchY = 0;
                    this.allowScroll = false;
                }
            }

            // test when the nextX trigger is reached.
            if (this.triggerSettings.touch.nextX !== 0) {
                if (this.triggerSettings.touch.nextX <= this.trigger.touchX) {
                    this.callback.nextX(true);
                    this.trigger.touchX = 0;
                    this.allowScroll = false;
                }
            }

            // test when the prevX trigger is reached.
            if (this.triggerSettings.touch.prevX !== 0) {
                if (this.triggerSettings.touch.prevX <= Math.abs(this.trigger.touchX) && this.trigger.touchX < 0) {
                    this.callback.prevX(true);
                    this.trigger.touchX = 0;
                    this.allowScroll = false;
                }
            }
        }

        // created a function that will be used when we end touch the screen
        this.handleEnd = () => {
            this.allowScroll = false;
            this.trigger.touchY = 0;
            this.trigger.touchX = 0;
        }

        // add functions to EventListener
        this.container.addEventListener('touchstart', this.handleStar);
        this.container.addEventListener('touchmove', this.handleMove);
        this.container.addEventListener('touchend', this.handleEnd);

    }

    // method to remove the scroll listener
    this.removeScrollListener = () => {
        this.container.removeEventListener('wheel', this.eventListener)
    }

    // method to change trigger, the settings options are the same as our main function
    this.changeTrigger = (settings) => {
        if (typeof settings !== 'object') return

        if (typeof settings.scroll === 'object') {
            this.triggerSettings.scroll.nextY = (settings.scroll.nextY) ? settings.scroll.nextY : this.triggerSettings.scroll.nextY;
            this.triggerSettings.scroll.prevY = (settings.scroll.prevY) ? settings.scroll.prevY : this.triggerSettings.scroll.prevY;
            this.triggerSettings.scroll.nextX = (settings.scroll.nextX) ? settings.scroll.nextX : this.triggerSettings.scroll.nextX;
            this.triggerSettings.scroll.prevX = (settings.scroll.prevX) ? settings.scroll.prevX : this.triggerSettings.scroll.prevX;
        }
        if (typeof settings.scroll === 'number') {
            this.triggerSettings.scroll.nextY = (settings.scroll) ? settings.scroll : this.triggerSettings.scroll.nextY;
            this.triggerSettings.scroll.prevY = (settings.scroll) ? settings.scroll : this.triggerSettings.scroll.prevY;
            this.triggerSettings.scroll.nextX = (settings.scroll) ? settings.scroll : this.triggerSettings.scroll.nextX;
            this.triggerSettings.scroll.prevX = (settings.scroll) ? settings.scroll : this.triggerSettings.scroll.prevX;
        }

        if (typeof settings.touch === 'object') {
            this.triggerSettings.touch.nextY = (settings.touch.nextY) ? settings.touch.nextY : this.triggerSettings.touch.nextY;
            this.triggerSettings.touch.prevY = (settings.touch.prevY) ? settings.touch.prevY : this.triggerSettings.touch.prevY;
            this.triggerSettings.touch.nextX = (settings.touch.nextX) ? settings.touch.nextX : this.triggerSettings.touch.nextX;
            this.triggerSettings.touch.prevX = (settings.touch.prevX) ? settings.touch.prevX : this.triggerSettings.touch.prevX;
        }
        if (typeof settings.touch === 'number') {
            this.triggerSettings.touch.nextX = (settings.touch) ? settings.touch : this.triggerSettings.touch.nextX;
            this.triggerSettings.touch.prevX = (settings.touch) ? settings.touch : this.triggerSettings.touch.prevX;
        }
    }

    // method to switch cancelOnDirectionChange
    this.switchcancelOnDirectionChange = () => {
        this.cancelOnDirectionChange = !this.cancelOnDirectionChange;
    }

    return this;
}