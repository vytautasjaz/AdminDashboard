 import './assets/styles/app.scss';
 import './index.hbs';

 import './assets/images/fingerprint-24px.svg';
 import './assets/images/menu-24px.svg';
 import './assets/images/search-24px.svg';
 import './assets/images/search-24px.svg';
 import './assets/images/more_horiz-24px.svg';
 import './assets/images/notifications-24px.svg';
 import './assets/images/icons/home-24px.svg';
 import './assets/images/icons/opacity-24px.svg';
 import './assets/images/icons/all_inclusive-24px.svg';
 import './assets/images/icons/highlight-24px.svg';
 import './assets/images/icons/directions_run-24px.svg';
 import './assets/images/icons/ballot-24px.svg';
 import './assets/images/icons/toc-24px.svg';
 import './assets/images/icons/bar_chart-24px.svg';
 import './assets/images/icons/map-24px.svg';
 import './assets/images/icons/local_post_office-24px.svg';
 import './assets/images/icons/ballot-24px.svg';
 import './assets/images/icons/card_giftcard-24px.svg';
 import './assets/images/green.jpg';
 import './assets/images/blue.jpg';
 import './assets/images/red.jpg';
 import './assets/images/purple.jpg';

console.log(document.querySelector('[data-toggle]'));
document.querySelector('[data-toggle]').addEventListener('click',function(event){
    console.log(event.target.dataset.toggle);
    document.querySelectorAll('[data-sidenav]').forEach(function(el) {
        console.log(el);
        el.classList.toggle('nav--small');
    });
});