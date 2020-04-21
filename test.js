import ScrollListener from './index.js';

new ScrollListener({
    container: '#scrollIn',
    cancelOnDirectionChange: true,
    trigger: {
        scroll: {
            next: 5,
            prev: 5,
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