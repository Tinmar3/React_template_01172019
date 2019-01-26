require('../../external/domready');
import { pageCheck, modDelayedAction } from '../../shared/utils.js';
import { modAboutMeCustomOnScroll } from './aboutMeCustomOnScroll.js';

var delayedAction, projectsItems, aboutMeCustomOnScroll;

DomReady.ready(() => {

    delayedAction = modDelayedAction();
    // aboutMeCustomOnScroll = modAboutMeCustomOnScroll();

    // aboutMeCustomOnScroll.initCustomScroll();

    function reinitialize() {
    }

    window.onresize = (event) => {
        delayedAction.initDelayedAction(() => {
            reinitialize();
        }, 1);
    };

    window.addEventListener("orientationchange", () => {
        reinitialize();
    });

});

// window.onload = () => {
// }