const btn1 = document.querySelector('.neet1btn')
const btn2 = document.querySelector('.neet2btn')
const btn3 = document.querySelector('.neet3btn')
const meth = document.querySelector('.bgmeth')
const meth2 = document.querySelector('.bgmeth2')
const meth3 = document.querySelector('.bgmeth3')
const body = document.querySelector('body')

const exit = document.querySelectorAll('.exit')
btn1.addEventListener('click',(e)=> {
    console.log('clcik');
    meth.style.display = 'flex';
    // meth.style.position = 'fixed';
    body.style.overflow = 'hidden';
})


btn2.addEventListener('click',(e)=> {
    console.log('clcik');
    meth2.style.display = 'flex';
    // meth.style.position = 'fixed';
    body.style.overflow = 'hidden';
})


btn3.addEventListener('click',(e)=> {
    console.log('clcik');
    meth3.style.display = 'flex';
    // meth.style.position = 'fixed';
    body.style.overflow = 'hidden';
})
exit.forEach((e)=> {
    e.addEventListener('click', () => {
        meth.style.display = 'none';
        meth2.style.display = 'none';
        meth3.style.display = 'none';
        console.log('hrllo');
        body.style.overflow = 'unset';
        
    })
})
