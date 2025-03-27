document.addEventListener("DOMContentLoaded", function () {

    const popup = document.getElementById("api-popup");
    const resultMessage = document.getElementById("popup-result");
    const currentDate = new Date();

    if (localStorage.getItem("geminiApiKey")) {
        const storedApiData = JSON.parse(localStorage.getItem("geminiApiKey"));

        const existingApiKey = storedApiData.key;
        const storedDate = new Date(storedApiData.date); 

        const monthDifference = (currentDate.getFullYear() - storedDate.getFullYear()) * 12 +
                                (currentDate.getMonth() - storedDate.getMonth());

        if (monthDifference < 1) {
            popup.style.display = "none"; 
            navigateTo("Menu");
        } else {
            checkApiKey(existingApiKey, true);
        }
    }

    async function checkApiKey(apiKey, existingApi) {
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

                if (!existingApi) {
                    const apiData = {
                        key: apiKey,
                        date: new Date().toISOString() 
                    };
                    localStorage.setItem("geminiApiKey", JSON.stringify(apiData));
                }
                popup.style.display = "none"; 
                navigateTo("Menu");

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

        const userKey = document.getElementById("name-key").value.trim();
        const linkedinKey = document.getElementById("linkedin-key").value.trim();

        localStorage.setItem("userName", userKey);
        localStorage.setItem("userLinkedIn", linkedinKey);

        if (apiKey) {
            checkApiKey(apiKey, false);
        } else {
            resultMessage.style.textAlign = "left";
            resultMessage.textContent = "Please enter an API Key";
            resultMessage.style.color = "#ff9422";
        }
    });
});
