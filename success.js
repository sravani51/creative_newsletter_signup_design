const urlparams=new URLSearchParams(window.location.search);
const email=urlparams.get("email");
if(email){
    document.getElementById("displayEmail").textContent=decodeURIComponent(email);
}