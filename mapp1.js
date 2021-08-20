//player mode page swap
const MPlayerBtn = document.querySelector('#mPlayer');
MPlayerBtn.addEventListener('click', () => {
    let intromPage = document.querySelector('.introm');
    let gameChoice = document.querySelector('.gameChoice');
    intromPage.style.display = 'flex';
    gameChoice.style.display = 'none';

});
const MplayerMode = document.querySelector('#mplayerMode');
MplayerMode.addEventListener('click', () => {
    let intromPage = document.querySelector('.introm');
    let gameChoice = document.querySelector('.gameChoice');
    intromPage.style.display = 'none';
    gameChoice.style.display = 'flex';
});


const easyBtnM = document.querySelector('#easyM');
var tileSound = new sound("tilesound.wav");
var easyopen = new sound("easyopen.wav");
var applause = new sound("applause.wav");

var hover = new sound('hover.wav');
var ewin;
var estopMotion;
var eplayer1Name;
var eplayer2Name;

document.querySelector('#sPlayer').addEventListener('mouseover', () => { hover.play() });
document.querySelector('#mPlayer').addEventListener('mouseover', () => { hover.play() });
document.querySelector('#easyM').addEventListener('mouseover', () => { hover.play() });
document.querySelector('#mediumM').addEventListener('mouseover', () => { hover.play() });
document.querySelector('#hardM').addEventListener('mouseover', () => { hover.play() });
document.querySelector('#mplayerMode').addEventListener('mouseover', () => { hover.play() });
document.querySelector('#easy').addEventListener('mouseover', () => { hover.play() });
document.querySelector('#medium').addEventListener('mouseover', () => { hover.play() });
document.querySelector('#hard').addEventListener('mouseover', () => { hover.play() });
document.querySelector('#splayerMode').addEventListener('mouseover', () => { hover.play() });
document.querySelector('.estartM').addEventListener('mouseover', () => { hover.play() });
document.querySelector('.emodesM').addEventListener('mouseover', () => { hover.play() });
document.querySelector('.mstartM').addEventListener('mouseover', () => { hover.play() });
document.querySelector('.mmodesM').addEventListener('mouseover', () => { hover.play() });
document.querySelector('.hstartM').addEventListener('mouseover', () => { hover.play() });
document.querySelector('.hmodesM').addEventListener('mouseover', () => { hover.play() });
document.querySelector('.hstartM').addEventListener('mouseover', () => { hover.play() });
document.querySelector('.hmodesM').addEventListener('mouseover', () => { hover.play() });
document.querySelector('.estart').addEventListener('mouseover', () => { hover.play() });
document.querySelector('.emodes').addEventListener('mouseover', () => { hover.play() });
document.querySelector('.mstart').addEventListener('mouseover', () => { hover.play() });
document.querySelector('.mmodes').addEventListener('mouseover', () => { hover.play() });
document.querySelector('.hstart').addEventListener('mouseover', () => { hover.play() });
document.querySelector('.hmodes').addEventListener('mouseover', () => { hover.play() });

