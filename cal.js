function fn0(){
    let previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previous + 0;
}
function fn1(){
    let previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previous + 1;
}
function fn2(){
    let previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previous + 2;
}
function fn3(){
    let previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previous + 3;
}
function fn4(){
    let previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previous + 4;
}
function fn5(){
    let previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previous + 5;
}
function fn6(){
    let previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previous + 6;
}
function fn7(){
    let previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previous + 7;
}
function fn8(){
    let previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previous + 8;
}

function fn9(){
    let previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previous + 9;
}
let op;
let firstsave;
function fnER(){
    let previous = document.getElementById("display").innerHTML;
    let prerased= previous.slice(0,-1);
    document.getElementById("display").innerHTML = prerased;
}


function fnAD(){
    firstsave = document.getElementById("display").innerHTML;
   document.getElementById("display").innerHTML = 0;
   op =1;
}
function fnMN(){
    firstsave = document.getElementById("display").innerHTML;
   document.getElementById("display").innerHTML = 0;
   op =2;
}
function fnML(){
    firstsave = document.getElementById("display").innerHTML;
   document.getElementById("display").innerHTML = 0;
   op =3;
}
function fnSB(){
    firstsave = document.getElementById("display").innerHTML;
   document.getElementById("display").innerHTML = 0;
   op =4;
}
function fnEQ(){
    let secondsave =document.getElementById("display").innerHTML;
    if(op==1){
        document.getElementById("display").innerHTML = parseInt(firstsave) + parseInt(secondsave);
    }
    else if
    (op==2){
        document.getElementById("display").innerHTML = parseInt(firstsave) - parseInt(secondsave);
    }
    else if
    (op==3){
        document.getElementById("display").innerHTML = parseInt(firstsave) * parseInt(secondsave);
    }
    else if
    (op==4){
        document.getElementById("display").innerHTML= parseInt(firstsave) / parseInt(secondsave);
    }
    else{
        document.getElementById("display").innerHTML= "Invalid";
    }

}
function fnAC(){
   
   document.getElementById("display").innerHTML = 0;
   op =0;
   firstsave=0;
   secondsave=0;
}
