// 고차 함수
const add = 
//a(매개변수), 반환 값으로는 다른 함수를 반환
(a: number): ((arg: number) => number) =>
(b: number): number => a + b
const result = add(1)(2)

console.log(result) // 1 + 2  = 3