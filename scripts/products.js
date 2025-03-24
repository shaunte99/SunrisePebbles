// Lightbox functionality
const lightbox = document.getElementById('lightbox');
const closeBtn = document.getElementById('close-lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const productLinks = document.querySelectorAll('.lightbox-link');

productLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        lightbox.style.display = 'flex';
        lightboxImg.src = this.href;
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});
