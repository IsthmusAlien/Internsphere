document.addEventListener("DOMContentLoaded", function () {
    const pages = {
        Home: document.querySelector(".main-home"),
        About: document.querySelector(".main-about"),
        Dashboard: document.querySelector(".main-dashboard"),
        Settings: document.querySelector(".main-settings"),
        Chat: document.querySelector(".main-chat"),
        Interact: document.querySelector(".main-interact"),
    };

    const backButton = document.querySelector(".btn-back-about");
    const dashboardButton = document.querySelector(".btn-dashboard");
    const settingsButton = document.querySelector(".btn-settings");

    let historyStack = ["Home"];  
    const dashboardPrevious = ["Home", "Chat", "Interact"];

    function showPage(pageName) {

        Object.values(pages).forEach(page => page.style.display = "none");
        if (pages[pageName]) {
            pages[pageName].style.display = "block";
            document.title = pageName;
        }

        dashboardButton.textContent = pageName === "Dashboard" ? "Home" : "Dashboard";

        if (pageName === "Dashboard") {
            renderTable();
        }
        if (pageName === "Settings") {
            loadStoredKeys();
        }

        if (pageName === "Chat" || pageName === "Home") {
            backButton.textContent = "About";
        } else {
            backButton.textContent = historyStack.length > 1 ? "Back" : "About";
        }
    }

    function navigateTo(pageName) {
        const currentPage = historyStack.length > 0 ? historyStack[historyStack.length - 1] : null;

        if (currentPage !== pageName) {
            historyStack.push(pageName);
            showPage(pageName);
        } else if (pageName === "Dashboard") {

            let targetPage = null;
            let highestIndex = -1;

            dashboardPrevious.forEach(page => {
                let index = historyStack.lastIndexOf(page);
                if (index > highestIndex) {
                    highestIndex = index;
                    targetPage = page;
                }
            });

            if (targetPage) {
                historyStack.pop(); 
                showPage(targetPage);
            }
        }
    }

    function goBack() {
        if (backButton.textContent === "About") {
            navigateTo("About");       
        }
        else if (historyStack.length > 1) {
            historyStack.pop();  
            showPage(historyStack[historyStack.length - 1]);
        } else {
            navigateTo("About");     
        }
    }

    dashboardButton.addEventListener("click", () => navigateTo("Dashboard"));
    settingsButton.addEventListener("click", () => navigateTo("Settings"));
    backButton.addEventListener("click", goBack);

    window.navigateTo = navigateTo;
});
