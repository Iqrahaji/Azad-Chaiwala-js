var btn = document.getElementById("btn");
var box = document.getElementById("box");

let moved = false;
btn.onclick = function () {
    if (!moved) {
        box.style.transform = "translateX(200px)";
        box.style.borderRadius = "0%"
        box.style.backgroundColor = "red";
        box.style.color = "yellow"

        moved = true;
    } else {
        box.style.transform = "translateX(0px)";
        box.style.borderRadius = "50%"
        box.style.backgroundColor = "yellow"
        box.style.color = "red"
        moved = false;
    }
};

box.onclick = function () {
    alert("How are you");
};
