const test = async () => {
    const value = await Promise.resolve(1)
    console.log(value) //1
}
test()

//await 키워드는 피연산자의 값을 반환해줌
//만일 피연산자가 Promise객체이면 then 메서드를 호출해 얻은 값을 반환해줌
//let value = await Promise.resolve 객체 혹은 값

//async 함수 수정자
// const test1 = async() => { 
//     await Promise 객체 혹은 값
// }

// async function test2() {
//     await Promise 객체 혹은 값
// }

export const test1 = async () => {
    let value = await 1
    console.log(value)
    value = await Promise.resolve(1)
    console.log(value)
}
// test1()

export async function test2() {
    let value = await 'hello'
    console.log(value)
    value = await Promise.resolve('hello')
    console.log(value)
}
// test2()

// 1
// 1
// hello
// 1
// hello