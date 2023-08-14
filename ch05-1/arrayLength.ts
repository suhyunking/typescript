//* 배열 길이 출력
//제네릭 타입 <T> 를 사용하여 다양한 유형의 배열에 대해 동작할 수 있도록 설계
//array 매개변수는 배열 형태의 입력을 받음
//함수 내에서는 입력된 배열의 길이('length')를 반환

export const arrayLength = <T>(array: T[]): number => array.length

//* 배열 유무 true, false
//함수 내에서는 'arrayLength<T>(array)'를 호출하여 입력된 배열의 길이를 얻고, 이 길이가 0인지를 확인하여
//빈 배열인지 아닌지를 판단하는데 사용
//반환값은 빈 배열 여부에 따라 true 또는 false
export const isEmpty = <T>(array: T[]): boolean => arrayLength<T>(array) == 0