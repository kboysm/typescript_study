// 타입에 이름을 붙일 수 있음 , alias
interface User {
    name: string;
}

interface Action {
    do(): void;
}

type UserAction = User & Action;
function createUserAction(): UserAction {
    return {
        do(){},
        name: ''
    }
}

type StringOrNumber = string | number ;
type Arr<T> = T[];
type P<T> = Promise<T>;

//위는 단순하게 이름만 부여

//인터페이스 처럼 타입을 정의할 수 있음

type User2 = { //name을 가져야 하는 타입으로 정의
    name : string;
    login(): boolean;
}
class UserImpl implements User2 {
    name:string;
    login(): boolean {
        throw new Error('err')
    }
}
type UserState = "PENDING" | "APPROVED" | "REJECT"; // 유니온 타입으로 , 문자열 리터럴 타입

function checkUser(user: User2): UserState {
    if(user.login()) {
        return "APPROVED"
    }
    else {
        return "REJECT"
    }
}