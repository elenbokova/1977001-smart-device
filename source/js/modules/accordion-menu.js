const footer = document.querySelector('[data-id="footer"]');
const accordionButtons = document.querySelectorAll('[data-id="nav-toggle"]');
const mobileQuery = window.matchMedia('(max-width: 770px)');


const changeButtonState = (element) => {
  if (element.getAttribute('data-state') === 'is-closed') {
    element.setAttribute('data-state', 'is-opened');

    accordionButtons.forEach((anotherElement) => {
      if (anotherElement !== element) {
        anotherElement.setAttribute('data-state', 'is-closed');
      }
    });
  } else {
    element.setAttribute('data-state', 'is-closed');
  }
};

const initAccordionMenu = () => {
  const handleMobileChange = (e) => {
    if (e.matches) {
      accordionButtons.forEach((el) => {
        el.disabled = false;
      });
    } else {
      accordionButtons.forEach((el) => {
        el.disabled = true;
      });
    }
  };
  mobileQuery.addListener(handleMobileChange);
  handleMobileChange(mobileQuery);
  footer.setAttribute('data-js-status', 'is-active');
  accordionButtons.forEach((el) => {
    el.setAttribute('data-state', 'is-closed');
  });

  accordionButtons.forEach((el) => {
    el.addEventListener('click', () => changeButtonState(el));
  });

};

export {initAccordionMenu};
