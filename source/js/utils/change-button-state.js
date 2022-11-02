const changeButtonState = (element) => {
    if (element.getAttribute("data-state") === "is-closed") {
        element.setAttribute("data-state", "is-opened");
    }
    else { element.setAttribute("data-state", "is-closed"); }
}

export { changeButtonState };