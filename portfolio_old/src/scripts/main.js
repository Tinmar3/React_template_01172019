require('./external/domready');
require('./external/polyfills');
import 'nodelist-foreach-polyfill';
import { modHeader } from './pages/_partials/header';
import { modFooter } from './pages/_partials/footer';
import { pageCheck, modDelayedAction } from './shared/utils.js';

var pages, header, footer, delayedAction;

DomReady.ready(() => {

    delayedAction = modDelayedAction();
    pages = pageCheck();
    header = modHeader();

    header.initHeader();

    if (!pages.home) {
        footer = modFooter();
        footer.initFooter();
    }

    if (pages.projects) {
        require('./pages/projects/projectsPage.js');
    } else if (pages.aboutMe) {
        require('./pages/aboutMe/aboutMePage.js');
    } else if (pages.home) {
        require('./pages/home/homePage.js');
    }

    function reinitialize() {
        header.deinitHeader();
        header.initHeader();
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

// var isLoaded;
// var loadingCheckInterval = setTimeout(() => {

// }, 1000);

window.onload = () => {
    document.body.classList.add('loading-done');
    localStorage.setItem("firstTimeLoading", false);
}