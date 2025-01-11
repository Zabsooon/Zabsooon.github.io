---
layout: page
icon: fas fa-code
title: Projects
permalink: /projects/
order: 1
---

## 🚀

# My GitHub Projects

<div id="projects-container"></div>
<script>
const username = "Zabsooon"; // Replace with your GitHub username
const apiUrl = `https://corsproxy.io/?https://api.github.com/users/${username}/repos`;

fetch(apiUrl)
  .then(response => response.json())
  .then(repos => {
    const container = document.getElementById("projects-container");
    repos.forEach(repo => {
      if (repo.name === "Zabsooon.github.io") return; // Exclude the main blog repo
      const projectElement = document.createElement("div");
      projectElement.style.marginBottom = "20px";

      if (repo.has_pages) {
        // If the project is hosted, show an iframe
        projectElement.innerHTML = `
          <h2>${repo.name}</h2>
          <iframe src="https://${username}.github.io/${repo.name}/" 
                  style="width: 100%; height: 400px; border: none; border-radius: 10px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
          </iframe>
          <p><a href="${repo.html_url}" target="_blank">View on GitHub</a></p>
        `;
      } else {
        // If not hosted, show a link
        projectElement.innerHTML = `
          <h2>${repo.name}</h2>
          <p>${repo.description || "No description available"}</p>
          <p><a href="${repo.html_url}" target="_blank">View on GitHub</a></p>
        `;
      }

      container.appendChild(projectElement);
    });
  })
  .catch(error => {
    console.error("Error fetching repos:", error);
    document.getElementById("projects-container").innerHTML = `<p>Unable to load projects.</p>`;
  });

</script>

<style>
#projects-container {
  margin: 20px 0;
  padding: 10px;
}

h2 {
  font-size: 1.5rem;
  color: var(--text-color);
}

iframe {
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-bottom: 15px;
}

</style>