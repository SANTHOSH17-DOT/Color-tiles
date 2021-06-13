//player mode page swap
const hardModeBtn = document.querySelector('#hardM');
hardModeBtn.addEventListener('click',()=>{
    let hardModePage = document.querySelector('.hardM');
    let intromPage = document.querySelector('.introm');
    intromPage.style.display = 'none';
    hardModePage.style.display = 'flex';
});

const hardBtnM = document.querySelector('#hardM');
var tileSound = new sound("tilesound.wav");
var hardopen = new sound("hardopen.wav");
var applause = new sound("applause.wav");

var hover = new sound('hover.wav');
var hwin;
var hstopMotion;
var hplayer1Name;
var hplayer2Name;

var hgoalDis = document.querySelector('.hwinBoard');
hgoalDis.innerHTML = "";
//easy mode
const Mhrandom_puzzle=()=>{
    hplayer1Name = document.querySelector('#name1').value;
    hplayer2Name= document.querySelector('#name2').value;
    
    
    //Set of colours to be used
    var colors1 = ['red','red','red','red','red','blue','blue','blue','blue','blue','yellow','yellow','yellow','yellow','yellow','green','green','green','green','green','brown','brown','brown','brown','brown','orange','orange','orange','orange','orange','cyan','cyan','cyan','cyan','cyan'];

    //goal generator

    var k = 1;
    while(k<=4){
        var l =1;
        while(l<=4){
        //random number which chooses the color from the colors1
        let n = Math.floor(Math.random()*colors1.length);
        
        const y = document.querySelector(`.mhs${k}${l}`);
        //applying the background of individual tile
        y.style.background = colors1[n];
        
        //In general, splice(index,number of elements to be removed,addelement1,addelement2..)
        colors1.splice(n,1); 
        l++;
        }
        k++;
    }
    //puzzle generator
    var colors2 = ['red','red','red','red','red','blue','blue','blue','blue','blue','yellow','yellow','yellow','yellow','yellow','green','green','green','green','green','brown','brown','brown','brown','brown','orange','orange','orange','orange','orange','cyan','cyan','cyan','cyan','cyan'];

    var j = 1;
    while(j<=6){
        var i = 1;
        while(i<=6){
        let n = Math.floor(Math.random()*colors2.length);
        const x1 = document.querySelector(`.P1ht${j}${i}`);
        const x2 = document.querySelector(`.P2ht${j}${i}`);
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
hardBtnM.addEventListener('click',function(){
    const introPage2 = document.querySelector('.introm');
    const hardPage = document.querySelector('.hardM');
    hwin = 0;
    hstopMotion =1;
    introPage2.style.display = 'none';
    hardPage.style.display = 'flex';
    hstartGameM.disabled=false;
    
    hardopen.play();
    
    
});
const P1hts = Array.from(document.querySelectorAll('.P1ht'));
const P2hts = Array.from(document.querySelectorAll('.P2ht'));
        const hstartGameM = document.querySelector('.hstartM');
        
        var P1hmoves = document.querySelector('.P1hmoves');
        var P2hmoves = document.querySelector('.P2hmoves');
        hstartGameM.addEventListener('click',function(){
            hstartGameM.disabled=true;
            P1hmoves.textContent = 0;
            P2hmoves.textContent = 0;
            Mhrandom_puzzle();
            });
            
                //player1 tile swaping
                
                var P1httr = document.querySelector('.P1httr');
                
                const hmoveTilesP1 = (event)=>{
                    /*console.log(event);
                    */
                    let press = event.keyCode;//to get the unicode value 
                    /*console.log(press);*/
                    let transGA = P1httr.style.gridArea;
                    const forbidtileW = ['P1hF1','P1hF2','P1hF3','P1hF4','P1hF5','P1hF6'];
                    const forbidtileD = ['P1hA1','P1hB1','P1hC1','P1hD1','P1hE1','P1hF1'];
                    const forbidtileA = ['P1hE6','P1hD6','P1hC6','P1hB6','P1hA6','P1hF6'];
                    const forbidtileS = ['P1hA1','P1hA2','P1hA3','P1hA4','P1hA5','P1hA6'];
                    
                    if(press==119/*w*/&& forbidtileW.includes(transGA.slice(0,5))==false){
                        P1hmoves.innerHTML = parseInt(P1hmoves.innerHTML)+1;
                        tileSound.play();
                        P1hcheck();
                        if(transGA[3]=='A'){
                             let m= transGA.slice(0,3)+'B'+transGA[4] +' / '+transGA.slice(0,3)+'B'+transGA[4]+' / '+transGA.slice(0,3)+'B'+transGA[4]+' / '+transGA.slice(0,3)+'B'+transGA[4];
                             //swaping tiles
                             let P1hts = Array.from(document.querySelectorAll('.P1ht'));
                             P1hts.map(tile =>{
                                 if(tile.style.gridArea == m){
                                     tile.style.gridArea = transGA;
                                 }
                                 P1httr.style.gridArea = m;
                             });
                        }else if(transGA[3]=='B'){
                            let m= transGA.slice(0,3)+'C'+transGA[4] +' / '+transGA.slice(0,3)+'C'+transGA[4]+' / '+transGA.slice(0,3)+'C'+transGA[4]+' / '+transGA.slice(0,3)+'C'+transGA[4];
                            let P1hts = Array.from(document.querySelectorAll('.P1ht'));
                             P1hts.map(tile =>{
                                 if(tile.style.gridArea == m){
                                     tile.style.gridArea = transGA;
                                 }
                                 P1httr.style.gridArea = m;
                                });
                        }else if(transGA[3]=='C'){
                            let m= transGA.slice(0,3)+'D'+transGA[4] +' / '+transGA.slice(0,3)+'D'+transGA[4]+' / '+transGA.slice(0,3)+'D'+transGA[4]+' / '+transGA.slice(0,3)+'D'+transGA[4];
                            let P1hts = Array.from(document.querySelectorAll('.P1ht'));
                             P1hts.map(tile =>{
                                 if(tile.style.gridArea == m){
                                     tile.style.gridArea = transGA;
                                 }
                                 P1httr.style.gridArea = m;
                                });
                        }else if(transGA[3]=='D'){
                            let m= transGA.slice(0,3)+'E'+transGA[4] +' / '+transGA.slice(0,3)+'E'+transGA[4]+' / '+transGA.slice(0,3)+'E'+transGA[4]+' / '+transGA.slice(0,3)+'E'+transGA[4];
                            let P1hts = Array.from(document.querySelectorAll('.P1ht'));
                             P1hts.map(tile =>{
                                 if(tile.style.gridArea == m){
                                     tile.style.gridArea = transGA;
                                 }
                                 P1httr.style.gridArea = m;
                                });
                        }else if(transGA[3]=='E'){
                            let m= transGA.slice(0,3)+'F'+transGA[4] +' / '+transGA.slice(0,3)+'F'+transGA[4]+' / '+transGA.slice(0,3)+'F'+transGA[4]+' / '+transGA.slice(0,3)+'F'+transGA[4];
                            let P1hts = Array.from(document.querySelectorAll('.P1ht'));
                             P1hts.map(tile =>{
                                 if(tile.style.gridArea == m){
                                     tile.style.gridArea = transGA;
                                 }
                                 P1httr.style.gridArea = m;
                                });
                        }
                        
                    }
                    else if(press==100/*d*/&& forbidtileD.includes(transGA.slice(0,5))==false){
                        P1hmoves.innerHTML = parseInt(P1hmoves.innerHTML)+1;
                        tileSound.play();
                        P1hcheck();
                        if(transGA[4]=='2'){
                             let m= transGA.slice(0,4)+'1' +' / '+transGA.slice(0,4)+'1'+' / '+transGA.slice(0,4)+'1'+' / '+transGA.slice(0,4)+'1';
                             //swaping tiles
                             let P1hts = Array.from(document.querySelectorAll('.P1ht'));
                             P1hts.map(tile =>{
                                 if(tile.style.gridArea == m){
                                     tile.style.gridArea = transGA;
                                 }
                                 P1httr.style.gridArea = m;
                             });
                        }else if(transGA[4]=='3'){
                            let m= transGA.slice(0,4)+'2' +' / '+transGA.slice(0,4)+'2'+' / '+transGA.slice(0,4)+'2'+' / '+transGA.slice(0,4)+'2';
                            let P1hts = Array.from(document.querySelectorAll('.P1ht'));
                             P1hts.map(tile =>{
                                 if(tile.style.gridArea == m){
                                     tile.style.gridArea = transGA;
                                 }
                                 P1httr.style.gridArea = m;
                                });
                        }else if(transGA[4]=='4'){
                            console.log(transGA);
                            let m= transGA.slice(0,4)+'3' +' / '+transGA.slice(0,4)+'3'+' / '+transGA.slice(0,4)+'3'+' / '+transGA.slice(0,4)+'3';
                            console.log(m);
                            let P1hts = Array.from(document.querySelectorAll('.P1ht'));
                             P1hts.map(tile =>{
                                 if(tile.style.gridArea == m){
                                    
                                     tile.style.gridArea = transGA;
                                 }
                                 P1httr.style.gridArea = m;
                                });
                        }else if(transGA[4]=='5'){
                            console.log(transGA);
                            let m= transGA.slice(0,4)+'4' +' / '+transGA.slice(0,4)+'4'+' / '+transGA.slice(0,4)+'4'+' / '+transGA.slice(0,4)+'4';
                            console.log(m);
                            let P1hts = Array.from(document.querySelectorAll('.P1ht'));
                             P1hts.map(tile =>{
                                 if(tile.style.gridArea == m){
                                    
                                     tile.style.gridArea = transGA;
                                 }
                                 P1httr.style.gridArea = m;
                                });
                        }else if(transGA[4]=='6'){
                            console.log(transGA);
                            let m= transGA.slice(0,4)+'5' +' / '+transGA.slice(0,4)+'5'+' / '+transGA.slice(0,4)+'5'+' / '+transGA.slice(0,4)+'5';
                            console.log(m);
                            let P1hts = Array.from(document.querySelectorAll('.P1ht'));
                             P1hts.map(tile =>{
                                 if(tile.style.gridArea == m){
                                    
                                     tile.style.gridArea = transGA;
                                 }
                                 P1httr.style.gridArea = m;
                                });
                        }
                        
                    }
                    if(press==115/*s*/&& forbidtileS.includes(transGA.slice(0,5))==false){
                        P1hmoves.innerHTML = parseInt(P1hmoves.innerHTML)+1;
                        tileSound.play();
                        P1hcheck();
                        if(transGA[3]=='B'){
                             let m= transGA.slice(0,3)+'A'+transGA[4] +' / '+transGA.slice(0,3)+'A'+transGA[4]+' / '+transGA.slice(0,3)+'A'+transGA[4]+' / '+transGA.slice(0,3)+'A'+transGA[4];
                             
                             //swaping tiles
                             let P1hts = Array.from(document.querySelectorAll('.P1ht'));
                             P1hts.map(tile =>{
                                 if(tile.style.gridArea == m){
                                     tile.style.gridArea = transGA;
                                 }
                                 P1httr.style.gridArea = m;
                             });
                        }else if(transGA[3]=='C'){
                            
                            let m= transGA.slice(0,3)+'B'+transGA[4] +' / '+transGA.slice(0,3)+'B'+transGA[4]+' / '+transGA.slice(0,3)+'B'+transGA[4]+' / '+transGA.slice(0,3)+'B'+transGA[4];
                            
                            let P1hts = Array.from(document.querySelectorAll('.P1ht'));
                             P1hts.map(tile =>{
                                 if(tile.style.gridArea == m){
                                     tile.style.gridArea = transGA;
                                 }
                                 P1httr.style.gridArea = m;
                                });
                        }else if(transGA[3]=='D'){
                            let m= transGA.slice(0,3)+'C'+transGA[4] +' / '+transGA.slice(0,3)+'C'+transGA[4]+' / '+transGA.slice(0,3)+'C'+transGA[4]+' / '+transGA.slice(0,3)+'C'+transGA[4];
                            console.log(m);
                            let P1hts = Array.from(document.querySelectorAll('.P1ht'));
                             P1hts.map(tile =>{
                                 if(tile.style.gridArea == m){
                                     tile.style.gridArea = transGA;
                                 }
                                 P1httr.style.gridArea = m;
                                });
                                
                        }else if(transGA[3]=='E'){
                            let m= transGA.slice(0,3)+'D'+transGA[4] +' / '+transGA.slice(0,3)+'D'+transGA[4]+' / '+transGA.slice(0,3)+'D'+transGA[4]+' / '+transGA.slice(0,3)+'D'+transGA[4];
                            console.log(m);
                            let P1hts = Array.from(document.querySelectorAll('.P1ht'));
                             P1hts.map(tile =>{
                                 if(tile.style.gridArea == m){
                                     tile.style.gridArea = transGA;
                                 }
                                 P1httr.style.gridArea = m;
                                });
                                
                        }else if(transGA[3]=='F'){
                            let m= transGA.slice(0,3)+'E'+transGA[4] +' / '+transGA.slice(0,3)+'E'+transGA[4]+' / '+transGA.slice(0,3)+'E'+transGA[4]+' / '+transGA.slice(0,3)+'E'+transGA[4];
                            console.log(m);
                            let P1hts = Array.from(document.querySelectorAll('.P1ht'));
                             P1hts.map(tile =>{
                                 if(tile.style.gridArea == m){
                                     tile.style.gridArea = transGA;
                                 }
                                 P1httr.style.gridArea = m;
                                });
                                
                        }
                        
                    }
                    else if(press==97/*a*/&& forbidtileA.includes(transGA.slice(0,5))==false){
                        P1hmoves.innerHTML = parseInt(P1hmoves.innerHTML)+1;
                        tileSound.play();
                        P1hcheck();
                        if(transGA[4]=='1'){
                            
                             let m= transGA.slice(0,4)+'2' +' / '+transGA.slice(0,4)+'2'+' / '+transGA.slice(0,4)+'2'+' / '+transGA.slice(0,4)+'2';
                             console.log(m);
                             //swaping tiles
                             let P1hts = Array.from(document.querySelectorAll('.P1ht'));
                             P1hts.map(tile =>{
                                 if(tile.style.gridArea == m){
                                     tile.style.gridArea = transGA;
                                 }
                                 P1httr.style.gridArea = m;
                             });
                        }else if(transGA[4]=='2'){
                            let m= transGA.slice(0,4)+'3' +' / '+transGA.slice(0,4)+'3'+' / '+transGA.slice(0,4)+'3'+' / '+transGA.slice(0,4)+'3';
                            let P1hts = Array.from(document.querySelectorAll('.P1ht'));
                             P1hts.map(tile =>{
                                 if(tile.style.gridArea == m){
                                     tile.style.gridArea = transGA;
                                 }
                                 P1httr.style.gridArea = m;


                                });
                        }else if(transGA[4]=='3'){
                            let m= transGA.slice(0,4)+'4' +' / '+transGA.slice(0,4)+'4'+' / '+transGA.slice(0,4)+'4'+' / '+transGA.slice(0,4)+'4';
                            let P1hts = Array.from(document.querySelectorAll('.P1ht'));
                             P1hts.map(tile =>{
                                 if(tile.style.gridArea == m){
                                     tile.style.gridArea = transGA;
                                 }
                                 P1httr.style.gridArea = m;
                                });
                        }else if(transGA[4]=='4'){
                            let m= transGA.slice(0,4)+'5' +' / '+transGA.slice(0,4)+'5'+' / '+transGA.slice(0,4)+'5'+' / '+transGA.slice(0,4)+'5';
                            let P1hts = Array.from(document.querySelectorAll('.P1ht'));
                             P1hts.map(tile =>{
                                 if(tile.style.gridArea == m){
                                     tile.style.gridArea = transGA;
                                 }
                                 P1httr.style.gridArea = m;
                                });
                        }else if(transGA[4]=='5'){
                            let m= transGA.slice(0,4)+'6' +' / '+transGA.slice(0,4)+'6'+' / '+transGA.slice(0,4)+'6'+' / '+transGA.slice(0,4)+'6';
                            let P1hts = Array.from(document.querySelectorAll('.P1ht'));
                             P1hts.map(tile =>{
                                 if(tile.style.gridArea == m){
                                     tile.style.gridArea = transGA;
                                 }
                                 P1httr.style.gridArea = m;
                                });
                        }
                        
                    }
                }
                /*console.log(Event);*/
                // check if it's applicable only to the game page
                //to avoid motion of tiles before entering the page
                
                    document.addEventListener('keypress',()=>{
                        console.log(hstopMotion);
                        if(hstopMotion==1){
                            hmoveTilesP1(event);
                        }});
                    
                    //address of the function is sufficient for inbuilt functons
            
            //player2 tile swaping
            var P2httr = document.querySelector('.P2httr');
                
                const hmoveTilesP2 = (event)=>{
                    
                    
                    /*console.log(event);
                    */
                    let press = event.keyCode;//to get the unicode value 
                    /*console.log(press);*/
                    let transGA = P2httr.style.gridArea;
                    const forbidtileu = ['P2hF1','P2hF2','P2hF3','P2hF4','P2hF5','P2hF6'];
                    const forbidtiler = ['P2hA1','P2hB1','P2hC1','P2hD1','P2hE1','P2hF1'];
                    const forbidtilel = ['P2hE6','P2hD6','P2hC6','P2hB6','P2hA6','P2hF6'];
                    const forbidtiled = ['P2hA1','P2hA2','P2hA3','P2hA4','P2hA5','P2hA6'];
                    
                    if(press==38/*up*/&& forbidtileu.includes(transGA.slice(0,5))==false){
                        P2hmoves.innerHTML = parseInt(P2hmoves.innerHTML)+1;
                        tileSound.play();
                        P2hcheck();
                        if(transGA[3]=='A'){
                             let m= transGA.slice(0,3)+'B'+transGA[4] +' / '+transGA.slice(0,3)+'B'+transGA[4]+' / '+transGA.slice(0,3)+'B'+transGA[4]+' / '+transGA.slice(0,3)+'B'+transGA[4];
                             //swaping tiles
                             let P2hts = Array.from(document.querySelectorAll('.P2ht'));
                             P2hts.map(tile =>{
                                 if(tile.style.gridArea == m){
                                     tile.style.gridArea = transGA;
                                 }
                                 P2httr.style.gridArea = m;
                             });
                        }else if(transGA[3]=='B'){
                            let m= transGA.slice(0,3)+'C'+transGA[4] +' / '+transGA.slice(0,3)+'C'+transGA[4]+' / '+transGA.slice(0,3)+'C'+transGA[4]+' / '+transGA.slice(0,3)+'C'+transGA[4];
                            let P2hts = Array.from(document.querySelectorAll('.P2ht'));
                             P2hts.map(tile =>{
                                 if(tile.style.gridArea == m){
                                     tile.style.gridArea = transGA;
                                 }
                                 P2httr.style.gridArea = m;
                                });
                        }else if(transGA[3]=='C'){
                            let m= transGA.slice(0,3)+'D'+transGA[4] +' / '+transGA.slice(0,3)+'D'+transGA[4]+' / '+transGA.slice(0,3)+'D'+transGA[4]+' / '+transGA.slice(0,3)+'D'+transGA[4];
                            let P2hts = Array.from(document.querySelectorAll('.P2ht'));
                             P2hts.map(tile =>{
                                 if(tile.style.gridArea == m){
                                     tile.style.gridArea = transGA;
                                 }
                                 P2httr.style.gridArea = m;
                                });
                        }else if(transGA[3]=='D'){
                            let m= transGA.slice(0,3)+'E'+transGA[4] +' / '+transGA.slice(0,3)+'E'+transGA[4]+' / '+transGA.slice(0,3)+'E'+transGA[4]+' / '+transGA.slice(0,3)+'E'+transGA[4];
                            let P2hts = Array.from(document.querySelectorAll('.P2ht'));
                             P2hts.map(tile =>{
                                 if(tile.style.gridArea == m){
                                     tile.style.gridArea = transGA;
                                 }
                                 P2httr.style.gridArea = m;
                                });
                        }else if(transGA[3]=='E'){
                            let m= transGA.slice(0,3)+'F'+transGA[4] +' / '+transGA.slice(0,3)+'F'+transGA[4]+' / '+transGA.slice(0,3)+'F'+transGA[4]+' / '+transGA.slice(0,3)+'F'+transGA[4];
                            let P2hts = Array.from(document.querySelectorAll('.P2ht'));
                             P2hts.map(tile =>{
                                 if(tile.style.gridArea == m){
                                     tile.style.gridArea = transGA;
                                 }
                                 P2httr.style.gridArea = m;
                                });
                        }
                        
                    }
                    else if(press==39/*right*/&& forbidtiler.includes(transGA.slice(0,5))==false){
                        P2hmoves.innerHTML = parseInt(P2hmoves.innerHTML)+1;
                        tileSound.play();
                        P2hcheck();
                        if(transGA[4]=='2'){
                             let m= transGA.slice(0,4)+'1' +' / '+transGA.slice(0,4)+'1'+' / '+transGA.slice(0,4)+'1'+' / '+transGA.slice(0,4)+'1';
                             //swaping tiles
                             let P2hts = Array.from(document.querySelectorAll('.P2ht'));
                             P2hts.map(tile =>{
                                 if(tile.style.gridArea == m){
                                     tile.style.gridArea = transGA;
                                 }
                                 P2httr.style.gridArea = m;
                             });
                        }else if(transGA[4]=='3'){
                            let m= transGA.slice(0,4)+'2' +' / '+transGA.slice(0,4)+'2'+' / '+transGA.slice(0,4)+'2'+' / '+transGA.slice(0,4)+'2';
                            let P2hts = Array.from(document.querySelectorAll('.P2ht'));
                             P2hts.map(tile =>{
                                 if(tile.style.gridArea == m){
                                     tile.style.gridArea = transGA;
                                 }
                                 P2httr.style.gridArea = m;
                                });
                        }else if(transGA[4]=='4'){
                            console.log(transGA);
                            let m= transGA.slice(0,4)+'3' +' / '+transGA.slice(0,4)+'3'+' / '+transGA.slice(0,4)+'3'+' / '+transGA.slice(0,4)+'3';
                            console.log(m);
                            let P2hts = Array.from(document.querySelectorAll('.P2ht'));
                             P2hts.map(tile =>{
                                 if(tile.style.gridArea == m){
                                    
                                     tile.style.gridArea = transGA;
                                 }
                                 P2httr.style.gridArea = m;
                                });
                        }else if(transGA[4]=='5'){
                            console.log(transGA);
                            let m= transGA.slice(0,4)+'4' +' / '+transGA.slice(0,4)+'4'+' / '+transGA.slice(0,4)+'4'+' / '+transGA.slice(0,4)+'4';
                            console.log(m);
                            let P2hts = Array.from(document.querySelectorAll('.P2ht'));
                             P2hts.map(tile =>{
                                 if(tile.style.gridArea == m){
                                    
                                     tile.style.gridArea = transGA;
                                 }
                                 P2httr.style.gridArea = m;
                                });
                        }else if(transGA[4]=='6'){
                            console.log(transGA);
                            let m= transGA.slice(0,4)+'5' +' / '+transGA.slice(0,4)+'5'+' / '+transGA.slice(0,4)+'5'+' / '+transGA.slice(0,4)+'5';
                            console.log(m);
                            let P2hts = Array.from(document.querySelectorAll('.P2ht'));
                             P2hts.map(tile =>{
                                 if(tile.style.gridArea == m){
                                    
                                     tile.style.gridArea = transGA;
                                 }
                                 P2httr.style.gridArea = m;
                                });
                        }
                        
                    }
                    if(press==40/*down*/&& forbidtiled.includes(transGA.slice(0,5))==false){
                        P2hmoves.innerHTML = parseInt(P2hmoves.innerHTML)+1;
                        tileSound.play();
                        P2hcheck();
                        if(transGA[3]=='B'){
                             let m= transGA.slice(0,3)+'A'+transGA[4] +' / '+transGA.slice(0,3)+'A'+transGA[4]+' / '+transGA.slice(0,3)+'A'+transGA[4]+' / '+transGA.slice(0,3)+'A'+transGA[4];
                             
                             //swaping tiles
                             let P2hts = Array.from(document.querySelectorAll('.P2ht'));
                             P2hts.map(tile =>{
                                 if(tile.style.gridArea == m){
                                     tile.style.gridArea = transGA;
                                 }
                                 P2httr.style.gridArea = m;
                             });
                        }else if(transGA[3]=='C'){
                            
                            let m= transGA.slice(0,3)+'B'+transGA[4] +' / '+transGA.slice(0,3)+'B'+transGA[4]+' / '+transGA.slice(0,3)+'B'+transGA[4]+' / '+transGA.slice(0,3)+'B'+transGA[4];
                            
                            let P2hts = Array.from(document.querySelectorAll('.P2ht'));
                             P2hts.map(tile =>{
                                 if(tile.style.gridArea == m){
                                     tile.style.gridArea = transGA;
                                 }
                                 P2httr.style.gridArea = m;
                                });
                        }else if(transGA[3]=='D'){
                            let m= transGA.slice(0,3)+'C'+transGA[4] +' / '+transGA.slice(0,3)+'C'+transGA[4]+' / '+transGA.slice(0,3)+'C'+transGA[4]+' / '+transGA.slice(0,3)+'C'+transGA[4];
                            console.log(m);
                            let P2hts = Array.from(document.querySelectorAll('.P2ht'));
                             P2hts.map(tile =>{
                                 if(tile.style.gridArea == m){
                                     tile.style.gridArea = transGA;
                                 }
                                 P2httr.style.gridArea = m;
                                });
                                
                        }else if(transGA[3]=='E'){
                            let m= transGA.slice(0,3)+'D'+transGA[4] +' / '+transGA.slice(0,3)+'D'+transGA[4]+' / '+transGA.slice(0,3)+'D'+transGA[4]+' / '+transGA.slice(0,3)+'D'+transGA[4];
                            console.log(m);
                            let P2hts = Array.from(document.querySelectorAll('.P2ht'));
                             P2hts.map(tile =>{
                                 if(tile.style.gridArea == m){
                                     tile.style.gridArea = transGA;
                                 }
                                 P2httr.style.gridArea = m;
                                });
                                
                        }else if(transGA[3]=='F'){
                            let m= transGA.slice(0,3)+'E'+transGA[4] +' / '+transGA.slice(0,3)+'E'+transGA[4]+' / '+transGA.slice(0,3)+'E'+transGA[4]+' / '+transGA.slice(0,3)+'E'+transGA[4];
                            console.log(m);
                            let P2hts = Array.from(document.querySelectorAll('.P2ht'));
                             P2hts.map(tile =>{
                                 if(tile.style.gridArea == m){
                                     tile.style.gridArea = transGA;
                                 }
                                 P2httr.style.gridArea = m;
                                });
                                
                        }
                        
                    }
                    else if(press==37/*left*/&& forbidtilel.includes(transGA.slice(0,5))==false){
                        P2hmoves.innerHTML = parseInt(P2hmoves.innerHTML)+1;
                        tileSound.play();
                        P2hcheck();
                        if(transGA[4]=='1'){
                            
                             let m= transGA.slice(0,4)+'2' +' / '+transGA.slice(0,4)+'2'+' / '+transGA.slice(0,4)+'2'+' / '+transGA.slice(0,4)+'2';
                             console.log(m);
                             //swaping tiles
                             let P2hts = Array.from(document.querySelectorAll('.P2ht'));
                             P2hts.map(tile =>{
                                 if(tile.style.gridArea == m){
                                     tile.style.gridArea = transGA;
                                 }
                                 P2httr.style.gridArea = m;
                             });
                        }else if(transGA[4]=='2'){
                            let m= transGA.slice(0,4)+'3' +' / '+transGA.slice(0,4)+'3'+' / '+transGA.slice(0,4)+'3'+' / '+transGA.slice(0,4)+'3';
                            let P2hts = Array.from(document.querySelectorAll('.P2ht'));
                             P2hts.map(tile =>{
                                 if(tile.style.gridArea == m){
                                     tile.style.gridArea = transGA;
                                 }
                                 P2httr.style.gridArea = m;


                                });
                        }else if(transGA[4]=='3'){
                            let m= transGA.slice(0,4)+'4' +' / '+transGA.slice(0,4)+'4'+' / '+transGA.slice(0,4)+'4'+' / '+transGA.slice(0,4)+'4';
                            let P2hts = Array.from(document.querySelectorAll('.P2ht'));
                             P2hts.map(tile =>{
                                 if(tile.style.gridArea == m){
                                     tile.style.gridArea = transGA;
                                 }
                                 P2httr.style.gridArea = m;
                                });
                        }else if(transGA[4]=='4'){
                            let m= transGA.slice(0,4)+'5' +' / '+transGA.slice(0,4)+'5'+' / '+transGA.slice(0,4)+'5'+' / '+transGA.slice(0,4)+'5';
                            let P2hts = Array.from(document.querySelectorAll('.P2ht'));
                             P2hts.map(tile =>{
                                 if(tile.style.gridArea == m){
                                     tile.style.gridArea = transGA;
                                 }
                                 P2httr.style.gridArea = m;
                                });
                        }else if(transGA[4]=='5'){
                            let m= transGA.slice(0,4)+'6' +' / '+transGA.slice(0,4)+'6'+' / '+transGA.slice(0,4)+'6'+' / '+transGA.slice(0,4)+'6';
                            let P2hts = Array.from(document.querySelectorAll('.P2ht'));
                             P2hts.map(tile =>{
                                 if(tile.style.gridArea == m){
                                     tile.style.gridArea = transGA;
                                 }
                                 P2httr.style.gridArea = m;
                                });
                        }
                        
                    }
                }
                /*console.log(Event);*/
                document.addEventListener('keydown',()=>{
                    console.log(hstopMotion);
                    if(hstopMotion==1){
                        hmoveTilesP2(event);
                    }});
                //keydown is to be used(not keypress)
                var htot1moves;
            //freezing check P1
            const P1hcheck = ()=>{
                


                
                let P1hts = Array.from(document.querySelectorAll('.P1ht'));
                let P1s = Array.from(document.querySelectorAll('.mhs'));
                let t22;let t23; let t24; let t32; let t33; let t34; let t42; let t43;let t44;
            P1mts.map(t=>{
                if(t.style.gridArea.slice(0,5) == 'P1hB2'){
                    t22 = t.style.background;
                }else if(t.style.gridArea.slice(0,5)=='P1hB3'){
                    t23 = t.style.background;
                }else if(t.style.gridArea.slice(0,5)=='P1hB4'){
                    t24 = t.style.background;
                }else if(t.style.gridArea.slice(0,5)=='P1hB5'){
                    t25 = t.style.background;
                }else if(t.style.gridArea.slice(0,5)=='P1hC2'){
                    t32 = t.style.background;
                }else if(t.style.gridArea.slice(0,5)=='P1hC3'){
                    t33 = t.style.background;
                }else if(t.style.gridArea.slice(0,5)=='P1hC4'){
                    t34 = t.style.background;
                }else if(t.style.gridArea.slice(0,5)=='P1hC5'){
                    t35 = t.style.background;
                }else if(t.style.gridArea.slice(0,5)=='P1hD2'){
                    t42 = t.style.background;
                }else if(t.style.gridArea.slice(0,5)=='P1hD3'){
                    t43 = t.style.background;
                }else if(t.style.gridArea.slice(0,5)=='P1hD4'){
                    t44 = t.style.background;
                }else if(t.style.gridArea.slice(0,5)=='P1hD5'){
                    t45 = t.style.background;
                }else if(t.style.gridArea.slice(0,5)=='P1hE2'){
                    t52 = t.style.background;
                }else if(t.style.gridArea.slice(0,5)=='P1hE3'){
                    t53 = t.style.background;
                }else if(t.style.gridArea.slice(0,5)=='P1hE4'){
                    t54 = t.style.background;
                }else if(t.style.gridArea.slice(0,5)=='P1hE5'){
                    t55 = t.style.background;
                }
            });
            if(P1s[0].style.background == t22 &&
                P1s[1].style.background == t23 &&
                P1s[2].style.background == t24 &&
                P1s[3].style.background == t25 &&
                P1s[4].style.background == t32 &&
                P1s[5].style.background == t33 &&
                P1s[6].style.background == t34 &&
                P1s[7].style.background == t35 &&
                P1s[8].style.background == t42 &&
                P1s[9].style.background == t43 &&
                P1s[10].style.background == t44 &&
                P1s[11].style.background == t45 &&
                P1s[12].style.background == t52 &&
                P1s[13].style.background == t53 &&
                P1s[14].style.background == t54 &&
                P1s[15].style.background == t55 
                ){
                    //completion check
                    mwin +=1;
                    //freeze count of moves
                    //no further tile swap
                    htot1moves = P1hmoves.innerHTML;
                    P1hmoves.innerHTML =" ";
                    P1hts.map(t=>{
                        t.style.background = 'transparent';
                    });
                    }         
                    hwinnerCheck();  
                    
                }
                var htot2moves;
                //freezing check P1
                const P2hcheck = ()=>{
                    let P2hts = Array.from(document.querySelectorAll('.P2ht'));
                    let P2s = Array.from(document.querySelectorAll('.mhs'));
                    let t22;let t23; let t24; let t32; let t33; let t34; let t42; let t43;let t44;
                P2hts.map(t=>{
                    if(t.style.gridArea.slice(0,5) == 'P2hB2'){
                        t22 = t.style.background;
                    }else if(t.style.gridArea.slice(0,5)=='P2hB3'){
                        t23 = t.style.background;
                    }else if(t.style.gridArea.slice(0,5)=='P2hB4'){
                        t24 = t.style.background;
                    }else if(t.style.gridArea.slice(0,5)=='P2hB5'){
                        t25 = t.style.background;
                    }else if(t.style.gridArea.slice(0,5)=='P2hC2'){
                        t32 = t.style.background;
                    }else if(t.style.gridArea.slice(0,5)=='P2hC3'){
                        t33 = t.style.background;
                    }else if(t.style.gridArea.slice(0,5)=='P2hC4'){
                        t34 = t.style.background;
                    }else if(t.style.gridArea.slice(0,5)=='P2hC5'){
                        t35 = t.style.background;
                    }else if(t.style.gridArea.slice(0,5)=='P2hD2'){
                        t42 = t.style.background;
                    }else if(t.style.gridArea.slice(0,5)=='P2hD3'){
                        t43 = t.style.background;
                    }else if(t.style.gridArea.slice(0,5)=='P2hD4'){
                        t44 = t.style.background;
                    }else if(t.style.gridArea.slice(0,5)=='P2hD5'){
                        t45 = t.style.background;
                    }else if(t.style.gridArea.slice(0,5)=='P2hE2'){
                        t52 = t.style.background;
                    }else if(t.style.gridArea.slice(0,5)=='P2hE3'){
                        t53 = t.style.background;
                    }else if(t.style.gridArea.slice(0,5)=='P2hE4'){
                        t54 = t.style.background;
                    }else if(t.style.gridArea.slice(0,5)=='P2hE5'){
                        t55 = t.style.background;
                    }
                });
                if(P2s[0].style.background == t22 &&
                    P2s[1].style.background == t23 &&
                    P2s[2].style.background == t24 &&
                    P2s[3].style.background == t25 &&
                    P2s[4].style.background == t32 &&
                    P2s[5].style.background == t33 &&
                    P2s[6].style.background == t34 &&
                    P2s[7].style.background == t35 &&
                    P2s[8].style.background == t42 &&
                    P2s[9].style.background == t43 &&
                    P2s[10].style.background == t44 &&
                    P2s[11].style.background == t45 &&
                    P2s[12].style.background == t52 &&
                    P2s[13].style.background == t53 &&
                    P2s[14].style.background == t54 &&
                    P2s[15].style.background == t55 
                    ){
                        //completion check
                        hwin +=1;
                        //freeze count of moves
                        //no further tile swap
                        htot2moves = P2hmoves.innerHTML;
                        P2hmoves.innerHTML =" ";
                        P2hts.map(t=>{
                            t.style.background = 'transparent';
                        });
                        }         
                        hwinnerCheck();  
                        
                    }
            //winning check
            //have a c'mon variable to check the completion of the games
            //and leaderboard stuffs
            const hwinnerCheck =()=>{
            if(hwin == 2){
                applause.play();
                mhs = Array.from(document.querySelectorAll('.mhs'));
                mhs.map(t=>{
                    t.style.background = 'transparent';
                });
                console.log(player1Name);
                console.log(hplayer2Name);
                console.log(htot1moves);
                console.log(htot2moves);
                if(htot1moves<htot2moves && hplayer1Name!=""&& hplayer2Name!=""){
                    let score = localStorage.getItem('Mhscore');
                    if(!score || htot2moves<parseInt(score)){
                        localStorage.setItem('Mhname',hplayer1Name);
                        localStorage.setItem('Mhscore',htot1moves);                    
                    }
                    let hgoalDis = document.querySelector('.hwinBoard');
                    hgoalDis.style.display='flex';
                    hgoalDis.innerHTML= '<h1>'+hplayer1Name+' wins 🔥'+'</h1>'+'<p style="color:red;">'+'moves: '+htot1moves+'</p>';
                }
                else if(htot1moves>htot2moves && hplayer2Name!=""&& hplayer1Name!=""){
                    let score = localStorage.getItem('Mhscore');
                    if(!score || htot1moves<parseInt(score)){
                        localStorage.setItem('Mhname',hplayer2Name);
                        localStorage.setItem('Mhscore',htot2moves);                    
                    }
                    let hgoalDis = document.querySelector('.hwinBoard');
                    hgoalDis.style.display='flex';
                    hgoalDis.innerHTML = '<h1>'+hplayer2Name+' wins 🔥'+'</h1>'+'<p style="color:red;">'+'moves: '+htot2moves+'</p>';
                }
                else if(htot1moves==htot2moves && hplayer2Name!="" &&hplayer1Name!=""){
                    let hgoalDis = document.querySelector('.hwinBoard');
                    hgoalDis.style.display='flex';
                    hgoalDis.innerHTML = '<h1>'+'DRAW'+'</h1>';
                
                }
            }
        }
        document.querySelector('#hardPM').innerHTML = localStorage.Mhname;
        document.querySelector('#hardSM').innerHTML = localStorage.Mhscore;
        const introPage2 = document.querySelector('.introm');
        const hardPage = document.querySelector('.hardM');

        const hmodeM = document.querySelector('.hmodesM');


hmodeM.addEventListener('click',function(){
    mwin = 0;
    mstopMotion = 0;
    document.querySelector('#name1').value = '';
    document.querySelector('#name2').value = '';
    
    applause.stop();
    
    introPage2.style.display = 'flex';
    hardPage.style.display = 'none';
    P1hmoves.innerHTML = "";
    P2hmoves.innerHTML = "";
    let mgoalDis = document.querySelector('.hwinBoard');
    mgoalDis.style.display='none';
    
    mhs = Array.from(document.querySelectorAll('.mhs'));
    mhs.map(tile=>{
        tile.style.background = 'white';
    });
    let P1hts = Array.from(document.querySelectorAll('.P1ht'));
    P1hts.map(tile=>{
        tile.style.background = 'white';
    });
    let P2hts = Array.from(document.querySelectorAll('.P2ht'));
    P2hts.map(tile=>{
        tile.style.background = 'white';
    });
});