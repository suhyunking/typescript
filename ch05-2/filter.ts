
//<T>는 임의의 타입을 나타내고, T[]는 해당 타입의 배열을 의미
//array라는 배열과 callback이라는 이름의 함수를 받음
//callback함수는 주어진 조건에 따라 필터링 여부를 결정
//result라는 빈배열을 선언하고 이 배열은 필터링된 결과를 담게 됨
//배열 array를 순회하면서 각 요소에 대해 callback 함수를 호출하고 callback 함수의 반환값이 true인 경우에만 해당 요소를 result 배열에 추가

export const filter = <T>(array: T[], callback: (value: T, index?: number) => boolean): T[] => {
    let result: T[] = []
    for(let index: number = 0; index < array.length; index++) {
        const value = array[index]
        if(callback(value, index))
        result = [...result, value]
    }
    return result
}