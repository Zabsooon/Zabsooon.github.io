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
  // GitHub username
  const username = 'Zabsooon'; // Replace with your GitHub username
  const apiUrl = `https://api.github.com/users/${username}/repos`;

  // Fetch GitHub repositories data
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const projectsContainer = document.getElementById('projects-container');

      // Arrays to hold iframe and link-based repositories
      const iframeProjects = [];
      const linkProjects = [];

      // Iterate through each repository and categorize them
      data.forEach(repo => {
        // Skip the "Zabsooon.github.io" repository entirely
        if (repo.name === 'Zabsooon.github.io') return;

        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        
        if (repo.has_pages) {
          // If the repo has GitHub Pages, create an iframe
          const iframe = document.createElement('iframe');
          iframe.src = `https://Zabsooon.github.io/${repo.name}/`;  // Link to your subproject's GitHub Pages
          iframe.frameBorder = '0';
          iframe.classList.add('project-iframe');
          
          const projectTitle = document.createElement('h2');
          projectTitle.classList.add('project-title');
          projectTitle.innerText = repo.name;
          
          const projectLinks = document.createElement('div');
          projectLinks.classList.add('project-links');
          projectLinks.innerHTML = `
            <p><a href="https://github.com/${username}/${repo.name}" target="_blank">View on GitHub</a></p>
          `;
          
          // Add iframe project to the iframeProjects array
          iframeProjects.push({ title: projectTitle, iframe, projectLinks });
        } else {
          // For other repositories, create just a link
          const repoLink = document.createElement('a');
          repoLink.href = `https://github.com/${username}/${repo.name}`;
          repoLink.target = '_blank';
          repoLink.innerText = `${repo.name}: ${repo.description || "No description available"}`;
          
          // Add link project to the linkProjects array
          linkProjects.push(repoLink);
        }
      });

      // Render iframe-based projects first (with card style)
      iframeProjects.forEach(project => {
        const card = document.createElement('div');
        card.classList.add('project-card'); // Add the card style here

        card.appendChild(project.title);
        card.appendChild(project.iframe);
        card.appendChild(project.projectLinks);
        projectsContainer.appendChild(card);
      });

      // Then render link-based projects (small text links)
      linkProjects.forEach(projectLink => {
        const simpleLinkContainer = document.createElement('div');
        simpleLinkContainer.classList.add('simple-link-container'); // Add minimal styling class
        simpleLinkContainer.appendChild(projectLink);
        projectsContainer.appendChild(simpleLinkContainer);
      });
    })
    .catch(error => console.error('Error fetching repositories:', error));
</script>

<style>
  /* Dark Mode Styling */

  /* Background and text color */
  body {
    background-color: #121212;
    color: #e0e0e0;
    font-family: Arial, sans-serif;
  }

  h1, h2 {
    color: #e0e0e0;
  }

  #projects-container {
    margin: 0 auto;
    max-width: 1200px;
    padding: 30px;
  }

  /* Style the iframe to have rounded corners and shadow */
  iframe.project-iframe {
    width: 100%;
    height: 400px;
    border: none; /* Remove default border */
    border-radius: 15px; /* Round the borders */
    margin: 20px 0;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  /* Style the project cards for iframe-based projects (keep the grey background and border) */
  .project-card {
    margin-bottom: 30px;
    padding: 20px;
    background-color: #2c2c2c; /* Grey card background */
    border-radius: 10px; /* Rounded corners for the card */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3); /* Light shadow for the card */
  }

  .project-title {
    font-size: 1.5em;
    margin-bottom: 10px;
    color: #ffffff;
  }

  /* Style for project links */
  .project-links a {
    color: #4CAF50;  /* Light green for links */
    text-decoration: none;
    font-size: 1.2em;
  }

  .project-links a:hover {
    text-decoration: underline;
  }

  /* Minimal styling for non-iframe links */
  .simple-link-container {
    margin-bottom: 10px;
  }

  .simple-link-container a {
    color: #4CAF50;
    text-decoration: none;
    font-size: 1em; /* Smaller size for the links */
  }

  .simple-link-container a:hover {
    text-decoration: underline;
  }
</style>