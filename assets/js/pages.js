document.addEventListener("DOMContentLoaded", function () {
    
    const homePage = document.querySelector(".main-home");
    const aboutPage = document.querySelector(".main-about");
    const chatPage = document.querySelector(".main-chat");

    const aboutButton = document.querySelector(".btn-about-home");

    aboutButton.addEventListener("click", function () {
        if (aboutButton.textContent === "About") {
            showPage(aboutPage);
            aboutButton.textContent = "Back";  
        } else {
            showPage(homePage);
            aboutButton.textContent = "About"; 
        }
    });

    function showPage(pageToShow) {
        homePage.style.display = "none";
        aboutPage.style.display = "none";
        chatPage.style.display = "none";
        
        pageToShow.style.display = "block";  
    }

});
