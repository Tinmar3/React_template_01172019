import { updateScreenSize, getViewport } from '../../shared/utils.js';

export function modFooter() {

    var footer = document.querySelector('footer');
    var main = document.querySelector('main');

    function initFooter() {

        var mainHeight = main.offsetHeight;
        var footerHeight = footer.offsetHeight;

        if((mainHeight + footerHeight) < getViewport().height) {
            footer.classList.add('fixed');
        } else {
            footer.classList.remove('fixed');
        }

    }

    var PublicAPI = {
        initFooter: initFooter
    }

    return PublicAPI;

}