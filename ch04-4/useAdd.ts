import {NumberToNumberFunc, add} from './add'

//add(a) / a값을 1로 설정한 함수를 fn에 할당
let fn: NumberToNumberFunc = add(1)

let result = fn(2)

console.log(result)
console.log(add(1)(4))