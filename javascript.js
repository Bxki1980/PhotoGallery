// Get the featured image and figcaption elements
const featuredImage = document.getElementById('featured');
const thumbnails = document.getElementById('thumbnails').getElementsByTagName('img');

// Add click event listener for each thumbnail image
for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener('click', function () {
        // Update the featured image source and alt text
        featuredImage.src = this.dataset.full;
        featuredImage.alt = this.alt;
        
        // Add grayscale to all thumbnails and remove it from the active one
        for (let j = 0; j < thumbnails.length; j++) {
            thumbnails[j].style.filter = 'grayscale(100%)';
        }
        this.style.filter = 'none';
        
        // Update the figcaption with the alt text
        const caption = document.querySelector('figcaption');
        caption.textContent = this.alt;
    });
}
