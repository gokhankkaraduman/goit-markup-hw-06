const modalMenu = document.getElementById("modal-menu");
const modalCloseButton = document.getElementById("modal-close-button");
const modalOpenButton = document.getElementById("modal-open-button");


modalCloseButton.addEventListener("click", function () {
    modalMenu.classList.remove("modal-close")
});


modalOpenButton.addEventListener("click", function(){
    modalMenu.classList.add("modal-close")
});