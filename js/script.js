const firstrow = document.getElementById("tr-1");
const secondrow = document.getElementById("tr-2");
const border_left = document.getElementById("border-radius-logo");
const border_right = document.getElementById("border-radius-apply-col");
const announcement = document.getElementById("note-box");
const btnhide = document.getElementById("hide");
const hide_footer = document.getElementById("x-footer");
const footer = document.getElementById("footer");
const drop_btn = document.getElementById("logo-click-to-dropmenu");
const drop_menu = document.getElementById("drop-menu");

firstrow.addEventListener("click", function() {
    
    if (secondrow.style.display === "none") {
        secondrow.style.display = "table-row";
        border_right.style.borderBottomRightRadius = "0px";
        border_left.style.borderBottomLeftRadius = "0px";
    } else {
        secondrow.style.display = "none";
        border_right.style.borderBottomRightRadius = "12px";
        border_left.style.borderBottomLeftRadius = "12px";
    }
});

btnhide.addEventListener("click", function() {
    announcement.style.display = "none";
});

hide_footer.addEventListener("click", function(){
    footer.style.display = "none";
});

drop_btn.addEventListener("click", function (e){

    e.stopPropagation();
    if (drop_menu.style.display === "block") {
        drop_menu.style.display = "none";
    }
    else {
        drop_menu.style.display = "block";
    }
});

document.addEventListener("click", function (){
    drop_menu.style.display = "none";
}); 