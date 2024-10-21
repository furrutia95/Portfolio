const h2Element = document.getElementById('projects').querySelector('h2');
const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !h2Element.classList.contains('animate')) {
      h2Element.classList.add('animate');
    }
  }, {
    threshold: 1.0,
    rootMargin: '0px'
  });
  
  observer.observe(h2Element);