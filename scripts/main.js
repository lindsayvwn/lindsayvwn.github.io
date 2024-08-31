// Open the lightbox
function openLightbox(img) {
    var lightbox = document.getElementById("lightbox");
    var expandedImage = document.getElementById("expandedImage");
    var captionText = document.getElementById("caption");

    lightbox.style.display = "block";  // Show the lightbox
    expandedImage.src = img.src;       // Set the image source to the clicked image
    captionText.innerHTML = img.alt;   // Set the caption text to the image's alt text
}

// Close the lightbox
function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}