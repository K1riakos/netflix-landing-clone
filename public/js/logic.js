export const titleHandler = (lang) => {
  const titles = {
    el: 'Netflix Ελλάδα - Παρακολουθήστε τηλεοπτικές εκπομπές online, παρακολουθήστε ταινίες online',
    en: 'Netflix Greece - Watch TV Shows Online, Watch Movies Online',
  };

  if (lang === 'el-GR') return titles.el;
  return titles.en;
};

export const elementToggler = (addListener, toggleEl, elem) => {
  elem = elem || 0;
  addListener
    ? (elem.onclick = () => toggleEl.classList.toggle('hidden'))
    : toggleEl.classList.toggle('hidden');
};
