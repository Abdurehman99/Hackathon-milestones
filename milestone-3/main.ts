// script.js
document.addEventListener("DOMContentLoaded", () => {
    // Personal Info
    const nameInput = document.getElementById("name") as HTMLInputElement;
    const emailInput = document.getElementById("email") as HTMLInputElement;
    const phoneInput = document.getElementById("phone") as HTMLInputElement;

    // Education
    const addEducationBtn = document.getElementById("add-education") as HTMLButtonElement;
    const educationSection = document.getElementById("education-section") as HTMLElement;

    // Work Experience
    const addExperienceBtn = document.getElementById("add-experience") as HTMLButtonElement;
    const workExperienceSection = document.getElementById("work-experience-section") as HTMLElement;

    // Skills
    const addSkillBtn = document.getElementById("add-skill") as HTMLButtonElement;
    const skillsSection = document.getElementById("skills-section") as HTMLElement;

    // Resume Preview
    const resumeContainer = document.getElementById("resume") as HTMLElement;

    // Function to update the resume preview
    function updateResume() {
        const name = nameInput.value;
        const email = emailInput.value;
        const phone = phoneInput.value;

        let resumeHTML = `
            <div class="resume-section">
                <h3>Personal Information</h3>
                <ul>
                    <li><strong>Name:</strong> ${name}</li>
                    <li><strong>Email:</strong> ${email}</li>
                    <li><strong>Phone:</strong> ${phone}</li>
                </ul>
            </div>
        `;

        // Add Education
        const educationItems = document.querySelectorAll(".education-item");
        if (educationItems.length > 0) {
            resumeHTML += `<div class="resume-section"><h3>Education</h3><ul>`;
            educationItems.forEach(item => {
                const school = (item.querySelector(".school-name") as HTMLInputElement).value;
                const degree = (item.querySelector(".degree-name") as HTMLInputElement).value;
                const year = (item.querySelector(".graduation-year") as HTMLInputElement).value;
                resumeHTML += `<li><strong>${degree}</strong> in ${school} (${year})</li>`;
            });
            resumeHTML += `</ul></div>`;
        }

        // Add Work Experience
        const workItems = document.querySelectorAll(".work-item");
        if (workItems.length > 0) {
            resumeHTML += `<div class="resume-section"><h3>Work Experience</h3><ul>`;
            workItems.forEach(item => {
                const company = (item.querySelector(".company-name") as HTMLInputElement).value;
                const position = (item.querySelector(".position") as HTMLInputElement).value;
                const startDate = (item.querySelector(".start-date") as HTMLInputElement).value;
                const endDate = (item.querySelector(".end-date") as HTMLInputElement).value;
                const stillWorking = (item.querySelector(".still-working") as HTMLInputElement).checked;
                resumeHTML += `<li><strong>${position}</strong> at ${company} (${startDate} - ${stillWorking ? "Present" : endDate})</li>`;
            });
            resumeHTML += `</ul></div>`;
        }

        // Add Skills
        const skillItems = document.querySelectorAll(".skill-item");
        if (skillItems.length > 0) {
            resumeHTML += `<div class="resume-section"><h3>Skills</h3><ul>`;
            skillItems.forEach(item => {
                const skill = (item.querySelector(".skill-name") as HTMLInputElement).value;
                resumeHTML += `<li>${skill}</li>`;
            });
            resumeHTML += `</ul></div>`;
        }

        resumeContainer.innerHTML = resumeHTML;
    }

    // Personal Info listeners
    nameInput.addEventListener("input", updateResume);
    emailInput.addEventListener("input", updateResume);
    phoneInput.addEventListener("input", updateResume);

    // Education listeners
    addEducationBtn.addEventListener("click", () => {
        const educationItem = document.createElement("div");
        educationItem.classList.add("education-item");
        educationItem.innerHTML = `
            <input type="text" class="school-name" placeholder="School Name">
            <input type="text" class="degree-name" placeholder="Degree">
            <input type="text" class="graduation-year" placeholder="Year of Graduation">
            <button class="remove-item">- Remove</button>
        `;
        educationSection.appendChild(educationItem);
        educationItem.querySelector(".remove-item")!.addEventListener("click", () => {
            educationItem.remove();
            updateResume();
        });
        updateResume();
    });

    // Work Experience listeners
    addExperienceBtn.addEventListener("click", () => {
        const workItem = document.createElement("div");
        workItem.classList.add("work-item");
        workItem.innerHTML = `
            <input type="text" class="company-name" placeholder="Company Name">
            <input type="text" class="position" placeholder="Position">
            <input type="date" class="start-date" placeholder="Start Date">
            <input type="date" class="end-date" placeholder="End Date">
            <input type="checkbox" class="still-working"> Still working here
            <button class="remove-item">- Remove</button>
        `;
        workExperienceSection.appendChild(workItem);
        workItem.querySelector(".remove-item")!.addEventListener("click", () => {
            workItem.remove();
            updateResume();
        });
        updateResume();
    });

    // Skills listeners
    addSkillBtn.addEventListener("click", () => {
        const skillItem = document.createElement("div");
        skillItem.classList.add("skill-item");
        skillItem.innerHTML = `
            <input type="text" class="skill-name" placeholder="Skill">
            <button class="remove-item">- Remove</button>
        `;
        skillsSection.appendChild(skillItem);
        skillItem.querySelector(".remove-item")!.addEventListener("click", () => {
            skillItem.remove();
            updateResume();
        });
        updateResume();
    });
});
