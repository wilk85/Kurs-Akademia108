'use strict';

let person = {
    name: 'Baltazar',
    age: '19',
    height: 172,
    hobbies: ['piłka', 'gry'],
    partner: {
        name: 'Joanna', 
        gender: 'kobieta', 
        hobbies: ['spanie', 'bieganie']
    },

    printInfo() {
        console.log(`Imię to: ${this.name} \n  Wiek to: ${this.age}`);
    }
}

console.log(person);
// różne metody wyciągania wartości z obiektu 
console.log(person.name);
console.log(person['age']);

person.printInfo() // bez console.log - Baltazar


person.name = 'Zyzio'; // przypisanie nowej wartości do obiektu person.name zmienia imię na Zyzio


person.printInfo() // bez console.log - Zyzio


console.log(person.hobbies[0]); // wyciąganie z tablicy obiektu

console.log(person.partner.name);
console.log(`Partner osoby o imieniu ${person.name} ma na imię ${person.partner.name} i jej zaiteresowania to ${person.partner.hobbies[0]} i ${person.partner.hobbies[1]}`);


// ========================================================================================
// KLASY

class GymUser {
    constructor(weight, height) {
        this.weight = weight;
        this.height = height;
    }

    countBmi() {
        return this.weight/(this.height*this.height)
    }

    displayMsg() {
        console.log(`Twoje bmi to ${this.countBmi()}`)
    }
}

let currentUser = new GymUser(68, 1.81);

console.log(currentUser)

currentUser.displayMsg(); // tak wygląda wywołanie obiektu i metody klasy

console.log(currentUser.countBmi(60, 1.90)) // tak wygląda wywołanie obiektu klasy i metody ale bez console.log

let currentUser2 = new GymUser(70, 1.45);

currentUser2.displayMsg()
console.clear();

class edgeLen {
    constructor(length) {
        this.length = length;
    }

    countCapacity() {
        return 6*(this.length*this.length);
    }
    countWall() {
        return (this.length*this.length*this.length);
    }

    displayLen() {
        console.log(`Pole szceścianu to: ${this.countCapacity} \n Pole ściany to: ${this.countWall}`)
    }
}

let cube = new edgeLen(3);
cube.displayLen()

// NAPRAWIC!


class Osoba {
    constructor(name) {
        this.name = name;
    }

    info() {
        console.log(this.name)
    }
}

class Programista extends Osoba {
    constructor(name, skills) {
        super(name);
        this.skills = skills;
    }
}

let programmer = new Programista('adam', ['html', 'css', 'js']);
console.log(programmer)
programmer.info()
