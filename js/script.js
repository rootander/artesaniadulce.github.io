document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');
    const toggleSwitch = document.getElementById('toggle-switch');
    const textSwitch = document.getElementById('text-switch');


    registerBtn.addEventListener('click', () => {
        container.classList.add("active");
    });

    loginBtn.addEventListener('click', () => {
        container.classList.remove("active");
    });


    const toggleForm = () => {
        if (toggleSwitch.checked) {
         
             textSwitch.textContent = 'Iniciar sesión';
             container.classList.add("active");  
         
        } else {
            textSwitch.textContent = 'Registrarse';
            container.classList.remove("active"); 
        }
    };


    toggleSwitch.addEventListener('click', toggleForm);

    
    toggleForm();
});
