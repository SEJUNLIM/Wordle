var answer = 'abcde';
var chance = 1;

var trynum = '.'+String(chance);
function submit(){
    var uinput = document.querySelectorAll(trynum);
    for (let i = 0; i<5; i++) {
        if (uinput[i].value==answer[i]){
            uinput[i].style.background = 'green';
        } else if (answer.includes(uinput[i].value)) {
            uinput[i].style.background = 'yellow';
        } else {
            uinput[i].style.background = 'lightgrey';
        }
    }
    chance += 1;
    document.write(chance);
}


function typing () {

}