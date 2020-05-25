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
// Dispaly Password do not match
function checkPasswoprdsMatch(input1,input2){
    if(input1.value != input2.value){
        showError(input2,"Please,enter the above password");
    }
}
//Check Emial is valid 
// function isEmailValid(email){
function checkEmail(input){    
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //  return re.test(String(email).toLowerCase());//test is used to determine whether match or not  
     if(re.test(input.value.trim())){
        showSuccess(input);
     }
     else
        showError(input,"Invalid Email");
}
//dsplay field 
function getFieldName(input){
    // return input.id.charAt(0);//return character at 0 index of the string
    // return input.id.slice(1); //cut of the 1st letter in the string(we donot refer index)
   return input.id.charAt(0).toUpperCase() + input.id.slice(1);
   //show concatinated output
}

// check require function
function checkRequired(inputArray){
    inputArray.forEach(function(input){
// trim removes white space,if not inputed whitespace is also show sucess
       if(input.value === ""){
           showError(input,`${getFieldName(input)} is required`);
       }
       else
            showSuccess(input);
    })
} 
function checkLength(input,min,max){
    if(input.value.length<min){
        showError(input,`${getFieldName(input)} must be at least ${min} characters long.`);
    }
    else if(input.value.length>max)
        showError(input,`${getFieldName(input)} must be less than ${max} characters.`)
    else
        showSuccess(input);
}
//Event Listeners 
form.addEventListener('submit',function(e) {
    e.preventDefault();//prevent form submission and take over the process
   
    // if(userName.value === ""){
    //     showError(userName,"User Name is Required");
    // }else{
    //     showSuccess(userName);
    // }

    // if (email.value ===""){
    //     showError(email,"Email is Required");
    // }else if(!isEmailValid(email.value)){
    //     showError(email,"Email is not Valid");
    // }
    // else{
    //     showSuccess(email);
    // }

    // if(password.value === ""){
    //    showError(password,"Enter password");
    // }else{
    //     showSuccess(password);
    // }
    // if(password2.value === ""){
    //     showError(password2,"Enter Confirm password");
    // }else{
    //     showSuccess(password2);
    // }
    checkRequired([userName,email,password,password2]);  
    checkLength(userName,4,10);
    checkLength(password,8,18);
    checkEmail(email);
    checkPasswoprdsMatch(password,password2);

});
