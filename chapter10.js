// 반복문 : 어떠한 동작을 반보개서 수행할 수 있도록 만들어 주는 문법



// for  , continue랑 break는 몰랐던 내용
for (let idx = 1; idx <= 10; idx++){ // idx는 카운트 변수라고 함
    
    if (idx % 2 === 0) { // 참이 되면 continue가 되고 반복문 내에 다른 코드들은 실행 X
        continue;
    }

    console.log('반복', idx);

    if (idx >= 5) {
        break; // 종료하려면 break로 해야함 return은 안됨
    }
    
}