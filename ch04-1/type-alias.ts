
//stringNumberFunc라는 함수타입을 정의
//두 개의 매개변수를 받고 아무런 값을 반환하지 않는 함수
type stringNumberFunc = (string, number) => void

//f, g 변수 선언, 타입 stringNumberFunc으로 지정
let f : stringNumberFunc = function(a: string, b: number): void {}
let g: stringNumberFunc = function(c: string, d: number): void {}