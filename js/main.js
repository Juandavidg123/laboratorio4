const form = document.getElementById('formulario');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
    const mostrarDatos = document.getElementById('dataForm');

    mostrarDatos.innerHTML = `
        <p>Nombre: ${nombre}</p>
        <p>Edad: ${edad}</p>
    `;
});