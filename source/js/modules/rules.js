const LinkClass = {
  show: 'rules__link--show',
  animate: 'rules__link--animate'
};

const screenEl = document.querySelector('.screen--rules');
const rulesEl = screenEl.querySelector('.rules');
const lastRulesItemTextEl = rulesEl.querySelector('.rules__item:last-child p');
const rulesLinkEl = rulesEl.querySelector('.rules__link');

const observer = new MutationObserver(() => {
  if (!screenEl.classList.contains('active')) {
    rulesLinkEl.classList.remove(LinkClass.animate);
  }
});

observer.observe(screenEl, {
  attributes: true
});

lastRulesItemTextEl.addEventListener('animationend', () => {
  rulesLinkEl.classList.add(LinkClass.animate);
});
