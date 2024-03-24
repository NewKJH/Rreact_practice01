// 객체
// 원시 타입이 아닌 객체 타입의 자료형
// 여러가지 값을 동시에 저장할 수 있는 자료형을 의미

// 1. 객체 생성
let obj1 = new Object() // 객체 생성자
let obj2 = {} // 객체 리터럴 (대부분 사용)

// 2. 객체 프로퍼티 (객체 속성)
let person = {
    name: "이정환", // key : value, name 프로퍼티 , key는 문자열이나 숫자만 가능
    age: "27", // age 프로퍼티
    hobby: "테니스", // hobby 프로퍼티
    job: "FE Developer",
    extra: {}, // 객체나 함수도 프로퍼티로 사용이 가능하다.
    10: 20,
    "like cat" : true,
}


// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name;
// console.log(name);

let age = person["age"]; // ""안에 문자열로 작성해야함.
console.log(age);

let property = "hobby";
let hobby = person[property]; // prperty는 결국 hobby를 가리킴
console.log(hobby); // 테니스가 반환됨.

// 3.2 새로운 프로퍼티를 추가하는 방법
person.job = "fe developer";
person["favoriteFood"] = "떡볶이";

// console.log(person);

// 3.3 프로퍼티를 수정하는 방법
person.job = "educator";
person["favoriteFood"] = "초콜릿";
// console.log(person);


// 3.4 프로퍼티를 삭제하는 방법
delete person.job;
delete person["favoriteFood"]
// console.log(person);

// 3.5 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person; // name이라는 프로퍼티가 person이라는 객체 안에 있는가?
let result2 = "cat" in person;
// 존재하면 true , 아니면 false

console.log(result1)













