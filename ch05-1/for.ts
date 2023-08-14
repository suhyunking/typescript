
//for ... in 

let names = ['Jack', 'Jane', 'Steve']

// [0]: Jack
// [1]: Jane
// [2]: Steve

for(let index in names) {
    const name = names[index]
    console.log(`[${index}]: ${name}`)
}

//object for in

let jack: {[index: string]: any} = {name: 'Jack', age: 32}

// name: Jack
// age: 32
for(let property in jack)
    console.log(`${property}: ${jack[property]}`)

//for ... of

// Jack
// Jane
// Steve
for(let name of ['Jack', 'Jane', 'Steve'])
console.log(name)
