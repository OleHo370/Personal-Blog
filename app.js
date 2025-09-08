const hambutton = document.querySelector('.hamburgerlist');
const tablist = document.querySelector('.tablist');

hambutton.addEventListener('click', function(){
    tablist.classList.toggle('active');
    if (hambutton.classList.contains('bi-list')) {
        hambutton.classList.replace('bi-list', 'bi-x-square');
    } 
    else {
        hambutton.classList.replace('bi-x-square', 'bi-list');
    }
});