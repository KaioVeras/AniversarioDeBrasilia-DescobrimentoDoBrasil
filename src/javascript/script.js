
let containerMenuMin = document.getElementById('container-menu-min');
let buttonMenu = document.getElementById('button-menu');

let icon = document.createElement('i');
icon.classList.add('fa-solid', 'fa-x');

buttonMenu.appendChild(icon);

function openMenu() {
    containerMenuMin.classList.toggle('close-menu');

    if(containerMenuMin.classList.contains('close-menu')) {
        icon.classList.remove('fa-x');
        icon.classList.add('fa-bars');
    } else {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-x');
    }
};