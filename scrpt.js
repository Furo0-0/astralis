document.addEventListener('wheel', function (e) {
  if (window.scrollY === 0 && e.deltaY < 0) {
    e.preventDefault(); // Prevent scrolling past the top
  }
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight && e.deltaY > 0) {
    e.preventDefault(); // Prevent scrolling past the bottom
  }
}, { passive: false });