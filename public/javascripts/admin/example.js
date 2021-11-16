

const image = document.querySelector(".myImage");
const forimg = document.querySelector(".forimg");


image.addEventListener("input",(e)=>{
    const value =  URL.createObjectURL(image.files[0]);
    const img = document.createElement('img')
    img.src=value
})