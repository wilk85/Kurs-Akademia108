
// tworzenie elemtnów
let newListItem = document.createElement('li');
let text = document.createTextNode('umiejętność 13');
console.log(newListItem);

newListItem.appendChild(text);
newListItem.setAttribute('class', 'skill');

document.getElementsByTagName('ul')[0].appendChild(newListItem);

// zastępowanie węzłów
let h3 = document.createElement('h3');
h3.innerText = 'siała baba mak';

document.querySelector('p').parentElement.replaceChild(h3, document.querySelector('p'));

// wstaw przed
let h1 = document.createElement('h1');
h1.innerText = 'h1';
document.querySelector('h2').parentElement.insertBefore(h1, document.querySelector('h2'));

// usuwanie węzła
document.getElementsByTagName('ul')[0].removeChild(document.getElementsByTagName('ul')[0].firstElementChild.nextElementSibling);

// zmiana zawartości znaczników
let heading = document.querySelector('h2')
heading.innerHTML = 'nowa <span>treść</span>';
//document.querySelector('h2').outerHTML = '<p>nowy paragraf</p>';
console.log(heading.innerText);

// zarządzanie atrybutami
console.log(document.querySelector('a').href);

document.querySelector('a').href = 'https://www.wp.pl';

document.querySelector('a').classList.add('link');

// manipulacja stylami
document.querySelector('a').style.color = '#ff8300';

// wyciąganie wartości
console.log(document.querySelector('input').value);