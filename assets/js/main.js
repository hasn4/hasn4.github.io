function show_menu() {
  document.getElementById('menu-closed').classList.add('hidden');
  document.getElementById('menu-open').classList.remove('hidden');
  document.getElementsByTagName('body')[0].classList.add('no-scroll');
}

function hide_menu() {
  document.getElementById('menu-closed').classList.remove('hidden');
  document.getElementById('menu-open').classList.add('hidden');
  document.getElementsByTagName('body')[0].classList.remove('no-scroll');
}

// Open image in full-screen
function openImage(src) {
  src = src.replace('small','large')
  const overlay = document.getElementById('image-overlay');
  const fullscreenImage = document.getElementById('fullscreen-image');
  
  fullscreenImage.src = src; // Set the clicked image source to the full-screen image
  overlay.classList.remove('hidden'); // Show the overlay
}

// Close image when clicking the close button or outside the image
function closeImage() {
  const overlay = document.getElementById('image-overlay');
  overlay.classList.add('hidden'); // Hide the overlay
}