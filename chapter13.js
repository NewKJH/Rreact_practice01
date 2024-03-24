// 콜백함수 , 자신이 아닌 다른 함수에, 인수로써 전달된 함수를 의미함.
// 콜백함수는 자주 사용하는 기능.
function main(value) {
    // console.log(value)
    value(); // 원하는 타이밍에 실행을 할 수 있다.
}

// function sub() {
//     console.log('i am sub');
// }

// main(sub); // sub는 콜백함수가 된다. 콜백 : 나중에 실행되는.

main(() =>  { // 함수 표현식으로 콜백함수를 전달 가능하다. 익명함수로도 되고, 화살표함수로도 가능하다.
    // console.log('i am sub');
});

// 콜백함수 활용 예제
function repeat(count, callback) {
    for (let idx = 1; idx <= count; idx++){
        callback(idx);
    }
}


// function repeatDouble(count) { // 중복코드
//     for (let idx = 1; idx <= count; idx++){
//         console.log(idx * 2)
//     }
// }

repeat(5, (idx) => {
    console.log(idx)
});

repeat(5, (idx) => {
    console.log(idx * 2)
});

repeat(5, (idx) => {
    console.log(idx * 3)
});

// repeatDouble(5)

