let numValue: number;
let stringValue: string;
let booleanValue: boolean;
let undefinedValue: undefined;
let nullValue: null;
let objectValue: object;
let symbolValue: symbol;

//아는것은 적지 않음
numValue = 3.3 // 소수점 가능, 다른 타입 불가 , 16진수 8진수 가능
// 모든 타입은 상위타입으로 선언된 변수에 하위타입을 정의할 수 있음.

numValue = null;
numValue = undefined;

// 모든 타입의 최상위 타입은 any타입

// 원시형타입 number , string ,boolean 타입을 제외하곤 다 할당 가능
objectValue = {
    name: 'limsm'
};

objectValue = {};
objectValue = new String('asd'); // String('asd')로 하면 에러 , 프리미티브 타입을 반환하기 때문에 , new String은 스프링 레퍼타입(프리미티브 타입이 아님)

// symbol 벨류는 심볼이라는 함수를 통해서만 생성이 가능 , 심볼은 대채로 객체의 프로퍼티로 쓰이게 됨
symbolValue = Symbol();

{
    symbolValue : 'limsm' // 주로 key값으로 쓰임
}

//배열 타입

let nameList: string[]; // string값으로 이뤄진 배열

//인라인 타입

let user_0: { name: string, score: number } ;
// 스트링타입의 네임과 넘버타입의 스코어를 갖는 객체만 할당 가능

// tuple

let tuple2: [number , string];
// tuple2 = [] error
tuple2 = [1,'asd'];  //가능 , 정의한 타입만 가능 , 갯수와 순서도 엄격