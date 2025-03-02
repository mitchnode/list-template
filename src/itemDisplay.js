import { refresh } from "./refresh";
import { projectViewDisplay } from "./projectViewDisplay";
import { format, toDate } from "date-fns";

export function itemDisplay(item){
    const itemid = item.getItemId();

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
    
    const itemDOMNameRow =document.createElement("div");
    itemDOMNameRow.className = 'itemrow';
    const itemDOMDescRow =document.createElement("div");
    itemDOMDescRow.className = 'itemrow';
    const itemDOMPriorityRow =document.createElement("div");
    itemDOMPriorityRow.className = 'itemrow';
    const itemDOMDueDateRow =document.createElement("div");
    itemDOMDueDateRow.className = 'itemrow';
    itemDOMBox.appendChild(itemDOMNameRow);
    itemDOMBox.appendChild(itemDOMDescRow);
    itemDOMBox.appendChild(itemDOMPriorityRow);
    itemDOMBox.appendChild(itemDOMDueDateRow);

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
        itemDOMPriority.textContent = item.getPriority();
        itemDOMDueDate = document.createElement("div");
    } else {
        itemDOMName = document.createElement("input");
        itemDOMName.id = `name${itemid}`;
        itemDOMName.value = item.getName();        

        itemDOMDesc = document.createElement("input");
        itemDOMDesc.id = `desc${itemid}`
        itemDOMDesc.value = item.getDescription();

        itemDOMPriority = document.createElement("select");
        itemDOMPriority.title = `priority${itemid}`;
        itemDOMPriority.id = `priority${itemid}`;

        const options = ['Low', 'Normal', 'High'];

        options.forEach(option => {
            const optionElement = document.createElement('option');
            optionElement.value = option;
            if(option == item.getPriority()){
                optionElement.selected = true;
            }
            optionElement.textContent = option;
            itemDOMPriority.appendChild(optionElement);
        });
            

        itemDOMDueDate = document.createElement("input");
        itemDOMDueDate.id = `duedate${itemid}`
        itemDOMDueDate.value = item.getDueDate();
    }
    
    itemDOMName.className = "name";
    itemDOMName.textContent = item.getName();
    itemDOMNameRow.appendChild(itemDOMNameLabel);
    itemDOMNameRow.appendChild(itemDOMName);
    
    itemDOMDesc.className = "description"
    itemDOMDesc.textContent = item.getDescription();
    itemDOMDescRow.appendChild(itemDOMDescLabel);
    itemDOMDescRow.appendChild(itemDOMDesc);
    
    itemDOMPriority.className = "priority"
    itemDOMPriorityRow.appendChild(itemDOMPriorityLabel);
    itemDOMPriorityRow.appendChild(itemDOMPriority);

    if(item.getDueDate() >= format(Date.now(), "dd/MM/yyyy") && !item.getFlag()){
        itemDOMDueDate.classList = "duedate overdue";
    } else {
        itemDOMDueDate.className = "duedate";
    }
    itemDOMDueDate.textContent = item.getDueDate();
    itemDOMDueDateRow.appendChild(itemDOMDueDateLabel);
    itemDOMDueDateRow.appendChild(itemDOMDueDate);

    const itemDOMControl = document.createElement("div");
    itemDOMControl.className = "itemcontrol";
    itemDOM.appendChild(itemDOMControl);

    if(!item.getEdit()){
        const itemDOMFlag = document.createElement("button");
        itemDOMFlag.className = "flag";
        itemDOMFlag.addEventListener("click", () => {item.toggleFlag(); refresh(content, projectViewDisplay(item.getProject()))});
        itemDOMControl.appendChild(itemDOMFlag);
        const itemDOMDelete = document.createElement("button");
        itemDOMDelete.className = "delete_item";
        itemDOMDelete.addEventListener("click", () => {item.deleteItem(); refresh(content, projectViewDisplay(item.getProject()))});
        itemDOMControl.appendChild(itemDOMDelete);
    }

    if(!item.getFlag()){
        const itemDOMEdit = document.createElement("button");
        if(item.getEdit()){
            itemDOMEdit.className = "save";
            itemDOMEdit.id = itemid;
            itemDOMEdit.addEventListener("click", (e) => {
                const itemid = e.target.id
                const itemDOMName = document.getElementById(`name${itemid}`);
                const itemDOMDesc = document.getElementById(`desc${itemid}`);
                const itemDOMPriority = document.getElementById(`priority${itemid}`);
                const itemDOMDueDate = document.getElementById(`duedate${itemid}`);

                item.saveItem(itemDOMName.value,itemDOMDesc.value,itemDOMPriority.value,itemDOMDueDate.value); refresh(content, projectViewDisplay(item.getProject()))});
        } else {
            itemDOMEdit.className = "edit";
            itemDOMEdit.addEventListener("click", () => {item.editItem(); refresh(content, projectViewDisplay(item.getProject()))});
        }
        
        itemDOMControl.appendChild(itemDOMEdit);
    }
    return itemDOM;
}


