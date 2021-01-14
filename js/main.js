
//*******MENU

// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menuBranding = document.querySelector('.menu-branding');
const menuMobile = document.querySelector('.menu-mobile');
const navMobileItems = document.querySelectorAll('.nav-mobile-item');
// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menuMobile.classList.add('show');
    menuBranding.classList.add('show');
    navMobileItems.forEach(item => item.classList.add('show'));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menuMobile.classList.remove('show');
    menuBranding.classList.remove('show');
    navMobileItems.forEach(item => item.classList.remove('show'));

    // Set Menu State
    showMenu = false;
  }
}

//******More testimo
const testimoBtn = document.getElementById("testimo-btn");
const testimoDisplay = document.getElementById('testimo-display');
const moreTestimo = document.getElementById('more-testimo'); 

const allTestimo = () => {
  testimoDisplay.style.display = "grid";
  moreTestimo.style.display ='none';
}
testimoBtn.addEventListener('click', allTestimo);

//******Translates 
const translateBtn = document.getElementById("translate-btn");
const trParagraph = document.getElementById('tr-paragraph');
const moreTranslate = document.getElementById('more-translate'); 
const enParagraph = document.getElementById('en-paragraph');

const Translator = () => {
  enParagraph.style.display='block';
  trParagraph.style.display='none';
  moreTranslate.style.display ='none';
}
translateBtn.addEventListener('click', Translator);

//******ANIMATION FOR METHODS
window.addEventListener("load", ()=> {
  const onboardMethod = document.getElementById('onboard-method');
  onboardMethod.style.transform = 'translate3d(0,0,0)';
});

//******MOBILE MENU DISPLAY
const navMobileLink = document.querySelectorAll('.nav-mobile-link');

navMobileLink.forEach(mobileLink => {
  mobileLink.addEventListener('click', ()=>{
    if (!showMenu) {
      menuBtn.classList.add('close');
      menuMobile.classList.add('show');

      // Set Menu State
      showMenu = true;
    } else {
      menuBtn.classList.remove('close');
      menuMobile.classList.remove('show');
  
      // Set Menu State
      showMenu = false;
    }
  })
} )   





