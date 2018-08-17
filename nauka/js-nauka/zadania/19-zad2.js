
let btn = document.querySelector('.dodaj').addEventListener('click', ()=>{
    let lii = document.createElement('li');
    let countLi = document.getElementsByClassName('skill').length;
    lii.innerText = 'umiejętność ' + (countLi + 1);
    lii.classList.add('skill');
    document.querySelector('ul').appendChild(lii);
});

document.querySelector('.usun').addEventListener('click', ()=>{
    if(document.getElementsByClassName('skill').length <= 0) return;
    let listItem = document.querySelector('ul').lastElementChild;
    listItem.parentNode.removeChild(listItem);
    
});

