//Menu loader
document.addEventListener('DOMContentLoaded', function() {
    fetch('menu.html')  
        .then(response => response.text())
        .then(html => {
            document.getElementById('menu-container').innerHTML = html;
        })
        .catch(error => console.error('Failed to load menu:', error));
});


function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/img/close_white_36dp.svg";
    }
}

