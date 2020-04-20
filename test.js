import ScrollListener from './index.js';

new ScrollListener({
    container: '#scrollIn',
    cancelOnDirectionChange: true,
    trigger: {
        scroll: {
            next: 20,
            prev: 20,
        },
        touch: {
            next: 200,
            prev: 200,
        }
    },
    callback: {
        next() {console.log('next')},
        prev() {console.log('prev')},
    },
})

//window.setTimeout(yolo.removeScrollListener, 2000);