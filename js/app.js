const galeria = [...document.querySelectorAll('#destacados .galeria__container .galeria__group')];
const lightbox = document.getElementById('lightbox');
const img = document.getElementById('img-lightbox');
const cerrarLightbox = document.getElementById('cerrar-lightbox');

for (const item of galeria) {
    item.addEventListener('click', async (e) => {
        if (e.target) {
            let src = await e.target.src;
            await img.setAttribute('src', src);
            lightbox.classList.add('active');
            cerrarLightbox.addEventListener('click', () => {
                lightbox.classList.remove('active');
            });
        }
    })
}

const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('header-menu')
const cerrarMenu = document.getElementById('header-menu-close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
    menu.addEventListener('click', () => {
        menu.classList.remove('active');
    })
});

cerrarMenu.addEventListener('click', () => {
    menu.classList.remove('active');
});

const formulario = document.getElementById('form');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const cotizacion = {
        nombre: document.getElementById('nombre').value,
        apellido: document.getElementById('apellido').value,
        email: document.getElementById('email').value,
        telefono: document.getElementById('telefono').value,
        pais: document.getElementById('pais').value,
        ciudad: document.getElementById('ciudad').value,
        fecha: document.getElementById('fecha').value,
        hora: document.getElementById('hora').value,
        comentarios: document.getElementById('comentarios').value
    }
    post(cotizacion);
})

const post = async (cotizacion) => {
    const url = 'https://sheet.best/api/sheets/84e51d5d-a2e4-4739-be11-0fb83e1578a4';
    const loader = document.getElementById('loader');
    loader.classList.add('active');
    await fetch(url, {
        method: 'POST',
        body: JSON.stringify(cotizacion),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
    loader.classList.remove('active');
    alert('¡Gracias por tu cotización!');
}
