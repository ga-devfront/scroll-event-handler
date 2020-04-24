import ScrollListener from '../index.js';

let triggers = {
    scroll: {
        x: {
            next: 0,
            prev: 0,
        },
        y: {
            next: 0,
            prev: 0,
        },
    },
    touch: {
        x: {
            next: 0,
            prev: 0,
        },
        y: {
            next: 0,
            prev: 0,
        },
    },
};

let demoListener = new ScrollListener({
    container: '#scrollIn',
    cancelOnDirectionChange: true,
    scroll: {
        x: {
            next: {
                value: 1,
                callback: () => {
                    triggers.scroll.x.next += 1;
                    document.querySelector('#trigger-scroll-x-next').value = triggers.scroll.x.next;
                },
            },
            prev: {
                value: 1,
                callback: () => {
                    triggers.scroll.x.prev += 1;
                    document.querySelector('#trigger-scroll-x-prev').value = triggers.scroll.x.prev;
                },
            },
        },
        y: {
            next: {
                value: 1,
                callback: () => {
                    triggers.scroll.y.next += 1;
                    document.querySelector('#trigger-scroll-y-next').value = triggers.scroll.y.next;
                },
            },
            prev: {
                value: 1,
                callback: () => {
                    triggers.scroll.y.prev += 1;
                    document.querySelector('#trigger-scroll-y-prev').value = triggers.scroll.y.prev;
                },
            },
        }
    },
    touch: {
        x: {
            next: {
                value: 40,
                callback: () => {
                    triggers.touch.x.next += 1;
                    document.querySelector('#trigger-touch-x-next').value = triggers.touch.x.next;
                },
            },
            prev: {
                value: 40,
                callback: () => {
                    triggers.touch.x.prev += 1;
                    document.querySelector('#trigger-touch-x-prev').value = triggers.touch.x.prev;
                },
            },
        },
        y: {
            next: {
                value: 150,
                callback: () => {
                    triggers.touch.y.next += 1;
                    document.querySelector('#trigger-touch-y-next').value = triggers.touch.y.next;
                },
            },
            prev: {
                value: 150,
                callback: () => {
                    triggers.touch.y.prev += 1;
                    document.querySelector('#trigger-touch-y-prev').value = triggers.touch.y.prev;
                },
            },
        }
    },
});

let apply = document.querySelector('#apply');
apply.addEventListener('click', () => {
    demoListener.changeSettings({
        scroll: {
            x: {
                next: {
                    value: parseFloat(document.querySelector('#scroll-x-next').value),
                },
                prev: {
                    value: parseFloat(document.querySelector('#scroll-x-prev').value),
                },
            },
            y: {
                next: {
                    value: parseFloat(document.querySelector('#scroll-y-next').value),
                },
                prev: {
                    value: parseFloat(document.querySelector('#scroll-y-prev').value),
                },
            }
        },
        touch: {
            x: {
                next: {
                    value: parseFloat(document.querySelector('#touch-x-next').value),
                },
                prev: {
                    value: parseFloat(document.querySelector('#touch-x-prev').value),
                },
            },
            y: {
                next: {
                    value: parseFloat(document.querySelector('#touch-y-next').value),
                },
                prev: {
                    value: parseFloat(document.querySelector('#touch-y-prev').value),
                },
            }
        },
    })
})

let reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
    triggers = {
        scroll: {
            x: {
                next: 0,
                prev: 0,
            },
            y: {
                next: 0,
                prev: 0,
            },
        },
        touch: {
            x: {
                next: 0,
                prev: 0,
            },
            y: {
                next: 0,
                prev: 0,
            },
        },
    };
    document.querySelector('#trigger-scroll-x-next').value = 0;
    document.querySelector('#trigger-scroll-x-prev').value = 0;
    document.querySelector('#trigger-scroll-y-next').value = 0;
    document.querySelector('#trigger-scroll-y-prev').value = 0;
    document.querySelector('#trigger-touch-x-next').value = 0;
    document.querySelector('#trigger-touch-x-prev').value = 0;
    document.querySelector('#trigger-touch-y-next').value = 0;
    document.querySelector('#trigger-touch-y-prev').value = 0;
})