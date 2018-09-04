function obliczZysk(k, n, m, r, podatek){
    
    let procPodatku;

    if(podatek) {
        procPodatku = r * 0.81;
    } else {
        procPodatku = r;
    }

    let kapital = k * Math.pow(1 + procPodatku / m, n*m);
    console.log(kapital); 
    return kapital.toFixed(2);
}

function oblicz(e) {
    e.preventDefault();
    let wplata = parseFloat(document.getElementById('wplata').value);
    
    let iloscLat = parseFloat(document.getElementById('ilosc-lat').value);
 
    let okresKapitalizacji = parseFloat(document.getElementById('okres-kapitalizacji').value);
 
    let oprocentowanie = parseFloat(document.getElementById('oprocentowanie').value) / 100;
    
    let podatek = document.getElementById('podatek').checked;

    let wynik = obliczZysk(wplata, iloscLat, okresKapitalizacji, oprocentowanie, podatek);

    document.getElementById('wynik').innerText = wynik;

}

document.getElementById('kalkulator').addEventListener('submit', oblicz);