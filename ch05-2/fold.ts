//배열 데이터 접기
//배열 형태의 데이터를 가공해 그들의 합, 하나의 값을 생성하려고 할 때 사용
//배열 T[]를 가공해 타입 T의 결과값을 만듦
export const fold = <T>(array: T[], callback: (result: T, val: T) => T, initValue: T) => {
    let result: T = initValue
    for(let i = 0; i < array.length; ++i) {
        const value = array[i]
        result = callback(result, value)
    }
    return result
}