var egoalDis = document.querySelector('.ewinBoard');
egoalDis.innerHTML = "";
//easy mode
const Merandom_puzzle = () => {
    eplayer1Name = document.querySelector('#name1').value;
    eplayer2Name = document.querySelector('#name2').value;

    //console.log(eplayer1Name);
    //Set of colours to be used
    var colors1 = ['red', 'red', 'red', 'blue', 'blue', 'blue', 'yellow', 'yellow', 'yellow', 'green', 'green', 'green', 'brown', 'brown', 'brown'];

    //goal generator

    var k = 1;
    while (k <= 2) {
        var l = 1;
        while (l <= 2) {
            //random number which chooses the color from the colors1
            let n = Math.floor(Math.random() * colors1.length);

            const y = document.querySelector(`.mes${k}${l}`);
            //applying the background of individual tile
            y.style.background = colors1[n];

            //In general, splice(index,number of elements to be removed,addelement1,addelement2..)
            colors1.splice(n, 1);
            l++;
        }
        k++;
    }
    //puzzle generator
    var colors2 = ['red', 'red', 'red', 'blue', 'blue', 'blue', 'yellow', 'yellow', 'yellow', 'green', 'green', 'green', 'brown', 'brown', 'brown'];

    var j = 1;
    while (j <= 4) {
        var i = 1;
        while (i <= 4) {
            try {
                let n = Math.floor(Math.random() * colors2.length);
                const x1 = document.querySelector(`.P1et${j}${i}`);
                const x2 = document.querySelector(`.P2et${j}${i}`);
                x1.style.background = colors2[n];
                x2.style.background = colors2[n];
                x1.style.cursor = 'auto';
                x2.style.cursor = 'auto';
                colors2.splice(n, 1);
            } catch {

            }
            i++;
        }
        j++;
    }
}
easyBtnM.addEventListener('click', function() {
    const introPage = document.querySelector('.introm');
    const easyPage = document.querySelector('.easyM');
    ewin = 0;
    estopMotion = 1;
    introPage.style.display = 'none';
    easyPage.style.display = 'flex';
    estartGameM.disabled = false;

    easyopen.play();


});
const P1ets = Array.from(document.querySelectorAll('.P1et'));
const P2ets = Array.from(document.querySelectorAll('.P2et'));
const estartGameM = document.querySelector('.estartM');
var P1etime = document.querySelector('.P1eclock');
var P2etime = document.querySelector('.P2eclock');
var P1emoves = document.querySelector('.P1emoves');
var P2emoves = document.querySelector('.P2emoves');
estartGameM.addEventListener('click', function() {
    estartGameM.disabled = true;
    P1emoves.textContent = 0;
    P2emoves.textContent = 0;
    Merandom_puzzle();
});

//player1 tile swaping

var P1ettr = document.querySelector('.P1ettr');

