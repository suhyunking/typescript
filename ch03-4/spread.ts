let part1 = {name:'su'}, part2 = {age: 27}, part3 = {city: 'Seoul', country: 'Kr'};
let merged = {...part1, ...part2, ...part3}

console.log(merged) //{ name: 'su', age: 27, city: 'Seoul', country: 'Kr' }

