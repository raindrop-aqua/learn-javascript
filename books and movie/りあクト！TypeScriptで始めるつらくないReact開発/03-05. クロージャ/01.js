class Counter {
    constructor(initialCount) {
        this.c = initialCount;
    }

    increment() {
        return this.c++;
    }
}

const counter = new Counter();
console.log(counter.increment(), counter.increment(), counter.increment()); // 1 2 3