const emoveTilesP1 = (event) => {
        //console.log('hi');
        /*//console.log(keyEvent.key);*/
        /*//console.log(event);*/

        let press = event.charCode; //to get the unicode value 
        /*//console.log(press);*/
        let transGA = P1ettr.style.gridArea;
        const forbidtileW = ['P1eD1', 'P1eD2', 'P1eD3', 'P1eD4'];
        const forbidtileD = ['P1eA1', 'P1eB1', 'P1eC1', 'P1eD1'];
        const forbidtileA = ['P1eD4', 'P1eC4', 'P1eB4', 'P1eA4'];
        const forbidtileS = ['P1eA1', 'P1eA2', 'P1eA3', 'P1eA4'];

        if (press == 119 /*w*/ && forbidtileW.includes(transGA.slice(0, 5)) == false) {
            P1emoves.innerHTML = parseInt(P1emoves.innerHTML) + 1;
            tileSound.play();
            P1echeck();
            if (transGA[3] == 'A') {
                let m = transGA.slice(0, 3) + 'B' + transGA[4] + ' / ' + transGA.slice(0, 3) + 'B' + transGA[4] + ' / ' + transGA.slice(0, 3) + 'B' + transGA[4] + ' / ' + transGA.slice(0, 3) + 'B' + transGA[4];
                //swaping tiles
                let P1ets = Array.from(document.querySelectorAll('.P1et'));
                P1ets.map(tile => {
                    if (tile.style.gridArea == m) {
                        tile.style.gridArea = transGA;
                    }
                    P1ettr.style.gridArea = m;
                });
            } else if (transGA[3] == 'B') {
                let m = transGA.slice(0, 3) + 'C' + transGA[4] + ' / ' + transGA.slice(0, 3) + 'C' + transGA[4] + ' / ' + transGA.slice(0, 3) + 'C' + transGA[4] + ' / ' + transGA.slice(0, 3) + 'C' + transGA[4];
                let P1ets = Array.from(document.querySelectorAll('.P1et'));
                P1ets.map(tile => {
                    if (tile.style.gridArea == m) {
                        tile.style.gridArea = transGA;
                    }
                    P1ettr.style.gridArea = m;
                });
            } else if (transGA[3] == 'C') {
                let m = transGA.slice(0, 3) + 'D' + transGA[4] + ' / ' + transGA.slice(0, 3) + 'D' + transGA[4] + ' / ' + transGA.slice(0, 3) + 'D' + transGA[4] + ' / ' + transGA.slice(0, 3) + 'D' + transGA[4];
                let P1ets = Array.from(document.querySelectorAll('.P1et'));
                P1ets.map(tile => {
                    if (tile.style.gridArea == m) {
                        tile.style.gridArea = transGA;
                    }
                    P1ettr.style.gridArea = m;
                });
            }

        } else if (press == 100 /*d*/ && forbidtileD.includes(transGA.slice(0, 5)) == false) {
            P1emoves.innerHTML = parseInt(P1emoves.innerHTML) + 1;
            tileSound.play();
            P1echeck();
            if (transGA[4] == '2') {
                let m = transGA.slice(0, 4) + '1' + ' / ' + transGA.slice(0, 4) + '1' + ' / ' + transGA.slice(0, 4) + '1' + ' / ' + transGA.slice(0, 4) + '1';
                //swaping tiles
                let P1ets = Array.from(document.querySelectorAll('.P1et'));
                P1ets.map(tile => {
                    if (tile.style.gridArea == m) {
                        tile.style.gridArea = transGA;
                    }
                    P1ettr.style.gridArea = m;
                });
            } else if (transGA[4] == '3') {
                let m = transGA.slice(0, 4) + '2' + ' / ' + transGA.slice(0, 4) + '2' + ' / ' + transGA.slice(0, 4) + '2' + ' / ' + transGA.slice(0, 4) + '2';
                let P1ets = Array.from(document.querySelectorAll('.P1et'));
                P1ets.map(tile => {
                    if (tile.style.gridArea == m) {
                        tile.style.gridArea = transGA;
                    }
                    P1ettr.style.gridArea = m;
                });
            } else if (transGA[4] == '4') {

                let m = transGA.slice(0, 4) + '3' + ' / ' + transGA.slice(0, 4) + '3' + ' / ' + transGA.slice(0, 4) + '3' + ' / ' + transGA.slice(0, 4) + '3';

                let P1ets = Array.from(document.querySelectorAll('.P1et'));
                P1ets.map(tile => {
                    if (tile.style.gridArea == m) {

                        tile.style.gridArea = transGA;
                    }
                    P1ettr.style.gridArea = m;
                });
            }

        }
        if (press == 115 /*s*/ && forbidtileS.includes(transGA.slice(0, 5)) == false) {
            P1emoves.innerHTML = parseInt(P1emoves.innerHTML) + 1;
            tileSound.play();
            P1echeck();
            if (transGA[3] == 'B') {
                let m = transGA.slice(0, 3) + 'A' + transGA[4] + ' / ' + transGA.slice(0, 3) + 'A' + transGA[4] + ' / ' + transGA.slice(0, 3) + 'A' + transGA[4] + ' / ' + transGA.slice(0, 3) + 'A' + transGA[4];

                //swaping tiles
                let P1ets = Array.from(document.querySelectorAll('.P1et'));
                P1ets.map(tile => {
                    if (tile.style.gridArea == m) {
                        tile.style.gridArea = transGA;
                    }
                    P1ettr.style.gridArea = m;
                });
            } else if (transGA[3] == 'C') {

                let m = transGA.slice(0, 3) + 'B' + transGA[4] + ' / ' + transGA.slice(0, 3) + 'B' + transGA[4] + ' / ' + transGA.slice(0, 3) + 'B' + transGA[4] + ' / ' + transGA.slice(0, 3) + 'B' + transGA[4];

                let P1ets = Array.from(document.querySelectorAll('.P1et'));
                P1ets.map(tile => {
                    if (tile.style.gridArea == m) {
                        tile.style.gridArea = transGA;
                    }
                    P1ettr.style.gridArea = m;
                });
            } else if (transGA[3] == 'D') {
                let m = transGA.slice(0, 3) + 'C' + transGA[4] + ' / ' + transGA.slice(0, 3) + 'C' + transGA[4] + ' / ' + transGA.slice(0, 3) + 'C' + transGA[4] + ' / ' + transGA.slice(0, 3) + 'C' + transGA[4];

                let P1ets = Array.from(document.querySelectorAll('.P1et'));
                P1ets.map(tile => {
                    if (tile.style.gridArea == m) {
                        tile.style.gridArea = transGA;
                    }
                    P1ettr.style.gridArea = m;
                });

            }

        } else if (press == 97 /*a*/ && forbidtileA.includes(transGA.slice(0, 5)) == false) {
            P1emoves.innerHTML = parseInt(P1emoves.innerHTML) + 1;
            tileSound.play();
            P1echeck();
            if (transGA[4] == '1') {

                let m = transGA.slice(0, 4) + '2' + ' / ' + transGA.slice(0, 4) + '2' + ' / ' + transGA.slice(0, 4) + '2' + ' / ' + transGA.slice(0, 4) + '2';

                //swaping tiles
                let P1ets = Array.from(document.querySelectorAll('.P1et'));
                P1ets.map(tile => {
                    if (tile.style.gridArea == m) {
                        tile.style.gridArea = transGA;
                    }
                    P1ettr.style.gridArea = m;
                });
            } else if (transGA[4] == '2') {
                let m = transGA.slice(0, 4) + '3' + ' / ' + transGA.slice(0, 4) + '3' + ' / ' + transGA.slice(0, 4) + '3' + ' / ' + transGA.slice(0, 4) + '3';
                let P1ets = Array.from(document.querySelectorAll('.P1et'));
                P1ets.map(tile => {
                    if (tile.style.gridArea == m) {
                        tile.style.gridArea = transGA;
                    }
                    P1ettr.style.gridArea = m;


                });
            } else if (transGA[4] == '3') {
                let m = transGA.slice(0, 4) + '4' + ' / ' + transGA.slice(0, 4) + '4' + ' / ' + transGA.slice(0, 4) + '4' + ' / ' + transGA.slice(0, 4) + '4';
                let P1ets = Array.from(document.querySelectorAll('.P1et'));
                P1ets.map(tile => {
                    if (tile.style.gridArea == m) {
                        tile.style.gridArea = transGA;
                    }
                    P1ettr.style.gridArea = m;
                });
            }

        }
    }
    /*//console.log(Event);*/
    // check if it's applicable only to the game page
    //to avoid motion of tiles before entering the page

