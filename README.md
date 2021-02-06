# typescript_study   
limsm-v0 프로젝트를 진행하던 중 backend와 frontend 전부 typescript를 사용하기 때문에 typescript의 기본 공부

## typescript 개요   

1.오픈소스 프로그래밍 언어   
2.자바스크립트의 상위 집합으로 ECMA스크립트의 최신 표준을 지원   
3.정적인 언어로 컴파일 시간에 타입을 검사   
4.장점   
    (1). 강력한 타입으로 대규모 애플리케이션 개발 용이   
    (2). 유명한 자바스크립트 라이브러리와의 편리한 사용   
    (3). 개발 도구에서의 강력한 지원   

## tsc   
--lib 로 라이브러리 옵션을 줄 수 있음, ex) ex5 , ex2015 , promise , dom 등등   
--module 옵션으로 컴파일 모듈을 설정할 수 있음

## var
함수단위의 블록 스코프
```
function outer() {

    if (true) {
        var score = 0
    }

    for (var i =0 ; i < 3; i++) { // 우리의 기대는 0,1,2 출력이지만 2,2,2가 출력된다. 함수단위의 스코프이기 때문에 0.1초 이후에는 i의값이 이미 2으로 증가된 이후이다.
        setTimeout(function() {
            console.log(i)
        }, 100) 
    }

    console.log(score);  // 접근이 가능 , why? var키워드가 함수단위의 블록 스코프이기 때문에 outer 함수 안에서 선언되어 접근이 가능
}
```

## let   
블락단위의 스코프
```
function outer() {

    if (true) {
        let score = 0
    }

    for (let i =0 ; i < 3; i++) { // 0,1,2 
        setTimeout(function() {
            console.log(i)
        }, 100) 
    }

    console.log(score);  // 접근 불가 , why ? if 블락 안에서 선언됐기 때문
}
```