# scroll listener
Scroll listener est un package permettant de lire les événéments de scroll (desktop) ou de touch (mobile) et de leur
assigné un callback.

## Badges
![npm](https://img.shields.io/npm/v/scroll-listener-for-all-device)
![npm bundle size](https://img.shields.io/bundlephobia/min/scroll-listener-for-all-device)
![npm](https://img.shields.io/npm/dm/scroll-listener-for-all-device)

[![GitHub last
commit](https://img.shields.io/github/last-commit/ga-devfront/scroll-event-handler/develop)](https://github.com/ga-devfront/scroll-event-handler/commits/develop)
![GitHub top language](https://img.shields.io/github/languages/top/ga-devfront/scroll-event-handler)
[![HitCount](http://hits.dwyl.com/ga-devfront/scroll-listener.svg)](http://hits.dwyl.com/ga-devfront/scroll-event-handler)

[![Codacy
Badge](https://api.codacy.com/project/badge/Grade/e5ddea0228d7470393909a2b6c1d2d77)](https://www.codacy.com/manual/ga-devfront/scroll-listener?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=ga-devfront/scroll-listener&amp;utm_campaign=Badge_Grade)
[![time
tracker](https://wakatime.com/badge/github/ga-devfront/scroll-listener.svg)](https://wakatime.com/badge/github/ga-devfront/scroll-listener)
[![Demo](https://img.shields.io/website?label=demo%20website&url=https%3A%2F%2Fag-dev.fr%2Fprivate%2Fscroll-listener%2F)](https://ag-dev.fr/private/scroll-listener/demo/)

[![NPM](https://nodei.co/npm/scroll-event-handler.png)](https://nodei.co/npm/scroll-event-handler/)

## Demo
The [online demo](https://ag-dev.fr/private/scroll-listener/demo/) gives you an overview of what can be done with this
package.

You can also see the use of this package on my [portfolio](https://ag-dev.fr/).

## Linter
For this npm ESLint is used with the basic parameters to have a clean code.

## Installation
It can be installed from npm.
```bash
$ npm install scroll-listener-for-all-device
```

## Usage
The minimal configuration for scroll listener is this bellow :
```javascript
import ScrollListener from 'scroll-listener-for-all-device';

let newScrollListener = new ScrollListener({callback: () => console.log('scroll')});
```
With this configuration scroll listener will fire the callback regardless of the direction using the [defaults
settings](#options).
for further use an example are [available below]().

## Options
<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>container</code></td>
    <td>string</td>
    <td><i>Default value : <code>'main'</code><br>Using a <code>querySelector</code> you will have to indicate the
        container to listen to with the appropriate string.</td>
  </tr>
  <tr>
    <td><code>cancelOnDirectionChange</code></td>
    <td>boolean</td>
    <td><i>Default value : <code>true</code></i><br>Defined if the scroll counter should be reset if the direction of
      the scroll changes.</td>
  </tr>
  <tr>
    <td><code>callback</code></td>
    <td>function</td>
    <td><i>Default value : <code>() => {}</code></i><br>Allows you to define a global callback which will be called at
      each trigger before the other callbacks.</td>
  </tr>
  <tr>
    <td><code>scroll</code></td>
    <td>object</td>
    <td>Either:
      <ul>
        <li>An object encapsulating the various configuration parameters for all possible scrolls (X / Y - next / prev).
          <table>
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
          </table>
        </li>
        <li>An object encapsulating the different scroll axes.
          <table>
            <tr>
              <td><b>Name</b></td>
              <td><b>Type</b></td>
              <td><b>Description</b></td>
            </tr>
            <tr>
              <td><code><var>x</var></code></td>
              <td>object</td>
              <td>Either:
                <ul>
                  <li>An object encapsulating the various configuration parameters for all horizontal scrolls.
                    <table>
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
                    </table>
                  </li>
                  <li>An object encapsulating the different directions of the scroll.
                    <table>
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
                            <tr>
                              <td><b>Name</b></td>
                              <td><b>Type</b></td>
                              <td><b>Description</b></td>
                            </tr>
                            <tr>
                              <td><code><var>value</var></code></td>
                              <td>number</td>
                              <td><i>Default value : <code>3</code></i><br>Indicates the number of scrolls before the
                                callback is triggered</td>
                            </tr>
                            <tr>
                              <td><code><var>callback</var></code></td>
                              <td>function</td>
                              <td><i>Default value : <code>() => {}</code></i><br>Defines the function to be called when
                                the number of scrolls is reached.</td>
                            </tr>
                          </table>
                  </li>
              </td>
            </tr>
            <tr>
              <td><code><var>prev</var></code></td>
              <td>object</td>
              <td>An object contain the various configuration parameters for horizontal previous scrolls.
                <table>
                  <tr>
                    <td><b>Name</b></td>
                    <td><b>Type</b></td>
                    <td><b>Description</b></td>
                  </tr>
                  <tr>
                    <td><code><var>value</var></code></td>
                    <td>number</td>
                    <td><i>Default value : <code>3</code></i><br>Indicates the number of scrolls before the callback is
                      triggered</td>
                  </tr>
                  <tr>
                    <td><code><var>callback</var></code></td>
                    <td>function</td>
                    <td><i>Default value : <code>() => {}</code></i><br>Defines the function to be called when the
                      number of scrolls is reached.</td>
                  </tr>
                </table>
        </li>
    </td>
  </tr>
</table>
</li>
</ul>
</td>
</tr>
<tr>
  <td><code><var>y</var></code></td>
  <td>object</td>
  <td>Either:
    <ul>
      <li>An object encapsulating the various configuration parameters for all vertical scrolls.
        <table>
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
        </table>
      </li>
      <li>An object encapsulating the different directions of the scroll.
        <table>
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
                <tr>
                  <td><b>Name</b></td>
                  <td><b>Type</b></td>
                  <td><b>Description</b></td>
                </tr>
                <tr>
                  <td><code><var>value</var></code></td>
                  <td>number</td>
                  <td><i>Default value : <code>5</code></i><br>Indicates the number of scrolls before the callback is
                    triggered</td>
                </tr>
                <tr>
                  <td><code><var>callback</var></code></td>
                  <td>function</td>
                  <td><i>Default value : <code>() => {}</code></i><br>Defines the function to be called when the number
                    of scrolls is reached.</td>
                </tr>
              </table>
      </li>
  </td>
</tr>
<tr>
  <td><code><var>prev</var></code></td>
  <td>object</td>
  <td>An object contain the various configuration parameters for vertical previous scrolls.
    <table>
      <tr>
        <td><b>Name</b></td>
        <td><b>Type</b></td>
        <td><b>Description</b></td>
      </tr>
      <tr>
        <td><code><var>value</var></code></td>
        <td>number</td>
        <td><i>Default value : <code>5</code></i><br>Indicates the number of scrolls before the callback is triggered
        </td>
      </tr>
      <tr>
        <td><code><var>callback</var></code></td>
        <td>function</td>
        <td><i>Default value : <code>() => {}</code></i><br>Defines the function to be called when the number of scrolls
          is reached.</td>
      </tr>
    </table>
    </li>
  </td>
</tr>
</table>
</li>
</ul>
</td>
</tr>
</table>
<tr>
  <td><code>touch</code></td>
  <td>object</td>
  <td>Either:
    <ul>
      <li>An object encapsulating the various configuration parameters for all possible touch (X / Y - next / prev).
        <table>
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
        </table>
      </li>
      <li>An object encapsulating the different touch axes.
        <table>
          <tr>
            <td><b>Name</b></td>
            <td><b>Type</b></td>
            <td><b>Description</b></td>
          </tr>
          <tr>
            <td><code><var>x</var></code></td>
            <td>object</td>
            <td>Either:
              <ul>
                <li>An object encapsulating the various configuration parameters for all horizontal touches.
                  <table>
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
                  </table>
                </li>
                <li>An object encapsulating the different directions of the touch.
                  <table>
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
                          <tr>
                            <td><b>Name</b></td>
                            <td><b>Type</b></td>
                            <td><b>Description</b></td>
                          </tr>
                          <tr>
                            <td><code><var>value</var></code></td>
                            <td>number</td>
                            <td><i>Default value : <code>80</code></i><br>Indicates the number of distance covered when
                              touched before the callback is triggered</td>
                          </tr>
                          <tr>
                            <td><code><var>callback</var></code></td>
                            <td>function</td>
                            <td><i>Default value : <code>() => {}</code></i><br>Defines the function to be called when
                              the trigger is reached.</td>
                          </tr>
                        </table>
                </li>
            </td>
          </tr>
          <tr>
            <td><code><var>prev</var></code></td>
            <td>object</td>
            <td>An object contain the various configuration parameters for horizontal previous touches.
              <table>
                <tr>
                  <td><b>Name</b></td>
                  <td><b>Type</b></td>
                  <td><b>Description</b></td>
                </tr>
                <tr>
                  <td><code><var>value</var></code></td>
                  <td>number</td>
                  <td><i>Default value : <code>80</code></i><br>Indicates the number of distance covered when touched
                    before the callback is triggered</td>
                </tr>
                <tr>
                  <td><code><var>callback</var></code></td>
                  <td>function</td>
                  <td><i>Default value : <code>() => {}</code></i><br>Defines the function to be called when the trigger
                    is reached.</td>
                </tr>
              </table>
      </li>
  </td>
</tr>
</table>
</li>
</ul>
</td>
</tr>
<tr>
  <td><code><var>y</var></code></td>
  <td>object</td>
  <td>Either:
    <ul>
      <li>An object encapsulating the various configuration parameters for all vertical touches.
        <table>
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
        </table>
      </li>
      <li>An object encapsulating the different directions of the touch.
        <table>
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
                <tr>
                  <td><b>Name</b></td>
                  <td><b>Type</b></td>
                  <td><b>Description</b></td>
                </tr>
                <tr>
                  <td><code><var>value</var></code></td>
                  <td>number</td>
                  <td><i>Default value : <code>200</code></i><br>Indicates the number of distance covered when touched
                    before the callback is triggered</td>
                </tr>
                <tr>
                  <td><code><var>callback</var></code></td>
                  <td>function</td>
                  <td><i>Default value : <code>() => {}</code></i><br>Defines the function to be called when the trigger
                    is reached.</td>
                </tr>
              </table>
      </li>
  </td>
</tr>
<tr>
  <td><code><var>prev</var></code></td>
  <td>object</td>
  <td>An object contain the various configuration parameters for vertical previous touches.
    <table>
      <tr>
        <td><b>Name</b></td>
        <td><b>Type</b></td>
        <td><b>Description</b></td>
      </tr>
      <tr>
        <td><code><var>value</var></code></td>
        <td>number</td>
        <td><i>Default value : <code>200</code></i><br>Indicates the number of distance covered when touched before the
          callback is triggered</td>
      </tr>
      <tr>
        <td><code><var>callback</var></code></td>
        <td>function</td>
        <td><i>Default value : <code>() => {}</code></i><br>Defines the function to be called when the trigger is
          reached.</td>
      </tr>
    </table>
    </li>
  </td>
</tr>
</table>
</li>
</ul>
</td>
</tr>
</table>
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
```
### Listen vertical scroll/touch
```javascript
let newScrollListener = new ScrollListener({
container: '#myListenedElement',
scroll: {
y: {
value: 5,
callback: () => console.log('Hello world'),
},
},
touch: {
y: {
value: 200,
callback: () => console.log('Hello world'),
},
},
});
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
```

## Compatible Browsers
The npm is now run on :
- Chrome desktop / mobile
- Edge
- Edge chromium
- Firefox desktop / mobile
- Opera desktop/ mobile
- Safari desktop / mobile
- Samsung Internet

The tests were carried out thanks to Browserstack which offers us its services since our npm is opensource.

[![Browserstack](https://d2ogrdw2mh0rsl.cloudfront.net/production/images/static/header/header-logo.svg)](https://live.browserstack.com/)

## Contributors

* **Guyomar Alexis** - [ga-devfront](https://github.com/ga-devfront) : lead developer of project.
* **Daniels-Roth Stan** - [mrstandu33](https://github.com/mrstandu33) : consultant and adviser on development.

See also the list of [contributors](https://github.com/ga-devfront/scroll-listener/graphs/contributors) who participated
in this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.