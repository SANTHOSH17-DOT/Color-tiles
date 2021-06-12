//player mode page swap
const hardModeBtn = document.querySelector('#hardM');
hardModeBtn.addEventListener('click',()=>{
    let hardModePage = document.querySelector('.hardM');
    let intromPage = document.querySelector('.introm');
    intromPage.style.display = 'none';
    hardModePage.style.display = 'flex';
});