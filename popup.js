document.addEventListener('DOMContentLoaded', () => {
    // Elementos para Iniciar Sesión
    const loginBtn = document.getElementById('login-btn');
    const loginPopup = document.getElementById('login-popup');
    const closeLogin = document.getElementById('close-login');

    // Elementos para Registro
    const signupLink = document.getElementById('signup-link');
    const signupPopup = document.getElementById('signup-popup');
    const closeSignup = document.getElementById('close-signup');

    // Mostrar ventana de Iniciar Sesión
    loginBtn.addEventListener('click', () => {
        loginPopup.classList.remove('hidden');
    });

    // Cerrar ventana de Iniciar Sesión
    closeLogin.addEventListener('click', () => {
        loginPopup.classList.add('hidden');
    });

    // Mostrar ventana de Registro
    signupLink.addEventListener('click', (e) => {
        e.preventDefault(); // Prevenir el comportamiento por defecto del enlace
        loginPopup.classList.add('hidden');
        signupPopup.classList.remove('hidden');
    });

    // Cerrar ventana de Registro
    closeSignup.addEventListener('click', () => {
        signupPopup.classList.add('hidden');
    });
});
