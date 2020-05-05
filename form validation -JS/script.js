const form = document.getElementById("form");
const userName =document.getElementById("userName");
const email =document.getElementById("email");
const passsword =document.getElementById("password");
const password2 =document.getElementById("password2");

form.addEventListener('submit',function(e) {
    e.preventDefault();//prevent form submission and take over the process
   console.log(userName.value);
    



});
