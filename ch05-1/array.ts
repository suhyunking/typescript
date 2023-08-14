let a = [1, 2, 3]
let o = {name: 'Jack', age: 32}
console.log(Array.isArray(a), Array.isArray(o))  //true false



let numArray: number[] = [1, 2, 3]
let strArray: string[] = ['Hello', 'World']

type IPerson = {name: string, age?: number}
let personArray: IPerson[] = [{name:'Jack'}, {name: 'Jane', age: 32}]

