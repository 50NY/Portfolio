// MENU RESPONSIVE PARA DISPOSITIVOS MOVILES

var btnMenuOpen = document.getElementById("btnMenuOpen");
var btnMenuClose = document.getElementById("btnMenuClose");
var menuResponsive = document.getElementById("menu-navegacion");
var enlaces = document.getElementById("enlaces");


  btnMenuOpen.addEventListener("click", function(){
    menuResponsive.classList.add("active");
  });

  btnMenuClose.addEventListener("click", function(){
    menuResponsive.classList.remove("active");
  });

  enlaces.addEventListener("click",function (){
    menuResponsive.style.transitionDelay = "0.5s"
    menuResponsive.classList.remove("active");
  });

