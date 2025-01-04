document.addEventListener("DOMContentLoaded", function () {
    // Personal Info
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var phoneInput = document.getElementById("phone");
    // Education
    var addEducationBtn = document.getElementById("add-education");
    var educationSection = document.getElementById("education-section");
    // Work Experience
    var addExperienceBtn = document.getElementById("add-experience");
    var workExperienceSection = document.getElementById("work-experience-section");
    // Skills
    var addSkillBtn = document.getElementById("add-skill");
    var skillsSection = document.getElementById("skills-section");
    // Resume Preview
    var resumeContainer = document.getElementById("resume");
    // Function to update the resume preview
    function updateResume() {
        var name = nameInput.value;
        var email = emailInput.value;
        var phone = phoneInput.value;
        var resumeHTML = "\n            <div class=\"resume-section\">\n                <h3>Personal Information</h3>\n                <ul>\n                    <li><strong>Name:</strong> <span class=\"editable\" contenteditable=\"true\">".concat(name, "</span></li>\n                    <li><strong>Email:</strong> <span class=\"editable\" contenteditable=\"true\">").concat(email, "</span></li>\n                    <li><strong>Phone:</strong> <span class=\"editable\" contenteditable=\"true\">").concat(phone, "</span></li>\n                </ul>\n            </div>\n        ");
        // Add Education
        var educationItems = document.querySelectorAll(".education-item");
        if (educationItems.length > 0) {
            resumeHTML += "<div class=\"resume-section\"><h3>Education</h3><ul>";
            educationItems.forEach(function (item) {
                var school = item.querySelector(".school-name").value;
                var degree = item.querySelector(".degree-name").value;
                var year = item.querySelector(".graduation-year").value;
                resumeHTML += "\n                    <li><strong><span class=\"editable\" contenteditable=\"true\">".concat(degree, "</span></strong> in \n                    <span class=\"editable\" contenteditable=\"true\">").concat(school, "</span> \n                    (<span class=\"editable\" contenteditable=\"true\">").concat(year, "</span>)</li>\n                ");
            });
            resumeHTML += "</ul></div>";
        }
        // Add Work Experience
        var workItems = document.querySelectorAll(".work-item");
        if (workItems.length > 0) {
            resumeHTML += "<div class=\"resume-section\"><h3>Work Experience</h3><ul>";
            workItems.forEach(function (item) {
                var company = item.querySelector(".company-name").value;
                var position = item.querySelector(".position").value;
                var startDate = item.querySelector(".start-date").value;
                var endDate = item.querySelector(".end-date").value;
                var stillWorking = item.querySelector(".still-working").checked;
                resumeHTML += "\n                    <li>\n                        <strong><span class=\"editable\" contenteditable=\"true\">".concat(position, "</span></strong> \n                        at <span class=\"editable\" contenteditable=\"true\">").concat(company, "</span> \n                        (<span class=\"editable\" contenteditable=\"true\">").concat(startDate, "</span> - \n                        <span class=\"editable\" contenteditable=\"true\">").concat(stillWorking ? "Present" : endDate, "</span>)\n                    </li>\n                ");
            });
            resumeHTML += "</ul></div>";
        }
        // Add Skills
        var skillItems = document.querySelectorAll(".skill-item");
        if (skillItems.length > 0) {
            resumeHTML += "<div class=\"resume-section\"><h3>Skills</h3><ul>";
            skillItems.forEach(function (item) {
                var skill = item.querySelector(".skill-name").value;
                resumeHTML += "<li><span class=\"editable\" contenteditable=\"true\">".concat(skill, "</span></li>");
            });
            resumeHTML += "</ul></div>";
        }
        resumeContainer.innerHTML = resumeHTML;
        // Make sections editable
        var editableFields = document.querySelectorAll(".editable");
        editableFields.forEach(function (field) {
            field.addEventListener("blur", function () {
                updateResume(); // Update resume preview after editing
            });
        });
    }
    // Personal Info listeners
    nameInput.addEventListener("input", updateResume);
    emailInput.addEventListener("input", updateResume);
    phoneInput.addEventListener("input", updateResume);
    // Education listeners
    addEducationBtn.addEventListener("click", function () {
        var educationItem = document.createElement("div");
        educationItem.classList.add("education-item");
        educationItem.innerHTML = "\n            <input type=\"text\" class=\"school-name\" placeholder=\"School Name\">\n            <input type=\"text\" class=\"degree-name\" placeholder=\"Degree\">\n            <input type=\"text\" class=\"graduation-year\" placeholder=\"Year of Graduation\">\n            <button class=\"remove-item\">- Remove</button>\n        ";
        educationSection.appendChild(educationItem);
        educationItem.querySelector(".remove-item").addEventListener("click", function () {
            educationItem.remove();
            updateResume();
        });
        updateResume();
    });
    // Work Experience listeners
    addExperienceBtn.addEventListener("click", function () {
        var workItem = document.createElement("div");
        workItem.classList.add("work-item");
        workItem.innerHTML = "\n            <input type=\"text\" class=\"company-name\" placeholder=\"Company Name\">\n            <input type=\"text\" class=\"position\" placeholder=\"Position\">\n            <input type=\"date\" class=\"start-date\" placeholder=\"Start Date\">\n            <input type=\"date\" class=\"end-date\" placeholder=\"End Date\">\n            <input type=\"checkbox\" class=\"still-working\"> Still working here\n            <button class=\"remove-item\">- Remove</button>\n        ";
        workExperienceSection.appendChild(workItem);
        workItem.querySelector(".remove-item").addEventListener("click", function () {
            workItem.remove();
            updateResume();
        });
        updateResume();
    });
    // Skills listeners
    addSkillBtn.addEventListener("click", function () {
        var skillItem = document.createElement("div");
        skillItem.classList.add("skill-item");
        skillItem.innerHTML = "\n            <input type=\"text\" class=\"skill-name\" placeholder=\"Skill\">\n            <button class=\"remove-item\">- Remove</button>\n        ";
        skillsSection.appendChild(skillItem);
        skillItem.querySelector(".remove-item").addEventListener("click", function () {
            skillItem.remove();
            updateResume();
        });
        updateResume();
    });
});
