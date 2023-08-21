export const map = <T, Q>(array: T[], callback: (value: T, index?: number) => Q): Q[] => {

    let result: Q[] = [] // 결과 배열 초기화

    for (let index = 0; index < array.length; ++index) { // 배열의 각 요소에 대해 반복
        const value = array[index] //현재 요소 가져오기
        result = [...result, callback(value, index)] // 콜백 함수 호출 후 결과를 결과 배열에 추가 
    }

    return result // 최종 결과 배열 반환
}