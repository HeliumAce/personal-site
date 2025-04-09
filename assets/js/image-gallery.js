document.addEventListener('DOMContentLoaded', function() {
  const galleries = document.querySelectorAll('.image-gallery');
  
  galleries.forEach(gallery => {
    const header = gallery.querySelector('.image-gallery-header');
    const content = gallery.querySelector('.image-gallery-content');
    
    // Set initial state
    const expanded = gallery.getAttribute('data-expanded') === 'true';
    if (!expanded) {
      content.style.display = 'none';
    }
    
    // Toggle gallery on header click
    header.addEventListener('click', () => {
      const isExpanded = gallery.getAttribute('data-expanded') === 'true';
      gallery.setAttribute('data-expanded', isExpanded ? 'false' : 'true');
      
      if (isExpanded) {
        content.style.display = 'none';
      } else {
        content.style.display = 'block';
      }
    });
  });
}); 