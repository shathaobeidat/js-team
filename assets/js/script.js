

const users = [];



const signupForm = document.querySelector(".form-sign-up");

const userName = document.querySelector("#user-name");

const email = document.querySelector("#Email");

const password = document.querySelector("#password");

const confirmPassword = document.querySelector("#conform-pass");


function validateEmail(email) {

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(email);
}


function check() {

    const nameValue = userName.value.trim();

    const userEmail = email.value.trim();

    const userPassword = password.value;

    const userConfirmPassword = confirmPassword.value;


    if (
        nameValue === "" ||
        userEmail === "" ||
        userPassword === "" ||
        userConfirmPassword === ""
    ) {

        window.alert("All fields are required");

        return;
    }


    if (!validateEmail(userEmail)) {

        window.alert("Invalid Email");

        return;
    }


    if (userPassword !== userConfirmPassword) {

        window.alert("Passwords do not match");

        return;
    }

    

    const emailExist = users.some(users => users.email === userEmail);
    
    if (emailExist){
        window.alert("Email already exists");
        return;

    }
    

    if (emailExist) {

        window.alert("Email already exists");

        return;
    }


    const newUser = {

        name: nameValue,

        email: userEmail,

        password: userPassword

    };


    users.push(newUser);


    console.log("Signup successful");

    console.log(users);

    signupForm.reset();
}


signupForm.addEventListener("submit", function (event) {

    event.preventDefault();

    check();

});

const loginText = document.querySelector(".title-text .login");
      const loginForm = document.querySelector("form.login");
      const loginBtn = document.querySelector("label.login");
      const signupBtn = document.querySelector("label.signup");
      const signupLink = document.querySelector("form .signup-link a");
      signupBtn.onclick = (()=>{
        loginForm.style.marginLeft = "-50%";
        loginText.style.marginLeft = "-50%";
      });
      loginBtn.onclick = (()=>{
        loginForm.style.marginLeft = "0%";
        loginText.style.marginLeft = "0%";
      });
      signupLink.onclick = (()=>{
        signupBtn.click();
        return false;
      });



