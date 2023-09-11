const title = document.getElementById('title');
const nameField = document.getElementById('nameField');
const signinBtn = document.getElementById('signinBtn');
const signupBtn = document.getElementById('signupBtn');


//function for signup btn
signupBtn.onclick = function(){
    title.innerHTML = "Sign Up";
    nameField.style.display = "block";
}