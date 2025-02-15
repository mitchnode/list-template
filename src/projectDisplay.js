import { refresh } from "./refresh";
import { projectViewDisplay } from "./projectViewDisplay";

export function projectDisplay(parent, project){
    const projectDOM = document.createElement("div");
    projectDOM.className = "project";

    const projectDOMBox = document.createElement("div");
    projectDOMBox.className = "projectbox";
    projectDOMBox.addEventListener("click", () => {refresh(content, projectViewDisplay(project))});
    projectDOM.appendChild(projectDOMBox);

    const projectDOMName = document.createElement("h3");
    projectDOMName.className = "name";
    projectDOMName.textContent = project.getName();
    projectDOMBox.appendChild(projectDOMName);

    const projectDOMDelete = document.createElement("button");
    projectDOMDelete.className = "delete";
    projectDOMDelete.textContent = "X";
    projectDOMDelete.addEventListener("click", () => {project.deleteProject();});
    projectDOM.appendChild(projectDOMDelete);

    return projectDOM;
}