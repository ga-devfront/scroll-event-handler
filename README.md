# scroll event handler
Scroll event handler is a NPM package est un package for reading scroll (desktop) or touch (mobile) events and their
assigned a callback.

## Badges
![npm](https://img.shields.io/npm/v/scroll-event-handler)
![npm bundle size](https://img.shields.io/bundlephobia/min/scroll-event-handler)
![npm](https://img.shields.io/npm/dm/scroll-event-handler)

[![GitHub last
commit](https://img.shields.io/github/last-commit/ga-devfront/scroll-event-handler/develop)](https://github.com/ga-devfront/scroll-event-handler/commits/develop)
![GitHub top language](https://img.shields.io/github/languages/top/ga-devfront/scroll-event-handler)
[![HitCount](http://hits.dwyl.com/ga-devfront/scroll-listener.svg)](http://hits.dwyl.com/ga-devfront/scroll-event-handler)

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/e5ddea0228d7470393909a2b6c1d2d77)](https://www.codacy.com/manual/ga-devfront/scroll-listener?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=ga-devfront/scroll-event-handler&amp;utm_campaign=Badge_Grade)
[![time tracker](https://wakatime.com/badge/github/ga-devfront/scroll-event-handler.svg)](https://wakatime.com/badge/github/ga-devfront/scroll-event-handler)
[![Demo](https://img.shields.io/website?label=demo%20website&url=https%3A%2F%2Fag-dev.fr%2Fprivate%2Fscroll-listener%2F)](https://ag-dev.fr/private/scroll-event-handler/demo/)

[![NPM](https://nodei.co/npm/scroll-event-handler.png)](https://nodei.co/npm/scroll-event-handler/)

## Demo
The [online demo](https://ag-dev.fr/private/scroll-event-handler/demo/) gives you an overview of what can be done with this
package.

You can also see the use of this package on my [portfolio](https://ag-dev.fr/).

## Linter
For this npm ESLint is used with the basic parameters to have a clean code.

## Installation
It can be installed from npm.
```bash
$ npm install scroll-event-handler
```

## Usage
The minimal configuration for scroll listener is this bellow :
```javascript
import ScrollListener from 'scroll-event-handler';

let newScrollListener = new ScrollListener({callback: () => console.log('scroll')});
```
With this configuration scroll listener will fire the callback regardless of the direction using the [defaults
settings](#options).
for further use an example are [available below]().

## Options

### Container

```container``` description :
<table>
  <tbody>
    <tr>
      <th>Type</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>string</td>
      <td><i>Default value : <code>'main'</code></i><br>Using a <code>querySelector</code> you will have to indicate the
        container to listen to with the appropriate string.</td>
    </tr>
  </tbody>
</table>

### CancelOnDirectionChange

```cancelOnDirectionChange``` description :
<table>
  <tbody>
    <tr>
      <th>Type</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>boolean</td>
      <td><i>Default value : <code>true</code></i>
        <br>Defined if the scroll counter should be reset if the direction of the scroll changes.</td>
    </tr>
  </tbody>
</table>

### Callback

```callback``` description :
<table>
  <tbody>
    <tr>
      <th>Type</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>function</td>
      <td><i>Default value : <code>() =&gt; {}</code></i>
        <br>Allows you to define a global callback which will be called at each trigger before the other callbacks.</td>
    </tr>
  </tbody>
</table>

### Scroll

```scroll``` description :
<table>
  <tbody>
    <tr>
      <th>Type</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>object</td>
      <td>Either:
        <span>An object encapsulating the various configuration parameters for all possible scrolls (X / Y - next / prev).</span>
        <table>
          <tbody>
            <tr>
              <td><b>Name</b></td>
              <td><b>Type</b></td>
              <td><b>Description</b></td>
            </tr>
            <tr>
              <td><code><var>value</var></code></td>
              <td>number</td>
              <td>Indicates the number of scrolls before the callback is triggered</td>
            </tr>
            <tr>
              <td><code><var>callback</var></code></td>
              <td>function</td>
              <td>Defines the function to be called when the number of scrolls is reached.</td>
            </tr>
          </tbody>
        </table>
        <span>An object encapsulating the different scroll axes.</span>
        <table>
          <tbody>
            <tr>
              <td><b>Name</b></td>
              <td><b>Type</b></td>
              <td><b>Description</b></td>
            </tr>
            <tr>
              <td><code><var>x</var></code></td>
              <td>object</td>
              <td>Either:
                <span>An object encapsulating the various configuration parameters for all horizontal scrolls.</span>
                <table>
                  <tbody>
                    <tr>
                      <td><b>Name</b></td>
                      <td><b>Type</b></td>
                      <td><b>Description</b></td>
                    </tr>
                    <tr>
                      <td><code><var>value</var></code></td>
                      <td>number</td>
                      <td>Indicates the number of scrolls before the callback is triggered</td>
                    </tr>
                    <tr>
                      <td><code><var>callback</var></code></td>
                      <td>function</td>
                      <td>Defines the function to be called when the number of scrolls is reached.</td>
                    </tr>
                  </tbody>
                </table>
                <span>An object encapsulating the different directions of the scroll.</span>
                <table>
                  <tbody>
                    <tr>
                      <td><b>Name</b></td>
                      <td><b>Type</b></td>
                      <td><b>Description</b></td>
                    </tr>
                    <tr>
                      <td><code><var>next</var></code></td>
                      <td>object</td>
                      <td>An object contain the various configuration parameters for horizontal next scrolls.
                        <table>
                          <tbody>
                            <tr>
                              <td><b>Name</b></td>
                              <td><b>Type</b></td>
                              <td><b>Description</b></td>
                            </tr>
                            <tr>
                              <td><code><var>value</var></code></td>
                              <td>number</td>
                              <td><i>Default value : <code>2</code></i>
                                <br>Indicates the number of scrolls before the callback is triggered</td>
                            </tr>
                            <tr>
                              <td><code><var>callback</var></code></td>
                              <td>function</td>
                              <td><i>Default value : <code>() =&gt; {}</code></i>
                                <br>Defines the function to be called when the number of scrolls is reached.</td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td><code><var>prev</var></code></td>
                      <td>object</td>
                      <td>An object contain the various configuration parameters for horizontal previous scrolls.
                        <table>
                          <tbody>
                            <tr>
                              <td><b>Name</b></td>
                              <td><b>Type</b></td>
                              <td><b>Description</b></td>
                            </tr>
                            <tr>
                              <td><code><var>value</var></code></td>
                              <td>number</td>
                              <td><i>Default value : <code>2</code></i>
                                <br>Indicates the number of scrolls before the callback is triggered
                              </td>
                            </tr>
                            <tr>
                              <td><code><var>callback</var></code></td>
                              <td>function</td>
                              <td><i>Default value : <code>() =&gt; {}</code></i>
                                <br>Defines the function to be called when the number of scrolls is reached.</td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td><code><var>y</var></code></td>
              <td>object</td>
              <td>Either:
                <span>An object encapsulating the various configuration parameters for all vertical scrolls.</span>
                <table>
                  <tbody>
                    <tr>
                      <td><b>Name</b></td>
                      <td><b>Type</b></td>
                      <td><b>Description</b></td>
                    </tr>
                    <tr>
                      <td><code><var>value</var></code></td>
                      <td>number</td>
                      <td>Indicates the number of scrolls before the callback is triggered</td>
                    </tr>
                    <tr>
                      <td><code><var>callback</var></code></td>
                      <td>function</td>
                      <td>Defines the function to be called when the number of scrolls is reached.</td>
                    </tr>
                  </tbody>
                </table>
                <span>An object encapsulating the different directions of the scroll.</span>
                <table>
                  <tbody>
                    <tr>
                      <td><b>Name</b></td>
                      <td><b>Type</b></td>
                      <td><b>Description</b></td>
                    </tr>
                    <tr>
                      <td><code><var>next</var></code></td>
                      <td>object</td>
                      <td>An object contain the various configuration parameters for vertical next scrolls.
                        <table>
                          <tbody>
                            <tr>
                              <td><b>Name</b></td>
                              <td><b>Type</b></td>
                              <td><b>Description</b></td>
                            </tr>
                            <tr>
                              <td><code><var>value</var></code></td>
                              <td>number</td>
                              <td><i>Default value : <code>4</code></i>
                                <br>Indicates the number of scrolls before the callback is triggered
                              </td>
                            </tr>
                            <tr>
                              <td><code><var>callback</var></code></td>
                              <td>function</td>
                              <td><i>Default value : <code>() =&gt; {}</code></i>
                                <br>Defines the function to be called when the number of scrolls is reached.</td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td><code><var>prev</var></code></td>
                      <td>object</td>
                      <td>An object contain the various configuration parameters for vertical previous scrolls.
                        <table>
                          <tbody>
                            <tr>
                              <td><b>Name</b></td>
                              <td><b>Type</b></td>
                              <td><b>Description</b></td>
                            </tr>
                            <tr>
                              <td><code><var>value</var></code></td>
                              <td>number</td>
                              <td><i>Default value : <code>4</code></i>
                                <br>Indicates the number of scrolls before the callback is triggered
                              </td>
                            </tr>
                            <tr>
                              <td><code><var>callback</var></code></td>
                              <td>function</td>
                              <td><i>Default value : <code>() =&gt; {}</code></i>
                                <br>Defines the function to be called when the number of scrolls is reached.</td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>

### Touch

```touch``` description :
<table>
  <tbody>
    <tr>
      <th>Type</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>object</td>
      <td>Either:
        <span>An object encapsulating the various configuration parameters for all possible touch (X / Y - next / prev).</span>
        <table>
          <tbody>
            <tr>
              <td><b>Name</b></td>
              <td><b>Type</b></td>
              <td><b>Description</b></td>
            </tr>
            <tr>
              <td><code><var>value</var></code></td>
              <td>number</td>
              <td>Indicates the number of distance covered when touched before the callback is triggered</td>
            </tr>
            <tr>
              <td><code><var>callback</var></code></td>
              <td>function</td>
              <td>Defines the function to be called when the trigger is reached.</td>
            </tr>
          </tbody>
        </table>
        <span>An object encapsulating the different touch axes.</span>
        <table>
          <tbody>
            <tr>
              <td><b>Name</b></td>
              <td><b>Type</b></td>
              <td><b>Description</b></td>
            </tr>
            <tr>
              <td><code><var>x</var></code></td>
              <td>object</td>
              <td>Either:
                <span>An object encapsulating the various configuration parameters for all horizontal touches.</span>
                <table>
                  <tbody>
                    <tr>
                      <td><b>Name</b></td>
                      <td><b>Type</b></td>
                      <td><b>Description</b></td>
                    </tr>
                    <tr>
                      <td><code><var>value</var></code></td>
                      <td>number</td>
                      <td>Indicates the number of distance covered when touched before the callback is triggered</td>
                    </tr>
                    <tr>
                      <td><code><var>callback</var></code></td>
                      <td>function</td>
                      <td>Defines the function to be called when the trigger is reached.</td>
                    </tr>
                  </tbody>
                </table>
                <span>An object encapsulating the different directions of the touch.</span>
                <table>
                  <tbody>
                    <tr>
                      <td><b>Name</b></td>
                      <td><b>Type</b></td>
                      <td><b>Description</b></td>
                    </tr>
                    <tr>
                      <td><code><var>next</var></code></td>
                      <td>object</td>
                      <td>An object contain the various configuration parameters for horizontal next touches.
                        <table>
                          <tbody>
                            <tr>
                              <td><b>Name</b></td>
                              <td><b>Type</b></td>
                              <td><b>Description</b></td>
                            </tr>
                            <tr>
                              <td><code><var>value</var></code></td>
                              <td>number</td>
                              <td><i>Default value : <code>60</code></i>
                                <br>Indicates the number of distance covered when touched before the callback is triggered</td>
                            </tr>
                            <tr>
                              <td><code><var>callback</var></code></td>
                              <td>function</td>
                              <td><i>Default value : <code>() =&gt; {}</code></i>
                                <br>Defines the function to be called when the trigger is reached.</td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td><code><var>prev</var></code></td>
                      <td>object</td>
                      <td>An object contain the various configuration parameters for horizontal previous touches.
                        <table>
                          <tbody>
                            <tr>
                              <td><b>Name</b></td>
                              <td><b>Type</b></td>
                              <td><b>Description</b></td>
                            </tr>
                            <tr>
                              <td><code><var>value</var></code></td>
                              <td>number</td>
                              <td><i>Default value : <code>60</code></i>
                                <br>Indicates the number of distance covered when touched before the callback is triggered</td>
                            </tr>
                            <tr>
                              <td><code><var>callback</var></code></td>
                              <td>function</td>
                              <td><i>Default value : <code>() =&gt; {}</code></i>
                                <br>Defines the function to be called when the trigger is reached.</td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td><code><var>y</var></code></td>
              <td>object</td>
              <td>Either:
                <span>An object encapsulating the various configuration parameters for all vertical touches.</span>
                <table>
                  <tbody>
                    <tr>
                      <td><b>Name</b></td>
                      <td><b>Type</b></td>
                      <td><b>Description</b></td>
                    </tr>
                    <tr>
                      <td><code><var>value</var></code></td>
                      <td>number</td>
                      <td>Indicates the number of distance covered when touched before the callback is triggered</td>
                    </tr>
                    <tr>
                      <td><code><var>callback</var></code></td>
                      <td>function</td>
                      <td>Defines the function to be called when the trigger is reached.</td>
                    </tr>
                  </tbody>
                </table>
                <span>An object encapsulating the different directions of the touch.</span>
                <table>
                  <tbody>
                    <tr>
                      <td><b>Name</b></td>
                      <td><b>Type</b></td>
                      <td><b>Description</b></td>
                    </tr>
                    <tr>
                      <td><code><var>next</var></code></td>
                      <td>object</td>
                      <td>An object contain the various configuration parameters for vertical next touches.
                        <table>
                          <tbody>
                            <tr>
                              <td><b>Name</b></td>
                              <td><b>Type</b></td>
                              <td><b>Description</b></td>
                            </tr>
                            <tr>
                              <td><code><var>value</var></code></td>
                              <td>number</td>
                              <td><i>Default value : <code>150</code></i>
                                <br>Indicates the number of distance covered when touched before the callback is triggered</td>
                            </tr>
                            <tr>
                              <td><code><var>callback</var></code></td>
                              <td>function</td>
                              <td><i>Default value : <code>() =&gt; {}</code></i>
                                <br>Defines the function to be called when the trigger is reached.</td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td><code><var>prev</var></code></td>
                      <td>object</td>
                      <td>An object contain the various configuration parameters for vertical previous touches.
                        <table>
                          <tbody>
                            <tr>
                              <td><b>Name</b></td>
                              <td><b>Type</b></td>
                              <td><b>Description</b></td>
                            </tr>
                            <tr>
                              <td><code><var>value</var></code></td>
                              <td>number</td>
                              <td><i>Default value : <code>150</code></i>
                                <br>Indicates the number of distance covered when touched before the callback is triggered</td>
                            </tr>
                            <tr>
                              <td><code><var>callback</var></code></td>
                              <td>function</td>
                              <td><i>Default value : <code>() =&gt; {}</code></i>
                                <br>Defines the function to be called when the trigger is reached.
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>

## Methods
Several methods can be called after creating the listener. You will find them below.

- **```removeScrollListener()``` :** allows to suppress the listener.

- **```switchCancelOnDirectionChange()``` :** allows to switch the bolean value of `cancelOnDirectionChange`.

- **```changeSettings(Object)``` :** allows you to modify the parameters given when creating the listener. It takes the same [options](#options) as when creating the listener.

You can find the way to call them in the [examples](#examples) section.

## Examples
### Listen scroll on element
```javascript
let newScrollListener = new ScrollListener({
  container: '#myListenedElement',
});
// newScrollListener listen the scroll and touch event in your #myListenedElement.
```
### Listen vertical scroll/touch
```javascript
let newScrollListener = new ScrollListener({
  container: '#myListenedElement',
  scroll: {
    y: {
      value: 5,
      callback: () => console.log('Hello scroll world'),
    },
  },
  touch: {
    y: {
      value: 200,
      callback: () => console.log('Hello touch world'),
    },
  },
});
// now you console.log a string if user verticaly scroll/touch.
```
### Listen horizontal scroll with direction
```javascript
let newScrollListener = new ScrollListener({
  container: '#myListenedElement',
  scroll: {
    x: {
      prev: {
        value: 5,
        callback: () => console.log('prev scroll'),
      },
      next: {
        value: 2,
        callback: () => console.log('next scroll'),
      },
    },
  },
  touch: {
    x: {
      prev: {
        value: 200,
        callback: () => console.log('prev touch'),
      },
      next: {
        value: 150,
        callback: () => console.log('next touch'),
      },
    },
  },
});
// sent you a different console.log depending on whether the user scrolls forward or backward on the horizontal axis
```
### Setup global callback
```javascript
let newScrollListener = new ScrollListener({
  container: '#myListenedElement',
  callback: () => console.log('my global callback'),
  scroll: {
    x: {
      prev: {
        value: 5,
        callback: () => console.log('prev scroll'),
      },
      next: {
        value: 2,
        callback: () => console.log('next scroll'),
      },
    },
  },
  touch: {
    x: {
      prev: {
        value: 200,
        callback: () => console.log('prev touch'),
      },
      next: {
        value: 150,
        callback: () => console.log('next touch'),
      },
    },
  },
});
// during each scroll listened to, your global callback function will be called before the others.
```
### Remove a listener
```javascript
let newScrollListener = new ScrollListener({
  container: '#myListenedElement',
});

newScrollListener.removeScrollListener();
//the listener is now removed.
```
### Switch
```javascript
let newScrollListener = new ScrollListener({
  container: '#myListenedElement',
  cancelOnDirectionChange: true
});

newScrollListener.switchCancelOnDirectionChange();
// now the cancelOnDirectionChange is false.
```
### Change vertical previous scroll/touch settings
```javascript
let newScrollListener = new ScrollListener({
  container: '#myListenedElement',
  scroll: {
    x: {
      prev: {
        value: 5,
        callback: () => console.log('prev scroll'),
      },
      next: {
        value: 2,
        callback: () => console.log('next scroll'),
      },
    },
  },
  touch: {
    x: {
      prev: {
        value: 200,
        callback: () => console.log('prev touch'),
      },
      next: {
        value: 150,
        callback: () => console.log('next touch'),
      },
    },
  },
});

newScrollListener.changeSettings({
  scroll: {
    x: {
      prev: {
        value: 10,
      },
    },
  },
  touch: {
    x: {
      prev: {
        value: 300,
      },
    },
  },
});
// now scroll.x.prev value is 10 and the touch.x.prev.value is 300.
```


## Compatible Browsers
[![Browserstack](https://d2ogrdw2mh0rsl.cloudfront.net/production/images/static/header/header-logo.svg)](https://live.browserstack.com/)

The tests were carried out thanks to Browserstack which offers us its services since our npm is opensource.

The npm is now run on all devices and browsers but it's possible that problems may be encountered on browsers that may be common. If this is the case, do not hesitate to open an issue.


## Bug or problem ?

If you encounter a problem or a bug due to the NPM package do not hesitate to open an [issue](https://github.com/ga-devfront/scroll-event-handler/issues) with the corresponding label and a detailed description of your problem.


## Contributors

* **Guyomar Alexis** - [ga-devfront](https://github.com/ga-devfront) : lead developer of project.
* **Daniels-Roth Stan** - [mrstandu33](https://github.com/mrstandu33) : consultant and adviser on development.

See also the list of [contributors](https://github.com/ga-devfront/scroll-listener/graphs/contributors) who participated
in this project.

Want to contribute to the project ? First read your document on how to [contribute effectively](CONTRIBUTING.md).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
