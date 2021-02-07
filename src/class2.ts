interface Person {
    name: string;
    say(msg:string): void;
}

interface Programmer {
    writeCode(requirement:string): string;
}

// class KoreanProgrammer implements Person ,Programmer{ // 다중인터페이스 구현 가능 , 여러개의 인터페이스를 한개의 클래스에서 구현 가능
//     constructor(public name:string) {

//     }
//     say( msg: string) {
//         console.log(msg);
//     }
//     writeCode(requirement: string) {
//         return '';
//     }

//     loveKimchi() {
//         console.log('love~ Kimchi~');
//     }

// }

// const limsm = new KoreanProgrammer('limsm');
// limsm.say('hi!');
// limsm.writeCode('code');
// limsm.loveKimchi();

abstract class Korean implements Person { // 추상클래스는 인스턴스를 만들 수 없음 , 미완성 클래스라고 표현

    public abstract jumin: number;

    constructor(public name: string) {

    }

    say(msg: string) {
        console.log(msg);
    }

    abstract loveKimchi(): void;

}

class KoreanProgrammer extends Korean implements Programmer {
    
    constructor(public name: string , public jumin: number) {
        super(name); // 하위 extends 된 클래스에서 생성자를 사용할 때 상위 컴포넌트의 생성자를 호출해야 함
    }
    
    writeCode(requirement: string): string {
        return '';
    }

    loveKimchi() {

    }

}