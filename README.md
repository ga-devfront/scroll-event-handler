# scroll listener
Scroll listener is a npm package for listen scroll (desktop) or touch (mobile) event with some options. The npm is now run on :
- Chrome desktop / mobile
- Edge
- Edge chromium
- Firefox desktop / mobile
- Opera desktop/ mobile
- Safari desktop / mobile
- Samsung Internet

## Badges

![GitHub last commit](https://img.shields.io/github/last-commit/ga-devfront/scroll-listener)
![GitHub top language](https://img.shields.io/github/languages/top/ga-devfront/scroll-listener)
[![HitCount](http://hits.dwyl.com/ga-devfront/scroll-listener.svg)](http://hits.dwyl.com/ga-devfront/scroll-listener)

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/e5ddea0228d7470393909a2b6c1d2d77)](https://www.codacy.com/manual/ga-devfront/scroll-listener?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=ga-devfront/scroll-listener&amp;utm_campaign=Badge_Grade)
[![time tracker](https://wakatime.com/badge/github/ga-devfront/scroll-listener.svg)](https://wakatime.com/badge/github/ga-devfront/scroll-listener)
![Website](https://img.shields.io/website?url=https%3A%2F%2Fag-dev.fr%2Fprivate%2Fscroll-listener%2F)

## Installation
It can be installed from npm.
```bash
$ npm install
```

## Usage
### Create a new scroll listener
We can create a new scroll listener without option :
```javascript
import ScrollListener from 'scrollListener';

let newScrollListener = new ScrollListener();
```
or with options :
```javascript
import ScrollListener from 'scrollListener';

let newScrollListener = new ScrollListener({
    container: '#myContainer',
    cancelOnDirectionChange: true,
    trigger: {
        scroll: {
            nextY: 5,
            prevY: 5,
            nextX: 5,
            prevX: 5,
        },
        touch: {
            nextY: 200,
            prevY: 200,
            nextX: 100,
            prevX: 100,
        }
    },
    callback: {
        nextY() {console.log('nextY')},
        prevY() {console.log('prevY')},
        nextX() {console.log('nextX')},
        prevX() {console.log('prevX')},
    },
})
```

if you do not define your own options, default options will be applied. Some options can be changed later using certain methods.

### Methods to change options
We can change `trigger` & `cancelOnDirectionChange` options with these methods.

#### Change triggers
We can use this method to change the option triggers in two different ways.
By passing it an object which contains the detailed information of the change.
```javascript
newScrollListener.changeTrigger({
    scroll: {
        nextY: 20,
        prevY: 10,
        nextX: 5,
        prevX: 10,
    },
    touch: {
        nextY: 50,
        prevY: 100,
        nextX: 50,
        prevX: 100,
    },
})
```
Or by simply passing it a number which will be defined for all the options.
```javascript
newScrollListener.changeTrigger({
    scroll: 10,
    touch: 100,
})
```

#### Switch cancelOnDirectionChange
If you want to switch the `concelOnDirectionChange` you just need to call this method.
```javascript
newScrollListener.switchcancelOnDirectionChange();
```

## Options
- `container` :
- `cancelOnDirectionChange` :
- `trigger` :
  - `scroll` :
    - `nextY` :
    - `prevY` :
    - `nextX` :
    - `prevY` :
  - `touch` :
    - `nextY` :
    - `prevY` :
    - `nextX` :
    - `prevY` :
- `callback` :
    - `nextY()` :
    - `prevY()` :
    - `nextX()` :
    - `prevY()` :

## Contributors

* **Guyomar Alexis** - [ga-devfront](https://github.com/ga-devfront) : lead developer of project.
* **Daniels-Roth Stan** - [mrstandu33](https://github.com/mrstandu33) : consultant and adviser on development.

See also the list of [contributors](https://github.com/ga-devfront/scroll-listener/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
