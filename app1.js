var s1 = document.querySelector("#ang1");
var s2 = document.querySelector("#ang2");
var sub2 = document.querySelector("#submit");
var res2 = document.querySelector("#result2");

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
        res2.innerText="C (Hypotenuse) = "+Math.sqrt(temp)+" units";
    }
}

res2.innerHTML="Hypotenuse (C = √a"+"2".sup()+" + b"+"2".sup() + ") will be calculated here";
sub2.addEventListener("click", hypotenuseHandler);