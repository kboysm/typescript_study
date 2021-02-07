class localDB<T> {
    constructor(private localStorageKey: string) {

    }

    add(v: T) {
        localStorage.setItem(this.localStorageKey , JSON.stringify(v));
    }
    get(): T {
        const v = localStorage.getItem(this.localStorageKey);
        return (v) ? JSON.parse(v) : null;
    }
}
interface User {
    name: string;
}

const userDb = new localDB<User>('user'); // <>는 타입 파라미터같은 느낌으로 이해함.
userDb.add({ name: 'jay'});
const userA = userDb.get();