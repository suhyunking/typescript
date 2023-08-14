import {range} from './range'

//1부터 9까지의 숫자 범위를 생성
//결과를 numbers 변수에 저장

let numbers: number[] = range(1, 9 + 1)
console.log(numbers)

// [
//     1, 2, 3, 4, 5,
//     6, 7, 8, 9
//   ]