// szuka tylko po danych selektorach
let section = document.getElementById('about');
let listItems = document.getElementsByClassName('skill');
//console.log(listItems);

section.style.backgroundColor = 'lightblue';

for(let i=0; i<listItems.length; i++){
    listItems[i].style.color = 'green';
}

let heading = document.getElementsByTagName('h2');
heading[0].style.color = 'darkgray';
console.log(heading);


// wolniejsze wyszukiwanie , bo leci po wszystkich selektorach dokumentu
let firstSkill = document.querySelector('.skill');
console.log(firstSkill);

let allSkills = document.querySelectorAll('.skill');
console.log(allSkills);

