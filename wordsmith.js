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
let score = '0';
const checkBtn = document.querySelector('#checkBtn');
checkBtn.addEventListener('click',() =>{
console.log('I Have Just been Clicked');
    document.querySelector('#cup > i').textContent = score;
    score+= 5;
})
document.querySelector('#action').style.backgroundImage = `url('confetti.gif')`
// STRING Methods
// .slice(start,end) this slices a portion of the string
// .concat(...Strings) join all chairs in a String
// .trim() it removes spaces at the beginnning and of a String
//.at(...index)///choses the chair at the index
//length tells how many char in the string
//.tolowercase()//writes all chars in lower case
//.touppercase()//writes all chars upper case
//.endswich()