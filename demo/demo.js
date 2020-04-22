import ScrollListener from '../index.js';

new ScrollListener({
    container: '#scrollIn',
    cancelOnDirectionChange: true,
    scroll: {
        x: {
            next: {
                value: 5,
                callback: () => {},
            },
            prev: {
                value: 5,
                callback: () => {},
            },
        },
        y: {
            next: {
                value: 80,
                callback: () => {},
            },
            prev: {
                value: 80,
                callback: () => {},
            },
        }
    },
    touch: {
        x: {
            next: {
                value: 5,
                callback: () => {},
            },
            prev: {
                value: 5,
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
    },
})