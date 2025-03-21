document.addEventListener("DOMContentLoaded", function () {

    const popup = document.getElementById("api-popup");
    const resultMessage = document.getElementById("popup-result");

    async function checkApiKey(apiKey) {
        const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=" + apiKey;
        
        const data = {
            contents: [{ parts: [{ text: "Hello" }] }]
        };

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                resultMessage.style.textAlign = "left";
                resultMessage.textContent = "API Key is valid";
                resultMessage.style.color = "green";

                localStorage.setItem("geminiApiKey", apiKey);

                setTimeout(() => {
                    popup.style.display = "none"; 
                    showPage(chatPage);
                }, 1000);

            } else {
                const errorData = await response.json();
                resultMessage.style.textAlign = "left";
                resultMessage.innerHTML = "<strong>Invalid API Key:</strong> " + errorData.error.message;
                resultMessage.style.color = "#d43f3a";
            }
        } catch (error) {
            console.error("Error checking API Key:", error);
            resultMessage.style.textAlign = "left";
            resultMessage.textContent = "Error checking API Key";
            resultMessage.style.color = "#ff9422";
        }
    }

    document.getElementById("submit-popup").addEventListener("click", function ()  {
        const apiKey = document.getElementById("user-key").value.trim();
        if (apiKey) {
            checkApiKey(apiKey);
        } else {
            resultMessage.style.textAlign = "left";
            resultMessage.textContent = "Please enter an API Key";
            resultMessage.style.color = "#ff9422";
        }
    });
});