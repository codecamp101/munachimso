/*this changes the text inside of an element
document.querySelector('#user > b').textContent = 'UDODIRIM'
document.querySelector('#user > i').textContent ='?'
 document.querySelector('output').textContent = typeof '375.88';
 */
// this is an array ofnumbers
// [1,2,'computer',4]
// const s='A very long sentence,500 word long.really!!!!!';
// document.qu
// document.querySelector('output').textcontent = [1,2,'computer',4.5]
const eye = document.querySelector('#eye');
const output = document.querySelector('output');
const ipt = document.querySelector('input');
const fm = document.querySelector('form');
const pop = document.querySelector('#pop');
const user = document.querySelector('#user');
const start = document.querySelector('#start');
const pan = document.querySelector('#panel');
// this unmask the password
eye.addEventListener('mousedown',()=>{
    ipt.type='text';
})
eye.addEventListener('mouseup',()=>{
    ipt.type='password';
})
// this mask the password 
fm.addEventListener('submit',(e)=>{
    e.preventDefault();//this will stop the page from reloading
    const pd= 'victoria T';
    if (pd=== ipt.value) {
       user.remove();
        fm.remove();
        output.remove();
        output.textContent ='signing you in...';
        const tid = setTimeout(() => {
            pop.showPopover();
            clearTimeout(tid)
        }, 3000);
    } else {
        output.textContent = 'wrong password';
    }
});
//this shows/hides the #panel
start.addEventListener('click',() => {
    pan.classList.toggle('on');
})
