const hardBtn = document.querySelector('#hard');
var tileSound = new sound("tilesound.wav");
var hardopen = new sound("hardopen.wav");
var applause = new sound("applause.wav");
var gameover = new sound("gameover.wav");

const hrandom_puzzle = () => {
    let Congrats = document.querySelector('.hsol_back');
    Congrats.style.color = 'transparent';
    clearInterval(interval);
    htime.innerHTML = '4:00';
    //Set of colours to be used
    var colors1 = ['red', 'red', 'red', 'red', 'red', 'blue', 'blue', 'blue', 'blue', 'blue', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'green', 'green', 'green', 'green', 'green', 'brown', 'brown', 'brown', 'brown', 'brown', 'orange', 'orange', 'orange', 'orange', 'orange', 'cyan', 'cyan', 'cyan', 'cyan', 'cyan'];

    //goal generator

    var k = 1;
    while (k <= 4) {
        var l = 1;
        while (l <= 4) {
            //random number which chooses the color from the colors1
            let n = Math.floor(Math.random() * colors1.length);

            const y = document.querySelector(`.hs${k}${l}`);
            //applying the background of individual tile
            y.style.background = colors1[n];

            //In general, splice(index,number of elements to be removed,addelement1,addelement2..)
            colors1.splice(n, 1);
            l++;
        }
        k++;
    }
    //puzzle generator
    var colors2 = ['red', 'red', 'red', 'red', 'red', 'blue', 'blue', 'blue', 'blue', 'blue', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'green', 'green', 'green', 'green', 'green', 'brown', 'brown', 'brown', 'brown', 'brown', 'orange', 'orange', 'orange', 'orange', 'orange', 'cyan', 'cyan', 'cyan', 'cyan', 'cyan'];

    var j = 1;
    while (j <= 6) {
        var i = 1;
        while (i <= 6) {
            let n = Math.floor(Math.random() * colors2.length);
            const x = document.querySelector(`.ht${j}${i}`);
            x.style.background = colors2[n];
            x.style.cursor = 'auto';
            colors2.splice(n, 1);
            i++;
        }
        j++;
    }
}
hardBtn.addEventListener('click', function() {
    const introPage = document.querySelector('.intros');
    const hardPage = document.querySelector('.hard');

    introPage.style.display = 'none';
    hardPage.style.display = 'flex';
    hstartGame.disabled = false;
    hardopen.play();
    hrandom_puzzle();
});
const hts = Array.from(document.querySelectorAll('.ht'));
const hstartGame = document.querySelector('.hstart');
var htime = document.querySelector('.hclock');
var hmoves = document.querySelector('.hmoves');
hstartGame.addEventListener('click', function() {
    hstartGame.disabled = true;
    console.log('thu');
    hmoves.textContent = 0;
    clearInterval(interval);
    htime.innerHTML = '4:00';

    let transTile = document.querySelector('.httr');

    htimeLeft();
    hunlock(transTile.style.gridArea);


});
var interval;
const htimeLeft = () => {
    var m_s = htime.innerHTML;
    var timer = m_s.split(':');
    var m = timer[0];
    var s = timer[1];
    interval = setInterval(function() {

        if (m > 0 && s == 0) {
            m -= 1;
            s = 59;
        }
        if (m == 0 && s == 0) {

            let hts = Array.from(document.querySelectorAll('.mt'));
            hts.map(t => {
                t.style.cursor = 'auto';
                t.style.pointerEvents = 'none';
            });
            gameover.play();

            clearInterval(interval);
        }
        htime.innerHTML = m + ':' + s;
        s -= 1;
    }, 1000)
}
var hactiveTiles = {
    hA1: ['hA2', 'hB1'],
    hA2: ['hA1', 'hB2', 'hA3'],
    hA3: ['hA2', 'hA4', 'hB3'],
    hA4: ['hA3', 'hB4', 'hA5'],
    hA5: ['hA4', 'hB5', 'hA6'],
    hA6: ['hA5', 'hB6'],
    hB1: ['hA1', 'hB2', 'hC1'],
    hB2: ['hA2', 'hB1', 'hB3', 'hC2'],
    hB3: ['hA3', 'hB2', 'hC3', 'hB4'],
    hB4: ['hB5', 'hB3', 'hA4', 'hC4'],
    hB5: ['hA5', 'hB4', 'hC5', 'hB6'],
    hB6: ['hA6', 'hC6', 'hB5'],
    hC1: ['hB1', 'hC2', 'hD1'],
    hC2: ['hB2', 'hC1', 'hC3', 'hD2'],
    hC3: ['hB3', 'hC2', 'hD3', 'hC4'],
    hC4: ['hC5', 'hC3', 'hB4', 'hD4'],
    hC5: ['hD5', 'hC4', 'hB5', 'hC6'],
    hC6: ['hB6', 'hD6', 'hC5'],
    hD1: ['hC1', 'hD2', 'hE1'],
    hD2: ['hC2', 'hD1', 'hD3', 'hE2'],
    hD3: ['hC3', 'hD2', 'hE3', 'hD4'],
    hD4: ['hD5', 'hD3', 'hC4', 'hE4'],
    hD5: ['hE5', 'hD4', 'hC5', 'hD6'],
    hD6: ['hC6', 'hE6', 'hD5'],
    hE1: ['hF1', 'hE2', 'hD1'],
    hE2: ['hD2', 'hE1', 'hE3', 'hF2'],
    hE3: ['hF3', 'hE2', 'hD3', 'hE4'],
    hE4: ['hE5', 'hE3', 'hD4', 'hF4'],
    hE5: ['hF5', 'hE4', 'hD5', 'hE6'],
    hE6: ['hD6', 'hF6', 'hE5'],
    hF1: ['hF2', 'hE1'],
    hF2: ['hE2', 'hF1', 'hF3'],
    hF3: ['hF4', 'hF2', 'hE3'],
    hF4: ['hF5', 'hF3', 'hE4'],
    hF5: ['hE5', 'hF4', 'hF6'],
    hF6: ['hF5', 'hE6']
}
const httr = document.querySelector('.httr');

