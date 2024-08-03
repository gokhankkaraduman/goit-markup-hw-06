const modalMenu = document.getElementById("modal-menu");
const modalOpenButton = document.getElementById("modal-open-button");
const modalCloseButton = document.getElementById("modal-close-button");


modalOpenButton.addEventListener("click", function () {
    modalMenu.classList.remove("modal-close")
});


modalCloseButton.addEventListener("click", function(){
    modalMenu.classList.add("modal-close")
});