document.getElementById('user-detail-button').addEventListener('click', checkLoginAndRedirect);
document.getElementById('logout-button').addEventListener('click', logout)
document.addEventListener('DOMContentLoaded', function(){
    updateUIBasedOnLoginStatus();
})
// Funciones para el login y registro

function checkLoginAndRedirect() {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser) {
        window.location.href = 'html/detalle_usuario.html';
    } else {
        openLoginModal();
    }
}

function logout(){
    localStorage.removeItem('loggedInUser');
    updateUIBasedOnLoginStatus();
}

function updateUIBasedOnLoginStatus() {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    const logginButton = document.getElementById('login-button');
    const registerButton = document.getElementById('register-button');
    const userDetailButton = document.getElementById('user-detail-button');
    const logoutButton = document.getElementById('logout-button');
    if(loggedInUser){
        logginButton.style.display = 'none';
        registerButton.style.display = 'none';
        userDetailButton.style.display = 'inline-block';
        logoutButton.style.display = 'inline-block';
    }
    else{
        logginButton.style.display = 'inline-block';
        registerButton.style.display = 'inline-block';
        userDetailButton.style.display = 'none';
        logoutButton.style.display = 'none';
    }
}

function setupLoginForm() {
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', async function(event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const loginMessage = document.getElementById('login-message');

        try {
            const response = await fetch('https://api.escuelajs.co/api/v1/users/');
            const users = await response.json();

            const user = users.find(user => user.email === email && user.password === password);

            if (user) {
                loginMessage.style.color = 'green';
                loginMessage.textContent = 'Login exitoso';
                localStorage.setItem('loggedInUser', JSON.stringify(user));
                window.location.href = 'html/detalle_usuario.html';
            } else {
                loginMessage.style.color = 'red';
                loginMessage.textContent = 'Email o contraseña incorrectos';
            }
        } catch (error) {
            loginMessage.style.color = 'red';
            loginMessage.textContent = 'Error al intentar loguearse';
            console.error('Error:', error);
        }
    });
}

function setupRegisterForm() {
    const registerForm = document.getElementById('register-form');
    registerForm.addEventListener('submit', async function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const registerMessage = document.getElementById('register-message');

        try {
            const response = await fetch('https://api.escuelajs.co/api/v1/users/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: password,
                    avatar: 'https://api.lorem.space/image/face?w=640&h=480' // Añadir un avatar genérico
                })
            });

            if (response.ok) {
                registerMessage.style.color = 'green';
                registerMessage.textContent = 'Registro exitoso';
            } else {
                const errorData = await response.json();
                registerMessage.style.color = 'red';
                registerMessage.textContent = `Error: ${errorData.message}`;
            }
        } catch (error) {
            registerMessage.style.color = 'red';
            registerMessage.textContent = 'Error al intentar registrarse';
            console.error('Error:', error);
        }
    });
}
