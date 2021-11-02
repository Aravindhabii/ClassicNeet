
console.log('hello');

const image = document.querySelector(".myImage");
const forimg = document.querySelector(".forimg");

console.log(image);

image.addEventListener("input",(e)=>{
    const value =  URL.createObjectURL(image.files[0]);
    const img = document.createElement('img')
    img.src=value
    console.log(img.src);
    console.log(img.clientHeight);
})