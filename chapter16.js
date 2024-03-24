// 1. 상수 객체
const animal = {
    type: "고양이",
    name: "나비",
    color: "white",
};


// 상수 객체에도 프로퍼티를 추가/수정하거나 삭제하는건 가능하다.
animal.age = 2;
animal.name = "화이트";
delete animal.color

// console.log(animal)

// 2. 메서드
// 값이 함수인 프로퍼티를 말함

const person = {
    name: "이정환",
    // 메서드 선언 , 객체의 동작을 정의할때 사용한다.
    sayHi() { // 컨사이드 메서드. 화살표함수, 익명함수도 사용가능.
        console.log("안녕");
    }
}

person.sayHi()
person["sayHi"]();