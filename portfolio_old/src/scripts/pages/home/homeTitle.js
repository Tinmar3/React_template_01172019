export function modHometitle() {

    var dynamicalTitlePart = document.querySelectorAll('.main-title .dynamical');
    var dynamicalTitleCount = dynamicalTitlePart.length;

    function getActiveIndex() {
        var index;
        dynamicalTitlePart.forEach((thisItem, thisIndex) => {
            if (thisItem.classList.contains('active')) {
                index = thisIndex;
            }
        });
        return index;
    }

    function getElementByIndex(index) {
        var element;
        dynamicalTitlePart.forEach((thisItem, thisIndex) => {
            if (thisIndex === index) {
                element = thisItem;
            }
        });
        return element;
    }

    function changeDynamicPart() {

        var currentActiveIndex = getActiveIndex();
        var nextActiveIndex;
        var nextActiveElement;

        if (currentActiveIndex === dynamicalTitleCount - 1) {
            nextActiveIndex = 0;
        } else {
            nextActiveIndex = currentActiveIndex + 1;
        }

        dynamicalTitlePart.forEach((thisItem, thisIndex) => {
            thisItem.classList.remove('active');
        });

        nextActiveElement = getElementByIndex(nextActiveIndex);

        nextActiveElement.classList.add('active');

    }

    function initialize() {
        setInterval(() => {
            changeDynamicPart();
        }, 5300);
    }

    var PublicAPI = {
        initialize: initialize
    }
    return PublicAPI;
}