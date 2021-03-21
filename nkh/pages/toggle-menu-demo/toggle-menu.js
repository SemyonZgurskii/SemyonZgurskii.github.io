const mainContainerElement = document.querySelector('.page__content');
const menuContainerElements = mainContainerElement.querySelectorAll('.toggle-menu');

const menuOpenModifier = 'toggle-menu--opened';
const noJsModifier = 'toggle-menu--no-js';

menuContainerElements.forEach(element => element.classList.remove(noJsModifier));

menuContainerElements.forEach(element => {
    const menuButtonElement = element.querySelector('.toggle-menu__button');

    menuButtonElement.addEventListener('click', () => {
        element.classList.toggle(menuOpenModifier);
    });
})
