
  
  const faqs = document.querySelectorAll('.faq');
  faqs.forEach(faq => {
    faq.addEventListener('click', () => {
      const answer = faq.querySelector('.lower');
      const icon = faq.querySelector('svg');
      answer.classList.toggle('open');
      icon.style.transform = answer.classList.contains('open') ? 'rotate(45deg)' : 'rotate(0deg)';
    });
  });

  
  const movies = document.querySelectorAll('.top');
  const boxesContainer = document.querySelector('.boxes');
  const allBoxes = document.querySelectorAll('.box');
  const closeBtns = document.querySelectorAll('.close');

 
  movies.forEach((movie, index) => {
    movie.addEventListener('click', () => {
      allBoxes.forEach(box => box.classList.remove('active'));
      boxesContainer.classList.add('active');
      allBoxes[index].classList.add('active');
    });
  });

  
  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      boxesContainer.classList.remove('active');
      allBoxes.forEach(box => box.classList.remove('active'));
    });
  });

  
  boxesContainer.addEventListener('click', (e) => {
    if (e.target === boxesContainer) {
      boxesContainer.classList.remove('active');
      allBoxes.forEach(box => box.classList.remove('active'));
    }
  });

