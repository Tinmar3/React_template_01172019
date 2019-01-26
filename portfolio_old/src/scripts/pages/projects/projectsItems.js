export function modProjectsItems() {

    var projectItems = document.querySelectorAll('.project-item');
    var projectItemOnHover;
    var projectItemOnLeave;

    projectItems.forEach((thisItem) => {
        var allMyChildren = thisItem.querySelectorAll('*');
        allMyChildren.forEach((thisItem) => {
            // thisItem.stop
        });
    });

    function initProjectItems() {

        projectItemOnHover = (e) => {
            console.log("in");
            setTimeout(() => {

            }, 500);
        }

        projectItemOnLeave = () => {
            console.log("out");
        }

        projectItems.forEach((thisItem) => {
            thisItem.addEventListener('mouseover', projectItemOnHover, true);
            thisItem.addEventListener('mouseleave', projectItemOnLeave, true);
        });
    }

    function deinitProjectItems() {

    }

    var PublicAPI = {
        initProjectItems: initProjectItems,
        deinitProjectItems: deinitProjectItems
    }
    return PublicAPI;
}