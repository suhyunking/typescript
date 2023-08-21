//깊은 복사
let original = 1
let copied = original
copied += 2
console.log(original, copied) //1 3

//얕은 복사
const originalArray = [5, 3, 9, 7]
const shallowCopiedArray = originalArray
shallowCopiedArray[0] = 0
console.log(originalArray, shallowCopiedArray) //[ 0, 3, 9, 7 ] [ 0, 3, 9, 7 ]

//전개 연산자와 깊은 복사 (원본 배열 변경 x)
const oArray = [1, 2, 3, 4]
const deepCopiedArray = [...oArray]
deepCopiedArray[0] = 0
console.log(oArray, deepCopiedArray) //[ 1, 2, 3, 4 ] [ 0, 2, 3, 4 ]

