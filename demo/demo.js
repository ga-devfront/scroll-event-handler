import ScrollListener from '../index.js';

new ScrollListener({
    container: '#scrollIn',
    cancelOnDirectionChange: true,
    trigger: {
        scroll: {
            nextY: 5,
            prevY: 5,
            nextX: 0,
            prevX: 0,
        },
        touch: {
            nextY: 200,
            prevY: 200,
            nextX: 0,
            prevX: 0,
        }
    },
    callback: {
        nextY() {console.log('nextY')},
        prevY() {console.log('prevY')},
        nextX() {console.log('nextX')},
        prevX() {console.log('prevX')},
    },
})