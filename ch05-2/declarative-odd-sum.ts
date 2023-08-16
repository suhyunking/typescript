//주어진 숫자 배열에서 홀수만을 필터링하고, 홀수들을 모두 더하여 결과를 출력

import { range } from '../ch05-1/range'
import { fold } from './fold'
import { filter } from './filter'

//입력데이터 생성 (1부터 100까지의 숫자 배열 생성하여 numbers 변수에 할당)
let numbers: number[] = range(1, 100 + 1)

//홀수인지 판별(true, false)
const isOdd = (n: number): boolean => n % 2 != 0

//입력데이터 가공 (배열 접기+ 연산)
let result = fold(
    //numbers 배열을 isOdd 조건 함수를 적용하여 필터링
    //홀수만 남긴 새로운 배열 생성
    filter(numbers, isOdd),
    (result, value) => result + value, 0)
console.log(result) // 2500