document.addEventListener('keypress', () => {
    //console.log(estopMotion);
    if (estopMotion == 1) {
        emoveTilesP1(event);
    }
});

//address of the function is sufficient for inbuilt functons

//player2 tile swaping
var P2ettr = document.querySelector('.P2ettr');

const emoveTilesP2 = (event) => {


        /*//console.log(event);
         */
        let press = event.keyCode; //to get the unicode value 
        /*//console.log(press);*/
        let transGA = P2ettr.style.gridArea;
        const forbidtileu = ['P2eD1', 'P2eD2', 'P2eD3', 'P2eD4'];
        const forbidtiler = ['P2eA1', 'P2eB1', 'P2eC1', 'P2eD1'];
        const forbidtilel = ['P2eD4', 'P2eC4', 'P2eB4', 'P2eA4'];
        const forbidtiled = ['P2eA1', 'P2eA2', 'P2eA3', 'P2eA4'];

        if (press == 38 /*up*/ && forbidtileu.includes(transGA.slice(0, 5)) == false) {
            P2emoves.innerHTML = parseInt(P2emoves.innerHTML) + 1;
            tileSound.play();
            P2echeck();
            if (transGA[3] == 'A') {
                let m = transGA.slice(0, 3) + 'B' + transGA[4] + ' / ' + transGA.slice(0, 3) + 'B' + transGA[4] + ' / ' + transGA.slice(0, 3) + 'B' + transGA[4] + ' / ' + transGA.slice(0, 3) + 'B' + transGA[4];
                //swaping tiles
                let P2ets = Array.from(document.querySelectorAll('.P2et'));
                P2ets.map(tile => {
                    if (tile.style.gridArea == m) {
                        tile.style.gridArea = transGA;
                    }
                    P2ettr.style.gridArea = m;
                });
            } else if (transGA[3] == 'B') {
                let m = transGA.slice(0, 3) + 'C' + transGA[4] + ' / ' + transGA.slice(0, 3) + 'C' + transGA[4] + ' / ' + transGA.slice(0, 3) + 'C' + transGA[4] + ' / ' + transGA.slice(0, 3) + 'C' + transGA[4];
                let P2ets = Array.from(document.querySelectorAll('.P2et'));
                P2ets.map(tile => {
                    if (tile.style.gridArea == m) {
                        tile.style.gridArea = transGA;
                    }
                    P2ettr.style.gridArea = m;
                });
            } else if (transGA[3] == 'C') {
                let m = transGA.slice(0, 3) + 'D' + transGA[4] + ' / ' + transGA.slice(0, 3) + 'D' + transGA[4] + ' / ' + transGA.slice(0, 3) + 'D' + transGA[4] + ' / ' + transGA.slice(0, 3) + 'D' + transGA[4];
                let P2ets = Array.from(document.querySelectorAll('.P2et'));
                P2ets.map(tile => {
                    if (tile.style.gridArea == m) {
                        tile.style.gridArea = transGA;
                    }
                    P2ettr.style.gridArea = m;
                });
            }

        } else if (press == 39 /*right*/ && forbidtiler.includes(transGA.slice(0, 5)) == false) {
            P2emoves.innerHTML = parseInt(P2emoves.innerHTML) + 1;
            tileSound.play();
            P2echeck();
            if (transGA[4] == '2') {
                let m = transGA.slice(0, 4) + '1' + ' / ' + transGA.slice(0, 4) + '1' + ' / ' + transGA.slice(0, 4) + '1' + ' / ' + transGA.slice(0, 4) + '1';
                //swaping tiles
                let P2ets = Array.from(document.querySelectorAll('.P2et'));
                P2ets.map(tile => {
                    if (tile.style.gridArea == m) {
                        tile.style.gridArea = transGA;
                    }
                    P2ettr.style.gridArea = m;
                });
            } else if (transGA[4] == '3') {
                let m = transGA.slice(0, 4) + '2' + ' / ' + transGA.slice(0, 4) + '2' + ' / ' + transGA.slice(0, 4) + '2' + ' / ' + transGA.slice(0, 4) + '2';
                let P2ets = Array.from(document.querySelectorAll('.P2et'));
                P2ets.map(tile => {
                    if (tile.style.gridArea == m) {
                        tile.style.gridArea = transGA;
                    }
                    P2ettr.style.gridArea = m;
                });
            } else if (transGA[4] == '4') {
                //console.log(transGA);
                let m = transGA.slice(0, 4) + '3' + ' / ' + transGA.slice(0, 4) + '3' + ' / ' + transGA.slice(0, 4) + '3' + ' / ' + transGA.slice(0, 4) + '3';
                //console.log(m);
                let P2ets = Array.from(document.querySelectorAll('.P2et'));
                P2ets.map(tile => {
                    if (tile.style.gridArea == m) {

                        tile.style.gridArea = transGA;
                    }
                    P2ettr.style.gridArea = m;
                });
            }

        }
        if (press == 40 /*down*/ && forbidtiled.includes(transGA.slice(0, 5)) == false) {
            P2emoves.innerHTML = parseInt(P2emoves.innerHTML) + 1;
            tileSound.play();
            P2echeck();
            if (transGA[3] == 'B') {
                let m = transGA.slice(0, 3) + 'A' + transGA[4] + ' / ' + transGA.slice(0, 3) + 'A' + transGA[4] + ' / ' + transGA.slice(0, 3) + 'A' + transGA[4] + ' / ' + transGA.slice(0, 3) + 'A' + transGA[4];

                //swaping tiles
                let P2ets = Array.from(document.querySelectorAll('.P2et'));
                P2ets.map(tile => {
                    if (tile.style.gridArea == m) {
                        tile.style.gridArea = transGA;
                    }
                    P2ettr.style.gridArea = m;
                });
            } else if (transGA[3] == 'C') {

                let m = transGA.slice(0, 3) + 'B' + transGA[4] + ' / ' + transGA.slice(0, 3) + 'B' + transGA[4] + ' / ' + transGA.slice(0, 3) + 'B' + transGA[4] + ' / ' + transGA.slice(0, 3) + 'B' + transGA[4];

                let P2ets = Array.from(document.querySelectorAll('.P2et'));
                P2ets.map(tile => {
                    if (tile.style.gridArea == m) {
                        tile.style.gridArea = transGA;
                    }
                    P2ettr.style.gridArea = m;
                });
            } else if (transGA[3] == 'D') {
                let m = transGA.slice(0, 3) + 'C' + transGA[4] + ' / ' + transGA.slice(0, 3) + 'C' + transGA[4] + ' / ' + transGA.slice(0, 3) + 'C' + transGA[4] + ' / ' + transGA.slice(0, 3) + 'C' + transGA[4];
                //console.log(m);
                let P2ets = Array.from(document.querySelectorAll('.P2et'));
                P2ets.map(tile => {
                    if (tile.style.gridArea == m) {
                        tile.style.gridArea = transGA;
                    }
                    P2ettr.style.gridArea = m;
                });

            }

        } else if (press == 37 /*left*/ && forbidtilel.includes(transGA.slice(0, 5)) == false) {
            P2emoves.innerHTML = parseInt(P2emoves.innerHTML) + 1;
            tileSound.play();
            P2echeck();
            if (transGA[4] == '1') {

                let m = transGA.slice(0, 4) + '2' + ' / ' + transGA.slice(0, 4) + '2' + ' / ' + transGA.slice(0, 4) + '2' + ' / ' + transGA.slice(0, 4) + '2';
                //console.log(m);
                //swaping tiles
                let P2ets = Array.from(document.querySelectorAll('.P2et'));
                P2ets.map(tile => {
                    if (tile.style.gridArea == m) {
                        tile.style.gridArea = transGA;
                    }
                    P2ettr.style.gridArea = m;
                });
            } else if (transGA[4] == '2') {
                let m = transGA.slice(0, 4) + '3' + ' / ' + transGA.slice(0, 4) + '3' + ' / ' + transGA.slice(0, 4) + '3' + ' / ' + transGA.slice(0, 4) + '3';
                let P2ets = Array.from(document.querySelectorAll('.P2et'));
                P2ets.map(tile => {
                    if (tile.style.gridArea == m) {
                        tile.style.gridArea = transGA;
                    }
                    P2ettr.style.gridArea = m;


                });
            } else if (transGA[4] == '3') {
                let m = transGA.slice(0, 4) + '4' + ' / ' + transGA.slice(0, 4) + '4' + ' / ' + transGA.slice(0, 4) + '4' + ' / ' + transGA.slice(0, 4) + '4';
                let P2ets = Array.from(document.querySelectorAll('.P2et'));
                P2ets.map(tile => {
                    if (tile.style.gridArea == m) {
                        tile.style.gridArea = transGA;
                    }
                    P2ettr.style.gridArea = m;
                });
            }

        }
    }
    /*//console.log(Event);*/
