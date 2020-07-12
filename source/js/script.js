// modules
import mobileHeight from './modules/mobile-height-adjust.js';
import slider from './modules/slider.js';
import menu from './modules/menu.js';
import footer from './modules/footer.js';
import chat from './modules/chat.js';
import result from './modules/result.js';
import form from './modules/form.js';
import social from './modules/social.js';
import FullPageScroll from './modules/full-page-scroll';
import './modules/rules';
import animationText from './modules/animate-text';

// init modules
mobileHeight();
slider();
menu();
footer();
chat();
result();
form();
social();

const fullPageScroll = new FullPageScroll();
fullPageScroll.init();

window.addEventListener(`load`, () => {
  document.body.classList.add(`loaded`);
});

animationText({
  el: document.querySelector(`.intro__title`)
});
animationText({
  el: document.querySelector(`.intro__label`),
  options: {
    initDelay: 1400
  }
});
animationText({
  el: document.querySelector(`.intro__date`),
  options: {
    initDelay: 1700
  }
});
