//player mode page swap
const medModeBtn = document.querySelector('#mediumM');
medModeBtn.addEventListener('click',()=>{
    let mediumModePage = document.querySelector('.mediumM');
    let intromPage = document.querySelector('.introm');
    intromPage.style.display = 'none';
    mediumModePage.style.display = 'flex';
});
const medBtnM = document.querySelector('#mediumM');
var tileSound = new sound("tilesound.wav");
var mediumopen = new sound("mediumopen.wav");
var applause = new sound("applause.wav");
var gameover = new sound("gameover.wav");
var hover = new sound('hover.wav');
var mwin;
var mstopMotion;
var mplayer1Name;
var mplayer2Name;

var mgoalDis = document.querySelector('.mwinBoard');
mgoalDis.innerHTML = "";
//easy mode
const Mmrandom_puzzle=()=>{
    mplayer1Name = document.querySelector('#name1').value;
    mplayer2Name= document.querySelector('#name2').value;
    
    
    //Set of colours to be used
    var colors1 = ['red','red','red','red','blue','blue','blue','blue','yellow','yellow','yellow','yellow','green','green','green','green','brown','brown','brown','brown','orange','orange','orange','orange'];

    //goal generator

    var k = 1;
    while(k<=3){
        var l =1;
        while(l<=3){
        //random number which chooses the color from the colors1
        let n = Math.floor(Math.random()*colors1.length);
        
        const y = document.querySelector(`.mms${k}${l}`);
        //applying the background of individual tile
        y.style.background = colors1[n];
        
        //In general, splice(index,number of elements to be removed,addelement1,addelement2..)
        colors1.splice(n,1); 
        l++;
        }
        k++;
    }
    //puzzle generator
    var colors2 = ['red','red','red','red','blue','blue','blue','blue','yellow','yellow','yellow','yellow','green','green','green','green','brown','brown','brown','brown','orange','orange','orange','orange'];

    var j = 1;
    while(j<=5){
        var i = 1;
        while(i<=5){
        let n = Math.floor(Math.random()*colors2.length);
        const x1 = document.querySelector(`.P1mt${j}${i}`);
        const x2 = document.querySelector(`.P2mt${j}${i}`);
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
medBtnM.addEventListener('click',function(){
    const introPage1 = document.querySelector('.introm');
    const mediumPage = document.querySelector('.mediumM');
    mwin = 0;
    mstopMotion =1;
    introPage1.style.display = 'none';
    mediumPage.style.display = 'flex';
    mstartGameM.disabled=false;
    
    mediumopen.play();
    
    
});
const P1mts = Array.from(document.querySelectorAll('.P1mt'));
const P2mts = Array.from(document.querySelectorAll('.P2mt'));
        const mstartGameM = document.querySelector('.mstartM');
        
        var P1mmoves = document.querySelector('.P1mmoves');
        var P2mmoves = document.querySelector('.P2mmoves');
        mstartGameM.addEventListener('click',function(){
            mstartGameM.disabled=true;
            P1mmoves.textContent = 0;
            P2mmoves.textContent = 0;
            Mmrandom_puzzle();
            });
            
                //player1 tile swaping
                
                var P1mttr = document.querySelector('.P1mttr');
                
                const mmoveTilesP1 = (event)=>{
                    console.log('hi');
                    /*console.log(keyEvent.key);*/
                    /*console.log(event);*/
        
                    let press = event.charCode;//to get the unicode value 
                    /*console.log(press);*/
                    let transGA = P1mttr.style.gridArea;
                    const forbidtileW = ['P1mE1','P1mE2','P1mE3','P1mE4','P1mE5'];
                    const forbidtileD = ['P1mA1','P1mB1','P1mC1','P1mD1','P1mE1'];
                    const forbidtileA = ['P1mE5','P1mD5','P1mC5','P1mB5','P1mA5'];
                    const forbidtileS = ['P1mA1','P1mA2','P1mA3','P1mA4','P1mA5'];
                    
                    if(press==119/*w*/&& forbidtileW.includes(transGA.slice(0,5))==false){
                        P1mmoves.innerHTML = parseInt(P1mmoves.innerHTML)+1;
                        tileSound.play();
                        P1mcheck();
                        if(transGA[3]=='A'){
                             let m= transGA.slice(0,3)+'B'+transGA[4] +' / '+transGA.slice(0,3)+'B'+transGA[4]+' / '+transGA.slice(0,3)+'B'+transGA[4]+' / '+transGA.slice(0,3)+'B'+transGA[4];
                             //swaping tiles
                             let P1mts = Array.from(document.querySelectorAll('.P1mt'));
                             P1mts.map(tile =>{
                                 if(tile.style.gridArea == m){
                                     tile.style.gridArea = transGA;
                                 }
                                 P1mttr.style.gridArea = m;
                             });
                        }else if(transGA[3]=='B'){
                            let m= transGA.slice(0,3)+'C'+transGA[4] +' / '+transGA.slice(0,3)+'C'+transGA[4]+' / '+transGA.slice(0,3)+'C'+transGA[4]+' / '+transGA.slice(0,3)+'C'+transGA[4];
                            let P1mts = Array.from(document.querySelectorAll('.P1mt'));
                             P1mts.map(tile =>{
                                 if(tile.style.gridArea == m){
                                     tile.style.gridArea = transGA;
                                 }
                                 P1mttr.style.gridArea = m;
                                });
                        }else if(transGA[3]=='C'){
                            let m= transGA.slice(0,3)+'D'+transGA[4] +' / '+transGA.slice(0,3)+'D'+transGA[4]+' / '+transGA.slice(0,3)+'D'+transGA[4]+' / '+transGA.slice(0,3)+'D'+transGA[4];
                            let P1mts = Array.from(document.querySelectorAll('.P1mt'));
                             P1mts.map(tile =>{
                                 if(tile.style.gridArea == m){
                                     tile.style.gridArea = transGA;
                                 }
                                 P1mttr.style.gridArea = m;
                                });
                        }else if(transGA[3]=='D'){
                            let m= transGA.slice(0,3)+'E'+transGA[4] +' / '+transGA.slice(0,3)+'E'+transGA[4]+' / '+transGA.slice(0,3)+'E'+transGA[4]+' / '+transGA.slice(0,3)+'E'+transGA[4];
                            let P1mts = Array.from(document.querySelectorAll('.P1mt'));
                             P1mts.map(tile =>{
                                 if(tile.style.gridArea == m){
                                     tile.style.gridArea = transGA;
                                 }
                                 P1mttr.style.gridArea = m;
                                });
                        }
                        
                    }
                    else if(press==100/*d*/&& forbidtileD.includes(transGA.slice(0,5))==false){
                        P1mmoves.innerHTML = parseInt(P1mmoves.innerHTML)+1;
                        tileSound.play();
                        P1mcheck();
                        if(transGA[4]=='2'){
                             let m= transGA.slice(0,4)+'1' +' / '+transGA.slice(0,4)+'1'+' / '+transGA.slice(0,4)+'1'+' / '+transGA.slice(0,4)+'1';
                             //swaping tiles
                             let P1mts = Array.from(document.querySelectorAll('.P1mt'));
                             P1mts.map(tile =>{
                                 if(tile.style.gridArea == m){
                                     tile.style.gridArea = transGA;
                                 }
                                 P1mttr.style.gridArea = m;
                             });
                        }else if(transGA[4]=='3'){
                            let m= transGA.slice(0,4)+'2' +' / '+transGA.slice(0,4)+'2'+' / '+transGA.slice(0,4)+'2'+' / '+transGA.slice(0,4)+'2';
                            let P1mts = Array.from(document.querySelectorAll('.P1mt'));
                             P1mts.map(tile =>{
                                 if(tile.style.gridArea == m){
                                     tile.style.gridArea = transGA;
                                 }
                                 P1mttr.style.gridArea = m;
                                });
                        }else if(transGA[4]=='4'){
                            console.log(transGA);
                            let m= transGA.slice(0,4)+'3' +' / '+transGA.slice(0,4)+'3'+' / '+transGA.slice(0,4)+'3'+' / '+transGA.slice(0,4)+'3';
                            console.log(m);
                            let P1mts = Array.from(document.querySelectorAll('.P1mt'));
                             P1mts.map(tile =>{
                                 if(tile.style.gridArea == m){
                                    
                                     tile.style.gridArea = transGA;
                                 }
                                 P1mttr.style.gridArea = m;
                                });
                        }else if(transGA[4]=='5'){
                            console.log(transGA);
                            let m= transGA.slice(0,4)+'4' +' / '+transGA.slice(0,4)+'4'+' / '+transGA.slice(0,4)+'4'+' / '+transGA.slice(0,4)+'4';
                            console.log(m);
                            let P1mts = Array.from(document.querySelectorAll('.P1mt'));
                             P1mts.map(tile =>{
                                 if(tile.style.gridArea == m){
                                    
                                     tile.style.gridArea = transGA;
                                 }
                                 P1mttr.style.gridArea = m;
                                });
                        }
                        
                    }
                    if(press==115/*s*/&& forbidtileS.includes(transGA.slice(0,5))==false){
                        P1mmoves.innerHTML = parseInt(P1mmoves.innerHTML)+1;
                        tileSound.play();
                        P1mcheck();
                        if(transGA[3]=='B'){
                             let m= transGA.slice(0,3)+'A'+transGA[4] +' / '+transGA.slice(0,3)+'A'+transGA[4]+' / '+transGA.slice(0,3)+'A'+transGA[4]+' / '+transGA.slice(0,3)+'A'+transGA[4];
                             
                             //swaping tiles
                             let P1mts = Array.from(document.querySelectorAll('.P1mt'));
                             P1mts.map(tile =>{
                                 if(tile.style.gridArea == m){
                                     tile.style.gridArea = transGA;
                                 }
                                 P1mttr.style.gridArea = m;
                             });
                        }else if(transGA[3]=='C'){
                            
                            let m= transGA.slice(0,3)+'B'+transGA[4] +' / '+transGA.slice(0,3)+'B'+transGA[4]+' / '+transGA.slice(0,3)+'B'+transGA[4]+' / '+transGA.slice(0,3)+'B'+transGA[4];
                            
                            let P1mts = Array.from(document.querySelectorAll('.P1mt'));
                             P1mts.map(tile =>{
                                 if(tile.style.gridArea == m){
                                     tile.style.gridArea = transGA;
                                 }
                                 P1mttr.style.gridArea = m;
                                });
                        }else if(transGA[3]=='D'){
                            let m= transGA.slice(0,3)+'C'+transGA[4] +' / '+transGA.slice(0,3)+'C'+transGA[4]+' / '+transGA.slice(0,3)+'C'+transGA[4]+' / '+transGA.slice(0,3)+'C'+transGA[4];
                            console.log(m);
                            let P1mts = Array.from(document.querySelectorAll('.P1mt'));
                             P1mts.map(tile =>{
                                 if(tile.style.gridArea == m){
                                     tile.style.gridArea = transGA;
                                 }
                                 P1mttr.style.gridArea = m;
                                });
                                
                        }else if(transGA[3]=='E'){
                            let m= transGA.slice(0,3)+'D'+transGA[4] +' / '+transGA.slice(0,3)+'D'+transGA[4]+' / '+transGA.slice(0,3)+'D'+transGA[4]+' / '+transGA.slice(0,3)+'D'+transGA[4];
                            console.log(m);
                            let P1mts = Array.from(document.querySelectorAll('.P1mt'));
                             P1mts.map(tile =>{
                                 if(tile.style.gridArea == m){
                                     tile.style.gridArea = transGA;
                                 }
                                 P1mttr.style.gridArea = m;
                                });
                                
                        }
                        
                    }
                    else if(press==97/*a*/&& forbidtileA.includes(transGA.slice(0,5))==false){
                        P1mmoves.innerHTML = parseInt(P1mmoves.innerHTML)+1;
                        tileSound.play();
                        P1mcheck();
                        if(transGA[4]=='1'){
                            
                             let m= transGA.slice(0,4)+'2' +' / '+transGA.slice(0,4)+'2'+' / '+transGA.slice(0,4)+'2'+' / '+transGA.slice(0,4)+'2';
                             console.log(m);
                             //swaping tiles
                             let P1mts = Array.from(document.querySelectorAll('.P1mt'));
                             P1mts.map(tile =>{
                                 if(tile.style.gridArea == m){
                                     tile.style.gridArea = transGA;
                                 }
                                 P1mttr.style.gridArea = m;
                             });
                        }else if(transGA[4]=='2'){
                            let m= transGA.slice(0,4)+'3' +' / '+transGA.slice(0,4)+'3'+' / '+transGA.slice(0,4)+'3'+' / '+transGA.slice(0,4)+'3';
                            let P1mts = Array.from(document.querySelectorAll('.P1mt'));
                             P1mts.map(tile =>{
                                 if(tile.style.gridArea == m){
                                     tile.style.gridArea = transGA;
                                 }
                                 P1mttr.style.gridArea = m;


                                });
                        }else if(transGA[4]=='3'){
                            let m= transGA.slice(0,4)+'4' +' / '+transGA.slice(0,4)+'4'+' / '+transGA.slice(0,4)+'4'+' / '+transGA.slice(0,4)+'4';
                            let P1mts = Array.from(document.querySelectorAll('.P1mt'));
                             P1mts.map(tile =>{
                                 if(tile.style.gridArea == m){
                                     tile.style.gridArea = transGA;
                                 }
                                 P1mttr.style.gridArea = m;
                                });
                        }else if(transGA[4]=='4'){
                            let m= transGA.slice(0,4)+'5' +' / '+transGA.slice(0,4)+'5'+' / '+transGA.slice(0,4)+'5'+' / '+transGA.slice(0,4)+'5';
                            let P1mts = Array.from(document.querySelectorAll('.P1mt'));
                             P1mts.map(tile =>{
                                 if(tile.style.gridArea == m){
                                     tile.style.gridArea = transGA;
                                 }
                                 P1mttr.style.gridArea = m;
                                });
                        }
                        
                    }
                }
                /*console.log(Event);*/
                // check if it's applicable only to the game page
                //to avoid motion of tiles before entering the page
                
                    document.addEventListener('keypress',()=>{
                        console.log(mstopMotion);
                        if(mstopMotion==1){
                            mmoveTilesP1(event);
                        }});
                    
                    //address of the function is sufficient for inbuilt functons
            
            //player2 tile swaping
            var P2mttr = document.querySelector('.P2mttr');
                
                const mmoveTilesP2 = (event)=>{
                    
                    
                    /*console.log(event);
                    */
                    let press = event.keyCode;//to get the unicode value 
                    /*console.log(press);*/
                    let transGA = P2mttr.style.gridArea;
                    const forbidtileu = ['P1mE1','P1mE2','P1mE3','P1mE4','P1mE5'];
                    const forbidtiler = ['P1mA1','P1mB1','P1mC1','P1mD1','P1mE1'];
                    const forbidtilel = ['P1mE5','P1mD5','P1mC5','P1mB5','P1mA5'];
                    const forbidtiled = ['P1mA1','P1mA2','P1mA3','P1mA4','P1mA5'];
                    
                    if(press==38/*up*/&& forbidtileu.includes(transGA.slice(0,5))==false){
                        P2mmoves.innerHTML = parseInt(P2mmoves.innerHTML)+1;
                        tileSound.play();
                        P2mcheck();
                        if(transGA[3]=='A'){
                             let m= transGA.slice(0,3)+'B'+transGA[4] +' / '+transGA.slice(0,3)+'B'+transGA[4]+' / '+transGA.slice(0,3)+'B'+transGA[4]+' / '+transGA.slice(0,3)+'B'+transGA[4];
                             //swaping tiles
                             let P2mts = Array.from(document.querySelectorAll('.P2mt'));
                             P2mts.map(tile =>{
                                 if(tile.style.gridArea == m){
                                     tile.style.gridArea = transGA;
                                 }
                                 P2mttr.style.gridArea = m;
                             });
                        }else if(transGA[3]=='B'){
                            let m= transGA.slice(0,3)+'C'+transGA[4] +' / '+transGA.slice(0,3)+'C'+transGA[4]+' / '+transGA.slice(0,3)+'C'+transGA[4]+' / '+transGA.slice(0,3)+'C'+transGA[4];
                            let P2mts = Array.from(document.querySelectorAll('.P2mt'));
                             P2mts.map(tile =>{
                                 if(tile.style.gridArea == m){
                                     tile.style.gridArea = transGA;
                                 }
                                 P2mttr.style.gridArea = m;
                                });
                        }else if(transGA[3]=='C'){
                            let m= transGA.slice(0,3)+'D'+transGA[4] +' / '+transGA.slice(0,3)+'D'+transGA[4]+' / '+transGA.slice(0,3)+'D'+transGA[4]+' / '+transGA.slice(0,3)+'D'+transGA[4];
                            let P2mts = Array.from(document.querySelectorAll('.P2mt'));
                             P2mts.map(tile =>{
                                 if(tile.style.gridArea == m){
                                     tile.style.gridArea = transGA;
                                 }
                                 P2mttr.style.gridArea = m;
                                });
                        }else if(transGA[3]=='D'){
                            let m= transGA.slice(0,3)+'E'+transGA[4] +' / '+transGA.slice(0,3)+'E'+transGA[4]+' / '+transGA.slice(0,3)+'E'+transGA[4]+' / '+transGA.slice(0,3)+'E'+transGA[4];
                            let P2mts = Array.from(document.querySelectorAll('.P2mt'));
                             P2mts.map(tile =>{
                                 if(tile.style.gridArea == m){
                                     tile.style.gridArea = transGA;
                                 }
                                 P2mttr.style.gridArea = m;
                                });
                        }
                        
                    }
                    else if(press==39/*right*/&& forbidtiler.includes(transGA.slice(0,5))==false){
                        P2mmoves.innerHTML = parseInt(P2mmoves.innerHTML)+1;
                        tileSound.play();
                        P2mcheck();
                        if(transGA[4]=='2'){
                             let m= transGA.slice(0,4)+'1' +' / '+transGA.slice(0,4)+'1'+' / '+transGA.slice(0,4)+'1'+' / '+transGA.slice(0,4)+'1';
                             //swaping tiles
                             let P2mts = Array.from(document.querySelectorAll('.P2mt'));
                             P2mts.map(tile =>{
                                 if(tile.style.gridArea == m){
                                     tile.style.gridArea = transGA;
                                 }
                                 P2mttr.style.gridArea = m;
                             });
                        }else if(transGA[4]=='3'){
                            let m= transGA.slice(0,4)+'2' +' / '+transGA.slice(0,4)+'2'+' / '+transGA.slice(0,4)+'2'+' / '+transGA.slice(0,4)+'2';
                            let P2mts = Array.from(document.querySelectorAll('.P2mt'));
                             P2mts.map(tile =>{
                                 if(tile.style.gridArea == m){
                                     tile.style.gridArea = transGA;
                                 }
                                 P2mttr.style.gridArea = m;
                                });
                        }else if(transGA[4]=='4'){
                            console.log(transGA);
                            let m= transGA.slice(0,4)+'3' +' / '+transGA.slice(0,4)+'3'+' / '+transGA.slice(0,4)+'3'+' / '+transGA.slice(0,4)+'3';
                            console.log(m);
                            let P2mts = Array.from(document.querySelectorAll('.P2mt'));
                             P2mts.map(tile =>{
                                 if(tile.style.gridArea == m){
                                    
                                     tile.style.gridArea = transGA;
                                 }
                                 P2mttr.style.gridArea = m;
                                });
                        }else if(transGA[4]=='5'){
                            console.log(transGA);
                            let m= transGA.slice(0,4)+'4' +' / '+transGA.slice(0,4)+'4'+' / '+transGA.slice(0,4)+'4'+' / '+transGA.slice(0,4)+'4';
                            console.log(m);
                            let P2mts = Array.from(document.querySelectorAll('.P2mt'));
                             P2mts.map(tile =>{
                                 if(tile.style.gridArea == m){
                                    
                                     tile.style.gridArea = transGA;
                                 }
                                 P2mttr.style.gridArea = m;
                                });
                        }
                        
                    }
                    if(press==40/*down*/&& forbidtiled.includes(transGA.slice(0,5))==false){
                        P2mmoves.innerHTML = parseInt(P2mmoves.innerHTML)+1;
                        tileSound.play();
                        P2mcheck();
                        if(transGA[3]=='B'){
                             let m= transGA.slice(0,3)+'A'+transGA[4] +' / '+transGA.slice(0,3)+'A'+transGA[4]+' / '+transGA.slice(0,3)+'A'+transGA[4]+' / '+transGA.slice(0,3)+'A'+transGA[4];
                             
                             //swaping tiles
                             let P2mts = Array.from(document.querySelectorAll('.P2mt'));
                             P2mts.map(tile =>{
                                 if(tile.style.gridArea == m){
                                     tile.style.gridArea = transGA;
                                 }
                                 P2mttr.style.gridArea = m;
                             });
                        }else if(transGA[3]=='C'){
                            
                            let m= transGA.slice(0,3)+'B'+transGA[4] +' / '+transGA.slice(0,3)+'B'+transGA[4]+' / '+transGA.slice(0,3)+'B'+transGA[4]+' / '+transGA.slice(0,3)+'B'+transGA[4];
                            
                            let P2mts = Array.from(document.querySelectorAll('.P2mt'));
                             P2mts.map(tile =>{
                                 if(tile.style.gridArea == m){
                                     tile.style.gridArea = transGA;
                                 }
                                 P2mttr.style.gridArea = m;
                                });
                        }else if(transGA[3]=='D'){
                            let m= transGA.slice(0,3)+'C'+transGA[4] +' / '+transGA.slice(0,3)+'C'+transGA[4]+' / '+transGA.slice(0,3)+'C'+transGA[4]+' / '+transGA.slice(0,3)+'C'+transGA[4];
                            console.log(m);
                            let P2mts = Array.from(document.querySelectorAll('.P2mt'));
                             P2mts.map(tile =>{
                                 if(tile.style.gridArea == m){
                                     tile.style.gridArea = transGA;
                                 }
                                 P2mttr.style.gridArea = m;
                                });
                                
                        }else if(transGA[3]=='E'){
                            let m= transGA.slice(0,3)+'D'+transGA[4] +' / '+transGA.slice(0,3)+'D'+transGA[4]+' / '+transGA.slice(0,3)+'D'+transGA[4]+' / '+transGA.slice(0,3)+'D'+transGA[4];
                            console.log(m);
                            let P2mts = Array.from(document.querySelectorAll('.P2mt'));
                             P2mts.map(tile =>{
                                 if(tile.style.gridArea == m){
                                     tile.style.gridArea = transGA;
                                 }
                                 P2mttr.style.gridArea = m;
                                });
                                
                        }
                        
                    }
                    else if(press==37/*left*/&& forbidtilel.includes(transGA.slice(0,5))==false){
                        P2mmoves.innerHTML = parseInt(P2mmoves.innerHTML)+1;
                        tileSound.play();
                        P2mcheck();
                        if(transGA[4]=='1'){
                            
                             let m= transGA.slice(0,4)+'2' +' / '+transGA.slice(0,4)+'2'+' / '+transGA.slice(0,4)+'2'+' / '+transGA.slice(0,4)+'2';
                             console.log(m);
                             //swaping tiles
                             let P2mts = Array.from(document.querySelectorAll('.P2mt'));
                             P2mts.map(tile =>{
                                 if(tile.style.gridArea == m){
                                     tile.style.gridArea = transGA;
                                 }
                                 P2mttr.style.gridArea = m;
                             });
                        }else if(transGA[4]=='2'){
                            let m= transGA.slice(0,4)+'3' +' / '+transGA.slice(0,4)+'3'+' / '+transGA.slice(0,4)+'3'+' / '+transGA.slice(0,4)+'3';
                            let P2mts = Array.from(document.querySelectorAll('.P2mt'));
                             P2mts.map(tile =>{
                                 if(tile.style.gridArea == m){
                                     tile.style.gridArea = transGA;
                                 }
                                 P2mttr.style.gridArea = m;


                                });
                        }else if(transGA[4]=='3'){
                            let m= transGA.slice(0,4)+'4' +' / '+transGA.slice(0,4)+'4'+' / '+transGA.slice(0,4)+'4'+' / '+transGA.slice(0,4)+'4';
                            let P2mts = Array.from(document.querySelectorAll('.P2mt'));
                             P2mts.map(tile =>{
                                 if(tile.style.gridArea == m){
                                     tile.style.gridArea = transGA;
                                 }
                                 P2mttr.style.gridArea = m;
                                });
                        }else if(transGA[4]=='4'){
                            let m= transGA.slice(0,4)+'5' +' / '+transGA.slice(0,4)+'5'+' / '+transGA.slice(0,4)+'5'+' / '+transGA.slice(0,4)+'5';
                            let P2mts = Array.from(document.querySelectorAll('.P2mt'));
                             P2mts.map(tile =>{
                                 if(tile.style.gridArea == m){
                                     tile.style.gridArea = transGA;
                                 }
                                 P2mttr.style.gridArea = m;
                                });
                        }
                        
                    }
                }
                /*console.log(Event);*/
                document.addEventListener('keydown',()=>{
                    console.log(mstopMotion);
                    if(mstopMotion==1){
                        mmoveTilesP2(event);
                    }});
                //keydown is to be used(not keypress)
                var etot1moves;
            //freezing check P1
            const P1mcheck = ()=>{
                


                
                let P1mts = Array.from(document.querySelectorAll('.P1mt'));
                let P1s = Array.from(document.querySelectorAll('.mms'));
                let t22;let t23; let t24; let t32; let t33; let t34; let t42; let t43;let t44;
            P1mts.map(t=>{
                if(t.style.gridArea.slice(0,5) == 'P1mB2'){
                    t22 = t.style.background;
                }else if(t.style.gridArea.slice(0,5)=='P1mB3'){
                    t23 = t.style.background;
                }else if(t.style.gridArea.slice(0,5)=='P1mB4'){
                    t24 = t.style.background;
                }else if(t.style.gridArea.slice(0,5)=='P1mC2'){
                    t32 = t.style.background;
                }else if(t.style.gridArea.slice(0,5)=='P1mC3'){
                    t33 = t.style.background;
                }else if(t.style.gridArea.slice(0,5)=='P1mC4'){
                    t34 = t.style.background;
                }else if(t.style.gridArea.slice(0,5)=='P1mD2'){
                    t42 = t.style.background;
                }else if(t.style.gridArea.slice(0,5)=='P1mD3'){
                    t43 = t.style.background;
                }else if(t.style.gridArea.slice(0,5)=='P1mD4'){
                    t44 = t.style.background;
                }
            });
            if(P1s[0].style.background == t22 &&
                P1s[1].style.background == t23 &&
                P1s[2].style.background == t24 &&
                P1s[3].style.background == t32 &&
                P1s[4].style.background == t33 &&
                P1s[5].style.background == t34 &&
                P1s[6].style.background == t42 &&
                P1s[7].style.background == t43 &&
                P1s[8].style.background == t44 
                ){
                    //completion check
                    mwin +=1;
                    //freeze count of moves
                    //no further tile swap
                    mtot1moves = P1mmoves.innerHTML;
                    P1mmoves.innerHTML =" ";
                    P1mts.map(t=>{
                        t.style.background = 'transparent';
                    });
                    }         
                    mwinnerCheck();  
                    
                }
                var mtot2moves;
                //freezing check P1
                const P2mcheck = ()=>{
                    let P2mts = Array.from(document.querySelectorAll('.P2mt'));
                    let P2s = Array.from(document.querySelectorAll('.mms'));
                    let t22;let t23; let t24; let t32; let t33; let t34; let t42; let t43;let t44;
                P2mts.map(t=>{
                    if(t.style.gridArea.slice(0,5) == 'P2mB2'){
                        t22 = t.style.background;
                    }else if(t.style.gridArea.slice(0,5)=='P2mB3'){
                        t23 = t.style.background;
                    }else if(t.style.gridArea.slice(0,5)=='P2mB4'){
                        t24 = t.style.background;
                    }else if(t.style.gridArea.slice(0,5)=='P2mC2'){
                        t32 = t.style.background;
                    }else if(t.style.gridArea.slice(0,5)=='P2mC3'){
                        t33 = t.style.background;
                    }else if(t.style.gridArea.slice(0,5)=='P2mC4'){
                        t34 = t.style.background;
                    }else if(t.style.gridArea.slice(0,5)=='P2mD2'){
                        t42 = t.style.background;
                    }else if(t.style.gridArea.slice(0,5)=='P2mD3'){
                        t43 = t.style.background;
                    }else if(t.style.gridArea.slice(0,5)=='P2mD4'){
                        t44 = t.style.background;
                    }
                });
                if(P2s[0].style.background == t22 &&
                    P2s[1].style.background == t23 &&
                    P2s[2].style.background == t24 &&
                    P2s[3].style.background == t32 &&
                    P2s[4].style.background == t33 &&
                    P2s[5].style.background == t34 &&
                    P2s[6].style.background == t42 &&
                    P2s[7].style.background == t43 &&
                    P2s[8].style.background == t44 
                    ){
                        //completion check
                        mwin +=1;
                        //freeze count of moves
                        //no further tile swap
                        mtot2moves = P2mmoves.innerHTML;
                        P2mmoves.innerHTML =" ";
                        P2mts.map(t=>{
                            t.style.background = 'transparent';
                        });
                        }         
                        mwinnerCheck();  
                        
                    }
            //winning check
            //have a c'mon variable to check the completion of the games
            //and leaderboard stuffs
            const mwinnerCheck =()=>{
            if(mwin == 2){
                applause.play();
                mms = Array.from(document.querySelectorAll('.mms'));
                mms.map(t=>{
                    t.style.background = 'transparent';
                });
                console.log(mplayer1Name);
                console.log(mplayer2Name);
                console.log(mtot1moves);
                console.log(mtot2moves);
                if(mtot1moves<mtot2moves && mplayer1Name!=""&& mplayer2Name!=""){
                    let score = localStorage.getItem('Mmscore');
                    if(!score || mtot2moves<parseInt(score)){
                        localStorage.setItem('Mmname',mplayer1Name);
                        localStorage.setItem('Mmscore',mtot1moves);                    
                    }
                    let mgoalDis = document.querySelector('.mwinBoard');
                    mgoalDis.style.display='flex';
                    mgoalDis.innerHTML= '<h1>'+mplayer1Name+' wins 🔥'+'</h1>'+'<p style="color:red;">'+'moves: '+mtot1moves+'</p>';
                }
                else if(mtot1moves>mtot2moves && mplayer2Name!=""&& mplayer1Name!=""){
                    let score = localStorage.getItem('Mmscore');
                    if(!score || mtot1moves<parseInt(score)){
                        localStorage.setItem('Mmname',mplayer2Name);
                        localStorage.setItem('Mmscore',mtot2moves);                    
                    }
                    let mgoalDis = document.querySelector('.mwinBoard');
                    mgoalDis.style.display='flex';
                    mgoalDis.innerHTML = '<h1>'+mplayer2Name+' wins 🔥'+'</h1>'+'<p style="color:red;">'+'moves: '+mtot2moves+'</p>';
                }
                else if(mtot1moves==mtot2moves && mplayer2Name!="" &&mplayer1Name!=""){
                    let mgoalDis = document.querySelector('.mwinBoard');
                    mgoalDis.style.display='flex';
                    mgoalDis.innerHTML = '<h1>'+'DRAW'+'</h1>';
                
                }
            }
        }
        document.querySelector('#medPM').innerHTML = localStorage.Mmname;
        document.querySelector('#medSM').innerHTML = localStorage.Mmscore;
        const introPage1 = document.querySelector('.introm');
        const medPage = document.querySelector('.mediumM');

        const mmodeM = document.querySelector('.mmodesM');


mmodeM.addEventListener('click',function(){
    mwin = 0;
    mstopMotion = 0;
    document.querySelector('#name1').value = '';
    document.querySelector('#name2').value = '';
    
    applause.stop();
    
    introPage1.style.display = 'flex';
    medPage.style.display = 'none';
    P1mmoves.innerHTML = "";
    P2mmoves.innerHTML = "";
    let mgoalDis = document.querySelector('.mwinBoard');
    mgoalDis.style.display='none';
    
    mms = Array.from(document.querySelectorAll('.mms'));
    mms.map(tile=>{
        tile.style.background = 'white';
    });
    let P1mts = Array.from(document.querySelectorAll('.P1mt'));
    P1mts.map(tile=>{
        tile.style.background = 'white';
    });
    let P2mts = Array.from(document.querySelectorAll('.P2mt'));
    P2mts.map(tile=>{
        tile.style.background = 'white';
    });
});