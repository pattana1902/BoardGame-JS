var game = [[`.`, `.`, `.`, `.`, `.`, `.`, `.`, `.`, `.`],
[`.`, `.`, `.`, `.`, `.`, `.`, `.`, `.`, `.`],
[`.`, `.`, `.`, `.`, `.`, `.`, `.`, `.`, `.`],
[`.`, `.`, `.`, `.`, `.`, `.`, `.`, `.`, `.`],
[`.`, `.`, `.`, `.`, `.`, `.`, `.`, `.`, `.`],
[`.`, `.`, `.`, `.`, `.`, `.`, `.`, `.`, `.`],
[`.`, `.`, `.`, `.`, `.`, `.`, `.`, `.`, `.`],
[`.`, `.`, `.`, `.`, `.`, `.`, `.`, `.`, `.`],
[`.`, `.`, `.`, `.`, `.`, `.`, `.`, `.`, `.`],
];
// preparing the HTML <pre> element to display the board on the page
var board = document.createElement(`pre`);
document.body.appendChild(board);
// Preparing the `Fire! button to allow the player to fire at the ship
var button = document.createElement(`button`);
button.onclick = fire; // clicking the button calls the fire( function
var t = document.createTextNode(`Fire!`);
document.body.appendChild(button);
button.appendChild(t);
//Drawing the Dots as grids
function drawBoard() {
    `use strict`;
    var boardContents = ``, i, j;
    for (i = 0; i < 9; i++) {
        for (j = 0; j < 9; j = j + 1) {
            boardContents = boardContents + game[i][j] + `     `;
        }
        boardContents = boardContents + `<br><br><br>`;
    }
    return boardContents;
}
// Display the board on the page using the above function
board.innerHTML= drawBoard();
var x = prompt(`ระบุตำแหน่งในแนวแกน X ที่คุณต้องการวางเรือ: (0-8)`)
if (x>=9){
    alert('กรุณาใส่เลข 0-8 เท่านั้น')
    x = prompt(`ระบุตำแหน่งในแนวแกน X ที่คุณต้องการวางเรือ: (0-8)`)
}
var y = prompt(`ระบุตำแหน่งในแนวแกน Y ที่คุณต้องการวางเรือ: (0-8)`)
if (y>=9){
    alert('กรุณาใส่เลข 0-8 เท่านั้น')
    y = prompt(`ระบุตำแหน่งในแนวแกน Y ที่คุณต้องการวางเรือ: (0-8)`)
}
var direction = prompt(`คุณต้องการวางเรือในแนวนอน กด(h) หรือแนวตั้ง กด (v)`);
x = Number(x);
y = Number(y);

if (direction[0] == `h`) {
    var c;
    for (c = x; c < (x + 4); c++) {
        game[y][c] =`#`;
    }
}
if (direction[0] ==`v`) {
    var c;
    for (c = y; c < (y + 4); c++) {
        game[c][x] =`#`;
    }
}

if (y >= 9 ){
    alert('กรุณาใส่เลข 0-8 เท่านั้น')
}
board.innerHTML= drawBoard(); // Redraw board with cruiser added
//Function for firing a shot when the `Fire! button is pressed
function fire() {
    `use strict`;
    var
        fireX = prompt(`ระบุตำแหน่งในแนวแกน X ที่คุณต้องการยิง: (0-8)`),
        fireY = prompt(`ระบุตำแหน่งในแนวแกน Y ที่คุณต้องการยิง: (0-8)`);
    fireX = Number(fireX);
    fireY = Number(fireY);
    if(game[fireY][fireX] == `.`){
        alert(`พลาดเป้า`);
    }
    else if (game[fireY][fireX] == `*`) {
        alert(`เรือในตำแหน่งดังกล่าวถูกยิงไปแล้ว`);
    } else {
        alert(`Boom!!! คุณยิงโดนเรือ`);
        game[fireY][fireX] = `*`;
        board.innerHTML= drawBoard(); // Redraw board with hit marker at specified coordinate
    }
    var shipfound, i, j;
    for (i = 0; i < 9; i++) {
        for (j = 0; j < 9; j++) {
            if (game[i][j] != `.` && game[i][j] != `*`) {
                shipfound = true;
            }
        }
    }
    if (!shipfound) {
        alert(`เรือทุกลำถูกจมหมดแล้ว เก่งมากกัปตัน! จบเกม`);
        document.body.removeChild(button); // Remove the fire button from the page after game over
    }
};