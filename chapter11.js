// 함수 , 중복되는 코드들을 묶어서 이름을 붙여서 해당 기능이 필요할때 함수의 이름만 가져와서 사용 가능



// 함수선언 : 함수를 새롭게 만드는 행위
// function greeting() {
//     // 함수가 실행해야하는 코드
//     console.log('안녕하세요')
// }

// console.log("호출전")
// greeting(); // 함수 호출
// console.log("호출후")


function getArea(width, height) { // 매개변수
    // let width = width;
    // let height = height;

    function another() { // 중첩함수, 함수 내부에서 함수 호출도 가능하다.
        console.log('another')
    }

    another();
    let area = width * height;

    return area; // 반환값 , return을 만나면 함수는 종료된다.
}

let area1 = getArea(10, 20); // 인수
console.log(area1) // return area값이 area1에 저장
let area2 = getArea(30, 20);
console.log(area2) // return area값이 area2에 저장
getArea(150, 200);

// 호이스팅 , ==> 끌어올리다. 선언문들을 최상단으로 끌어올려서 실행
// 함수호출보다 함수 선언이 밑에 있어도 실행되는 이유는 '호이스팅' 때문이다.
