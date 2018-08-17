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
        console.log(jsonObj.userId);
    }
    httpReq.send();
}

// wywołanie funkcji z parametrem
ajax("get", "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl");
