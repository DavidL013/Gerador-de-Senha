let sliderelement = document.querySelector("#slider");
let buttonelement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");
let containerpassword =document.querySelector("#container-password");


let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@";
let novasenha = "";

sizePassword.innerHTML = sliderelement.value;

slider.oninput = function(){
    sizePassword.innerHTML = this.value;
}

function generatepassword(){

   let pass = "";

   for(let i = 0, n = charset.length; i < sliderelement.value; ++i){
      pass += charset.charAt(Math.floor(Math.random() * n));
   }
   containerpassword.classList.remove("hide");
   password.innerHTML = pass;
   novasenha = pass;
}


