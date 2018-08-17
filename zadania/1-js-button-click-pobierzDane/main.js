

    function ajax(metoda, url){

        let httpReq = new XMLHttpRequest();
        httpReq.open(metoda, url);

        httpReq.onreadystatechange = function(){
            
            if(httpReq.readyState == 4){
                if(httpReq.status == 200){
                    let returnData = httpReq.responseText;   
                    httpReq.onsuccess(returnData);
                    httpReq = null;
                }
            }  

        }

            httpReq.onsuccess = function(response){

                let jsonObj = JSON.parse(response);
                let p1 = document.createElement('p');
                let p2 = document.createElement('p');
                let p3 = document.createElement('p');
                p1.innerText = jsonObj.userId;
                p2.innerText = jsonObj.userName;
                p3.innerText = jsonObj.userURL;
                document.body.appendChild(p1);
                document.body.appendChild(p2);
                document.body.appendChild(p3);
                
            }

        httpReq.send();  
    }  

function pobierzDane(){
    ajax("get", "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl");
    
    
};

document.getElementById('btn').addEventListener('click', pobierzDane);

