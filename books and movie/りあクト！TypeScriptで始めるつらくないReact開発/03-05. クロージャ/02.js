const counterMaker = (initialCount) => {
    let c = initialCount;
    const increment = () => c++;

    return increment;
};

const count = counterMaker(1);
console.log(count(), count(), count());     // 1 2 3
