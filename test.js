import ScrollListener from './index.js';

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
        nextY() {console.log('next')},
        prevY() {console.log('prev')},
    },
})
//window.setTimeout(yolo.removeScrollListener, 2000);