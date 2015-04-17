//runs the Monty Hall Problem 1000 times using switch and no-switch approaches
function alwaysSwitch(){
    //single iteraton
    var prizeLoc=Math.floor(Math.random()*3+1);
    var firstChoice = Math.floor(Math.random()*3+1);
    //if choose right at the beginning, switch would end up with the wrong door;
    //if choose wrong at the beginning, switch would end up with the right door.
    if (firstChoice === prizeLoc) return 0; else return 1;
}

function noSwitch(){
    var prizeLoc=Math.floor(Math.random()*3+1);
    var firstChoice = Math.floor(Math.random()*3+1)
    //result is determined by the initial choice.
    if (firstChoice === prizeLoc) return 1; else return 0; 
}

function MonteCarlo(iter, func){
    var targetEvent =0;
    for (var i =0; i<iter;i++){
        targetEvent +=func();
    }
    return targetEvent/iter;
}

console.log('Switch method has '+MonteCarlo(1000,alwaysSwitch)*100+'% winning percentage.');
console.log('No-switch method has '+MonteCarlo(1000,noSwitch)*100+'% winning percentage.');