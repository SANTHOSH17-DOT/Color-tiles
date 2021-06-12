//player mode page swap
const MPlayerBtn = document.querySelector('#mPlayer');
MPlayerBtn.addEventListener('click',()=>{
    let intromPage = document.querySelector('.introm');
    let gameChoice = document.querySelector('.gameChoice');
    intromPage.style.display = 'flex';
    gameChoice.style.display = 'none';
});
const MplayerMode = document.querySelector('#mplayerMode');
MplayerMode.addEventListener('click',()=>{
    let intromPage = document.querySelector('.introm');
    let gameChoice = document.querySelector('.gameChoice');
    intromPage.style.display = 'none';
    gameChoice.style.display = 'flex';
});

// give details of the keys to be used (pic)

const easyBtnM = document.querySelector('#easyM');
var tileSound = new sound("tilesound.wav");
var easyopen = new sound("easyopen.wav");
var applause = new sound("applause.wav");
var gameover = new sound("gameover.wav");

//easy mode
const Merandom_puzzle=()=>{
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
        
        const y = document.querySelector(`.mes${k}${l}`);
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
        const x1 = document.querySelector(`.P1et${j}${i}`);
        const x2 = document.querySelector(`.P2et${j}${i}`);
        x1.style.background = colors2[n];
        x2.style.background = colors2[n];
        x1.style.cursor = 'auto';
        x2.style.cursor = 'auto';
        colors2.splice(n,1);
        i++;
        }
        j++;
        }
}
easyBtnM.addEventListener('click',function(){
    const introPage = document.querySelector('.introm');
    const easyPage = document.querySelector('.easyM');

    introPage.style.display = 'none';
    easyPage.style.display = 'flex';
    estartGameM.disabled=false;
    /*
    easyopen.play();
    */
    Merandom_puzzle();
});
const P1ets = Array.from(document.querySelectorAll('.P1et'));
const P2ets = Array.from(document.querySelectorAll('.P2et'));
        const estartGameM = document.querySelector('.estartM');
        var P1etime = document.querySelector('.P1eclock');
        var P2etime = document.querySelector('.P2eclock');
        var P1emoves = document.querySelector('.P1emoves');
        var P2emoves = document.querySelector('.P2emoves');
        estartGameM.addEventListener('click',function(){
            estartGameM.disabled=true;
            P1emoves.textContent = 0;
            P2emoves.textContent = 0;
            clearInterval(interval1);
            clearInterval(interval2);
            P1etime.innerHTML='1:00';
            P2etime.innerHTML ='1:00';
            
            etimeLeft1();
            etimeLeft2();
            
                
            
            });
            var interval1;
            var interval2;
            const etimeLeft1 = ()=>{
                 let m_s = P1etime.innerHTML;
                let timer = m_s.split(':');
                let m = timer[0];
                let s = timer[1];
                interval1 = setInterval(function(){
                        
                if (m>0 && s==0){
                    m -=1;
                    s = 59;
                    }
                    if(m==0 && s==0){
                            
                        let ets = Array.from(document.querySelectorAll('.P1et'));
                        ets.map(t=>{t.style.cursor = 'auto';
                        t.style.pointerEvents = 'none';
                        });
                            /*gameover.play();*/
                            
                        clearInterval(interval1);
                            }
                    P1etime.innerHTML = m+':'+s;
                     s -=1;
                    },1000
                    )
                }
                const etimeLeft2 = ()=>{
                    let m_s = P2etime.innerHTML;
                   let timer = m_s.split(':');
                   let m = timer[0];
                   let s = timer[1];
                   interval2 = setInterval(function(){
                           
                   if (m>0 && s==0){
                       m -=1;
                       s = 59;
                       }
                       if(m==0 && s==0){
                               
                           let ets = Array.from(document.querySelectorAll('.P2et'));
                           ets.map(t=>{t.style.cursor = 'auto';
                           t.style.pointerEvents = 'none';
                           });
                               /*gameover.play();*/
                               
                           clearInterval(interval2);
                               }
                       P2etime.innerHTML = m+':'+s;
                        s -=1;
                       },1000
                       )
                   }
                //player1 tile swaping
                
                const P1ettr = document.querySelector('.P1ettr');
                const moveTilesP1 = (keyEvent)=>{
                    /*console.log(keyEvent.key);*/
                    console.log('okay');
                    let press = keyEvent.keyCode;//to get the unicode value 
                    console.log(press);
                    let transGA = P1ettr.style.gridArea;
                    const forbidtileW = ['P1eD1','P1eD2','P1eD3','P1eD4'];
                    const forbidtileD = ['P1eA1','P1eB1','P1eC1','P1eD1'];
                    const forbidtileA = ['P1eD4','P1eC4','P1eB4','P1eA4'];
                    const forbidtileS = ['P1eA1','P1eB2','P1eC3','P1eC4'];
                    if(press==119/*w*/&& forbidtileW.includes(transGA.slice(0,5))==false){
                        
                        if(transGA[3]=='A'){
                             let m= transGA[0,3]+'B'+transGA[4] +' / '+transGA[0,3]+'B'+transGA[4]+' / '+transGA[0,3]+'B'+transGA[4]+' / '+transGA[0,3]+'B'+transGA[4];
                             //swaping tiles
                             let P1ets = Array.from(document.querySelectorAll('.P1et'));
                             P1ets.map(tile =>{
                                 if(tile.style.gridArea == m){
                                     tile.style.gridArea = P1ettr.style.gridArea;
                                 }
                                 P1ettr.style.gridArea = m;
                             });
                        }else if(transGA[3]=='B'){
                            let m= transGA[0,3]+'C'+transGA[4] +' / '+transGA[0,3]+'C'+transGA[4]+' / '+transGA[0,3]+'C'+transGA[4]+' / '+transGA[0,3]+'C'+transGA[4];
                            let P1ets = Array.from(document.querySelectorAll('.P1et'));
                             P1ets.map(tile =>{
                                 if(tile.style.gridArea == m){
                                     tile.style.gridArea = P1ettr.style.gridArea;
                                 }
                                 P1ettr.style.gridArea = m;
                                });
                        }else if(transGA[3]=='C'){
                            let m= transGA[0,3]+'D'+transGA[4] +' / '+transGA[0,3]+'D'+transGA[4]+' / '+transGA[0,3]+'D'+transGA[4]+' / '+transGA[0,3]+'D'+transGA[4];
                            let P1ets = Array.from(document.querySelectorAll('.P1et'));
                             P1ets.map(tile =>{
                                 if(tile.style.gridArea == m){
                                     tile.style.gridArea = P1ettr.style.gridArea;
                                 }
                                 P1ettr.style.gridArea = m;
                                });
                        }
                        
                    }
                    else if(press==100/*d*/&& forbidtileD.includes(transGA.slice(0,5))==false){
                        
                        if(transGA[4]=='2'){
                             let m= transGA[0,4]+'1' +' / '+transGA[0,4]+'1'+' / '+transGA[0,4]+'1'+' / '+transGA[0,4]+'1';
                             //swaping tiles
                             let P1ets = Array.from(document.querySelectorAll('.P1et'));
                             P1ets.map(tile =>{
                                 if(tile.style.gridArea == m){
                                     tile.style.gridArea = P1ettr.style.gridArea;
                                 }
                                 P1ettr.style.gridArea = m;
                             });
                        }else if(transGA[4]=='3'){
                            let m= transGA[0,4]+'2' +' / '+transGA[0,4]+'2'+' / '+transGA[0,4]+'2'+' / '+transGA[0,4]+'2';
                            let P1ets = Array.from(document.querySelectorAll('.P1et'));
                             P1ets.map(tile =>{
                                 if(tile.style.gridArea == m){
                                     tile.style.gridArea = P1ettr.style.gridArea;
                                 }
                                 P1ettr.style.gridArea = m;
                                });
                        }else if(transGA[3]=='4'){
                            let m= transGA[0,4]+'3' +' / '+transGA[0,4]+'3'+' / '+transGA[0,4]+'3'+' / '+transGA[0,4]+'3';
                            let P1ets = Array.from(document.querySelectorAll('.P1et'));
                             P1ets.map(tile =>{
                                 if(tile.style.gridArea == m){
                                     tile.style.gridArea = P1ettr.style.gridArea;
                                 }
                                 P1ettr.style.gridArea = m;
                                });
                        }
                        
                    }
                    if(press==115/*s*/&& forbidtileS.includes(transGA.slice(0,5))==false){
                        
                        if(transGA[3]=='B'){
                             let m= transGA[0,3]+'A'+transGA[4] +' / '+transGA[0,3]+'A'+transGA[4]+' / '+transGA[0,3]+'A'+transGA[4]+' / '+transGA[0,3]+'A'+transGA[4];
                             //swaping tiles
                             let P1ets = Array.from(document.querySelectorAll('.P1et'));
                             P1ets.map(tile =>{
                                 if(tile.style.gridArea == m){
                                     tile.style.gridArea = P1ettr.style.gridArea;
                                 }
                                 P1ettr.style.gridArea = m;
                             });
                        }else if(transGA[3]=='C'){
                            let m= transGA[0,3]+'B'+transGA[4] +' / '+transGA[0,3]+'B'+transGA[4]+' / '+transGA[0,3]+'B'+transGA[4]+' / '+transGA[0,3]+'B'+transGA[4];
                            let P1ets = Array.from(document.querySelectorAll('.P1et'));
                             P1ets.map(tile =>{
                                 if(tile.style.gridArea == m){
                                     tile.style.gridArea = P1ettr.style.gridArea;
                                 }
                                 P1ettr.style.gridArea = m;
                                });
                        }else if(transGA[3]=='D'){
                            let m= transGA[0,3]+'C'+transGA[4] +' / '+transGA[0,3]+'D'+transGA[4]+' / '+transGA[0,3]+'D'+transGA[4]+' / '+transGA[0,3]+'D'+transGA[4];
                            let P1ets = Array.from(document.querySelectorAll('.P1et'));
                             P1ets.map(tile =>{
                                 if(tile.style.gridArea == m){
                                     tile.style.gridArea = P1ettr.style.gridArea;
                                 }
                                 P1ettr.style.gridArea = m;
                                });
                        }
                        
                    }
                    else if(press==97/*a*/&& forbidtileA.includes(transGA.slice(0,5))==false){
                    
                        if(transGA[4]=='1'){
                             let m= transGA[0,4]+'2' +' / '+transGA[0,4]+'2'+' / '+transGA[0,4]+'2'+' / '+transGA[0,4]+'2';
                             //swaping tiles
                             let P1ets = Array.from(document.querySelectorAll('.P1et'));
                             P1ets.map(tile =>{
                                 if(tile.style.gridArea == m){
                                     tile.style.gridArea = P1ettr.style.gridArea;
                                 }
                                 P1ettr.style.gridArea = m;
                             });
                        }else if(transGA[4]=='2'){
                            let m= transGA[0,4]+'3' +' / '+transGA[0,4]+'3'+' / '+transGA[0,4]+'3'+' / '+transGA[0,4]+'3';
                            let P1ets = Array.from(document.querySelectorAll('.P1et'));
                             P1ets.map(tile =>{
                                 if(tile.style.gridArea == m){
                                     tile.style.gridArea = P1ettr.style.gridArea;
                                 }
                                 P1ettr.style.gridArea = m;


                                });
                        }else if(transGA[3]=='3'){
                            let m= transGA[0,4]+'4' +' / '+transGA[0,4]+'4'+' / '+transGA[0,4]+'4'+' / '+transGA[0,4]+'4';
                            let P1ets = Array.from(document.querySelectorAll('.P1et'));
                             P1ets.map(tile =>{
                                 if(tile.style.gridArea == m){
                                     tile.style.gridArea = P1ettr.style.gridArea;
                                 }
                                 P1ettr.style.gridArea = m;
                                });
                        }
                        
                    }
                }
                let keyEvent = event;
                document.querySelector('#P1press').addEventListener('keypress',moveTilesP1(keyEvent));
                    
                    const P2ettr = document.querySelector('.P2ettr');
                    const P2eunlock = (k)=>{
            
                        P2ets.map(tile=>{
                            const y = tile.style.gridArea;
                            
                            if(P2eactiveTiles[k.slice(0,5)].includes(y.slice(0,5))==false){
                            
                                tile.style.pointerEvents = 'none';
                                tile.style.cursor = 'auto';
                                
                        }else{
                            tile.style.pointerEvents = 'auto';
                            tile.style.cursor = 'pointer';
                        }
                            });
                        }