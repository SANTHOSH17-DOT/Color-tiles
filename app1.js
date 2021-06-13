//player mode page swap
const sPlayerBtn = document.querySelector('#sPlayer');
sPlayerBtn.addEventListener('click',()=>{
    let introsPage = document.querySelector('.intros');
    let gameChoice = document.querySelector('.gameChoice');
    introsPage.style.display = 'flex';
    gameChoice.style.display = 'none';
});
const playerMode = document.querySelector('#splayerMode');
playerMode.addEventListener('click',()=>{
    let introsPage = document.querySelector('.intros');
    let gameChoice = document.querySelector('.gameChoice');
    introsPage.style.display = 'none';
    gameChoice.style.display = 'flex';
})


const easyBtn = document.querySelector('#easy');
var tileSound = new sound("tilesound.wav");
var easyopen = new sound("easyopen.wav");
var applause = new sound("applause.wav");
var gameover = new sound("gameover.wav");

//easy mode
const erandom_puzzle=()=>{
    let Congrats = document.querySelector('.esol_back');
    Congrats.style.color = 'transparent';
    clearInterval(interval);
    etime.innerHTML='1:00';
    //Set of colours to be used
    var colors1 = ['red','red','red','blue','blue','blue','yellow','yellow','yellow','green','green','green','brown','brown','brown',];

    //goal generator

    var k = 1;
    while(k<=2){
        var l =1;
        while(l<=2){
        //random number which chooses the color from the colors1
        let n = Math.floor(Math.random()*colors1.length);
        
        const y = document.querySelector(`.es${k}${l}`);
        //applying the background of individual tile
        y.style.background = colors1[n];
        
        //In general, splice(index,number of elements to be removed,addelement1,addelement2..)
        colors1.splice(n,1); 
        l++;
        }
        k++;
    }
    //puzzle generator
    var colors2 = ['red','red','red','blue','blue','blue','yellow','yellow','yellow','green','green','green','brown','brown','brown'];

    var j = 1;
    while(j<=4){
        var i = 1;
        while(i<=4){
        let n = Math.floor(Math.random()*colors2.length);
        const x = document.querySelector(`.et${j}${i}`);
        x.style.background = colors2[n];
        x.style.cursor = 'auto';
        colors2.splice(n,1);
        i++;
        }
        j++;
        }
}
easyBtn.addEventListener('click',function(){
    const introPage = document.querySelector('.intros');
    const easyPage = document.querySelector('.easy');

    introPage.style.display = 'none';
    easyPage.style.display = 'flex';
    estartGame.disabled=false;
    easyopen.play();
    erandom_puzzle();
});

        const ets = Array.from(document.querySelectorAll('.et'));
        const estartGame = document.querySelector('.estart');
        var etime = document.querySelector('.eclock');
        var emoves = document.querySelector('.emoves');
        estartGame.addEventListener('click',function(){
            estartGame.disabled=true;
            emoves.textContent = 0;
            clearInterval(interval);
            etime.innerHTML='1:00';
            
            
            let transTile = document.querySelector('.ettr');
            etimeLeft();
            eunlock(transTile.style.gridArea);
                
            
            });
            var interval;
            const etimeLeft = ()=>{
                 var m_s = etime.innerHTML;
                var timer = m_s.split(':');
                var m = timer[0];
                var s = timer[1];
                interval = setInterval(function(){
                        
                if (m>0 && s==0){
                    m -=1;
                    s = 59;
                    }
                    if(m==0 && s==0){
                            
                        let ets = Array.from(document.querySelectorAll('.et'));
                        ets.map(t=>{t.style.cursor = 'auto';
                        t.style.pointerEvents = 'none';
                        });
                            gameover.play();
                            
                        clearInterval(interval);
                            }
                    etime.innerHTML = m+':'+s;
                     s -=1;
                    },1000
                    )
                }

            var eactiveTiles = {
                    eA1:['eA2','eB1'],
                    eA2:['eA1','eB2','eA3'],
                    eA3:['eA2','eA4','eB3'],
                    eA4:['eA3','eB4'],
                    eB1:['eA1','eB2','eC1'],
                    eB2:['eA2','eB1','eB3','eC2'],
                    eB3:['eA3','eB2','eC3','eB4'],
                    eB4:['eB3','eA4','eC4'],
                    eC1:['eC2','eB1','eD1'],
                    eC2:['eC1','eB2','eD2','eC3'],
                    eC3:['eC2','eC4','eB3','eD3'],
                    eC4:['eC3','eB4','eD4'],
                    eD1:['eD2','eC1','eE1'],
                    eD2:['eD1','eC2','eD3'],
                    eD3:['eD2','eD4','eC3'],
                    eD4:['eD3','eC4'] 
                }
                const ettr = document.querySelector('.ettr');

    const eunlock = (k)=>{
        
        ets.map(tile=>{
            const y = tile.style.gridArea;
            console.log(y);
            // the grid area repeats four times.
            if(eactiveTiles[k.slice(0,3)].includes(y.slice(0,3))==false){
            
                tile.style.pointerEvents = 'none';
                tile.style.cursor = 'auto';
                
        }else{
            tile.style.pointerEvents = 'auto';
            tile.style.cursor = 'pointer';
        }
            });
        }
    ets.map(t =>
        t.addEventListener('click',()=>{
            echeck();
            const tileArea = t.style.gridArea;
            const transTileArea = ettr.style.gridArea;
            
            //shifting position
            t.style.gridArea = transTileArea;
            ettr.style.gridArea= tileArea;
            console.log(t.style.gridArea);
            console.log(ettr.style.gridArea);
            eunlock(ettr.style.gridArea);
            
            tileSound.play();

            //score increment
            var emoves = document.querySelector('.emoves');
            clicks = emoves.textContent;
            emoves.textContent = parseInt(clicks)+1;
            
        })
    );
    const echeck = ()=>{
        
        let s = Array.from(document.querySelectorAll('.es'));
        let t22;let t23; let t32; let t33;
        ets.map(t=>{
            if(t.style.gridArea.slice(0,3) == 'eB2'){
                t22 = t.style.background;
            }else if(t.style.gridArea.slice(0,3)=='eB3'){
                t23 = t.style.background;
            }else if(t.style.gridArea.slice(0,3)=='eC2'){
                t32 = t.style.background;
            }else if(t.style.gridArea.slice(0,3)=='eC3'){
                t33 = t.style.background;
            }
        });
        if(s[0].style.background == t22 &&
            s[1].style.background == t23 &&
            s[2].style.background == t32 &&
            s[3].style.background == t33 
            ){
                clearInterval(interval);
                let ets = Array.from(document.querySelectorAll('.et'));
                let Congrats = document.querySelector('.esol_back');
                ets.map(t=>{
                    t.style.cursor = 'auto';
                    t.style.pointerEvents = 'none';
                    t.style.background = 'transparent';
                    Congrats.style.color = 'black';
                    applause.play();
                });
                
                    
                    
                    let score = localStorage.getItem('emoves');
                    let emoves = document.querySelector('.emoves');
                    let ename = document.querySelector('#name');
                    console.log(ename.value);
                    console.log(ename.value !="");
                    if(ename.value!="" && !score || ename.value != "" && parseInt(emoves.textContent)<parseInt(score)){
                        console.log('a;faj');
                        localStorage.setItem('ename',ename.value);
                        localStorage.setItem('emoves',emoves.textContent);
                        
                        
                    }
                
                console.log(localStorage);
                    
                }
    }
    document.querySelector('#easyP').innerHTML = localStorage.ename;
    document.querySelector('#easyS').innerHTML = localStorage.emoves;
    



const emode = document.querySelector('.emodes');


emode.addEventListener('click',function(){
    
    const introPage = document.querySelector('.intros');
    const easyPage = document.querySelector('.easy');

    var emoves = document.querySelector('.emoves');
    emoves.textContent = 0;
    var et = Array.from(document.querySelectorAll('.et'));
    et.map(t=>{
        t.style.cursor = 'auto';
        t.style.pointerEvents = 'none';
    });
    applause.stop();
    gameover.stop();
    introPage.style.display = 'flex';
    easyPage.style.display = 'none';
});

function sound(src){
    this.sound = document.createElement('audio');
    
    this.sound.src = src;
    this.sound.setAttribute('preload','auto');
    this.sound.setAttribute('controls','none');
    this.sound.style.display = 'none';
    document.body.appendChild(this.sound);
    this.play= function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}
