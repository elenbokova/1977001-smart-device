import { changeButtonState } from '../utils/change-button-state';

const hidingAreas = document.querySelectorAll('[data-id="to-hide"]');
const hideButtons = document.querySelectorAll('[data-id="hide-button"]');

const hideAreas = () => {
    hidingAreas.forEach((element) => {
        element.setAttribute("data-state", "is-hidden");
    });
}

const showAreas = () => {
    hidingAreas.forEach((element) => {
        element.setAttribute("data-state", "");
    });
}

const changeContent = (element) => {

    if (element.textContent === "Подробнее") {
        element.textContent = "Свернуть";
        showAreas();        
    }
    else {
        element.textContent = "Подробнее";
        hideAreas();
    }
}


const initHideButton = () => {

    hideAreas();

    hideButtons.forEach((element) => {
        element.addEventListener('click', () => {
            changeButtonState(element);
            changeContent(element);
        });
    });
}


export { initHideButton };