document.addEventListener('keydown', () => {
    //console.log(estopMotion);
    if (estopMotion == 1) {
        emoveTilesP2(event);
    }
});
//keydown is to be used(not keypress)
var etot1moves;
//freezing check P1
const P1echeck = () => {




        let P1ets = Array.from(document.querySelectorAll('.P1et'));
        let P1s = Array.from(document.querySelectorAll('.mes'));
        let t22;
        let t23;
        let t32;
        let t33;
        P1ets.map(t => {
            if (t.style.gridArea.slice(0, 5) == 'P1eB2') {
                t22 = t.style.background;
            } else if (t.style.gridArea.slice(0, 5) == 'P1eB3') {
                t23 = t.style.background;
            } else if (t.style.gridArea.slice(0, 5) == 'P1eC2') {
                t32 = t.style.background;
            } else if (t.style.gridArea.slice(0, 5) == 'P1eC3') {
                t33 = t.style.background;
            }
        });

        if (P1s[0].style.background == t22 &&
            P1s[1].style.background == t23 &&
            P1s[2].style.background == t32 &&
            P1s[3].style.background == t33
        ) {
            //completion check
            ewin += 1;
            //freeze count of moves
            //no further tile swap
            etot1moves = P1emoves.innerHTML;
            P1emoves.innerHTML = " ";
            P1ets.map(t => {
                t.style.background = 'transparent';
            });
        }
        ewinnerCheck();
    }
    //freezing check P2
