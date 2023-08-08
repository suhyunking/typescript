// 콜백함수
export const init  = (callback: () => void): void => {
    console.log('hello')
    callback()
    console.log('bye')
}