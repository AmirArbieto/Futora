 // Verificar si el título se desborda y agregar la clase desbordado si es necesario
function verificarDesbordamiento() {
    const titulo = document.querySelector('.Titulo div h1');
    const contenedor = document.querySelector('.Titulo');
    
    if (titulo.offsetWidth < titulo.scrollWidth) {
        titulo.classList.add('TituloDesbordado');
    } else {
        titulo.classList.remove('TituloDesbordado');
    }
  }
  
// Ejecutar la verificación cuando la ventana cambie de tamaño
window.addEventListener('resize', verificarDesbordamiento);
  
// Ejecutar la verificación al cargar la página
window.addEventListener('load', verificarDesbordamiento);
  
// Cargar el contenido del menú en el contenedor
fetch('Menu.html')
    .then(response => response.text())
    .then(content => {
        document.getElementById('MenuContenedor').innerHTML = content;
});


// Abrir menú  
function abrirMenu() {
    var menu = document.getElementById('MenuContenedor');
    // var btnAbrir = document.querySelector('#btnAbrir');
    menu.style.display = 'flex';
    // btnAbrir.style.display = 'none';
}
  
// Cerrar menú  
function cerrarMenu() {
    var menu = document.getElementById('MenuContenedor');
    // var btnAbrir = document.querySelector('#btnAbrir');
    menu.style.display = 'none';
    // btnAbrir.style.display = 'block';
}
 
/* ---------------------------------------------------------------------------------------- */
// Mostrar contraseña  
function mostrarPasswords() {
    var passwordField = document.getElementById("frmPasswords");
    var confirmField = document.getElementById("frmConfirm_passwords");
    var passwordEye = document.querySelector(".MostrarOcultarOjo");
  
    if (passwordField.type === "password") {
        passwordField.type = "text";
        confirmField.type = "text";
        passwordEye.src = "img/OjoAbierto.png";
    } else {
        passwordField.type = "password";
        confirmField.type = "password";
        passwordEye.src = "img/OjoCerrado.png";
    }
}
  
 