var etot2moves;
const P2echeck = () => {
        //check it again


        //console.log('done');
        let P2ets = Array.from(document.querySelectorAll('.P2et'));
        let P2s = Array.from(document.querySelectorAll('.mes'));
        let t22;
        let t23;
        let t32;
        let t33;
        P2ets.map(t => {
            if (t.style.gridArea.slice(0, 5) == 'P2eB2') {
                t22 = t.style.background;
            } else if (t.style.gridArea.slice(0, 5) == 'P2eB3') {
                t23 = t.style.background;
            } else if (t.style.gridArea.slice(0, 5) == 'P2eC2') {
                t32 = t.style.background;
            } else if (t.style.gridArea.slice(0, 5) == 'P2eC3') {
                t33 = t.style.background;
            }
        });

        if (P2s[0].style.background == t22 &&
            P2s[1].style.background == t23 &&
            P2s[2].style.background == t32 &&
            P2s[3].style.background == t33
        ) {
            ewin += 1;
            etot2moves = P2emoves.innerHTML;
            P2emoves.innerHTML = " ";
            P2ets.map(t => {
                t.style.background = 'transparent';
            });
        }
        ewinnerCheck();
    }
    //winning check
    //have a c'mon variable to check the completion of the games
    //and leaderboard stuffs
