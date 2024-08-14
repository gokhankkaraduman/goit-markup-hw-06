console.log("Hello World!");

document.addEventListener("DOMContentLoaded", function () {
    // 1- Hamburger menüyü açmak için div'i seç
    const hamburgerOpenButton = document.getElementById("hamburger-menu-open-button");

    // 2- Hamburger Menüyü seç
    const hamburgerMenu = document.getElementById("hamburger-menu");

    // 3- Hamburger Menüyü kapatacak olan butonu seç
    const hamburgerCloseButton = document.getElementById("hamburger-menu-close-button");

    // 4- Hamburger menüyü açacak olan div'e tıklama olayı ekle
    hamburgerOpenButton.addEventListener("click", function () {
        if (hamburgerMenu) {
            hamburgerMenu.classList.add("is-open");
        } else {
            console.error("Hamburger menü öğesi bulunamadı.");
        }
    });

    // 5- Hamburger menüyü kapatacak olan butona tıklama olayı ekle
    hamburgerCloseButton.addEventListener("click", function () {
        if (hamburgerMenu) {
            hamburgerMenu.classList.remove("is-open");
        } else {
            console.error("Hamburger menü öğesi bulunamadı.");
        }
    });
});


const modalMenu = document.getElementById("modal-menu");
const modalOpenButton = document.getElementById("modal-open-button");
const modalCloseButton = document.getElementById("modal-close-button");


modalOpenButton.addEventListener("click", function () {
    modalMenu.classList.remove("modal-close")
});


modalCloseButton.addEventListener("click", function(){
    modalMenu.classList.add("modal-close")
});
