const mf=document.getElementById("forms");
const mailInput = document.getElementById("mail");
const subbut1=document.getElementById("sub-button");
const errorspace=document.getElementById("error-space");
/*

it is the code for functionality while entering the input

function isValidEmail(email) {
    const regex = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    return regex.test(email);
}

function handleInputChange() {
    const email = mailInput.value.trim();

    if (email === "") {
      subbut1.disabled = true;
      mailInput.classList.remove("error");
      errorspace.textContent = ""; 
    } else if (isValidEmail(email)) {
      subbut1.disabled = false;
      mailInput.classList.remove("error");
      errorspace.textContent = ""; 
    } else {
      subbut1.disabled = true;
      mailInput.classList.add("error");
      errorspace.textContent = "valid email required";
    }
  }

 mailInput.addEventListener("input", handleInputChange);

function areFieldsFilled(){

    const field1=document.getElementById("mail").value;
    return field1.trim()!=="";
}

subbut1.addEventListener("click",function(){
    if(areFieldsFilled()){
        const field1=document.getElementById("mail").value;
        const email=encodeURIComponent(field1);
        window.location.href=`thank_you.html?email=${email}`;
    }
    else{
        errorspace.textContent="email is required";
    }
});*/


//it is the code for functionality after clicking the button inorder to show the error state


function isValidEmail(email) {
    const regex = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    return regex.test(email);
  }
  
  subbut1.addEventListener("click", function () {
    const email = mailInput.value.trim();
  
    if (email === "") {
        mailInput.classList.remove("error");
        errorspace.textContent = "Email is required";
    } else if (isValidEmail(email)) {
        mailInput.classList.remove("error");
        window.location.href = `thank_you.html?email=${encodeURIComponent(email)}`;
    } else {
      errorspace.textContent = "Valid email required";
      mailInput.classList.add("error");
    }
  });

  function handleInputChange() {
    const email = mailInput.value.trim();

    if (email === "") {
      mailInput.classList.remove("error");
      errorspace.textContent = ""; 
    } 
  }

  mailInput.addEventListener("input", handleInputChange);
  
  
  
  
  