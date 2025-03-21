document.addEventListener("DOMContentLoaded", function () {
    
    const homePage = document.querySelector(".main-home");
    const aboutPage = document.querySelector(".main-about");
    const settingsPage = document.querySelector(".main-settings");
    const chatPage = document.querySelector(".main-chat");

    const aboutButton = document.querySelector(".btn-about-home");
    const settingsButton = document.querySelector(".btn-settings");

    aboutButton.addEventListener("click", function () {
        if (aboutButton.textContent !== "About") {
            document.title = "Home";
            showPage(homePage);
            aboutButton.textContent = "About"; 
        } else {
            document.title = "About";
            showPage(aboutPage);
            aboutButton.textContent = "Back";  
        }
    });

    settingsButton.addEventListener("click", function () {
        if (settingsPage.style.display === "none") {
            document.title = "Settings";
            showPage(settingsPage);
            aboutButton.textContent = "Back"; 
        } 
    });

    function showPage(pageToShow) {
        homePage.style.display = "none";
        aboutPage.style.display = "none";
        chatPage.style.display = "none";
        settingsPage.style.display = "none";
        
        pageToShow.style.display = "block";  
    }

});
