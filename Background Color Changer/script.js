let clickbuttons = document.querySelectorAll(".box-container");
let backgroundchange = document.querySelector("body");

clickbuttons.forEach(function(box) {
    box.addEventListener("click", function(color) {
        if (color.target.id === "box1") {
            backgroundchange.style.backgroundColor = "red";
        }
        if (color.target.id === "box2") {
            backgroundchange.style.backgroundColor = " rgb(0, 4, 255)";
        }
        if (color.target.id === "box3") {
            backgroundchange.style.backgroundColor = "rgb(98, 255, 0)";
        }
        if (color.target.id === "box4") {
            backgroundchange.style.backgroundColor = "rgb(255, 0, 166)";
        }
        if (color.target.id === "box5") {
            backgroundchange.style.backgroundColor = "rgb(255, 200, 0)";
        }
        
    });
});



 