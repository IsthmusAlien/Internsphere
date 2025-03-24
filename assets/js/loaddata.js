document.addEventListener("DOMContentLoaded", async () => {

    const categoryContainer = document.querySelector(".category-container");
    const projectSection = document.querySelector(".project-section");
    const projectInfo = document.querySelector(".project-info");
    const backAboutButton = document.querySelector(".btn-back-about");

    let dataTotalArray = [...data]; 
    const existingCategories = new Set();

 
    renderData(data);

    async function fetchData() {
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) throw new Error("Network response was not ok");
            const dataUpdated = await response.json();

            const newData = mergeUnique(dataTotalArray, dataUpdated);
            dataTotalArray = newData;

            updateCategories(dataUpdated);

        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    function mergeUnique(arr1, arr2) {
        const merged = [...arr1, ...arr2];
        const uniqueData = [];
        const seen = new Set();

        for (const item of merged) {
            const identifier = JSON.stringify(item);
            if (!seen.has(identifier)) {
                seen.add(identifier);
                uniqueData.push(item);
            }
        }
        return uniqueData;
    }

    function renderData(dataArray) {
        const categories = {};

        dataArray.forEach(item => {
            if (!categories[item.category]) {
                categories[item.category] = [];
            }
            categories[item.category].push(item);
        });

        Object.keys(categories).forEach(category => {
            existingCategories.add(category);
            addCategory(category, categories);
        });
    }

    function updateCategories(newData) {
        const newCategories = {};

        newData.forEach(item => {
            if (!existingCategories.has(item.category)) {
                existingCategories.add(item.category);
                newCategories[item.category] = [];
            }
            if (newCategories[item.category]) {
                newCategories[item.category].push(item);
            }
        });

        Object.keys(newCategories).forEach(category => {
            addCategory(category, newCategories);
        });
    }

    function addCategory(category, categories) {
        const categoryDiv = document.createElement("div");
        categoryDiv.classList.add("category");
        categoryDiv.textContent = category;

        categoryDiv.addEventListener("click", () => {
            toggleProjects(category, categories);
        });

        categoryContainer.appendChild(categoryDiv);

        if (categoryContainer.children.length === 1) {
            toggleProjects(category, categories);
        }
    }
    
    function toggleProjects(category, categories) {
        const categoryElements = document.querySelectorAll(".category");
    
        categoryElements.forEach(cat => cat.classList.remove("active"));
    
        categoryElements.forEach(cat => {
            if (cat.textContent === category) {
                cat.classList.add("active");
            }
        });
    
        projectSection.innerHTML = "";
        projectSection.dataset.active = category;
    
        const projectList = document.createElement("div");
        projectList.classList.add("project-list");
    
        categories[category].forEach(project => {
            const projectLink = document.createElement("div");
            projectLink.textContent = project.title;
            projectLink.classList.add("project-item");
            projectLink.addEventListener("click", () => {
                showProjectDetails(project, category);
            });
            projectList.appendChild(projectLink);
        });
    
        projectSection.appendChild(projectList);
        projectSection.style.display = "block"; 

        if (categories[category].length > 0) {
            showProjectDetails(categories[category][0], category);
        }
    }

    function showProjectDetails(project, category) {

        projectInfo.innerHTML = "";

        const title = document.createElement("p");
        title.classList.add("project-title");
        title.textContent = `${project.title}`;

        const summary = document.createElement("p");
        summary.classList.add("project-summary");
        summary.textContent = `${project.summary}`;

        const reference = document.createElement("p");
        reference.classList.add("project-reference");
        reference.textContent = `Reference: ${project.reference}`;

        const generateButton = document.createElement("button");
        generateButton.id = "generate";
        generateButton.textContent = "Begin";
        
        generateButton.addEventListener("click", () => {

            showPage(document.querySelector(".main-interact"), "Interact");
            backAboutButton.textContent = "Back";
            handleQuery(project.reference, project.title, category);

        });

        projectInfo.appendChild(title);
        projectInfo.appendChild(summary);
        projectInfo.appendChild(reference);
        projectInfo.appendChild(generateButton);
    }

    fetchData();
});
