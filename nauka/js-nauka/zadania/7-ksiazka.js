
class Ksiazka {
    constructor(autor, tytul, przeczytana){
        this.autor = autor;
        this.tytul = tytul;
        this.przeczytana = przeczytana;

        if(przeczytana){
           console.log('tak');
        }
    }
    opiszKsiazke(){
        console.log(`Książka ma tytuł: ${this.tytul}, autorem jest: ${this.autor}, została przeczytana:${this.przeczytana}`); 
    }
    
}

let k1 = new Ksiazka('wiedzmin', 'sapkowski', 'przeczytana');
k1.opiszKsiazke();