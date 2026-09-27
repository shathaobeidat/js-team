
let users = JSON.parse(localStorage.getItem('users')) || [];

//signup-info
const signupBtn = document.querySelector('.sign-btn');
const usernameInput = document.getElementById('user-name'); 
const emailInput = document.getElementById('Email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('conform-pass');
//login-info
const loginBtn = document.getElementById('submit-btn'); 
const loginEmailInput = document.getElementById('email');
const loginPasswordInput = document.getElementById('password');
//signup
if (signupBtn) {
    signupBtn.addEventListener('click', (e) => {
        e.preventDefault(); 

      
        const username = usernameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        if (!username || !email || !password || !confirmPassword) {
            alert('Please fill all fields');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        for (let user of users) {
            if (email === user.email) {
                alert("This email already exists!");
                return; 
            }
        }

        const newUser = {
            username: username,
            email: email,
            password: password
        };

        users.push(newUser);

        localStorage.setItem('users', JSON.stringify(users));

        alert('Your account has been created successfully!');
       
        usernameInput.value = '';
        emailInput.value = '';
        passwordInput.value = '';
        confirmPasswordInput.value = '';
    });
}
//login
if (loginBtn) {
    loginBtn.addEventListener('click', (e) => {
        e.preventDefault(); 

        const email = loginEmailInput.value.trim();
        const password = loginPasswordInput.value;

        if (!email || !password) {
            alert('Please fill all fields');
            return;
        }

        let isFound = false;

        for (let user of users) {
            if (email === user.email && password === user.password) {
                isFound = true;
                break; 
            }
        }

        if (isFound) {
            alert("Logged in successfully!");
            
            loginEmailInput.value = '';
            loginPasswordInput.value = '';
        } else {
            alert("Your email or password is not correct!");
        }
    });
}