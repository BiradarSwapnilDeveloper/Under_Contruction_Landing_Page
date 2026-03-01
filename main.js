emailjs.init("R3Pp0_LGWTXhUZMgb");

const btn=document.getElementById("notifyBtn");
const emailInput=document.getElementById("emailInput");
const warning=document.getElementById("warningText");

function validateEmail(email){
return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

emailInput.addEventListener("input",()=>{
btn.disabled=!validateEmail(emailInput.value);
warning.style.display="none";
});

btn.addEventListener("click",()=>{
if(!validateEmail(emailInput.value)){
warning.style.display="block";
return;
}

emailjs.send("service_a0vt00z","template_7hg18hc",{
to_email:emailInput.value,
message:"We have received your request. Once the website is ready, we will notify you."
})
.then(()=>{
btn.classList.add("success");
btn.innerHTML="Notified ✓";
})
.catch(()=>{
warning.innerHTML="Something went wrong. Try again.";
warning.style.display="block";
});
});

document.getElementById("phoneNumber").addEventListener("click",function(){
navigator.clipboard.writeText("+919067693696");
this.classList.add("copied");
this.innerHTML="✔ Number Copied!";
});