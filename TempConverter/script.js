//cachng the Dom
const cinput=document.querySelector('#celcius > input');
const finput=document.querySelector('#fahrenheit > input');
const kinput=document.querySelector('#kelvin > input');

  function twoDecimalPlaces(num){
   let returnValue = Math.round(num*100)/100;
   return returnValue;
}

function celciusInput(){
    let cval=parseFloat(cinput.value);
    let fval= cval*9/5+32;
    let kval=273.15+cval;
    finput.value=twoDecimalPlaces(fval);
    kinput.value=twoDecimalPlaces(kval);
}

function farenheitInput(){
    let fval = parseFloat(finput.value);
    let cval =(fval-32)*5/9;
    cinput.value=twoDecimalPlaces(cval);
    let kval=(fval+459.67)*5/9;
    kinput.value=twoDecimalPlaces(kval);
}

function kelvinInput(){
    let kval= parseFloat(kinput.value);
    let fval=kval*9/5-459.67;
    let cval=kval-273.15;
    finput.value=twoDecimalPlaces(fval);
    cinput.value=twoDecimalPlaces(cval);
}

//read input 
cinput.addEventListener("input",celciusInput);
finput.addEventListener("input",farenheitInput);
kinput.addEventListener("input",kelvinInput);
