let students = [
    { id: 12, name: 'sakib', mo: 0000 },
    { id: 22, name: 'rakib', mo: 1111 },
    { id: 33, name: 'hasib', mo: 2222 },
    { id: 44, name: 'hasan', mo: 3333 }
];

let names = students.map(s => s.name)
let ids = students.map(s => s.id)
console.log(ids);
console.log(names);

let bigger = students.filter(s => s.id > 12)
console.log(bigger);