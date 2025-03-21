document.addEventListener("DOMContentLoaded", function () {

    const popup = document.getElementById("api-popup");
    const getStartedBtn = document.querySelector(".floating-btn-home");
    const closePopup = document.getElementById("close-popup");

    getStartedBtn.addEventListener("click", () => {
        popup.style.display = "flex";
    });

    closePopup.addEventListener("click", () => {
        popup.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === popup) {
            popup.style.display = "none";
        }
    });
    
});