let menu_icon = document.querySelector('.menu-icon');
let sidebar = document.querySelector('.side-bar');
let list_container = document.querySelector('.container');

menu_icon.onclick = function () {
    sidebar.classList.toggle("small-sidebar");
    list_container.classList.toggle("large-container");
}
