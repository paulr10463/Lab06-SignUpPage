// Función para validar el formulario
export function validateForm(name, email, password, confirm, agree) {

    // Validar que el nombre no esté vacío
    if (name == "") {
        alert("Por favor ingrese su nombre");
        return false;
    }

    // Validar que el correo electrónico sea válido
    if (email == "" || !email.includes("@")) {
        alert("Por favor ingrese un correo electrónico válido");
        return false;
    }

    // Validar que la contraseña tenga al menos seis caracteres
    if (password == "" || password.length < 6) {
        alert("Por favor ingrese una contraseña de al menos seis caracteres");
        return false;
    }

    // Validar que la confirmación de la contraseña coincida con la contraseña
    if (confirm == "" || confirm != password) {
        alert("Las contraseñas no coinciden");
        return false;
    }

    // Validar que el usuario acepte los términos y condiciones
    if (!agree) {
        alert("Por favor acepte los términos y condiciones");
        return false;
    }

    // Si todo está bien, retornar verdadero
    return true;

}
