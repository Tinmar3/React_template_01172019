import { getViewport } from '../../shared/utils.js';

export function modAboutMeCustomOnScroll() {

    var customOnScrollListener;
    var technologyImages = document.querySelectorAll('.technologies-image');

    function initCustomScroll() {

        customOnScrollListener = () => {

            var st = window.pageYOffset || document.documentElement.scrollTop;
            var documentHeight = document.body.offsetHeight;
            var viewportHeight = getViewport().height;
            var percentage = st / (documentHeight - viewportHeight) * 100;

            var opacityValue, filterValue;

            if (percentage < 20) {
                opacityValue = 0.1;
                filterValue = 100;
            } else if (percentage > 80) {
                opacityValue = 0.25;
                filterValue = 45;
            } else {
                opacityValue = 0.1 + 0.15 * percentage / 100;
                filterValue = 45 + 55 * (100 - percentage) / 100;
            }

            technologyImages.forEach((thisItem) => {
                thisItem.style.opacity = opacityValue;
                thisItem.style.filter = 'grayscale(' + filterValue + '%)';
            });

        }

        customOnScrollListener();

        document.addEventListener('scroll', customOnScrollListener, true);
    }

    function deinitCustomScroll() {

    }

    var PublicAPI = {
        initCustomScroll: initCustomScroll,
        deinitCustomScroll: deinitCustomScroll
    }

    return PublicAPI;
}