// 1. 함수 표현식

function funcA() {
    console.log('funcA')
}

let varA = funcA;
// console.log(varA)
varA()

// let varB = function funcB() { // 익명함수 , 이름을 생략
let varB = function () { // 익명함수 , 이름을 생략, 호이스팅이 이루어지지 않는다.?
    console.log('funcB')
}

varB();

// 화살표 함수1
// let varC = () => {
//     return 1
// }

// let varC = (value) => value + 1; // 1개라면 중괄호와 return까지 생략이 가능하다.
let varC = (value) => {
    console.log(value)
    return value + 1
}; // 2개 이상이면 이렇게 분리시키기.

console.log(varC(15))