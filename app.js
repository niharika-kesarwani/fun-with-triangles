var a1 = document.querySelector("#ang1");
var a2 = document.querySelector("#ang2");
var a3 = document.querySelector("#ang3");
var sub = document.querySelector("#submit");
var res = document.querySelector("#result");

function anglesHandler(){
    t1 = parseInt(a1.value);
    t2 = parseInt(a2.value);
    t3 = parseInt(a3.value);
    
    var re = /^[-+]?[0-9]+\.[0-9]+$/;
    var sum = t1+t2+t3;
    
    console.log("1".match());
    if(t1<0 || t2<0 || t3<0){
        res.innerText="Please enter angles greater than 0 !!";
    }
    else if (a1.value.match(re) || a2.value.match(re) || a3.value.match(re)){
        res.innerText="Please enter whole numbers as angles !!";
    }
    else if (sum===180){
        res.innerText="YAYY! These angles can make a triangle !!";
    } else {
        res.innerText="Oops! These angles cannot make a triangle :(";
    }
}

sub.addEventListener("click", anglesHandler);
