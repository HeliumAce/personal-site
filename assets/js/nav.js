document.addEventListener('DOMContentLoaded', function() {
  const nav = document.querySelector('.work-nav');
  let lastScroll = window.scrollY;
  let showNavTimer = null;
  
  window.addEventListener('scroll', () => {
    clearTimeout(showNavTimer);
    
    const currentScroll = window.scrollY;
    const scrollingDown = currentScroll > lastScroll;
    
    // Check if at bottom of page
    const bottomThreshold = 150; // pixels from bottom
    const atBottom = (window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - bottomThreshold;
    
    if (atBottom) {
      nav.classList.remove('nav-hidden');
    } else if (scrollingDown) {
      nav.classList.add('nav-hidden');
    } else {
      showNavTimer = setTimeout(() => {
        nav.classList.remove('nav-hidden');
      }, 15);
    }
    
    lastScroll = currentScroll;
  });
}); 