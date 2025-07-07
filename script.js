// script.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Desplazamiento suave para enlaces de navegación
    const navLinks = document.querySelectorAll('nav a[href^="#"]'); // Selecciona todos los enlaces de nav que empiezan con #

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Previene el comportamiento predeterminado del enlace

            const targetId = this.getAttribute('href'); // Obtiene el ID del destino (ej. #servicios)
            const targetElement = document.querySelector(targetId); // Selecciona el elemento destino

            if (targetElement) {
                // Desplazamiento suave hasta el elemento
                window.scrollTo({
                    top: targetElement.offsetTop - (document.querySelector('header').offsetHeight || 0), // Ajuste para el header fijo si lo hubiera
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. Mostrar/Ocultar el botón "Volver al Inicio"
    const backToTopButton = document.querySelector('.back-to-top-button');

    window.addEventListener('scroll', () => {
        // Muestra el botón cuando el usuario ha bajado lo suficiente
        if (window.scrollY > 300) { // Puedes ajustar este valor
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // Desplazamiento suave para el botón "Volver al Inicio" (ya tiene href="#inicio")
    // Se beneficia de la primera funcionalidad, pero si no la quieres, puedes añadirle un listener específico
    // backToTopButton.addEventListener('click', function(e) {
    //     e.preventDefault();
    //     window.scrollTo({
    //         top: 0,
    //         behavior: 'smooth'
    //     });
    // });


    // 3. Manejo simple del envío del formulario de contacto
    const contactForm = document.querySelector('.formulario-contacto');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Evita el envío real del formulario (recarga de página)

            // Obtener valores de los campos (ejemplo)
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Validación básica (puedes expandir esto)
            if (name && email && message) {
                // Aquí iría la lógica para enviar los datos a un servidor
                // (por ejemplo, usando fetch() o XMLHttpRequest)
                console.log('Datos del formulario:', { name, email, message });

                // Simulación de éxito
                alert('¡Gracias por tu mensaje, ' + name + '! Nos pondremos en contacto contigo pronto.');

                // Limpiar el formulario
                this.reset();
            } else {
                alert('Por favor, completa todos los campos del formulario.');
            }
        });
    }
});