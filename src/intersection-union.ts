// interface User {
//     name: string;
// }

// interface Action {
//     do(): void;
// }
// // 유니온 타입 - 기존의 타입을 합침
// function createUserAction(u: User , a:Action): User & Action { //  User & Action반환타입이  User ,Action타입이 합쳐진 객체
//     return {
//         ...u,
//         ...a
//     };
// }
// const u = createUserAction({ name: 'lim'}, {do() {}});
// // 함수 오버로딩으로 함수 타입블락
// function compare(x: string , y: string ):number;
// function compare(x: number, y:  number): number;
// function compare(x: string | number, y: string | number) {
//     if ( typeof x === 'number' && typeof y === 'number') {
//         return x === y ? 0 : x > y ? 1 : -1;
//     }
//     if(typeof x=== 'string' && typeof y === 'string' ) {
//         return x.localeCompare(y)
//     }
//     throw Error('not supported type'); // 타입이 서로 다를때;
// }

// const q = compare("a","b")
// const w = compare(1,2)

// function isAction(v: User | Action): v is Action { //타입가드 Action인지 아니지 판별
//     return (<Action>v).do !== undefined; // do라는 속성이 존재하면 엑션이다
// }

// function process(v: User | Action) {
//     // if ((<Action>v).do){ // v가 Action일 경우 , 컴파일러에게 알려주는 코드 , 타입에센셜이라고 함
//     //     (<Action>v).do()
//     // }
//     if ((isAction(v))) { 
//         v.do() // 타입가드가 걸려있어서 v는 Action으로 판단됨
//     } else {
//         console.log(v.name) // else의 경우 User로 판단됨
//     }
// }
// 듀플리케이트 에러로 인해 주석처리