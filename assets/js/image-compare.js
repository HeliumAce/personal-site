document.addEventListener('DOMContentLoaded', function() {
  const comparers = document.querySelectorAll('.image-compare');
  
  comparers.forEach(comparer => {
    const handle = comparer.querySelector('.slider-handle');
    const wrapper = comparer.querySelector('.image-wrapper');
    const afterImage = comparer.querySelector('.image-after');
    const tooltips = handle.querySelectorAll('.tooltip-before, .tooltip-after');
    
    let isDragging = false;
    
    // Set initial state - after image starts hidden on the left
    afterImage.style.clipPath = `polygon(0 0, 50% 0, 50% 100%, 0 100%)`;
    handle.style.left = '50%';
    
    const getPercentage = (x) => {
      const rect = wrapper.getBoundingClientRect();
      const percentage = ((x - rect.left) / rect.width) * 100;
      return Math.min(Math.max(percentage, 0), 100);
    };
    
    const updateSlider = (x) => {
      const percentage = getPercentage(x);
      handle.style.left = `${percentage}%`;
      afterImage.style.clipPath = `polygon(0 0, ${percentage}% 0, ${percentage}% 100%, 0 100%)`;
    };

    // Handle hover states
    handle.addEventListener('mouseenter', () => {
      if (!isDragging) {
        tooltips.forEach(tooltip => tooltip.style.opacity = '1');
      }
    });

    handle.addEventListener('mouseleave', () => {
      tooltips.forEach(tooltip => tooltip.style.opacity = '0');
    });
    
    // Mouse events - only on handle
    handle.addEventListener('mousedown', (e) => {
      isDragging = true;
      e.preventDefault();
      tooltips.forEach(tooltip => tooltip.style.opacity = '0');
    });
    
    document.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      e.preventDefault();
      requestAnimationFrame(() => {
        updateSlider(e.clientX);
      });
    });
    
    document.addEventListener('mouseup', () => {
      isDragging = false;
    });
    
    // Touch events
    handle.addEventListener('touchstart', (e) => {
      isDragging = true;
      e.preventDefault();
      tooltips.forEach(tooltip => tooltip.style.opacity = '0');
    });
    
    document.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      e.preventDefault();
      requestAnimationFrame(() => {
        updateSlider(e.touches[0].clientX);
      });
    });
    
    document.addEventListener('touchend', () => {
      isDragging = false;
    });
  });
}); 