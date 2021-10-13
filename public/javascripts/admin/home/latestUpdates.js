const addbtn = document.querySelector('.addbtn');
const previewDiv = document.querySelector('.preview');
const closebtn = document.querySelector('.closesvg');
const sectionop = document.querySelector('.mainsection');


console.log(previewDiv);

addbtn.addEventListener('click',()=>{
    previewDiv.style.display = 'block';
	sectionop.style.filter = 'blur(20px)';
});

closebtn.addEventListener('click',()=>{
    
    previewDiv.style.display = 'none';
    sectionop.style.filter = 'blur(0px)';
})