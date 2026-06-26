/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset
    const isAtBottom = (window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 2;

    sections.forEach((current, index) =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id')
        const navLink = document.querySelector('.nav__menu a[href="#' + sectionId + '"]');
        
        if (navLink) {
            if (isAtBottom) {
                if (index === sections.length - 1) {
                    navLink.classList.add('active');
                } else {
                    navLink.classList.remove('active');
                }
            } else {
                if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                    navLink.classList.add('active')
                }else{
                    navLink.classList.remove('active')
                }
            }
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .contact__input',{interval: 200}); 

/*==================== PORTFOLIO TABS ====================*/
const tabs = document.querySelectorAll('.work__tab');
const tabContents = document.querySelectorAll('.work__content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('work__content-active');
        });
        target.classList.add('work__content-active');

        tabs.forEach(tab => {
            tab.classList.remove('work__tab-active');
        });
        tab.classList.add('work__tab-active');
    });
});
