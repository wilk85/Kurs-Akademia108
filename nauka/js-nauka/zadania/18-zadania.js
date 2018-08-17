let btn = document.querySelector('button');
let p1 = document.querySelector('.p11');
let p2 = document.querySelector('.p22');

console.log(btn);

function bgColor(){
    p1.classList.add('.bg-blue');
    p2.classList.toggle('.bg-gray');
}

btn.addEventListener('click', bgColor)


