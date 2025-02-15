import { refresh } from "./refresh";
import { projectViewDisplay } from "./projectViewDisplay";

export function projectDisplay(parent, projectStore){
    const projectDOMList = document.createElement("div");
    projectDOMList.className = "projectlist";

    Object.entries(projectStore.getStoreData()).map(project => {
        const projectDOM = document.createElement("div");
        projectDOM.className = "project";

        const projectDOMBox = document.createElement("div");
        projectDOMBox.className = "projectbox";
        projectDOMBox.addEventListener("click", () => {refresh(parent, projectViewDisplay(project[1]))});
        projectDOM.appendChild(projectDOMBox);

        const projectDOMName = document.createElement("h3");
        projectDOMName.className = "name";
        projectDOMName.textContent = project[1].getName();
        projectDOMBox.appendChild(projectDOMName);

        const projectDOMDelete = document.createElement("button");
        projectDOMDelete.className = "delete";
        projectDOMDelete.textContent = "X";
        projectDOMDelete.addEventListener("click", () => {
            project[1].deleteProject(); 
            refresh(nav, projectDisplay(parent, projectStore)); 
            refresh(content, projectViewDisplay(null));
        });
        projectDOM.appendChild(projectDOMDelete);
        projectDOMList.appendChild(projectDOM);
    })
    
    return projectDOMList;
}