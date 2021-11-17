const collapse = document.querySelectorAll('.collapse');

console.log(collapse);

collapse.forEach(function(element) {
  element.addEventListener('click', function() {
    element.classList.remove('show');
  });
});