const ewinnerCheck = () => {
    if (ewin == 2) {
        applause.play();
        mes = Array.from(document.querySelectorAll('.mes'));
        mes.map(t => {
            t.style.background = 'transparent';
        });
        //console.log(eplayer1Name);
        //console.log(eplayer2Name);
        //console.log(etot1moves);
        //console.log(etot2moves);
        if (etot1moves < etot2moves && eplayer1Name != "" && eplayer2Name != "") {
            let score = localStorage.getItem('Mescore');
            if (!score || etot2moves < parseInt(score)) {
                localStorage.setItem('Mename', eplayer1Name);
                localStorage.setItem('Mescore', etot1moves);
            }
            let egoalDis = document.querySelector('.ewinBoard');
            egoalDis.style.display = 'flex';
            egoalDis.innerHTML = '<h1>' + eplayer1Name + ' wins 🔥' + '</h1>' + '<p style="color:red;">' + 'moves: ' + etot1moves + '</p>';
        } else if (etot1moves > etot2moves && eplayer2Name != "" && eplayer1Name != "") {
            let score = localStorage.getItem('Mescore');
            if (!score || etot1moves < parseInt(score)) {
                localStorage.setItem('Mename', eplayer2Name);
                localStorage.setItem('Mescore', etot2moves);
            }
            let egoalDis = document.querySelector('.ewinBoard');
            egoalDis.style.display = 'flex';
            egoalDis.innerHTML = '<h1>' + eplayer2Name + ' wins 🔥' + '</h1>' + '<p style="color:red;">' + 'moves: ' + etot2moves + '</p>';
        } else if (etot1moves == etot2moves && eplayer2Name != "" && eplayer1Name != "") {
            let egoalDis = document.querySelector('.ewinBoard');
            egoalDis.style.display = 'flex';
            egoalDis.innerHTML = '<h1>' + 'DRAW' + '</h1>';

        }
    }
}
if (localStorage.Mename != undefined) {

    document.querySelector('#easyPM').innerHTML = localStorage.Mename;
} else {
    document.querySelector('#easyPM').innerHTML = '-'
}
if (localStorage.Mescore != undefined) {
    document.querySelector('#easySM').innerHTML = localStorage.Mescore;
} else {
    document.querySelector('#easySM').innerHTML = '-'
}

const introPage = document.querySelector('.introm');
const easyPage = document.querySelector('.easyM');

const emodeM = document.querySelector('.emodesM');


emodeM.addEventListener('click', function() {
    ewin = 0;
    estopMotion = 0;
    document.querySelector('#name1').value = '';
    document.querySelector('#name2').value = '';

    applause.stop();
    gameover.stop();
    introPage.style.display = 'flex';
    easyPage.style.display = 'none';
    P1emoves.innerHTML = "";
    P2emoves.innerHTML = "";
    let egoalDis = document.querySelector('.ewinBoard');
    egoalDis.style.display = 'none';

    mes = Array.from(document.querySelectorAll('.mes'));
    mes.map(tile => {
        tile.style.background = 'white';
    });
    let P1ets = Array.from(document.querySelectorAll('.P1et'));
    P1ets.map(tile => {
        tile.style.background = 'white';
    });
    let P2ets = Array.from(document.querySelectorAll('.P2et'));
    P2ets.map(tile => {
        tile.style.background = 'white';
    });
});