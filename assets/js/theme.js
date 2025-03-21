document.addEventListener("DOMContentLoaded", function () {
    
    const themeToggle = document.getElementById("theme-toggle");

    const bgImages = document.querySelectorAll(".bgimg");
    const header = document.querySelector(".header-home");
    const floatingBtn = document.querySelector(".floating-btn-home");

    const popupOverlay = document.querySelector(".popup-content");
    const closePopupBtn = document.getElementById("close-popup");

    themeToggle.addEventListener("change", function () {
        if (this.checked) {
            // Dark Mode
            floatingBtn.style.background = "rgba(31, 26, 26, 0.2)";
            floatingBtn.style.color = "white";
            header.style.backgroundColor = "rgb(22 20 31)";

            bgImages.forEach((bgImage) => {
                bgImage.style.backgroundImage = "url('assets/bg_home_dk.jpg')";
                bgImage.style.setProperty("--bg-gradient", "linear-gradient(to top, rgba(177, 177, 177, 0.15), rgba(132, 132, 132, 0.01))");
            });

            popupOverlay.style.background = "#12121a"; 
            closePopupBtn.style.backgroundColor = "rgb(18, 18, 26)";


        } else {
            // Light Mode
            floatingBtn.style.background = "rgba(195, 195, 195, 0.15)";
            floatingBtn.style.color = "white";      
            header.style.backgroundColor = 'rgb(215, 215, 215)';

            bgImages.forEach((bgImage) => {
                bgImage.style.backgroundImage = "url('assets/bg_home_lg.jpg')";
                bgImage.style.setProperty("--bg-gradient", "linear-gradient(to top, rgba(35, 33, 33, 0.8), rgba(19, 18, 18, 0.2))");
            });

            popupOverlay.style.background = "rgb(239, 239, 239)";
            closePopupBtn.style.backgroundColor = "rgb(239, 239, 239)";

        }
    });

});