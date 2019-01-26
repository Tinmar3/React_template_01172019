require('../../external/domready');
import { modDelayedAction } from '../../shared/utils.js';
import { modHometitle } from './homeTitle.js';

var delayedAction, projectsItems, homeTitle;

DomReady.ready(() => {

    delayedAction = modDelayedAction();
    homeTitle = modHometitle();

    homeTitle.initialize();

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