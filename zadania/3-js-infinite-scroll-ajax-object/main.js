
// wyliaczanie wysokości całego okna skrol + wysokość okna

window.addEventListener('scroll', function(){
    let windHeight = this.innerHeight; //wysokość okna
    console.log(windHeight);
    let skroling = this.pageYOffset; //pozaycja skrola
    console.log(skroling);
    let docHeight = document.documentElement.offsetHeight; // całkowita wysokość dokumentu
    console.log(windHeight + skroling);
    if(windHeight + skroling == docHeight){
        // console.log('koniec strony');
        ajax("get", "https://jsonplaceholder.typicode.com/users");
    }
}) // koniec 

// definicja funkcji ajax
function ajax(metoda, url){
    // 1. tworzenie nowej instancji xmlhttprequest
    let httpReq = new XMLHttpRequest();
    // 2. otwarcie połączenia
    httpReq.open(metoda, url);
    // onreadystatechange - wykonuje sie za kazdym razem kiedy zmienia sie readyState

    // 3. wywołanie pętli sprawdzającej zmiane readyState
    httpReq.onreadystatechange = function(){
        // readyState - zawiera aktualny status połączenia 
        // 0: połączenie nie nawiązane, 
        // 1: połączenie nawiązane, 
        // 2: żądanie odebrane, 
        // 3: przetwarzanie,
        // 4: dane zwrócone i gotowe do użycia)

        // 4. sprawdzenie readyState
        if(httpReq.readyState == 4){
            // 5. sprawdzenie statusu http
            if(httpReq.status == 200){
                // 6. przypisanie danych do zmiennych
                let returnData = httpReq.responseText; // lub (this.resposneText)
                // 7. wykonanie funkcji na danych z wcześniejszego kroku
                httpReq.onsuccess(returnData);
                // 8. zamknięcie połączenia
                httpReq = null;
            }
        }     
    }
    // obsługa naszych danych
    httpReq.onsuccess = function(response){
        // tworzę zmienna żeby sparsować response
        let jsonObj = JSON.parse(response);
        console.log(jsonObj[0].id);
        for(let i=0; i<jsonObj.length; i++){
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p');

            p1.innerText = jsonObj[i].id;
            p2.innerText = jsonObj[i].name;
            p3.innerText = jsonObj[i].website;

            document.body.appendChild(p1);
            document.body.appendChild(p2);
            document.body.appendChild(p3);
            
            // for(let key in jsonObj[i]){
            //     document.body.appendChild(jsonObj[i][key]);
            // }
        }
    }
    httpReq.send();
}

// wywołanie funkcji z parametrem
