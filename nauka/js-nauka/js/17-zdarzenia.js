let head = document.querySelector('h2');
let ulList = document.querySelector('ul');
let par = document.querySelector('p');
let link = document.querySelector('a');


function changeColor() {
    this.style.color = 'orange';
}


ulList.onclick = changeColor;
head.addEventListener('click', changeColor);
head.addEventListener('mouseover', function(){
    this.style.backgroundColor = 'gray';
});

par.addEventListener('click', function(){
    this.style.color = 'red';
    head.removeEventListener('click', changeColor);
});

document.body.addEventListener('click', function(){
    this.style.backgroundColor = 'pink';
});

// blokowanie zdarzeń
link.addEventListener('click', function(e){
    this.style.backgroundColor = 'lightblue';
    e.preventDefault();
    e.stopPropagation();
    console.log(e);

});
