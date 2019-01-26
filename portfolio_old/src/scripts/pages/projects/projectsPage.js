require('../../external/domready');
import { pageCheck, modDelayedAction } from '../../shared/utils.js';
import { modProjectsItems } from './projectsItems.js';

var delayedAction, projectsItems;

DomReady.ready(() => {

    delayedAction = modDelayedAction();
    projectsItems = modProjectsItems();

    projectsItems.initProjectItems();

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