interface TV { //인터페이스를 통해서 하나의 타입을 정의
    turnOn (): void;
    turnOff (): void;
}

const myTV:TV ={
    turnOn() {
    },
    turnOff() {
    }
};

function tryTurnOn(tv:TV) {
    tv.turnOn();
}

tryTurnOn(myTV);
// 타입스크립트에서 가장 많이 사용하는 인터페이스 사용 방식은 행위를 작성하지 않고 인터페이스가 가져야 할 속성만 기술
// ex
interface Cell {
    row: number ;
    col: number ;
    piece?: Piece; // ?: 있을 수 있고 없을 수 있다 
}

interface Piece {
    move(from:Cell , to:Cell): boolean;
}

function createBoard() {
    const cells: Cell[] =[];
    for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 3; col++) {
            cells.push({
                row,
                col
            })
        }
    }
    return cells;
}

const board = createBoard();
board[0].piece = {
    move(from:Cell , to:Cell) {
        return true;
    }
}
//typescript의 interface를 많이 기록해도 컴파일된 js파일에서는 존재하지 않기 때문에 큰 문제가 없다