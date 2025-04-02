document.addEventListener("DOMContentLoaded", function () {
    const tableContainer = document.querySelector(".caption-dashboard");

    function renderTable() {
        let array = JSON.parse(localStorage.getItem('markedProjects')) || [];

        tableContainer.innerHTML = "";

        const table = document.createElement("table");
        table.classList.add("dashboard-table");

        const thead = document.createElement("thead");
        thead.innerHTML = `
            <tr>
                <th>Project</th>
                <th>Remove</th>
                <th>Action</th>
            </tr>
        `;
        table.appendChild(thead);

        const tbody = document.createElement("tbody");
        array.forEach((name, index) => {
            const row = document.createElement("tr");

            const nameCell = document.createElement("td");
            nameCell.textContent = name;
            row.appendChild(nameCell);

            const removeCell = document.createElement("td");
            const removeButton = document.createElement("button");
            removeButton.textContent = "Discontinue";
            removeButton.classList.add("project-remove");
            removeButton.addEventListener("click", () => {
                array.splice(index, 1);  
                localStorage.setItem('markedProjects', JSON.stringify(array)); 
                renderTable(); 
            });
            removeCell.appendChild(removeButton);
            row.appendChild(removeCell);

            const certificateCell = document.createElement("td");
            const certificateButton = document.createElement("button");
            certificateButton.textContent = "Get Certificate";
            certificateButton.classList.add("project-certificate");
            certificateButton.addEventListener("click", () => openCertificatePopup(name));
            certificateCell.appendChild(certificateButton);
            row.appendChild(certificateCell);

            tbody.appendChild(row);
        });

        table.appendChild(tbody);
        tableContainer.appendChild(table);
    }

    renderTable();

    window.renderTable = renderTable;

    function openCertificatePopup(name) {
        const popup = document.createElement("div");
        popup.classList.add("dashboard-popup-container");
        popup.innerHTML = `
            <div class="popup-content">
                <p>Github Repository:</p>
                <input type="text" id="repo-key" class="dashboard-popup-box" placeholder="Project Github Repository" required>
                <div class="popup-buttons">
                    <button class="popup-btn" id="submit-dashboard-popup">Submit</button>
                    <button class="popup-btn" id="close-dashboard-popup">Cancel</button>
                </div>
            </div>
        `;
        document.body.appendChild(popup);

        window.addEventListener("click", (e) => {
            const popupContainer = document.querySelector(".dashboard-popup-container");
            if (e.target === popupContainer) {
                closePopup();
            }
        });

        document.getElementById("submit-dashboard-popup").addEventListener("click", async function () {
            this.disabled = true;
            this.innerText = "Processing..."; 
        
            const githubRepo = document.getElementById("repo-key").value.trim();
        
            if (!githubRepo) {
                alert("Please fill out Github Repository!");
                this.disabled = false;
                this.innerText = "Submit";
                return;
            }
        
            try {
                const score = await checkRepoKey(githubRepo);
        
                if (score === -1) {
                    popup.innerHTML = `
                    <div class="popup-content">
                        <p><strong>Error:</strong> Unable to verify the repository.</p>
                        <p>Please check the repository link and try again.</p>
                    </div>`;
                } else if (score < 55) {
                    popup.innerHTML = `
                    <div class="popup-content">
                        <p><strong>Repo Evaluation:</strong> Needs significant improvement.</p>
                    </div>`;
                } else {
                    const userKey = localStorage.getItem("userName");
                    const linkedinKey = localStorage.getItem("userLinkedIn");
        
                    const userName = encodeURIComponent(userKey);
                    const projectName = encodeURIComponent(name);
                    const repoLink = encodeURIComponent(githubRepo);
                    const linkedIn = encodeURIComponent(linkedinKey);
        
                    const url = `certificate.html?user=${userName}&project=${projectName}&repo=${repoLink}&linkedin=${linkedIn}`;
                    window.open(url, "_blank");
                    closePopup();
                }
            } catch (error) {
                console.error("Error checking repo:", error);
                popup.innerHTML = `
                <div class="popup-content">
                    <p>An Error Occurred, please try again</p>
                </div>`;
            }
        });

        document.getElementById("close-dashboard-popup").addEventListener("click", closePopup);
    }

    function closePopup() {
        const popup = document.querySelector(".dashboard-popup-container");
        if (popup) popup.remove();
    }

});
