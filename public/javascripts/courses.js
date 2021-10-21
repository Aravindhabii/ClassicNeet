const btn1 = document.querySelector('.neet1btn')
const meth = document.querySelector('.bgmeth')
const body = document.querySelector('body')
btn1.addEventListener('click',(e)=> {
    console.log('clcik');
    meth.style.display = 'flex';
    // meth.style.position = 'fixed';
    body.style.overflow = 'hidden';
})