const randomBox = document.getElementById("random");
const length = 12;

const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase="abcdefghijklmnopqrstuvwxyz"
const number="0123456789"
const symbol="@#$%^&*()_+~|{}[]<>/-="

const characs= upperCase+lowerCase+number+symbol

function generatePassword(){
    let password = "";
    password +=upperCase[Math.floor(Math.random()*upperCase.length)];
    password +=lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password +=number[Math.floor(Math.random()*number.length)];
    password +=symbol[Math.floor(Math.random()*symbol.length)];

    while (length>password.length){
        password +=characs[Math.floor(Math.random()*characs.length)];

    }
    randomBox.value=password;
}
function copyPassword(){
    randomBox.select();
    document.execCommand("Copy")

}

var pass=document.getElementById("strength");
var message=document.getElementById("msg");
var check=document.getElementById("checker");

pass.addEventListener('input',() =>{
    if(pass.value.length > 0){
        message.style.display="block";
    }
    else{
        message.style.display="none";
    }
    if(pass.value.length < 4){
        check.innerHTML="WEAK";
        message.style.color= "#AA0000"; 

    }
    else if(pass.value.length >= 4 && pass.value.length < 8){
        check.innerHTML="MEDIUM";
        message.style.color= "#FFFF00"; 

    }
    else if(pass.value.length >= 8){
        check.innerHTML="STRONG";
        message.style.color= "#004953"; 

    }
})