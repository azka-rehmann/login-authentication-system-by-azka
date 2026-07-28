const registerForm = document.getElementById("registerForm");

if (registerForm) {

registerForm.addEventListener("submit", async function(e){

e.preventDefault();

const username=document.getElementById("username").value.trim();
const email=document.getElementById("email").value.trim().toLowerCase();
const password=document.getElementById("password").value;

const error=document.getElementById("registerError");
const success=document.getElementById("registerSuccess");

error.textContent="";
success.textContent="";

if(!username || !email || !password){
error.textContent="Please fill in all fields.";
return;
}

const pattern=/^(?=.*\d).{8,}$/;

if(!pattern.test(password)){
error.textContent="Password must be at least 8 characters and contain at least 1 number.";
return;
}

const users=JSON.parse(localStorage.getItem("users"))||[];

const exists=users.find(user=>
user.username.toLowerCase()===username.toLowerCase()||
user.email.toLowerCase()===email
);

if(exists){
error.textContent="Username or email already exists.";
return;
}

const hashedPassword=await hashPassword(password);

users.push({
username,
email,
password:hashedPassword
});

localStorage.setItem("users",JSON.stringify(users));

success.textContent="Registration Successful!";

setTimeout(()=>{
window.location.href="index.html";
},1500);

});

}