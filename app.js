const btn = document.querySelector("button#btn");
const txt = document.querySelector("span#count");
let count = 0;
txt.innerText = `total clicks : ${count}`

function hadleBtnClick(){
    count = count + 1
    txt.innerText = `total clicks : ${count}`
    console.log(count)
}

btn.addEventListener("click", hadleBtnClick)