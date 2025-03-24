document.addEventListener("DOMContentLoaded", function () {

    const storedApiKey = JSON.parse(localStorage.getItem("geminiApiKey"));
    
    const queryInput = document.getElementById("user-query");        
    const responseContainer = document.getElementById("response-container");
    const responseContent = document.getElementById("response-content");

    let project_title = null;
    let project_reference = null;
    let project_category = null;

    function handleQuery(reference, title, category) {
        project_title = title;
        project_reference = reference;
        project_category = category;    

        const prompt = `Give a Step-by-Step Guide for ${title} Project with respect to ${category} along 
        with code, use this ${reference} GitHub repository as a Reference.`;

        callGeminiAPI(prompt);
    }

    window.handleQuery = handleQuery;

    function handleExtraQuery() {
        const query = queryInput.value.trim();
        if (query === "") {
            return;
        }
        
        responseContent.style.display = "flex";
        responseContent.style.flexDirection = "column"; 

        const queryBlock = document.createElement("div");
        queryBlock.className = "queryBlock-block"; 
        queryBlock.innerHTML = query;

        queryInput.value = "";

        responseContent.appendChild(queryBlock);
    
        responseContainer.style.display = "block";

        const prompt = `I have a query regarding this ${project_title} Project with respect to this ${project_category} Category of Development
        and this ${project_reference} GitHub repository, which is as follows: ${query}`;

        callGeminiAPI(prompt);
    }

    window.handleExtraQuery = handleExtraQuery;

    function callGeminiAPI(prompt) {
        const key = storedApiKey.key;
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${key}`;
        const payload = {
            contents: [{ parts: [{ text: prompt }] }],
        };

        fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        })
        .then((response) => response.json())
        .then((data) => {
            if (data?.candidates?.length > 0) {
                const answer = data.candidates[0]?.content?.parts[0]?.text || 'Error occurred';
                displayResponse(answer);
            } else {
                displayResponse("Error fetching response.");
            }
        })
        .catch((error) => {
            console.log(error);
            displayResponse("Error fetching response.");
        });
    }

    function displayResponse(text) {
        
        responseContent.style.display = "flex";
        responseContent.style.flexDirection = "column"; 
    
        const responseBlock = document.createElement("div");
        responseBlock.className = "response-block"; 
        responseBlock.innerHTML = marked.parse(text);
    
        responseBlock.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightElement(block);
            const copyBtn = document.createElement('button');
            copyBtn.textContent = 'Copy';
            copyBtn.className = 'copy-btn';
            copyBtn.addEventListener('click', () => {
                navigator.clipboard.writeText(block.innerText);
                copyBtn.textContent = 'Copied!';
                setTimeout(() => copyBtn.textContent = 'Copy', 2000);
            });
            block.parentNode.style.position = 'relative';
            block.parentNode.appendChild(copyBtn);
        });
    
        responseContent.appendChild(responseBlock);
    
        responseContainer.style.display = "block";
    }
    

    function copyCode(button) {
        const codeBlock = button.nextElementSibling.innerText;
        navigator.clipboard.writeText(codeBlock).then(() => {
            button.innerText = "Copied!";
            setTimeout(() => {
                button.innerText = "Copy";
            }, 2000);
        });
    }

    window.copyCode = copyCode;

});
