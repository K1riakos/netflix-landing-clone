import { titleHandler, elementToggler } from './logic.js';

const langTogglerHeader = document.querySelector('.lang-dropdown');
const langTogglerFooter = document.querySelector('.lang-dropdown-f');
const langOptsHeader = document.querySelector('.lang-dropdown-opts');
const langOptsFooter = document.querySelector('.lang-dropdown-opts-f');
const faqQuestions = document.querySelectorAll('.faq__question');
const faqAnswers = document.querySelectorAll('.faq__answer');

window.onload = () => {
  // greek or english title
  document.title = titleHandler(window.navigator.language);
};

// for language dropdown in header
elementToggler(true, langOptsHeader, langTogglerHeader);

// for language dropdown in footer
elementToggler(true, langOptsFooter, langTogglerFooter);

// for faq dropdowns
faqQuestions.forEach((question, i) => {
  question.onclick = () => {
    elementToggler(false, faqAnswers[i], question);
  };
});
