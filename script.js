function showProjectDetails(projectId) {
    const projectTitleElement = document.getElementById('project-title');
    const projectDescriptionElement = document.getElementById('project-description');
    const projectDetailsSection = document.getElementById('project-details');

    // Dummy project data (replace with your actual project details)
    const projects = {
        1: { title: 'Project 1', description: 'Details of Project 1.' },
        2: { title: 'Project 2', description: 'Details of Project 2.' }
    };

    const project = projects[projectId];

    if (project) {
        projectTitleElement.textContent = project.title;
        projectDescriptionElement.textContent = project.description;
        projectDetailsSection.classList.remove('hidden');
    }
}

function hideProjectDetails() {
    const projectDetailsSection = document.getElementById('project-details');
    projectDetailsSection.classList.add('hidden');
}
