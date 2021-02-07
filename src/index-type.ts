//인덱스 시그니처 매개 변수 형식은 스트링 또는 넘버여야 한다.
interface Props { // name은 고정이고 나머지 키벨류를 모를때 사용하는 예제
    name: string;
    [key:string ]: string //key와 key에 대응하는 타입은 스트링이다
}

const p: Props = {
    name: '꼭 있어야함', // Props에 name 속성이 정의되었기 때문에 인덱스 시그니처를 사용해도 interface의 특성은 살아있다
    a:'d',
    b: 'e',
    0: 'v',
    1: 'b'
}
p[0] // -> v

let Keys: keyof Props; // keys에 key값들이 넣어짐 , 일반적인 interface에서 사용할 시 사용된 interface의 key들이 유니온 타입으로 부여 , key들만 할당 가능

interface User {
    name: string;
    age: number;
    hello( msg: string) : void;
}
let keysOfUser: keyof User;
keysOfUser = "age"

let helloMethod: User["hello"]; // User메서드의 hello  프로퍼티의 타입만 할당가능
helloMethod = function (msg: string) {

}