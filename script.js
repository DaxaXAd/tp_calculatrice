let screen = document.querySelector('#screen');

let button = document.querySelectorAll('button');

let inLoad = "";


for(let i = 0; i < button.length; i++) {
    // console.log(btn);
    button[i].addEventListener('click', function() {
        let btn = (button[i]).innerHTML;
        // console.log(btn);
        if (btn === 'C') { //reset screen && inLoad
            screen.innerHTML=" ";
            inLoad = " ";
        } else if (btn === '=') {
            let result = eval(inLoad); //eval the result of the operation
            screen.textContent = result;
            // console.log(result);
        } else {
            inLoad += btn;
            // console.log(inLoad);
            screen.innerHTML = inLoad;
        }
    });
}


// console.log(btn);
document.addEventListener('keydown', function(event) {
    // console.log(btn);
    let e = event.key;
    if (e === 'Backspace') { //reset screen && inLoad
        screen.innerHTML=" ";
        inLoad = " ";
    } else if (e === 'NumpadEnter' || e === 'Enter') {
        let result = eval(inLoad); //eval the result of the operation
        screen.textContent = result;
        // console.log(result);
    } else {
        inLoad += e;
        // console.log(inLoad);
        screen.innerHTML = inLoad;
    }
});












// document.getElementById('screen').innerHTML = `Voici un essai`;
//get element > display that element on .screen