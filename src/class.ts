// class Cart {
//     constructor(user) {
//         this.user = user;
//         this.store = {};
//     }
//     put(id, project) {
//         this.store[id] = project;
//     }
//     get(id) {
//         return this.store[id];
//     }
// }

// const cartA = new Cart( {name:'A'}); 
// const cartB = new Cart( {name:'B'}); 

interface User {
    name: string;
}
interface Product {
    id: string;
    price: number
}

class Cart {
    // protected user : User; // 접근제한자를 붙여주지 않으면 기본적으로 public이 적용 , protected
    // private store: object; //접근제한 cart 인스턴스 내에서만 접근가능
    constructor(protected user: User , private store: any = {}) { // 접근제한자를 같이 사용하면 코드를 한번에 처리가능 , 강의에서는 object타입으로 store를 정의했지만 컴파일 오류를 피하기 위해 any로 바꿔둠
        // this.user = user;
        // this.store = {};
    }
    put(id: string, product: Product) {
        // this.user
        this.store[id] = product;
    }
    get(id: string) {
        return this.store[id];
    }
}
// protected , private 두개 다 .으로 접근 불가 인스턴스 내에서만 접근가능 
// 그렇다면 둘의 차이는? 상속받은 클래스에서 접근 가능 - protected , 접근 불가 - private
class PromotionCart extends Cart {
    addPromotion() {
        this.user
    }
}
const cartA = new Cart( {name:'A'}); 
const cartB = new Cart( {name:'B'}); 
const cartC = new PromotionCart({name:'C'})
// cartC.put() 접근 가능