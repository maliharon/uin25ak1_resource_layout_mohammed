document.addEventListener("DOMContentLoaded", () => {
    const tabsContainer = document.getElementById("tabs");
    const contentDisplay = document.getElementById("content-display");

    
    tabsContainer.innerHTML = resources.map((resource, index) => `
        <nav class="tab ${index === 0 ? 'active' : ''}">${resource.category}</nav>
    `).join('');

    const tabs = document.querySelectorAll(".tab");

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
        
            tabs.forEach(t => t.classList.remove("active"));
            
            tab.classList.add("active");
            
            updateContent(resources[index]);
        });
    });

    function updateContent(resource) {
        contentDisplay.innerHTML = `
            <h1>${resource.category}</h1>
            <p>${resource.text}</p>
            <ul>
                ${resource.sources.filter(source => source.url).map(source => `
                    <li><a href="${source.url}" target="_blank">${source.title}</a></li>
                `).join('')}
            </ul>
        `;
    }

    updateContent(resources[0]);
});