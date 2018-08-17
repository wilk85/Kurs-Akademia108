
class Ksiazka {
    constructor(autor, tytul, przeczytana){
        this.autor = autor;
        this.tytul = tytul;
        this.przeczytana = przeczytana;
    }

    opiszKsiazke(){
        if(this.przeczytana == true){   
        return `Książka ma tytuł: ${this.tytul}, autorem jest: ${this.autor}, przeczytana`; 
        } 
        else {
            return `Książka ma tytuł: ${this.tytul}, autorem jest: ${this.autor}, nie przeczytana`; 
        }
    }
}

let k1 = new Ksiazka('A. Sapkowski', 'Wiedźmin', true);
let k2 = new Ksiazka('George R.R. Martin', 'Gra o tron', false);
let k3 = new Ksiazka('A. Mickiewiecz', 'Pan Tadeusz', false);

let arr = [k1,k2,k3];

function iloscPrzeczytanych(arr){
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i].przeczytana == true){
            sum++;
        }
        console.log(arr[i].opiszKsiazke());
    }
    console.log(`Ilość przeczytanych książek : ${sum}`);
}

iloscPrzeczytanych(arr);