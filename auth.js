// Pega tu ID de Cliente de Google aquí.
const GOOGLE_CLIENT_ID = '333271854024-e81ul0m8auq159gvbrkj1f6bovvn53h2.apps.googleusercontent.com';

/**
 * Función que decodifica el JSON Web Token (JWT) de Google.
 * ¡OJO! Esto es solo para obtener datos en el cliente.
 * Nunca confíes en esta decodificación en un servidor sin una verificación de firma.
 * @param {string} token El token JWT.
 * @returns {object} El payload del token decodificado.
 */
function decodeJwtResponse(token) {
    try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        return JSON.parse(jsonPayload);
    } catch (e) {
        console.error("Error decoding JWT", e);
        return null;
    }
}

/**
 * Esta es la función de callback que Google llama después de un inicio de sesión exitoso.
 * @param {object} response El objeto de credenciales de Google.
 */
function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    const responsePayload = decodeJwtResponse(response.credential);

    if (responsePayload) {
        console.log("ID: " + responsePayload.sub);
        console.log('Full Name: ' + responsePayload.name);
        console.log('Given Name: ' + responsePayload.given_name);
        console.log('Family Name: ' + responsePayload.family_name);
        console.log("Image URL: " + responsePayload.picture);
        console.log("Email: " + responsePayload.email);

        // Guardamos los datos del usuario en localStorage para mantener la sesión
        const userData = {
            id: responsePayload.sub,
            name: responsePayload.name,
            email: responsePayload.email,
            picture: responsePayload.picture,
        };
        localStorage.setItem('evolvivoUser', JSON.stringify(userData));

        // Redirigimos al usuario a la página principal
        window.location.href = 'index.html';
    }
}

/**
 * Función para cerrar la sesión del usuario.
 */
function handleLogout() {
    // Deshabilitamos el inicio de sesión automático de Google
    google.accounts.id.disableAutoSelect();
    
    // Borramos los datos del usuario de localStorage
    localStorage.removeItem('evolvivoUser');

    // Actualizamos la UI para que muestre el estado de "no logueado"
    updateUI();
    
    // Opcional: recargar la página para un reinicio limpio
    window.location.reload();
}


/**
 * Actualiza la interfaz de usuario (el header) para reflejar el estado de inicio de sesión.
 */
function updateUI() {
    const userDataString = localStorage.getItem('evolvivoUser');
    const signupButton = document.getElementById('signup-button');
    const userInfoDiv = document.getElementById('user-info');
    
    if (userDataString && userInfoDiv && signupButton) {
        // El usuario ha iniciado sesión
        const userData = JSON.parse(userDataString);
        
        // Ocultamos el botón de "Sign Up"
        signupButton.style.display = 'none';

        // Mostramos la información del usuario
        userInfoDiv.style.display = 'flex';
        document.getElementById('user-name').textContent = `Welcome, ${userData.name.split(' ')[0]}!`;
        document.getElementById('user-picture').src = userData.picture;
        
        // Añadimos el evento al botón de logout
        document.getElementById('logout-button').addEventListener('click', handleLogout);

    } else if (userInfoDiv && signupButton) {
        // El usuario NO ha iniciado sesión
        signupButton.style.display = 'block';
        userInfoDiv.style.display = 'none';
    }
}


// --- INICIALIZACIÓN ---

// Esta función se ejecuta cuando la página y el script de Google han cargado.
window.onload = function () {
    if (typeof google !== 'undefined') {
        google.accounts.id.initialize({
            client_id: GOOGLE_CLIENT_ID,
            callback: handleCredentialResponse // La función que se llamará tras el login
        });

        // Renderiza el botón de Google en el div que preparamos en el HTML
        const googleButtonContainer = document.getElementById('g_id_signin');
        if (googleButtonContainer) {
            google.accounts.id.renderButton(
                googleButtonContainer,
                { theme: "outline", size: "large" } // Personalización del botón
            );
        }

        // Muestra el popup "One Tap" si el usuario no ha cerrado sesión explícitamente
        // google.accounts.id.prompt();
    } else {
        console.error("Google Identity Services library not loaded.");
    }

    // Finalmente, actualizamos la UI en todas las páginas al cargarlas
    updateUI();
};