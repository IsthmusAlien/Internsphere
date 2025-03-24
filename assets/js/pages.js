document.addEventListener("DOMContentLoaded", function () {
    
    const homePage = document.querySelector(".main-home");
    const aboutPage = document.querySelector(".main-about");
    const settingsPage = document.querySelector(".main-settings");
    const chatPage = document.querySelector(".main-chat");
    const interactPage = document.querySelector(".main-interact");

    const backAboutButton = document.querySelector(".btn-back-about");
    const settingsButton = document.querySelector(".btn-settings");

    let previousPage = "Home"; 

    function showPage(pageToShow, newTitle) {

        homePage.style.display = "none";
        aboutPage.style.display = "none";
        chatPage.style.display = "none";
        settingsPage.style.display = "none";
        interactPage.style.display = "none";

        let currentTitle = document.title;
        
        document.title = newTitle;
        pageToShow.style.display = "block";

        if (currentTitle !== newTitle) {
            previousPage = currentTitle;
        }
    }

    backAboutButton.addEventListener("click", function () {
        if (document.title === "About") {
            if (previousPage === "Chat") {
                showPage(chatPage, previousPage);
                backAboutButton.textContent = "About";
            } 
            if (previousPage === "Home") {
                showPage(homePage, previousPage);
                backAboutButton.textContent = "About";
            }
        } else if (document.title === "Settings") {
            if (previousPage === "Chat") {
                showPage(chatPage, previousPage);
                backAboutButton.textContent = "About";
            } 
            if (previousPage === "Home") {
                showPage(homePage, previousPage);
                backAboutButton.textContent = "About";
            }
            if (previousPage === "Interact") {
                showPage(interactPage, previousPage);
                backAboutButton.textContent = "Back";
            }
        } else if (document.title === "Interact") {
            showPage(chatPage, previousPage);
            backAboutButton.textContent = "About";
        } else {
            showPage(aboutPage, "About");
            backAboutButton.textContent = "Back";
        }
    });

    settingsButton.addEventListener("click", function () {
        showPage(settingsPage, "Settings");
        backAboutButton.textContent = "Back";
    });

    window.showPage = showPage;
});
