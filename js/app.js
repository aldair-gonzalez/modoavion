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