
function add(x: number, y: number) { // 함수의 파라미터의 타입만 정의하고 리턴 타입을 정의하지 않으면 타입스크립트가 반환타입을 추론한다.
    return x + y;
}

const testData = add (1,2); //마우스를 가져가보면 testData의 데이터 타입은 넘버(타입 추론)

function buildUser (name = "-", email = "-") { // 기본값을 =로 줄 수 있고 이럴 경우에는 :string이 필요없다 기본값이 스트링이기 때문에 자동으로 스트링 설정
    return { name , email };
}

// const testUser = buildUser('asd','asd@asd.asd')
const testUser = buildUser('asd') // 위 주석부분과 현재 코드 모두 가능 

// 화살표 함수
const add2 = (a: number , b:number) => a+b;

// 함수의 오버로딩

interface Storage {
    a: string
}
interface ColdStorage {
    b: string
}
//아래는 함수 오버로딩 시크니처라 불림
function store( type: "통조림" ):Storage // 같은 함수이지만 통조림이 파라미터로 오면 Storage타입을 반환
function store( type: "아이스크림" ):ColdStorage // 같은 함수이지만 아이스크림이 파라미터로 오면 ColdStorage타입을 반환

//구현체를 만들어줌
function store(type: "통조림" | "아이스크림") {// 유니온타입 |
    if(type === "통조림") {
        return { a: '통조림 스토리지'}
    }
    else if ( type === "아이스크림") {
        return {b : "아이스크림 스토리지"}
    }
    else {
        throw new Error('unsupported type')
    }
}
const a = store('통조림') // a에 마우스를 가져가보면 Stoage타입
const b = store('아이스크림') // b에 마우스를 가져가보면 ColdStoage타입