const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const slider = document.querySelector('.product-slider');

let scrollAmount = 0;
const scrollStep = 220;  // Adjust this value based on your card width and margin
const maxScroll = slider.scrollWidth - slider.clientWidth;

prevButton.addEventListener('click', () => {
    scrollAmount -= scrollStep;
    if (scrollAmount < 0) scrollAmount = 0;
    slider.style.transform = `translateX(-${scrollAmount}px)`;
});

nextButton.addEventListener('click', () => {
    scrollAmount += scrollStep;
    if (scrollAmount > maxScroll) scrollAmount = maxScroll;
    slider.style.transform = `translateX(-${scrollAmount}px)`;
});


/*slider 2*/

let currentSlide = 0;

function slide(direction) {
    const slider = document.querySelector('.slider');
    const cards = document.querySelectorAll('.card');
    const totalSlides = cards.length;
    const cardWidth = cards[0].clientWidth;

    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    const newTransformValue = -currentSlide * cardWidth;
    slider.style.transform = `translateX(${newTransformValue}px)`;
}

 // Scroll Reveal Animation

  const sr = ScrollReveal({

    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
  })
  sr.reveal(`.header-main .search-bar .header-icons.section-title, .section-subtitle, .section-description, .brand-image, .tesitmonial, .newsletter 
  .logo-content, .newsletter-inputBox, .newsletter-mediaIcon,.instagram-section,.instagram-gallery .footer .row .conta .footer-col, .footer-links`, {interval:100,})
  
sr.reveal(`.about-imageContent, .menu-items`, {origin: 'left'})
sr.reveal(`.about-details, .time-table`, {origin: 'right'})