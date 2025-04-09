document.addEventListener('DOMContentLoaded', function() {
  // Handle both old and new component classes
  const components = document.querySelectorAll('.image-gallery, .expand-collapse-card');
  
  components.forEach(component => {
    // Determine which class names to use based on component type
    const isLegacy = component.classList.contains('image-gallery');
    const headerClass = isLegacy ? '.image-gallery-header' : '.expand-collapse-card-header';
    const contentClass = isLegacy ? '.image-gallery-content' : '.expand-collapse-card-content';
    
    const header = component.querySelector(headerClass);
    const content = component.querySelector(contentClass);
    
    // Set initial state
    const expanded = component.getAttribute('data-expanded') === 'true';
    if (!expanded) {
      content.style.display = 'none';
    }
    
    // Toggle component on header click
    header.addEventListener('click', () => {
      const isExpanded = component.getAttribute('data-expanded') === 'true';
      component.setAttribute('data-expanded', isExpanded ? 'false' : 'true');
      
      if (isExpanded) {
        content.style.display = 'none';
      } else {
        content.style.display = 'block';
      }
    });
  });
}); 