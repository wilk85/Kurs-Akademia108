import React from 'react';

const Imie = (props) => {
    
    return(
        
        <div id="imie">{props.osoba.imie} {props.osoba.nazwisko} {props.osoba.wiek}</div>
    )
}

export default Imie;

//komponent funkcyjny używamy props.element, używamy gdy chcemy coś wyświetlić