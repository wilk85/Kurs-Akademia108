

function duza(str1){
    let strList = str1.split(' ');
    for(let i=0; i<strList.length; i++){   
        let neww = strList[i].charAt(0).toUpperCase() + strList[i].substr(1);
        console.log(neww); 
    }
}
 
duza('moja fujara robi się super duża :D');
