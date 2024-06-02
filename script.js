const navItem = document.querySelector('.vente .nav-item-vente')

const bouton1 = document.querySelector('.vente .nav-item-vente li:nth-child(1)')
const bouton2 = document.querySelector('.vente .nav-item-vente li:nth-child(2)')
const bouton3 = document.querySelector('.vente .nav-item-vente li:nth-child(3)')
const bouton4 = document.querySelector('.vente .nav-item-vente li:nth-child(4)')

bouton1.addEventListener('click', function () {
    bouton1.classList.add('active');
    bouton2.classList.remove('active');
    bouton3.classList.remove('active');
    bouton4.classList.remove('active');

});

bouton2.addEventListener('click', function () {
    bouton1.classList.remove('active');
    bouton2.classList.add('active');
    bouton3.classList.remove('active');
    bouton4.classList.remove('active');

});

bouton3.addEventListener('click', function () {
    bouton1.classList.remove('active');
    bouton2.classList.remove('active');
    bouton3.classList.add('active');
    bouton4.classList.remove('active');

});

bouton4.addEventListener('click', function () {
    bouton1.classList.remove('active');
    bouton2.classList.remove('active');
    bouton3.classList.remove('active');
    bouton4.classList.add('active');

});



