interface IAgeable {
    age? :number
}

function getAge(o: IAgeable | null | undefined) {
    return o != undefined && o.age ? o.age: 0
}

console.log(getAge(undefined))
console.log(getAge(null))
console.log(getAge({age: 27}))

