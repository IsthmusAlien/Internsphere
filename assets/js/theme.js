document.addEventListener("DOMContentLoaded", function () {
    
    const themeToggle = document.getElementById("theme-toggle");

    const bgImages = document.querySelectorAll(".bgimg");
    const bgChatImage = document.querySelector(".bgimg-chat");
    const floatingBtn = document.querySelector(".floating-btn-home");

    const popupInput = document.getElementById("user-key");

    const settingsBtn = document.getElementById("settings-icon");
    const settingsPopup = document.querySelector(".caption-settings");
    
    const deleteKeyBtn = document.getElementById("delete-api-key");

    themeToggle.addEventListener("change", function () {
        if (this.checked) {
            // Dark Mode
            floatingBtn.style.background = "rgba(31, 26, 26, 0.2)";
            floatingBtn.style.color = "white";
            
            bgImages.forEach((bgImage) => {
                bgImage.style.backgroundImage = "url('assets/bg_home_dk.jpg')";
                bgImage.style.setProperty("--bg-gradient", "linear-gradient(to top, rgba(177, 177, 177, 0.15), rgba(132, 132, 132, 0.01))");
            });

            bgChatImage.style.backgroundImage = "url('assets/bg_chat_dk.jpg')";
            bgChatImage.style.setProperty("--bg-gradient", "linear-gradient(to top, rgba(177, 177, 177, 0.15), rgba(132, 132, 132, 0.01))");

            popupInput.style.color = "white";

            settingsBtn.src = "assets/settings-dk.png"
            settingsPopup.style.backgroundColor = "rgba(30, 30, 47, 0.7)";
            deleteKeyBtn.style.backgroundColor = "rgba(30, 30, 47, 0.7)";

            document.documentElement.style.setProperty('--theme-header-color', "rgb(22 20 31)");
            document.documentElement.style.setProperty('--theme-outer-color', "rgb(239, 239, 239)");
            document.documentElement.style.setProperty('--theme-inner-color', "#282834");
            document.documentElement.style.setProperty('--theme-center-color', "white");
            document.documentElement.style.setProperty('--theme-orbital-color', "black");
            document.documentElement.style.setProperty('--theme-other-color', "#282834");
            document.documentElement.style.setProperty('--theme-popup-color', "#12121a");
            document.documentElement.style.setProperty('--theme-popupBtn-color', "rgb(18, 18, 26)");


        } else {
            // Light Mode
            floatingBtn.style.background = "rgba(195, 195, 195, 0.15)";
            floatingBtn.style.color = "white";      

            bgImages.forEach((bgImage) => {
                bgImage.style.backgroundImage = "url('assets/bg_home_lg.jpg')";
                bgImage.style.setProperty("--bg-gradient", "linear-gradient(to top, rgba(35, 33, 33, 0.8), rgba(19, 18, 18, 0.2))");
            });

            bgChatImage.style.backgroundImage = "url('assets/bg_chat_lg.jpg')";
            bgChatImage.style.setProperty("--bg-gradient", "linear-gradient(to top, rgba(35, 33, 33, 0.8), rgba(19, 18, 18, 0.2))");

            popupInput.style.color = "black";

            settingsBtn.src = "assets/settings-lg.png"
            settingsPopup.style.backgroundColor = "rgba(224, 216, 216, 0.7)";
            deleteKeyBtn.style.backgroundColor = "rgba(224, 216, 216, 0.7)";

            document.documentElement.style.setProperty('--theme-header-color', "rgb(215, 215, 215)");
            document.documentElement.style.setProperty('--theme-outer-color', "#282834");
            document.documentElement.style.setProperty('--theme-inner-color', "rgb(239, 239, 239)");
            document.documentElement.style.setProperty('--theme-center-color', "black");
            document.documentElement.style.setProperty('--theme-orbital-color', "white");
            document.documentElement.style.setProperty('--theme-other-color', "white");
            document.documentElement.style.setProperty('--theme-popup-color', "rgb(239, 239, 239)");
            document.documentElement.style.setProperty('--theme-popupBtn-color', "rgb(239, 239, 239)");

        }
    });

});