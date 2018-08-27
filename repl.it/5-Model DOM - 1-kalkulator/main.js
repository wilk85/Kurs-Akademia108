// document.addEventListener("DOMContentLoaded", function() {
//     console.log("DOM fully loaded and parsed");
//   });
let display = document.querySelector('.display');
let btns = document.querySelectorAll('.buttons');

for(let i=0; i<btns.length; i++){
    btns[i].addEventListener('click', (e) => {
        display.innerText += e.target.id; 
        
        // if(e.target.id == '/'){
        //     display.innerText += e.target.id; 
        // } 
        // else if(e.target.id == '*'){
        //     console.log('działa *');
        // }
        // else if(e.target.id == '-'){
        //     console.log('działa -');
        // }
        // else if(e.target.id == '+'){
        //     console.log('działa +');
        // }
        if(e.target.id == '='){
            display.innerText = eval(e.target.id); 
        }
        // else if(e.target.id == 'C'){
        //     console.log('działa C');
        // }
        // else{
        //     display.innerText += e.target.id ;
        // }
    })
    
} 
    

