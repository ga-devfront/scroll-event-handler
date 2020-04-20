import ScrollListener from './index.js';

let yolo = new ScrollListener({
    container: '#scrollIn',
    cancelOnDirectionChange: true,
    trigger: {
        scroll: {
            next: 20,
            prev: 20,
        },
        touch: {
            next: 20,
            prev: 20,
        }
    },
    callback: {
        next() {console.log('next')},
        prev() {console.log('prev')},
    },
})

//window.setTimeout(yolo.removeScrollListener, 2000);