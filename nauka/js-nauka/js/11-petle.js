
// for(let i = 0; i < 10; i++){
//     console.log(i);
// }

let users = [
    {
        name: 'baltazar',
        gender: 'male'
    },

    {
        name: 'trol',
        gender: 'male'
    },

    {
        name: 'flora',
        gender: 'female'
    }

]

// let userMale = [];

// for (let i = 0; i < users.length; i++){
//     if (users[i].gender == 'male') {
//         userMale.push(users[i]);
//     }
// }

// console.log(userMale);

//let users2 = [];


// dla tablic

// users.forEach((element, index) => {
//     if(element.gender == 'male'){
//         userMale.push(element);
//     }
    
// });

// let userMale = users.filter((user) => {
//     return user.gender == 'male';
// });
// console.log(userMale);


// pętla while

let random = parseInt(Math.random()*10);

// while (random != 5) {
//     console.log(random);
//     random = parseInt(Math.random()*10);
// }

// do {
//     console.log(random);
//     random = parseInt(Math.random()*10);
// } while (random != 5);

// for(let i = 1; i<10; i++){
//     console.log(i);
//     if(i%7==0) break;
// }

for(let i=0; i<20; i++){
    if(i%2==0) continue;
    console.log(i);
}