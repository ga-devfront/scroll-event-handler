/**
 * Export the main function
 * @param {Object} settings 
 * Refer to the documentation for more informations.
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
        deltaY: 100
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
        deltaY: 20,
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

  // set browser to object with deltaY 100
  this.currentNavigator = {deltaY: 100};

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

  // get the container
  this.container = (settings.container) ? document.querySelector(settings.container) : document.querySelector('main');

  // generates an error if the container is null
  if (this.container === null) {
    throw Error('your container is not available');
  }

  // check the cancelOnDirectionChange parameter or set it to true if it is not provided
  this.cancelOnDirectionChange = (settings.cancelOnDirectionChange) ? settings.cancelOnDirectionChange : true;

  // check the globalCallback parameter or call nothing.
  this.globalCallback = (settings.callback) ? settings.callback : () => {};

  // set default settings for scroll.
  this.scrollSettings = {
    x: {
      next: {
        value: 2,
        callback: () => {},
      },
      prev: {
        value: 2,
        callback: () => {},
      },
    },
    y: {
      next: {
        value: 5,
        callback: () => {},
      },
      prev: {
        value: 5,
        callback: () => {},
      },
    }
  }

  // set default settings for touch.
  this.touchSettings = {
    x: {
      next: {
        value: 80,
        callback: () => {},
      },
      prev: {
        value: 80,
        callback: () => {},
      },
    },
    y: {
      next: {
        value: 200,
        callback: () => {},
      },
      prev: {
        value: 200,
        callback: () => {},
      },
    }
  }

  // method to change settings.
  this.changeSettings = (newSettings) => {
    this.globalCallback = (newSettings.callback) ? newSettings.callback : this.globalCallback;
    if (Object.prototype.hasOwnProperty.call(newSettings, 'scroll')) {
      if (Object.prototype.hasOwnProperty.call(newSettings.scroll, 'x')) {
        if (Object.prototype.hasOwnProperty.call(newSettings.scroll.x, 'next')) {
          this.scrollSettings.x.next.value = (newSettings.scroll.x.next.value) ? newSettings.scroll.x.next.value : this.scrollSettings.x.next.value;
          this.scrollSettings.x.next.callback = (newSettings.scroll.x.next.callback) ? newSettings.scroll.x.next.callback : this.scrollSettings.x.next.callback;
        }

        if (Object.prototype.hasOwnProperty.call(newSettings.scroll.x, 'prev')) {
          this.scrollSettings.x.prev.value = (newSettings.scroll.x.prev.value) ? newSettings.scroll.x.prev.value : this.scrollSettings.y.prev.value;
          this.scrollSettings.x.prev.callback = (newSettings.scroll.x.prev.callback) ? newSettings.scroll.x.prev.callback : this.scrollSettings.x.prev.callback;
        }

        if (Object.prototype.hasOwnProperty.call(newSettings.scroll.x, 'value')) {
          this.scrollSettings.x.next.value = newSettings.scroll.x.value;
          this.scrollSettings.x.prev.value = newSettings.scroll.x.value;
        }

        if (Object.prototype.hasOwnProperty.call(newSettings.scroll.x, 'callback')) {
          this.scrollSettings.x.next.callback = newSettings.scroll.x.callback;
          this.scrollSettings.x.prev.callback = newSettings.scroll.x.callback;
        }
      }

      if (Object.prototype.hasOwnProperty.call(newSettings.scroll, 'y')) {
        if (Object.prototype.hasOwnProperty.call(newSettings.scroll.y, 'next')) {
          this.scrollSettings.y.next.value = (newSettings.scroll.y.next.value) ? newSettings.scroll.y.next.value : this.scrollSettings.y.next.value;
          this.scrollSettings.y.next.callback = (newSettings.scroll.y.next.callback) ? newSettings.scroll.y.next.callback : this.scrollSettings.y.next.callback;
        }

        if (Object.prototype.hasOwnProperty.call(newSettings.scroll.y, 'prev')) {
          this.scrollSettings.y.prev.value = (newSettings.scroll.y.prev.value) ? newSettings.scroll.y.prev.value : this.scrollSettings.y.prev.value;
          this.scrollSettings.y.prev.callback = (newSettings.scroll.y.prev.callback) ? newSettings.scroll.y.prev.callback : this.scrollSettings.y.prev.callback;
        }

        if (Object.prototype.hasOwnProperty.call(newSettings.scroll.y, 'value')) {
          this.scrollSettings.y.next.value = newSettings.scroll.y.value;
          this.scrollSettings.y.prev.value = newSettings.scroll.y.value;
        }

        if (Object.prototype.hasOwnProperty.call(newSettings.scroll.y, 'callback')) {
          this.scrollSettings.y.next.callback = newSettings.scroll.y.callback;
          this.scrollSettings.y.prev.callback = newSettings.scroll.y.callback;
        }
      }

      if (Object.prototype.hasOwnProperty.call(newSettings.scroll, 'value')) {
        this.scrollSettings.x.next.value = newSettings.scroll.value;
        this.scrollSettings.x.prev.value = newSettings.scroll.value;
        this.scrollSettings.y.next.value = newSettings.scroll.value;
        this.scrollSettings.y.prev.value = newSettings.scroll.value;
      }

      if (Object.prototype.hasOwnProperty.call(newSettings.scroll, 'callback')) {
        this.scrollSettings.x.next.callback = newSettings.scroll.callback;
        this.scrollSettings.x.prev.callback = newSettings.scroll.callback;
        this.scrollSettings.y.next.callback = newSettings.scroll.callback;
        this.scrollSettings.y.prev.callback = newSettings.scroll.callback;
      }
    }

    if (Object.prototype.hasOwnProperty.call(newSettings, 'touch')) {
      if (Object.prototype.hasOwnProperty.call(newSettings.touch, 'x')) {
        if (Object.prototype.hasOwnProperty.call(newSettings.touch.x, 'next')) {
          this.touchSettings.x.next.value = (newSettings.touch.x.next.value) ? newSettings.touch.x.next.value : this.touchSettings.x.next.value;
          this.touchSettings.x.next.callback = (newSettings.touch.x.next.callback) ? newSettings.touch.x.next.callback : this.touchSettings.x.next.callback;
        }

        if (Object.prototype.hasOwnProperty.call(newSettings.touch.x, 'prev')) {
          this.touchSettings.x.prev.value = (newSettings.touch.x.prev.value) ? newSettings.touch.x.prev.value : this.touchSettings.x.prev.value;
          this.touchSettings.x.prev.callback = (newSettings.touch.x.prev.callback) ? newSettings.touch.x.prev.callback : this.touchSettings.x.prev.callback;
        }

        if (Object.prototype.hasOwnProperty.call(newSettings.touch.x, 'value')) {
          this.touchSettings.x.next.value = newSettings.touch.x.value;
          this.touchSettings.x.prev.value = newSettings.touch.x.value;
        }

        if (Object.prototype.hasOwnProperty.call(newSettings.touch.x, 'callback')) {
          this.touchSettings.x.next.callback = newSettings.touch.x.callback;
          this.touchSettings.x.prev.callback = newSettings.touch.x.callback;
        }
      }

      if (Object.prototype.hasOwnProperty.call(newSettings.touch, 'y')) {
        if (Object.prototype.hasOwnProperty.call(newSettings.touch.y, 'next')) {
          this.touchSettings.y.next.value = (newSettings.touch.y.next.value) ? newSettings.touch.y.next.value : this.touchSettings.y.next.value;
          this.touchSettings.y.next.callback = (newSettings.touch.y.next.callback) ? newSettings.touch.y.next.callback : this.touchSettings.y.next.callback;
        }

        if (Object.prototype.hasOwnProperty.call(newSettings.touch.y, 'prev')) {
          this.touchSettings.y.prev.value = (newSettings.touch.y.prev.value) ? newSettings.touch.y.prev.value : this.touchSettings.y.prev.value;
          this.touchSettings.y.prev.callback = (newSettings.touch.y.prev.callback) ? newSettings.touch.y.prev.callback : this.touchSettings.y.prev.callback;
        }

        if (Object.prototype.hasOwnProperty.call(newSettings.touch.y, 'value')) {
          this.touchSettings.y.next.value = newSettings.touch.y.value;
          this.touchSettings.y.prev.value = newSettings.touch.y.value;
        }

        if (Object.prototype.hasOwnProperty.call(newSettings.touch.y, 'callback')) {
          this.touchSettings.y.next.callback = newSettings.touch.y.callback;
          this.touchSettings.y.prev.callback = newSettings.touch.y.callback;
        }
      }

      if (Object.prototype.hasOwnProperty.call(newSettings.touch, 'value')) {
        this.touchSettings.x.next.value = newSettings.touch.value;
        this.touchSettings.x.prev.value = newSettings.touch.value;
        this.touchSettings.y.next.value = newSettings.touch.value;
        this.touchSettings.y.prev.value = newSettings.touch.value;
      }

      if (Object.prototype.hasOwnProperty.call(newSettings.touch, 'callback')) {
        this.touchSettings.x.next.callback = newSettings.touch.callback;
        this.touchSettings.x.prev.callback = newSettings.touch.callback;
        this.touchSettings.y.next.callback = newSettings.touch.callback;
        this.touchSettings.y.prev.callback = newSettings.touch.callback;
      }
    }
  }

  // call the changeSettings method to define own parameters.
  this.changeSettings(settings);

  this.trigger = {
    scroll: {
      x: 0,
      y: 0,
    },
    touch: {
      x: 0,
      y: 0,
    },
  };

    // created our function to call when the eventListener snaps
    this.eventListener = (event) => {
      event.preventDefault();
      event.stopPropagation();
      // calculate the scroll according to the browser
      const calcForOneScroll = event.deltaY / this.currentNavigator.deltaY;

      // resets the data to 0 when the user changes direction. If the option is activated.
      if (this.cancelOnDirectionChange) {
        if (Math.sign(calcForOneScroll) !== Math.sign(this.trigger.scroll.y)) {
          this.trigger.scroll.y = 0;
        }
        if (Math.sign(calcForOneScroll) !== Math.sign(this.trigger.scroll.x)) {
          this.trigger.scroll.x = 0;
        }
      }

      // check if we are scrolling vertically or horizontally
      if (event.shiftKey === false) {
        this.trigger.scroll.y += calcForOneScroll;
      }
      if (event.shiftKey === true) {
        this.trigger.scroll.x += calcForOneScroll;
      }

      // test when the y next trigger is reached.
      if (this.scrollSettings.y.next.value !== 0) {
        if (this.scrollSettings.y.next.value === this.trigger.scroll.y) {
          this.globalCallback();
          this.scrollSettings.y.next.callback();
          this.trigger.scroll.y = 0;
        }
      }

      // test when the y prev trigger is reached.
      if (this.scrollSettings.y.prev.value !== 0) {
        if (this.scrollSettings.y.prev.value === Math.abs(this.trigger.scroll.y) && this.trigger.scroll.y < 0) {
          this.globalCallback();
          this.scrollSettings.y.prev.callback();
          this.trigger.scroll.y = 0;
        }
      }

      // test when the x next trigger is reached.
      if (this.scrollSettings.x.next.value !== 0) {
        if (this.scrollSettings.x.next.value === this.trigger.scroll.x) {
          this.globalCallback();
          this.scrollSettings.x.next.callback();
          this.trigger.scroll.x = 0;
        }
      }

      // test when the x prev trigger is reached.
      if (this.scrollSettings.x.prev.value !== 0) {
        if (this.scrollSettings.x.prev.value === Math.abs(this.trigger.scroll.x) && this.trigger.scroll.x < 0) {
          this.globalCallback();
          this.scrollSettings.x.prev.callback();
          this.trigger.scroll.x = 0;
        }
      }
    };

    // add our EventListener to our container
    this.container.addEventListener('wheel', this.eventListener);

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
      this.trigger.touch.y = this.touchStartY - event.touches[0].screenY;
      this.trigger.touch.x = this.touchStartX - event.touches[0].screenX;

      // test when the y next trigger is reached.
      if (this.touchSettings.y.next.value !== 0) {
        if (this.touchSettings.y.next.value <= this.trigger.touch.y) {
          this.globalCallback();
          this.touchSettings.y.next.callback();
          this.trigger.touch.y = 0;
          this.allowScroll = false;
        }
      }

      // test when the y prev trigger is reached.
      if (this.touchSettings.y.prev.value !== 0) {
        if (this.touchSettings.y.prev.value <= Math.abs(this.trigger.touch.y) && this.trigger.touch.y < 0) {
          this.globalCallback();
          this.touchSettings.y.prev.callback(true);
          this.trigger.touch.y = 0;
          this.allowScroll = false;
        }
      }

      // test when the x next trigger is reached.
      if (this.touchSettings.x.next.value !== 0) {
        if (this.touchSettings.x.next.value <= this.trigger.touch.x) {
          this.globalCallback();
          this.touchSettings.x.next.callback(true);
          this.trigger.touch.x = 0;
          this.allowScroll = false;
        }
      }

      // test when the x prev trigger is reached.
      if (this.touchSettings.x.prev.value !== 0) {
        if (this.touchSettings.x.prev.value <= Math.abs(this.trigger.touch.x) && this.trigger.touch.x < 0) {
          this.globalCallback();
          this.touchSettings.x.prev.callback(true);
          this.trigger.touch.x = 0;
          this.allowScroll = false;
        }
      }
    }

    // created a function that will be used when we end touch the screen
    this.handleEnd = () => {
      this.allowScroll = false;
      this.trigger.touch.y = 0;
      this.trigger.touch.x = 0;
    }

    // add functions to EventListener
    this.container.addEventListener('touchstart', this.handleStar);
    this.container.addEventListener('touchmove', this.handleMove);
    this.container.addEventListener('touchend', this.handleEnd);

  // method to remove the scroll listener
  this.removeScrollListener = () => {
    this.container.removeEventListener('wheel', this.eventListener)
  }

  // method to switch cancelOnDirectionChange
  this.switchCancelOnDirectionChange = () => {
    this.cancelOnDirectionChange = !this.cancelOnDirectionChange;
  }

  return this;
}