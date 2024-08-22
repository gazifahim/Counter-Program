const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const countable = document.getElementById("countable");
let count = 0;

increaseBtn.onclick = function(){
    count++;
    countable.textContent = count;
}
decreaseBtn.onclick = function(){
    count--;
    countable.textContent = count;
}
resetBtn.onclick = function(){
    count = 0;
    countable.textContent = count;
}





