// 1. 묵시적 형 변환
// 자바스크립트 엔진이 알아서 형 변환
let num = 10;
let str = "20";

const result = num + str; // num이 묵시적으로 문자열으로 변환됨
console.log(result);

// 2. 명시적 형 변환
// 프로그래머가 내장함수 등을 이용해서 직접 형 변환
// 문자열 -> 숫자
let str1 = "10";
let strToNum1 = Number(str1); // Number : 내장함수

// console.log(10 + strToNum1);

// 숫자만 포함되어 있지 않은 형 변환
let str2 = "10개";
// let strToNum2 = Number(str2);
let strToNum2 = parseInt(str2); // 숫자값으로 변환 (숫자가 앞쪽으로 나와있어야한다.)
console.log(strToNum2)

// 숫자 -> 문자열
let num1 = 20;
let numToStr1 = String(num1); // 숫자를 문자열으로 형 변환
console.log(numToStr1 + "입니다")

