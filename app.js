
//Age in days
function AgeInDays(){
    let birthYear = prompt('What is your birt year');
    var date = new Date();
    var currentYear = date.getFullYear();
    let ageindays = (currentYear-birthYear) * 365;
    let h1 = document.createElement('h1');
    let textanswer = document.createTextNode('Your are ' + ageindays + ' days old');
    h1.setAttribute('id','ageindays')
    h1.appendChild(textanswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    document.getElementById('ageindays').remove();
}

//Change colors
let all_btns = document.getElementsByTagName('button') ;
let copyAllbtns = [];
for(let i = 0; i<all_btns.length; i++){
    copyAllbtns.push(all_btns[i].classList[1]);
}


function btnColorChange(BtnColorSel){
    if(BtnColorSel.value=='red'){
        buttonRed();
    }
    else if (BtnColorSel.value=='green'){
        buttonGreen();
    }
    else if (BtnColorSel.value=='reset'){
        buttonColorReset();
    }
    else if (BtnColorSel.value='random'){
        randomColors();
    }
}

function buttonRed(){
    for(i=0; i < all_btns.length; i++){
        all_btns[i].classList.remove(all_btns[i].classList[1]);
        all_btns[i].classList.add('btn-danger');
    }
}

function buttonGreen(){
    for(let i=0; i<all_btns.length;i++){
        all_btns[i].classList.remove(all_btns[i].classList[1]);
        all_btns[i].classList.add('btn-success');
    }
}

function buttonColorReset(){
    for (i=0;i<all_btns.length;i++){
        all_btns[i].classList.remove(all_btns[i].classList[1]);
        all_btns[i].classList.add(copyAllbtns[i]);
    }
}

function randomColors(){
    let choice = ['btn-success', 'btn-primary', 'btn-danger','btn-warning'];
    for(i=0;i<all_btns.length;i++){
        all_btns[i].classList.remove(all_btns[i].classList[1]);
        all_btns[i].classList.add(choice[Math.floor(Math.random()*4)]);
    }
}