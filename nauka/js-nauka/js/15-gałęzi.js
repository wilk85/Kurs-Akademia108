// węzły rodzica

let aboutParent = document.getElementById('about').parentElement;
console.log(aboutParent);
aboutParent.classList.add('about-container');

// węzły dzieci

let allChildren = document.getElementsByTagName('ul')[0].children;
console.log(allChildren);

let firstChild = document.getElementsByTagName('ul')[0].firstElementChild;
console.log(firstChild);
let lastChild = document.getElementsByTagName('ul')[0].lastElementChild;
console.log(lastChild);

document.getElementsByTagName('ul')[0].appendChild(firstChild);

// węzły rodzeństwa

let headSibling = document.querySelector('h2').nextElementSibling;
console.log(headSibling);
headSibling.style.display = 'none';

// modyfikacja wybranych elementów
for(i = 0; i<allChildren.length; i+=2) {
    //if(i%2==0 // lub 1 nie parzyste) dodatkowy sposób jak można to zrobić
    allChildren[i].style.marginLeft = 5 * i + 'px';
}

