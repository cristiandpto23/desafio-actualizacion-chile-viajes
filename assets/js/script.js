// Tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// Se añade los elementos que se quieren modificar (selector id)
let nav = document.querySelector('#navbar');
// se añade un elemento que escucha el evento scroll mayor que 100
window.addEventListener('scroll', function () {
    if (window.scrollY > 100) {
        // si es mayor, se quita la clase bg-trasparent y se añade bg-dark
        nav.classList.remove('bg-transparent');
        nav.classList.add('bg-dark');
    } else {
        // caso contrario, se quita bg-dark y se añade bg-transparent
        nav.classList.remove('bg-dark');
        nav.classList.add('bg-transparent');
    }
})


// Mensaje alerta formulario
document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault(); // 
    alert('Su mensaje ha sido enviado con éxito. ¡Gracias por contactarnos!');
    this.reset();
});


// Modal terminos y condiciones
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
    myInput.focus()
})