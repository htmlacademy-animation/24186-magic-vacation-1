let DelayOptions = {
  chars: 4,
  delayPerChar: 100,
  groupAnimationTime: 100,
  initDelay: 0,
};

function setAnimationText(el) {
  const text = el.textContent.trim();
  const content = text.split(` `)
    .reduce((fragment, word) => {
      const wordEl = createWordWrapper();
      wordEl.appendChild([...word].reduce((fragmentChar, char, index) => {
        fragmentChar.appendChild(createCharWrapper(char, index));
        return fragmentChar;
      }, document.createDocumentFragment()));

      fragment.appendChild(wordEl);
      return fragment;
    }, document.createDocumentFragment());

  el.innerHTML = ``;
  el.appendChild(content);
}

function createWordWrapper() {
  const spanEl = document.createElement(`span`);
  spanEl.classList.add(`animate-text`);
  return spanEl;
}

function createCharWrapper(char, index) {
  const spanEl = document.createElement(`span`);
  spanEl.classList.add(`animate-text__char`);
  spanEl.textContent = char;
  spanEl.style.animationDelay = `${getCharAnimationDelay(index) + DelayOptions.initDelay}ms`;
  return spanEl;
}

function getCharAnimationDelay(index) {
  const delayIndex = Math.trunc((index + 1) / DelayOptions.chars);
  switch ((index + 1) % DelayOptions.chars) {
    case 1: return DelayOptions.delayPerChar + DelayOptions.groupAnimationTime * delayIndex;
    case 2: return DelayOptions.delayPerChar * 3 + DelayOptions.groupAnimationTime * delayIndex;
    case 3: return DelayOptions.delayPerChar * 2 + DelayOptions.groupAnimationTime * delayIndex;
    case 0: return DelayOptions.delayPerChar * 4 + DelayOptions.groupAnimationTime * (delayIndex - 1);
    default: return DelayOptions.delayPerChar + DelayOptions.groupAnimationTime * delayIndex;
  }
}

export default ({el, options = {}}) => {
  DelayOptions = {...DelayOptions, ...options};
  setAnimationText(el);
};
