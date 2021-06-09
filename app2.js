const medBtn = document.querySelector('#medium');
var tileSound = new sound("tilesound.wav");
var mediumopen = new sound("mediumopen.wav");
var applause = new sound("applause.wav");
var gameover = new sound("gameover.wav");

const mrandom_puzzle=()=>{
    let Congrats = document.querySelector('.msol_back');
    Congrats.style.color = 'transparent';
    clearInterval(interval);
    mtime.innerHTML='2:00';
    //Set of colours to be used
    var colors1 = ['red','red','red','blue','blue','blue','yellow','yellow','yellow','green','green','green','brown','brown','brown','orange','orange','orange','orange'];

    //goal generator

    var k = 1;
    while(k<=3){
        var l =1;
        while(l<=3){
        //random number which chooses the color from the colors1
        let n = Math.floor(Math.random()*colors1.length);
        
        const y = document.querySelector(`.ms${k}${l}`);
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
        const x = document.querySelector(`.mt${j}${i}`);
        x.style.background = colors2[n];
        x.style.cursor = 'auto';
        colors2.splice(n,1);
        i++;
        }
        j++;
        }
}
medBtn.addEventListener('click',function(){
    const introPage = document.querySelector('.intro');
    const medPage = document.querySelector('.medium');

    introPage.style.display = 'none';
    medPage.style.display = 'flex';
    mstartGame.disabled=false;
    mediumopen.play();
    mrandom_puzzle();
});
const mts = Array.from(document.querySelectorAll('.mt'));
        const mstartGame = document.querySelector('.mstart');
        var mtime = document.querySelector('.mclock');
        var mmoves = document.querySelector('.mmoves');
        mstartGame.addEventListener('click',function(){
            mstartGame.disabled=true;
            console.log('thu');
            mmoves.textContent = 0;
            clearInterval(interval);
            mtime.innerHTML='2:00';
        
            let transTile = document.querySelector('.mttr');
            mtimeLeft();
            munlock(transTile.style.gridArea);
                
            
            });
            var interval;
            const mtimeLeft = ()=>{
                 var m_s = mtime.innerHTML;
                var timer = m_s.split(':');
                var m = timer[0];
                var s = timer[1];
                interval = setInterval(function(){
                        
                if (m>0 && s==0){
                    m -=1;
                    s = 59;
                    }
                    if(m==0 && s==0){
                            
                        let mts = Array.from(document.querySelectorAll('.mt'));
                        mts.map(t=>{t.style.cursor = 'auto';
                        t.style.pointerEvents = 'none';
                        });
                            gameover.play();
                            
                        clearInterval(interval);
                            }
                    mtime.innerHTML = m+':'+s;
                     s -=1;
                    },1000
                    )
                }
                var mactiveTiles = {
                    mA1:['mA2','mB1'],
                    mA2:['mA1','mB2','mA3'],
                    mA3:['mA2','mA4','mB3'],
                    mA4:['mA3','mB4','mA5'],
                    mA5:['mA4','mB5'],
                    mB1:['mA1','mB2','mC1'],
                    mB2:['mA2','mB1','mB3','mC2'],
                    mB3:['mA3','mB2','mC3','mB4'],
                    mB4:['mB5','mB3','mA4','mC4'],
                    mB5:['mA5','mB4','mC5'],
                    mC1:['mC2','mB1','mD1'],
                    mC2:['mC1','mB2','mD2','mC3'],
                    mC3:['mC2','mC4','mB3','mD3'],
                    mC4:['mC3','mC5','mB4','mD4'],
                    mC5:['mC4','mB5','mD5'],
                    mD1:['mD2','mC1','mE1'],
                    mD2:['mD1','mC2','mE2','mD3'],
                    mD3:['mD2','mD4','mC3','mE3'],
                    mD4:['mD3','mD5','mE4','mC4'],
                    mD5:['mD4','mE5','mC5'],
                    mE1:['mE2','mD1'],
                    mE2:['mD2','mE1','mE3'],
                    mE3:['mE4','mE2','mD3'],
                    mE4:['mE5','mE3','mD4'],
                    mE5:['mD5','mE4']
                }
                const mttr = document.querySelector('.mttr');

    const munlock = (k)=>{
        
        mts.map(tile=>{
            const y = tile.style.gridArea;
            
            if(mactiveTiles[k.slice(0,3)].includes(y.slice(0,3))==false){
            
                tile.style.pointerEvents = 'none';
                tile.style.cursor = 'auto';
                
        }else{
            tile.style.pointerEvents = 'auto';
            tile.style.cursor = 'pointer';
        }
            });
        }
        mts.map(t =>
            t.addEventListener('click',()=>{
                mcheck();
                const tileArea = t.style.gridArea;
                const transTileArea = mttr.style.gridArea;
                
                //shifting position
                t.style.gridArea = transTileArea;
                mttr.style.gridArea= tileArea;
                munlock(mttr.style.gridArea);
                tileSound.play();
    
                //score increment
                var mmoves = document.querySelector('.mmoves');
                clicks = mmoves.textContent;
                mmoves.textContent = parseInt(clicks)+1;
                
            })
        );
        const mcheck = ()=>{
            console.log('yes');
            let s = Array.from(document.querySelectorAll('.ms'));
            let t22;let t23; let t24; let t32; let t33; let t34; let t42; let t43;let t44;
            mts.map(t=>{
                if(t.style.gridArea.slice(0,3) == 'mB2'){
                    t22 = t.style.background;
                }else if(t.style.gridArea.slice(0,3)=='mB3'){
                    t23 = t.style.background;
                }else if(t.style.gridArea.slice(0,3)=='mB4'){
                    t24 = t.style.background;
                }else if(t.style.gridArea.slice(0,3)=='mC2'){
                    t32 = t.style.background;
                }else if(t.style.gridArea.slice(0,3)=='mC3'){
                    t33 = t.style.background;
                }else if(t.style.gridArea.slice(0,3)=='mC4'){
                    t34 = t.style.background;
                }else if(t.style.gridArea.slice(0,3)=='mD2'){
                    t42 = t.style.background;
                }else if(t.style.gridArea.slice(0,3)=='mD3'){
                    t43 = t.style.background;
                }else if(t.style.gridArea.slice(0,3)=='mD4'){
                    t44 = t.style.background;
                }
            });
            if(s[0].style.background == t22 &&
                s[1].style.background == t23 &&
                s[2].style.background == t24 &&
                s[3].style.background == t32 &&
                s[4].style.background == t33 &&
                s[5].style.background == t34 &&
                s[6].style.background == t42 &&
                s[7].style.background == t43 &&
                s[8].style.background == t44 
                ){
                    console.log('yes');
                    clearInterval(interval);
                    let ts = Array.from(document.querySelectorAll('.mt'));
                    let Congrats = document.querySelector('.msol_back');
                    mts.map(t=>{
                        t.style.cursor = 'auto';
                        t.style.pointerEvents = 'none';
                        t.style.background = 'transparent';
                        Congrats.style.color = 'black';
                        tileSound.stop();
                        applause.play();
                        

                    });
                    let score = localStorage.getItem('mmoves');
                    let mmoves = document.querySelector('.mmoves');
                    let mname = document.querySelector('#name');
                    console.log(mname.value);
                    console.log(mname.value !="");
                    if(!score || mname.value != "" && parseInt(mmoves.textContent)<parseInt(score)){
                        localStorage.setItem('mname',mname.value);
                        localStorage.setItem('mmoves',mmoves.textContent);
                        
                        
                    }
                
                console.log(localStorage);
                    
                }
            
        }
        document.querySelector('#medP').innerHTML = localStorage.mname;
        document.querySelector('#medS').innerHTML = localStorage.mmoves;
    
const mmode = document.querySelector('.mmodes');
mmode.addEventListener('click',function(){
    const introPage = document.querySelector('.intro');
    const medPage = document.querySelector('.medium');

    var mmoves = document.querySelector('.mmoves');
    mmoves.textContent = 0;
    var mt = Array.from(document.querySelectorAll('.mt'));
    mt.map(t=>{
        t.style.cursor = 'auto';
        t.style.pointerEvents = 'none';
    });
    applause.stop();
    gameover.stop();
    introPage.style.display = 'flex';
    medPage.style.display = 'none';
});