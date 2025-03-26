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

        document.getElementById("submit-dashboard-popup").addEventListener("click", () => {
            const userKey = localStorage.getItem("userName");
            const linkedinKey = localStorage.getItem("userLinkedIn");
            
            const githubRepo = document.getElementById("repo-key").value.trim();

            if (!githubRepo) {
                alert("Please fill out Github Repository!");
                return;
            }

            const userName = encodeURIComponent(userKey);
            const projectName = encodeURIComponent(name);
            const repoLink = encodeURIComponent(githubRepo);
            const linkedIn = encodeURIComponent(linkedinKey);

            const url = `certificate.html?user=${userName}&project=${projectName}&repo=${repoLink}&linkedin=${linkedIn}`;
            window.open(url, "_blank");
            closePopup();
        });

        document.getElementById("close-dashboard-popup").addEventListener("click", closePopup);
    }

    function closePopup() {
        const popup = document.querySelector(".dashboard-popup-container");
        if (popup) popup.remove();
    }

});
