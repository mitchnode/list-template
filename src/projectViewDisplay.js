import { itemDisplay } from "./itemDisplay";

export function projectViewDisplay(project){
    const projectView = document.createElement("div");
    projectView.className = "projectview";

    const projectTitle = document.createElement("h1");
    projectTitle.className = "projecttitle";
    projectTitle.textContent = project.getName();
    projectView.appendChild(projectTitle);

    project.getProjectData.map((item) => {
        projectView.appendChild(itemDisplay(item))
    })
}