let result = 15;

function add(num1, num2) {
    let result = num1 + num2;
    console.log(result);

}

add(3,3);
console.log(result);


if(true){
    var value = 'to prawda';
}
// działa bo var ma zasięg poza fukncję
console.log(value);


if(true){
    let newVal = 'nie prawda'; // zadziała tylko przy takim zapisie
    console.log(newVal);
}
// nie zadziała - let ma zasięg blokowy-funkcyjny
//console.log(newVal);


let variable;

function print() {
  /* let zmienia na wartość lokalną */ variable = 'zmienna';
}

print();
console.log(variable);