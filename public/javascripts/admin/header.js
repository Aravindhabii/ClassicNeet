const removesection = document.querySelector('.removesection');
const alerter = document.querySelectorAll('.alert')
const sweetp = document.querySelector('.sweetp')

setTimeout(function () {
    alerter.forEach(function (item) {
        item.classList.remove('show')
        removesection.parentNode.removeChild(removesection);
    })
}, 4000);

if(sweetp){
    function successdialog() {
        console.log('hello');
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: sweetp.innerText,
            showConfirmButton: false,
            timer: 2500
        })
    }
    successdialog() 
}

// const collapse = document.querySelectorAll('.collapse');
// const collapsed = document.querySelectorAll('.collapsed');

// console.log(collapse);

// collapsed.forEach(function (element) {
// 	element.addEventListener('mouseover', (e) => {
// 		element2.classList.add('show');
// 	});
// });
