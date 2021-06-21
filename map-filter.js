// map

let numbers = [2, 3, 4, 5, 6]
let output = []


for (let i = 0; i < numbers.length; i++) {
    let element = numbers[i];
    let result = element * element
    output.push(result)
}

console.log(output);

function square(element) {
    return element * element;
}

let result = numbers.map(function (element) {
    return element * element
})

console.log(result);

let result2 = numbers.map(x => x * x)

console.log(result2);

// filter
let bigger = numbers.filter(x => x > 4)
console.log(bigger);