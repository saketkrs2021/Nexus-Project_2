{
    const form = document.getElementsByClassName("form-box")[0];
    // const email = form[0].getElementsByClassName("Email");
    const email = form.childNodes[9][1];
    // const password = form.getElementsByClassName("Password");
    const password = form.childNodes[9][2];
    // console.log(form.childNodes);
    
    // Function to validate the email
    const validateEmail = (inputEmail)=> inputEmail.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    
    // Function to validate password
    const validatePassword = (inputPassword) => inputPassword.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    
    const emailError = form.childNodes[9].childNodes[5];
    const passwordError = form.childNodes[9].childNodes[9];
    // console.log(passwordError);
    // Function used to display errors
    const generateError = (errorName, errorMsg) =>{
        
        if(errorName == "email"){
            emailError.innerText = errorMsg;  
        }else if(errorName == "password"){
            passwordError.innerText = errorMsg;
        }
    }
    
    const formValidate = (inputEmail, inputPassword) =>{
        if(!validateEmail(inputEmail)){
            var emailError = "please enter a valid email address";
            generateError("email",emailError);
            return false;
        }
        // if(!validatePassword(inputPassword)){
        //     var passwordError = "please enter correct password";
        //     generateError("password",passwordError);
        //     return;
        // }
        return true;
    }
    
    
    //triggers when user submits the form
    form.addEventListener("submit",(e) => {
        e.preventDefault();
        if(formValidate(email, password));
        $(this).unbind('submit').submit();
    });
    
    // Focusout event listener. Triggers when the user clicks anywhere else besides the input
    email.addEventListener("focusout", (e)=>{
        if(!validateEmail(email)){
            email.style.borderColor = "red";
            generateError("email", "Please enter a valid email");
            email.parentElement.classList.add("error");
        }
        else{
            email.style.borderColor = "black";
            email.parentElement.classList.remove("error");
            emailError.innerText = "";
             
        }
    });
    
    // Focusout event listener triggers when the user clicks anywhere else besides the input
    password.addEventListener("focusout", (e)=>{
        if(!validatePassword(password)){
            password.style.borderColor = "red";
            generateError("password", "Please enter a valid password");
            password.parentElement.classList.add("error");
        }
        else{
          password.style.borderColor = "black";
          password.parentElement.classList.remove("error");
          passwordError.innerText = "";   
        }
    });
    }