const hunlock = (k) => {
    console.log(k);
    hts.map(tile => {
        const y = tile.style.gridArea;

        if (hactiveTiles[k.slice(0, 3)].includes(y.slice(0, 3)) == false) {

            tile.style.pointerEvents = 'none';
            tile.style.cursor = 'auto';

        } else {
            tile.style.pointerEvents = 'auto';
            tile.style.cursor = 'pointer';
        }
    });
}
hts.map(t =>
    t.addEventListener('click', () => {
        hcheck();
        const tileArea = t.style.gridArea;
        const transTileArea = httr.style.gridArea;

        //shifting position
        t.style.gridArea = transTileArea;
        httr.style.gridArea = tileArea;
        hunlock(httr.style.gridArea);
        tileSound.play();

        //score increment
        var hmoves = document.querySelector('.hmoves');
        clicks = hmoves.textContent;
        hmoves.textContent = parseInt(clicks) + 1;

    })
);
const hcheck = () => {
    console.log('yes');
    let s = Array.from(document.querySelectorAll('.hs'));
    let t22;
    let t23;
    let t24;
    let t25;
    let t32;
    let t33;
    let t34;
    let t35;
    let t42;
    let t43;
    let t44;
    let t45;
    let t52;
    let t53;
    let t54;
    let t55;
    hts.map(t => {
        if (t.style.gridArea.slice(0, 3) == 'hB2') {
            t22 = t.style.background;
        } else if (t.style.gridArea.slice(0, 3) == 'hB3') {
            t23 = t.style.background;
        } else if (t.style.gridArea.slice(0, 3) == 'hB4') {
            t24 = t.style.background;
        } else if (t.style.gridArea.slice(0, 3) == 'hB5') {
            t25 = t.style.background;
        } else if (t.style.gridArea.slice(0, 3) == 'hC2') {
            t32 = t.style.background;
        } else if (t.style.gridArea.slice(0, 3) == 'hC3') {
            t33 = t.style.background;
        } else if (t.style.gridArea.slice(0, 3) == 'hC4') {
            t34 = t.style.background;
        } else if (t.style.gridArea.slice(0, 3) == 'hC5') {
            t35 = t.style.background;
        } else if (t.style.gridArea.slice(0, 3) == 'hD2') {
            t42 = t.style.background;
        } else if (t.style.gridArea.slice(0, 3) == 'hD3') {
            t43 = t.style.background;
        } else if (t.style.gridArea.slice(0, 3) == 'hD4') {
            t44 = t.style.background;
        } else if (t.style.gridArea.slice(0, 3) == 'hD5') {
            t45 = t.style.background;
        } else if (t.style.gridArea.slice(0, 3) == 'hE2') {
            t52 = t.style.background;
        } else if (t.style.gridArea.slice(0, 3) == 'hE3') {
            t53 = t.style.background;
        } else if (t.style.gridArea.slice(0, 3) == 'hE4') {
            t54 = t.style.background;
        } else if (t.style.gridArea.slice(0, 3) == 'hE5') {
            t55 = t.style.background;
        }
    });
    if (s[0].style.background == t22 &&
        s[1].style.background == t23 &&
        s[2].style.background == t24 &&
        s[3].style.background == t25 &&
        s[4].style.background == t32 &&
        s[5].style.background == t33 &&
        s[6].style.background == t34 &&
        s[7].style.background == t35 &&
        s[8].style.background == t42 &&
        s[9].style.background == t43 &&
        s[10].style.background == t44 &&
        s[11].style.background == t45 &&
        s[12].style.background == t52 &&
        s[13].style.background == t53 &&
        s[14].style.background == t54 &&
        s[15].style.background == t55
    ) {
        console.log('yes');
        clearInterval(interval);
        let ts = Array.from(document.querySelectorAll('.ht'));
        let Congrats = document.querySelector('.hsol_back');
        hts.map(t => {
            t.style.cursor = 'auto';
            t.style.pointerEvents = 'none';
            t.style.background = 'transparent';
            Congrats.style.color = 'black';
            tileSound.stop();
            applause.play();


        });
        let score = localStorage.getItem('hmoves');
        let hmoves = document.querySelector('.hmoves');
        let hname = document.querySelector('#name');
        console.log(hname.value);
        console.log(hname.value != "");
        if (hname.value != "" && !score || hname.value != "" && parseInt(hmoves.textContent) < parseInt(score)) {
            localStorage.setItem('hname', hname.value);
            localStorage.setItem('hmoves', hmoves.textContent);


        }

        console.log(localStorage);

    }

}
document.querySelector('#hardP').innerHTML = localStorage.hname;
document.querySelector('#hardS').innerHTML = localStorage.hmoves;
const hmode = document.querySelector('.hmodes');
hmode.addEventListener('click', function() {
    const introPage = document.querySelector('.intros');
    const hardPage = document.querySelector('.hard');

    var hmoves = document.querySelector('.hmoves');
    hmoves.textContent = 0;
    var ht = Array.from(document.querySelectorAll('.ht'));
    ht.map(t => {
        t.style.cursor = 'auto';
        t.style.pointerEvents = 'none';
    });
    applause.stop();
    gameover.stop();
    introPage.style.display = 'flex';
    hardPage.style.display = 'none';
});