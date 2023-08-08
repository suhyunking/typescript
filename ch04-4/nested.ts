//중첩 함수

// 매개변수 : value(숫자), cb(콜백함수)
//cb는 arg(숫자)를 매개변수로 받고 반환값이 없는 함수 타입
const calc = (value: number, cb: (arg: number) => void): void => {

    //add 화살표 함수 선언 (a + b)
    let add = (a: number, b: number) => a + b

    //multiply 함수 선언 (a * b)
    function multiply(a: number, b: number) {
      return a * b
    }

    //multiply(3, value)
    let result = multiply(add(1, 2), value)

    //cb 콜백함수 호출, result값을 인자로 받아 실행
    cb(result)
}


calc(30, (result: number) => console.log(`result is ${result}`)) //result is 90