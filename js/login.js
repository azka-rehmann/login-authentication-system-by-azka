const loginForm=document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener("submit",async function(e){

e.preventDefault();

const loginUser=document.getElementById("loginUser").value.trim();
const loginPassword=document.getElementById("loginPassword").value;

const error=document.getElementById("loginError");

error.textContent="";

if(!loginUser||!loginPassword){

error.textContent="Please fill in all fields.";

return;

}

const users=JSON.parse(localStorage.getItem("users"))||[];

const hashedPassword=await hashPassword(loginPassword);

const user=users.find(u=>

(u.username.toLowerCase()===loginUser.toLowerCase()||

u.email.toLowerCase()===loginUser.toLowerCase())

&&

u.password===hashedPassword

);

if(!user){

error.textContent="Invalid username/email or password.";

return;

}

localStorage.setItem("loggedInUser",JSON.stringify(user));

window.location.href="dashboard.html";

});

}