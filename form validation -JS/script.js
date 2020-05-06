const form = document.getElementById("form");
const userName =document.getElementById("userName");
const email =document.getElementById("email");
const password =document.getElementById("password");
const password2 =document.getElementById("password2");
 //function:Show input Error msg
 function showError(input,msg){
     //Selecting the formcontrol div element out of inputdata
     const formControl =input.parentElement;
     //overiding the class of parent
     formControl.className = "form-control error";
     const small = formControl.querySelector('small');
     small.innerText=msg;
 }
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}
//Check Emial is valid 
function isEmailValid(email){
    
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       return re.test(String(email).toLowerCase());
    
}
//Event Listeners
form.addEventListener('submit',function(e) {
    e.preventDefault();//prevent form submission and take over the process
   
    if(userName.value === ""){
        showError(userName,"User Name is Required");
    }else{
        showSuccess(userName);
    }

    if (email.value ===""){
        showError(email,"Email is Required");
    }else if(!isEmailValid(email.value)){
        showError(email,"Email is not Valid");
    }
    else{
        showSuccess(email);
    }

    if(password.value === ""){
       showError(password,"Enter password");
    }else{
        showSuccess(password);
    }
    if(password2.value === ""){
        showError(password2,"Enter Confirm password");
    }else{
        showSuccess(password2);
    }
    


});
