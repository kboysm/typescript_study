enum StarBuksGrade { //초기에 숫자값을 할당하는게 좋음 나중에 다른것이 추가되었을때 코드가 꼬이지 않게하기 위해서
    WELCOME = 0, // 0
    DDDD = 3 , // 3
    GREEN = 1, // 1
    GOLD  = 2, // 2
    AAAA = 'limsm' // 문자열도 가능
}

function getDiscount(v: StarBuksGrade): number {
    switch (v) {
        case StarBuksGrade.WELCOME:
            return 0;
        case StarBuksGrade.GREEN:
            return 5;
        case StarBuksGrade.GOLD:
            return 10;
    }
}

console.log(getDiscount(StarBuksGrade.GREEN)); // 5
console.log(StarBuksGrade.GREEN); // 1
console.log(StarBuksGrade);// 객체로 표현되어 있음 