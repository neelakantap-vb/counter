var c=0;

function decrement(){
    if (c>0){
        c--;
    }
    document.getElementById("count").innerHTML = c;
}

function increment(){
    c++;
    document.getElementById("count").innerHTML = c;
}

function reset(){
    c=0;
    document.getElementById("count").innerHTML = c;
}