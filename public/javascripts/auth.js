const removesection = document.querySelector('.removesection');
const alerter = document.querySelectorAll('.alert')

setTimeout(function(){
    alerter.forEach(function(item){
        item.classList.remove('show')
        removesection.parentNode.removeChild(removesection);
    })
},4000);

