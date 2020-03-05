function* rangeGenerator(end, start = 0 ) {
    let n = 0;

    for (let i = start; i < end; i++) {
        n += 1;
        yield i;
    }
}

const gen = rangeGenerator(3);
console.log(gen.next());    // { value: 0, done: false }
console.log(gen.next());    // { value: 1, done: false }
console.log(gen.next());    // { value: 2, done: false }
console.log(gen.next());    // { value: undefined, done: true }
