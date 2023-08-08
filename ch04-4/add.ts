
//숫자를 매개변수로 받아서 숫자를 반환하는 함수 타입
export type NumberToNumberFunc = (arg: number) => number

//add 상수 정의
//화살표 함수를 할당, 숫자 a를 받아서 NumberToNumberFunc 타입의 함수를 반환
export const add = (a: number): NumberToNumberFunc => {
    //_add 변수 선언
    //NumberToNumberFunc 타입의 함수를 할당, 숫자 b를 받아서 a + b를 반환
    //_add 함수는 a값을 기억하고 있으며, 받은 b값을 더한 결과를 반환
    const _add: NumberToNumberFunc = (b: number): number => {
        return a + b
    }
    //_add 함수를 반환
    //add 함수를 호출할 때 입력한 a값을 기억하면서, 이후에 또 다른 숫자를 받아 덧셈 연산을 수행하는 함수
    return _add

    // * add 함수는 숫자 a를 받아서 내부적으로 _add 함수를 반환하는데, 
    // 이 _add함수는 a값과 전달된 숫자를 더한 결과를 반환
    // add 함수는 고차함수의 예시로서 활용
}
