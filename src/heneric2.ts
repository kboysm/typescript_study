interface DB<T> { // interface도 제네릭이 가능
    add(v: T): void;
    get(): T;
}

class D<T> implements DB<T> {
    get(): T {
        throw new Error("Method not implemented.");
    }
    add(v :T):void {

    }
    
}

interface JSONSerialier {
    serialize(): string;
}

class localDB<T extends JSONSerialier> implements DB<T> { // T의 타입을 JSONSerialize로 고정 ,타입의 범위를 고정 , 특정한 타입의 하위 타입으로 사용한 예제
    constructor(private localStorageKey: string) {

    }

    add(v: T) {
        v.serialize();// T의 타입을 JSONSerialize로 고정했기 때문에 가능
        localStorage.setItem(this.localStorageKey , JSON.stringify(v));
    }
    get(): T {
        const v = localStorage.getItem(this.localStorageKey);
        return (v) ? JSON.parse(v) : null;
    }
}


// interface User {
//     name: string;
// }

// const userDb = new localDB<User>('user'); // <>는 타입 파라미터같은 느낌으로 이해함.
// userDb.add({ name: 'jay'});
// const userA = userDb.get();

//조건부 타입

interface Vegitable {
    v: string;
}
interface Meat {
    m: string;
}
interface Cart_<T> {
    getItem(): T extends Vegitable ? Vegitable : Meat // 타입을 조건부로 줄 수 있음
}
// example , Meat일 경우 v를 m으로
const cart_:Cart_<Vegitable> = {
    getItem() {
        return {
            v: ''
        }
    }
}