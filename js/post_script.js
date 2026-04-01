const right_box = document.getElementById("right-container");
const open = document.getElementById("ch-to-open");
const close = document.getElementById("ch-to-close");
const left_box = document.getElementById("left-container");

close.addEventListener("click", function(){
    left_box.style.width = "100%";
    right_box.style.display = "none";
});

open.addEventListener("click" , function(){
    left_box.style.width = "";
    right_box.style.display = "";
})