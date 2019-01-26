import { updateScreenSize } from '../../shared/utils.js';

export function modHeader() {

    var menuButton = document.querySelector('.mobile-menu-icon');
    var header = document.querySelector('header');
    var navigation = document.querySelector('nav');
    var menuButtonOnClick;
    var navigationOnHover;
    var navigationOnLeave;
    var headerOnScroll;

    function initHeader() {

        var screenSize = updateScreenSize();

        if (screenSize.smallest || screenSize.small || screenSize.medium) {

            // for smaller screens

            (function initMobileMenu() {

                menuButtonOnClick = () => {
                    var thisElement = event.target;
                    if (header.classList.contains('opened')) {
                        header.classList.remove('opened');
                    } else {
                        header.classList.add('opened');
                    }
                }

                menuButton.addEventListener('click', menuButtonOnClick, true);

            })();

        } else {

            // for bigger screens

            (function initDesktopHover() {

                navigationOnHover = () => {
                    navigation.classList.add('hovered');
                }

                navigationOnLeave = () => {
                    navigation.classList.remove('hovered');
                }

                navigation.addEventListener('mouseenter', navigationOnHover, true);
                navigation.addEventListener('mouseleave', navigationOnLeave, true);

            })();

            (function initHeaderHiding() {

                var lastScrollTop = 0;
                var interval;

                headerOnScroll = () => {

                    var st = window.pageYOffset || document.documentElement.scrollTop;

                    if (st > lastScrollTop) {
                        // downscroll code
                        if (st > 90 && !header.classList.contains('hidden')) {
                            header.classList.add('hidden');
                        }
                    } else {
                        // upscroll code
                        setTimeout(() => {
                            header.classList.remove('hidden');
                        }, 300);
                    }

                    lastScrollTop = st;
                }

                document.addEventListener("scroll", headerOnScroll, true);

            })();

        }

    }

    function deinitHeader() {
        menuButton.removeEventListener('click', menuButtonOnClick, true);
        navigation.removeEventListener('mouseenter', navigationOnHover, true);
        navigation.removeEventListener('mouseleave', navigationOnLeave, true);
        document.removeEventListener("scroll", headerOnScroll, true);
    }

    var PublicAPI = {
        initHeader: initHeader,
        deinitHeader: deinitHeader
    }

    return PublicAPI;
}