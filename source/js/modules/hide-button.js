const hidingAreas = document.querySelectorAll('[data-id="to-hide"]');
const hideButtons = document.querySelectorAll('[data-id="hide-button"]');

const hideAreas = () => {
  hidingAreas.forEach((element) => {
    element.setAttribute('data-state', 'is-hidden');
  });
};

const showAreas = () => {
  hidingAreas.forEach((element) => {
    element.setAttribute('data-state', '');
  });
};

const changeContent = (element) => {

  if (element.getAttribute('data-state') === 'is-closed') {
    showAreas();
    element.setAttribute('data-state', 'is-opened');
    element.textContent = 'Свернуть';
  } else if (element.getAttribute('data-state') === 'is-opened') {
    hideAreas();
    element.setAttribute('data-state', 'is-closed');
    element.textContent = 'Подробнее';
  }
};


const initHideButton = () => {

  hideAreas();

  hideButtons.forEach((element) => {
    element.addEventListener('click', () => {
      changeContent(element);
    });
  });
};

export {initHideButton};
