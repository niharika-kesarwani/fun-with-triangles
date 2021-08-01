var s1 = document.querySelector("#side1");
var s2 = document.querySelector("#side2");
var sub2 = document.querySelector("#submit2");
var res2 = document.querySelector("#result2");

function draw(){
    var canvas = document.getElementById('canvas');
    if(canvas.getContext){
        var context = canvas.getContext('2d');
        context.beginPath();
        context.moveTo(100,75);
        context.lineTo(10,75);
        context.lineTo(10,0);
        context.lineTo(100,75);
        context.stroke();
    }
}

function hypotenuseHandler(){
    var sid1 = parseInt(s1.value);
    var sid2 = parseInt(s2.value);
    console.log(s1.value, s2.value);
    if(sid1<0 || sid2<0) {
        res2.innerText="Please enter sides greater than 0 !!";
    }
    else if(s1.value=="" || s2.value==""){
        res2.innerText="Please enter whole numbers as sides !!";
    }
    else{
        var temp = sid1**2 + sid2**2;
        res2.innerText="C = "+Math.sqrt(temp);
    }
}

res2.innerHTML="C = √a"+"2".sup()+" + b"+"2".sup();
sub2.addEventListener("click", hypotenuseHandler);