//player mode page swap
const medModeBtn = document.querySelector('#mediumM');
medModeBtn.addEventListener('click',()=>{
    let mediumModePage = document.querySelector('.mediumM');
    let intromPage = document.querySelector('.introm');
    intromPage.style.display = 'none';
    mediumModePage.style.display = 'flex';
});