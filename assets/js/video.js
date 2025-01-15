document.addEventListener('DOMContentLoaded', function() {
  console.log('Video script loaded');
  
  const buttons = document.querySelectorAll('.video-trigger');
  console.log('Found video buttons:', buttons.length);
  
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      console.log('Video button clicked');
      console.log('Video ID:', this.dataset.videoId);
      
      const videoId = this.dataset.videoId;
      const iframe = document.createElement('iframe');
      
      iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`;
      iframe.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;border:0;border-radius:4px;';
      iframe.allow = 'autoplay';
      iframe.allowFullscreen = true;
      
      const wrapper = document.createElement('div');
      wrapper.style.cssText = 'position:relative;padding-bottom:56.25%;';
      wrapper.appendChild(iframe);
      
      console.log('Replacing button with iframe');
      this.parentNode.replaceChild(wrapper, this);
    });
  });
}); 