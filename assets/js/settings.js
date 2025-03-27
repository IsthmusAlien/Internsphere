document.addEventListener("DOMContentLoaded", function () {

    const themeSelect = document.getElementById("theme-select");
    const themeToggle = document.getElementById("theme-toggle");
    const nameKeyInput = document.getElementById("username-key");
    const linkedInKeyInput = document.getElementById("userlinkedIn-key");
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

    function loadStoredKeys() {
        const storedApiKey = JSON.parse(localStorage.getItem("geminiApiKey"));
        const userKey = localStorage.getItem("userName");
        const linkedinKey = localStorage.getItem("userLinkedIn");

        if (nameKeyInput) nameKeyInput.value = userKey || "No Username Found";
        if (linkedInKeyInput) linkedInKeyInput.value = linkedinKey || "No LinkedIn Account Found";
    
        if (storedApiKey && storedApiKey.key) {
            const halfLength = Math.ceil(storedApiKey.key.length / 2);
            apiKeyInput.value = storedApiKey.key.substring(0, halfLength) + ".......";
        } else {
            apiKeyInput.value = "No API Key Found";
        }
    }
    
    loadStoredKeys();

    window.loadStoredKeys = loadStoredKeys;
    
    deleteApiKeyBtn.addEventListener("click", function () {
        
        localStorage.removeItem("geminiApiKey");
        localStorage.removeItem("userName");
        localStorage.removeItem("userLinkedIn");
        localStorage.removeItem("markedProjects");
        localStorage.removeItem("chatHistory");

        nameKeyInput.value = "Username not found";
        linkedInKeyInput.value = "User LinkedIn not found";
        apiKeyInput.value = "Gemini API Key not found";
        alert("Gemini API Key deleted");
    });
});
