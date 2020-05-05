const form = document.getElementById("form");
const userName =document.getElementById("userName");
const email =document.getElementById("email");
const passsword =document.getElementById("password");
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

//Event Listeners
form.addEventListener('submit',function(e) {
    e.preventDefault();//prevent form submission and take over the process
   
    if(userName.value === ""){
        showError(userName,"User Name is Required");
    }else{
        showSuccess(userName);
    }



});
