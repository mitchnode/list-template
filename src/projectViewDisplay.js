import { add } from "date-fns";
import { refresh } from "./refresh";
import { itemDisplay } from "./itemDisplay";

export function projectViewDisplay(project){
    const projectDOMView = document.createElement("div");
    projectDOMView.className = "projectview";
    
    if(project != null){
        const projectDOMTitle = document.createElement("h1");
        projectDOMTitle.className = "projecttitle";
        projectDOMTitle.textContent = project.getName();
        projectDOMView.appendChild(projectDOMTitle);

        const projectDOMItems = document.createElement("div");
        projectDOMItems.className = "projectitems";
        projectDOMView.appendChild(projectDOMItems);

        Object.entries(project.getProjectData()).map(item => {
            projectDOMItems.appendChild(itemDisplay(item[1]));
        })
        
        const addItemDOM = document.createElement("div");
        addItemDOM.classList = "item additem";
        addItemDOM.addEventListener("click", () => {
            var input = prompt("Enter item name", "Item Name");
            if(input != null){
                project.addItem(input);
                refresh(content, projectViewDisplay(project))
            }
        });

        projectDOMItems.appendChild(addItemDOM);

    }

    return projectDOMView
}