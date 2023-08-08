// 일등 함수
let f = function(a:number, b:number) {
    return a + b
}

console.log(f(1, 2)) //3

f = function(a, b) {
    return a - b
}

console.log(f(2, 1)) //1

//함수 호출 연산자
let functionExpression = function(a:number, b:number) {
    return a + b
}

let value = functionExpression(1, 2)
console.log(value) //3

//익명함수
let value2 = 
(function(a:number, b:number) {
    return a + b;
})
console.log(value2(1,2)) //3