var link = document.querySelector(".header__login");
var popup = document.querySelector(".login-content");
var close = popup.querySelector(".login-content--close");

link.addEventListener("click", function(event){
  event.preventDefault();
  popup.classList.add("login-content--show");
  $("html,body").css("overflow","hidden");
});

close.addEventListener("click", function(event){
  event.preventDefault();
  popup.classList.remove("login-content--show");

$("html,body").css("overflow","auto");
});

var rename = document.querySelector(".profile-info__rename");
var modalRename = document.querySelector(".modal-rename");
var cancel = modalRename.querySelector(".modal-rename__cancel");

rename.addEventListener("click", function(event){
  event.preventDefault();
  modalRename.classList.add("modal-rename__show");
});

cancel.addEventListener("click", function(event){
  event.preventDefault();
  modalRename.classList.remove("modal-rename__show");

});
