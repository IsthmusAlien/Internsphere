document.addEventListener("DOMContentLoaded", function () {

    const themeSelect = document.getElementById("theme-select");
    const themeToggle = document.getElementById("theme-toggle");
    const apiKeyInput = document.getElementById("api-key");
    const deleteApiKeyBtn = document.getElementById("delete-api-key");

    let previousTheme = themeSelect.value;

    if (localStorage.getItem("theme")) {
        themeSelect.value = localStorage.getItem("theme"); 
        previousTheme = themeSelect.value;
        if (themeSelect.value === "dk" && !themeToggle.checked) {
            themeToggle.click(); 
        } else if (themeSelect.value === "lg" && themeToggle.checked) {
            themeToggle.click();  
        }
    } else {
        themeSelect.value = themeToggle.checked ? "lg" : "dk"; 
        previousTheme = themeSelect.value;
    }
    

    themeSelect.addEventListener("change", function () {
        localStorage.setItem("theme", themeSelect.value);
        if (themeSelect.value !== previousTheme) {
            themeToggle.click();
            previousTheme = themeSelect.value;
        }

    });

    const storedApiKey = localStorage.getItem("geminiApiKey");

    if (storedApiKey) {
        const halfLength = Math.ceil(storedApiKey.length / 2);
        apiKeyInput.value = storedApiKey.substring(0, halfLength) + ".......";
    } else {
        apiKeyInput.value = "No API Key Found";
    }
    
    deleteApiKeyBtn.addEventListener("click", function () {
        localStorage.removeItem("geminiApiKey");
        apiKeyInput.value = "Gemini API Key not found";
        alert("Gemini API Key deleted");
    });
});
