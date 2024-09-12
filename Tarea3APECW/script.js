// Escuchamos el evento 'submit' del formulario cuando se envía
document.getElementById('clienteForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Evitar el envío automático del formulario y recarga de la página

    // Obtenemos los valores ingresados por el usuario
    const cedula = document.getElementById('cedula').value;
    const apellidos = document.getElementById('apellidos').value;
    const nombres = document.getElementById('nombres').value;
    const direccion = document.getElementById('direccion').value;
    const telefono = document.getElementById('telefono').value;
    const email = document.getElementById('email').value;
    const ciudad = document.getElementById('ciudad').value;

    // Mostrar los datos ingresados en el div resultado
    document.getElementById('resultado').innerHTML = `
        <h3>Datos del Cliente:</h3>
        <p><strong>Cédula:</strong> ${cedula}</p>
        <p><strong>Apellidos:</strong> ${apellidos}</p>
        <p><strong>Nombres:</strong> ${nombres}</p>
        <p><strong>Dirección:</strong> ${direccion}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Ciudad:</strong> ${ciudad}</p>
    `;
});

