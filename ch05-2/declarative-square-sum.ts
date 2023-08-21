import {range} from '../ch05-1/range'
import { fold } from './fold'
import { map } from './map'

let numbers : number[] = range(1, 100 + 1) // [ 1, ... , 100] 숫자 배열 생성
let result = fold(
    map(numbers, value => value * value), // 숫자 배열을 제곱하여 새로운 배열 생성
    (result, value) => result + value, 0) // 제곱한 값을 모두 더하여 결과값 생성
    console.log(result) //338350