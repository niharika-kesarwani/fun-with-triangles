var back_btn = document.querySelector("#back-btn");
var inp1 = document.querySelector("#ang1");
var inp2 = document.querySelector("#ang2");
var inp3 = document.querySelector("#ang3");
var submit = document.querySelector("#submit");
var info = document.querySelector("#info");
var cal = document.querySelector("#calculate");

var index = 0;

function clearDefault() {
    back_btn.style.margin="0rem 0rem 2rem 0rem";
    inp1.style.display = "none";
    inp2.style.display = "none";
    inp3.style.display = "none";
    info.style.display = "none";
    cal.style.display = "none";
}

function radioHandler() {
    inp1.value = "";
    inp1.style.margin = "auto";
    inp2.value = "";
    inp2.style.margin = "auto";
    inp3.value = "";
    inp3.style.margin = "auto";
    cal.style.margin = "auto";
    info.style.margin="3rem 0rem 2rem 0rem";
    var ele = document.getElementsByName('area-options');

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            index = parseInt(ele[i].value);
            if (index === 0) {
                inp1.style.display = "block";
                inp1.placeholder = "Enter base";
                inp2.style.display = "block";
                inp2.placeholder = "Enter height";
                inp3.style.display = "none";
            } else if (index === 1) {
                inp1.style.display = "block";
                inp1.placeholder = "Enter side A";
                inp2.style.display = "block";
                inp2.placeholder = "Enter side B";
                inp3.style.display = "block";
                inp3.placeholder = "Enter side C";
            } else if (index === 2) {
                inp1.style.display = "block";
                inp1.placeholder = "Enter side A";
                inp2.style.display = "block";
                inp2.placeholder = "Enter side B";
                inp3.style.display = "block";
                inp3.placeholder = "Enter angle (deg)";
            }
            cal.style.display = "block";
            info.style.display = "block";
            info.innerHTML = "Area (A) will be displayed here";
        }
    }
}

function calculateHandler() {
    var area = 0;
    if (index == 0) {
        var base = parseInt(inp1.value);
        var ht = parseInt(inp2.value);
        area = base * ht / 2;
    } else if (index == 1) {
        var a = parseInt(inp1.value);
        var b = parseInt(inp2.value);
        var c = parseInt(inp3.value);
        var s = (a + b + c) / 2;
        area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    } else if (index == 2) {
        a = parseInt(inp1.value);
        b = parseInt(inp2.value);
        c = parseInt(inp3.value);
        area = a * b * Math.sin(c * Math.PI / 180) / 2;
    }
    if (isNaN(area) || area<0 || inp1.value<0 || inp2.value<0 || inp3.value<0) {
        info.innerHTML = "Please enter valid inputs !!";
    }
    else {
        info.innerHTML = "Area = "+area+" square units";
    }
}

clearDefault();
submit.addEventListener("click", () => {
    radioHandler(),
    window.scrollTo(0, document.body.offsetHeight)
});
cal.addEventListener("click", calculateHandler);