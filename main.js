"use strict";
document.getElementById('resumeForm')?.addEventListener('submit', function (event) {
    event.preventDefault();
    // Get the values from the form elements
    const nameElement = document.getElementById('name');
    const emailElement = document.getElementById('email');
    const degreeElement = document.getElementById('degree');
    const institutionElement = document.getElementById('institution');
    const jobTitleElement = document.getElementById('jobTitle');
    const companyElement = document.getElementById('company');
    const skillsElement = document.getElementById('skills');
    if (nameElement && emailElement && degreeElement && institutionElement && jobTitleElement && companyElement && skillsElement) {
        const name = nameElement.value;
        const email = emailElement.value;
        const degree = degreeElement.value;
        const institution = institutionElement.value;
        const jobTitle = jobTitleElement.value;
        const company = companyElement.value;
        const skills = skillsElement.value;
        // Collect details from form and create resume content
        const resumeContainer = document.createElement('div');
        resumeContainer.innerHTML = `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Education:</strong> ${degree} at ${institution}</p>
            <p><strong>Work Experience:</strong> ${jobTitle} at ${company}</p>
            <p><strong>Skills:</strong> ${skills}</p>
            <button id="editResume">Edit Resume</button>
        `;
        // Display the resume and hide the form
        const resumeOutput = document.getElementById('resumeOutput');
        if (resumeOutput) {
            resumeOutput.innerHTML = ''; // Clear previous content
            resumeOutput.appendChild(resumeContainer);
            resumeOutput.style.display = 'block'; // Show resume output
        }
        else {
            console.error('Resume output container not found.');
        }
        const resumeForm = document.getElementById('resumeForm');
        if (resumeForm) {
            resumeForm.style.display = 'none'; // Hide form
        }
        // Add event listener for the edit button
        document.getElementById('editResume')?.addEventListener('click', () => {
            if (resumeForm) {
                resumeForm.style.display = 'block'; // Show form
            }
            if (resumeOutput) {
                resumeOutput.style.display = 'none'; // Hide resume output
            }
        });
    }
});
