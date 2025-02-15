
export function itemDisplay(item){
    const itemDOM = document.createElement("div");
    itemDOM.className = "item";

    const itemDOMBox = document.createElement("div");
    itemDOMBox.className = "itembox";
    itemDOM.appendChild(itemDOMBox);
    
    const itemDOMName = document.createElement("h3");
    itemDOMName.className = "name";
    itemDOMName.textContent = item.getName();
    itemDOMBox.appendChild(itemDOMName);

    const itemDOMDesc = document.createElement("p");
    itemDOMDesc.className = "description"
    itemDOMDesc.textContent = item.getDescription();
    itemDOMBox.appendChild(itemDOMDesc);

    const itemDOMPriority = document.createElement("p");
    itemDOMPriority.className = "priority"
    itemDOMPriority.textContent = item.getPriority();
    itemDOMBox.appendChild(itemDOMPriority);

    const itemDOMDueDate = document.createElement("p");
    itemDOMDueDate.className = "duedate";
    itemDOMDueDate.textContent = item.getDueDate();
    itemDOMBox.appendChild(itemDOMDueDate);

    const itemDOMFlag = document.createElement("button");
    itemDOMFlag.className = "flag";
    itemDOMFlag.textContent = "✓";
    itemDOMFlag.addEventListener("click", () => {item.toggleFlag();});
    itemDOM.appendChild(itemDOMFlag);

    const itemDOMDelete = document.createElement("button");
    itemDOMDelete.className = "delete";
    itemDOMDelete.textContent = "X";
    itemDOMDelete.addEventListener("click", () => {item.deleteItem();});
    itemDOM.appendChild(itemDOMDelete);

    return itemDOM;
}


