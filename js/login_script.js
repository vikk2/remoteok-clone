const drop_btn_login = document.getElementById("logo-click-to-dropmenu-login");
const drop_menu_login = document.getElementById("drop-menu-login");

drop_btn_login.addEventListener("click", function (e){

    e.stopPropagation();
    if (drop_menu_login.style.display === "block") {
        drop_menu_login.style.display = "none";
    }
    else {
        drop_menu_login.style.display = "block";
    }
});

document.addEventListener("click", function (){
    drop_menu_login.style.display = "none";
});