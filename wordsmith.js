const hintBtn = document.querySelector("#hintbtn")
const txt = document.querySelector("#txt")
hintBtn.addEventListener('click',() =>(
// txt.textcontent = 'I CHANGED YOU !!!'
    writeTxt
));
function writeTxt () {
    const txt ='to walk stedily,  as like a baby';
    txt.textcontent = '';
    let count = 0;
    const id =setInterval(() => {
        if (coun === text.lenght)clearInterval();
        txt.textcontent +=txt.textcontent + text[count];
        count++;//count++ keeps adding 1 to value of count
    },100);
}
