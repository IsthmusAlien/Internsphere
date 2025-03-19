document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const bgImage = document.querySelector(".bgimg-home");
    const header = document.querySelector(".header-home");
    const floatingBtn = document.querySelector(".floating-btn-home");

    themeToggle.addEventListener("change", function () {
        if (this.checked) {
            floatingBtn.style.background = "rgba(31, 26, 26, 0.2)";
            floatingBtn.style.color = "white";
            header.style.backgroundColor = 'rgb(22 20 31)';
            bgImage.style.backgroundImage = "url('assets/bg_home_dk.jpg')";
            bgImage.style.setProperty("--bg-gradient", "linear-gradient(to top, rgba(177, 177, 177, 0.15), rgba(132, 132, 132, 0.01))");
        } else {
            floatingBtn.style.background = "rgba(195, 195, 195, 0.15)";
            floatingBtn.style.color = "white";      
            header.style.backgroundColor = 'rgb(215, 215, 215)';
            bgImage.style.backgroundImage = "url('assets/bg_home_lg.jpg')";
            bgImage.style.setProperty("--bg-gradient", "linear-gradient(to top, rgba(35, 33, 33, 0.8), rgba(19, 18, 18, 0.2))");
        }
    });

    const popup = document.getElementById("name-popup");
    const getStartedBtn = document.querySelector(".floating-btn-home");
    const closePopup = document.getElementById("close-popup");
    const submitName = document.getElementById("submit-name");

    getStartedBtn.addEventListener("click", () => {
        popup.style.display = "flex";
    });

    closePopup.addEventListener("click", () => {
        popup.style.display = "none";
    });

    submitName.addEventListener("click", () => {
        const userName = document.getElementById("user-name").value.trim();
        if (userName) {
            alert(`Hello, ${userName}! Welcome!`);
            popup.style.display = "none";
        } else {
            alert("Please enter your name.");
        }
    });

    window.addEventListener("click", (e) => {
        if (e.target === popup) {
            popup.style.display = "none";
        }
    });
});