import { refresh } from "./refresh";
import { projectViewDisplay } from "./projectViewDisplay";

export function itemDisplay(item){
    const itemDOM = document.createElement("div");
    itemDOM.className = "item";

    const itemDOMBox = document.createElement("div");
    if(item.getFlag()){
        itemDOMBox.classList = "itembox itemcomplete";
    } else {
        itemDOMBox.classList = "itembox";
    }
    itemDOM.appendChild(itemDOMBox);

    let itemDOMName;
    let itemDOMDesc;
    let itemDOMPriority;
    let itemDOMDueDate;

    const itemDOMNameLabel = document.createElement("label");
    itemDOMNameLabel.textContent = "Name: ";
    
    const itemDOMDescLabel = document.createElement("label");
    itemDOMDescLabel.textContent = "Description: ";

    const itemDOMPriorityLabel = document.createElement("label");
    itemDOMPriorityLabel.textContent = "Priority: ";

    const itemDOMDueDateLabel = document.createElement("label");
    itemDOMDueDateLabel.textContent = "DueDate: ";

    if(!item.getEdit()){
        itemDOMName = document.createElement("div");
        itemDOMDesc = document.createElement("div");
        itemDOMPriority = document.createElement("div");
        itemDOMDueDate = document.createElement("div");
    } else {
        itemDOMName = document.createElement("input");
        itemDOMName.value = item.getName();        

        itemDOMDesc = document.createElement("input");
        itemDOMDesc.value = item.getDescription();

        itemDOMPriority = document.createElement("input");
        itemDOMPriority.value = item.getPriority();

        itemDOMDueDate = document.createElement("input");
        itemDOMDueDate.value = item.getDueDate();
    }
    
    itemDOMName.className = "name";
    itemDOMName.textContent = item.getName();
    itemDOMBox.appendChild(itemDOMNameLabel);
    itemDOMNameLabel.appendChild(itemDOMName);
    
    itemDOMDesc.className = "description"
    itemDOMDesc.textContent = item.getDescription();
    itemDOMBox.appendChild(itemDOMDescLabel);
    itemDOMDescLabel.appendChild(itemDOMDesc);
    
    itemDOMPriority.className = "priority"
    itemDOMPriority.textContent = item.getPriority();
    itemDOMBox.appendChild(itemDOMPriorityLabel);
    itemDOMPriorityLabel.appendChild(itemDOMPriority);

    itemDOMDueDate.className = "duedate";
    itemDOMDueDate.textContent = item.getDueDate();
    itemDOMBox.appendChild(itemDOMDueDateLabel);
    itemDOMDueDateLabel.appendChild(itemDOMDueDate);

    const itemDOMControl = document.createElement("div");
    itemDOMControl.className = "itemcontrol";
    itemDOM.appendChild(itemDOMControl);

    if(!item.getEdit()){
        const itemDOMFlag = document.createElement("button");
        itemDOMFlag.className = "flag";
        itemDOMFlag.addEventListener("click", () => {item.toggleFlag(); refresh(content, projectViewDisplay(item.getProject()))});
        itemDOMControl.appendChild(itemDOMFlag);
    }

    if(!item.getFlag()){
        const itemDOMEdit = document.createElement("button");
        if(item.getEdit()){
            itemDOMEdit.className = "save";
        } else {
            itemDOMEdit.className = "edit";
        }
        itemDOMEdit.addEventListener("click", () => {item.editItem(); refresh(content, projectViewDisplay(item.getProject()))});
        itemDOMControl.appendChild(itemDOMEdit);
    }
    
    const itemDOMDelete = document.createElement("button");
    itemDOMDelete.className = "delete_item";
    itemDOMDelete.addEventListener("click", () => {item.deleteItem(); refresh(content, projectViewDisplay(item.getProject()))});
    itemDOMControl.appendChild(itemDOMDelete);

    return itemDOM;
}


