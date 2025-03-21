document.addEventListener("DOMContentLoaded", () => {
    
    const dataList = document.getElementById("data-list");

    dataList.innerHTML = "";
    data.forEach(item => {
        const div = document.createElement("div");
        div.className = "item";
        div.innerHTML = `
            <h3>${item.title}</h3>
            <p><strong>Category:</strong> ${item.category}</p>
            <p><strong>Reference:</strong> ${item.reference}</p>
        `;

        div.addEventListener("click", () => {
            handleQuery(item.reference, item.title, item.category);
        });

        dataList.appendChild(div);
    });

});