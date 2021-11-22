// const collapse = document.querySelectorAll('.collapse');
// const collapsed = document.querySelectorAll('.collapsed');

// console.log(collapse);

// collapsed.forEach(function (element) {
// 	element.addEventListener('mouseover', (e) => {
// 		element2.classList.add('show');
// 	});
// });
// collapse.forEach(function (element2) {});



console.log("hello");
const removesection = document.querySelector('.removesection');
const alerter = document.querySelectorAll('.alert')

setTimeout(function(){
    alerter.forEach(function(item){
        item.classList.remove('show')
        removesection.parentNode.removeChild(removesection);
    })
},4000);
