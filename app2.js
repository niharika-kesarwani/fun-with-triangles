var image = document.querySelector("#image");
var inp1 = document.querySelector("#inp1");
var d1 = document.querySelector("#des1");
var inp2 = document.querySelector("#inp2");
var d2 = document.querySelector("#des2");
var inp3 = document.querySelector("#inp3");
var d3 = document.querySelector("#des3");
var submit = document.querySelector("#submit2");
var info = document.querySelector("#info");
var cal = document.querySelector("#calculate");
var result = document.querySelector("#result2");

var img = ["/images/twitter.png", "/images/linkedin.png", "/images/github.png"];
var index=0;

function clearDefault() {
    image.style.display = "none";
    inp1.style.display = "none";
    d1.style.display = "none";
    inp2.style.display = "none";
    d2.style.display = "none";
    inp3.style.display = "none";
    d3.style.display = "none";
    info.style.display = "none";
    cal.style.display = "none";
    result.style.display = "none";
}

function radioHandler() {
    inp1.value="";
    inp2.value="";
    inp3.value="";
    var ele = document.getElementsByName('area-options');
      
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked) {
            index = parseInt(ele[i].value);
            image.style.display="block";
            image.src=img[index];
            if(index===0) {
                inp1.style.display="block";
                d1.style.display="block";
                inp2.style.display="block";
                d2.style.display="block";
                d1.innerHTML="base = ";
                d2.innerHTML="height = ";
            }
            else if(index===1) {
                inp1.style.display="block";
                d1.style.display="block";
                inp2.style.display="block";
                d2.style.display="block";
                inp3.style.display="block";
                d3.style.display="block";
                d1.innerHTML="a = ";
                d2.innerHTML="b = ";
                d3.innerHTML="c = ";
            }
            else if (index===2) {
                inp1.style.display="block";
                d1.style.display="block";
                inp2.style.display="block";
                d2.style.display="block";
                inp3.style.display="block";
                d3.style.display="block";
                d1.innerHTML="b = ";
                d2.innerHTML="c = ";
                d3.innerHTML="deg(A) = ";
            }
            cal.style.display="block";
            info.style.display = "block";
            info.innerHTML = "Area will be displayed here:";
        }
    }
}

function calculateHandler(){
    result.style.display="block";
    
    var area = 0;
    if(index==0) {
        var base = parseInt(inp1.value);
        var ht = parseInt(inp2.value);
        area = base * ht / 2;
    }
    else if(index==1) {
        var a = parseInt(inp1.value);
        var b = parseInt(inp2.value);
        var c = parseInt(inp3.value);
        var s = (a+b+c)/2;
        area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
    }
    else if(index==2) {
        a = parseInt(inp1.value);
        b = parseInt(inp2.value);
        c = parseInt(inp3.value);
        area = a * b * Math.sin(c * Math.PI / 180) / 2;
    }
    result.innerHTML = area;
}

clearDefault();
submit.addEventListener("click", radioHandler);
cal.addEventListener("click", calculateHandler);