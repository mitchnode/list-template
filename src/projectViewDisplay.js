import { refresh } from "./refresh";
import { itemDisplay } from "./itemDisplay";

export function projectViewDisplay(project) {
  const projectDOMView = document.createElement("div");
  projectDOMView.className = "projectview";

  if (project != null) {
    let listview = false;

    const projectDOMTitle = document.createElement("h1");
    projectDOMTitle.className = "projecttitle";
    projectDOMTitle.textContent = project.getName();
    projectDOMView.appendChild(projectDOMTitle);

    const projectDOMItems = document.createElement("div");
    const projectDOMCompletedItems = document.createElement("div");
    if (listview) {
      projectDOMItems.classList = "projectitems listview";
      projectDOMCompletedItems.classList =
        "projectitems listview completeditems";
    } else {
      projectDOMItems.className = "projectitems";
      projectDOMCompletedItems.classList = "projectitems completeditems";
    }

    projectDOMView.appendChild(projectDOMItems);

    /* const itemDOMHeading = document.createElement("div");
        itemDOMHeading.classList = "item itemheading"
        const itemDOMHeadingBox = document.createElement("div");
        itemDOMHeadingBox.classList = "itembox itemheadingbox";
        const itemDOMNameHeading = document.createElement("div");
        itemDOMNameHeading.textContent = "Name";
        const itemDOMDescHeading = document.createElement("div");
        itemDOMDescHeading.textContent = "Description";
        itemDOMDescHeading.className = "description";
        const itemDOMPriorityHeading = document.createElement("div");
        itemDOMPriorityHeading.textContent = "Priority";
        const itemDOMDueDateHeading = document.createElement("div");
        itemDOMDueDateHeading.textContent = "Due Date";

        const itemDOMControlsHeading = document.createElement("div");
        itemDOMControlsHeading.textContent = "Controls";
        itemDOMControlsHeading.className = "itemcontrol";
        
        itemDOMHeadingBox.appendChild(itemDOMNameHeading);
        itemDOMHeadingBox.appendChild(itemDOMDescHeading);
        itemDOMHeadingBox.appendChild(itemDOMPriorityHeading);
        itemDOMHeadingBox.appendChild(itemDOMDueDateHeading);
        itemDOMHeading.appendChild(itemDOMHeadingBox);
        itemDOMHeading.appendChild(itemDOMControlsHeading);

        //projectDOMItems.appendChild(itemDOMHeading); */

    Object.entries(project.getProjectData()).map((item) => {
      if (item[1].getFlag()) {
        projectDOMCompletedItems.appendChild(itemDisplay(item[1]));
      } else {
        projectDOMItems.appendChild(itemDisplay(item[1]));
      }
    });

    const addItemDOM = document.createElement("div");
    addItemDOM.classList = "item additem";
    addItemDOM.addEventListener("click", () => {
      var input = prompt("Enter item name", "Item Name");
      if (input != null) {
        project.addItem(input);
        refresh(content, projectViewDisplay(project));
      }
    });

    projectDOMItems.appendChild(addItemDOM);
    projectDOMView.appendChild(projectDOMCompletedItems);
  }

  return projectDOMView;
}
