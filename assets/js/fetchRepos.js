
    // GitHub username
    const username = 'Zabsooon'; // Replace with your GitHub username
    const apiUrl = `https://api.github.com/users/${username}/repos`;

    // Fetch GitHub repositories data
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const projectsContainer = document.getElementById('projects-container');
            
            // Iterate through each repository and create an iframe and link
            data.forEach(repo => {
                const projectCard = document.createElement('div');
                projectCard.classList.add('project-card');

                const projectTitle = document.createElement('h2');
                projectTitle.classList.add('project-title');
                projectTitle.innerText = repo.name;

                const iframe = document.createElement('iframe');
                iframe.src = `https://Zabsooon.github.io/${repo.name}/`;  // Link to your subproject's GitHub Pages
                iframe.frameBorder = '0';

                const projectLinks = document.createElement('div');
                projectLinks.classList.add('project-links');
                projectLinks.innerHTML = `
                    <p><a href="https://github.com/${username}/${repo.name}" target="_blank">View on GitHub</a></p>
                `;

                // Append the elements to the project card
                projectCard.appendChild(projectTitle);
                projectCard.appendChild(iframe);
                projectCard.appendChild(projectLinks);

                // Append the project card to the container
                projectsContainer.appendChild(projectCard);
            });
        })
        .catch(error => console.error('Error fetching repositories:', error));