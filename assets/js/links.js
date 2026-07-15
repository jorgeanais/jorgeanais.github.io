/*===== LINKS PAGE SCROLL REVEAL =====*/
const srLinks = ScrollReveal({
    origin: 'top',
    distance: '40px',
    duration: 800,
    delay: 200,
});

srLinks.reveal('.links__intro', {});
srLinks.reveal('.links__category-title', { delay: 300 });
srLinks.reveal('.links__card', { interval: 100, delay: 400 });
