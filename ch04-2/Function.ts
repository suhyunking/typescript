// 함수 표현식 (add 함수)
let add = new Function('a', 'b', 'return a + b')
let result = add(1, 2)
console.log(result) //3

let add2 = function (c: number, d: number) {
    return c + d
}
console.log(add2(1, 3))