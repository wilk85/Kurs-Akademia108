document.addEventListener('click', function(e){
    if(e.target.tagName !== 'BUTTON'){
        return;
    } 

    document.getElementById('result').innerText += e.target.innerText;

    // console.log(e.target.innerText);
    // napisz obsługę dodawania treści z buttonów do paragrafu o id result
})
