var myTV = {
    turnOn: function () {
    },
    turnOff: function () {
    }
};
function tryTurnOn(tv) {
    tv.turnOn();
}
tryTurnOn(myTV);
function createBoard() {
    var cells = [];
    for (var row = 0; row < 4; row++) {
        for (var col = 0; col < 3; col++) {
            cells.push({
                row: row,
                col: col
            });
        }
    }
}
//# sourceMappingURL=interface.js.map