import ScrollListener from '../index.js';

let yolo = new ScrollListener({
    container: '#scrollIn',
    cancelOnDirectionChange: true,
    trigger: {
        scroll: {
            nextY: 5,
            prevY: 5,
        },
        touch: {
            nextY: 200,
            prevY: 200,
        }
    },
    callback: {
        nextY() {console.log('nextY')},
        prevY() {console.log('prevY')},
        nextX() {console.log('nextX')},
        prevX() {console.log('prevX')},
    },
})
//window.setTimeout(yolo.removeScrollListener, 2000);