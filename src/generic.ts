function createPromise<T>(x: T, timeoute: number) { // <T>통해서 파라미터의 타입을 임의로 정의 , 
    return new Promise<T>((resolve, reject)=> { //(resolve: ( v: T ) => void , reject) 이것과 동일한 코드
        setTimeout(()=> {
            resolve(x);
        }, timeoute);
    })
}

createPromise<string>('asd',100) // createPromise<type> <> 안에 타입을 넣어줘서 타입을 제한할 수 있음
.then(v => {
    console.log(v);
})

function createTuple2<T,U>(v: T , v2: U):[T,U] { // 함수의 리턴타입을 [T,U]로 지정하여 투플타입으로 반환하도록 함
    return [ v , v2 ];
}
//제너릭 타입은 보통 대문자로 표현하는게 관례임