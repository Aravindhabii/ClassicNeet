const removesection = document.querySelector('.removesection');
const alerter = document.querySelectorAll('.alert')

setTimeout(function(){
    alerter.forEach(function(item){
        item.classList.remove('show')
        removesection.parentNode.removeChild(removesection);
    })
},4000);

const width = window.screen.width;
const height = window.screen.height;
window.addEventListener('resize', function (e) {
    if (window.screen.width < 1280) {
        window.location.href = '/';
    }
});

if (parseInt(width) < 1280) {
    window.location.href = '/';
};