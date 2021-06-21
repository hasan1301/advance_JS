function stopWatch() {
    let count = 0;
    return function () {
        count++;
        return count;
    }
}

let clock1 = stopWatch();

let clock2 = stopWatch();

console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());

console.log(clock2());
console.log(clock1());
console.log(clock1());