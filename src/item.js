import { format, toDate } from "date-fns";

export class Item {
    constructor(project, name, description, priority, dueDate, flag, itemid){
        this.project = project;
        this.name = name;
        this.description = description;
        this.priority = priority;
        this.dueDate = dueDate;
        this.flag = flag;
        this.itemid = itemid;
        this.edit = false;
    }

    getProject(){
        return this.project;
    }

    getName(){
        return this.name;
    }

    getDescription(){
        return this.description;
    }

    getPriority(){
        return this.priority;
    }

    getDueDate(){
        return this.dueDate;
    }
    
    getFlag(){
        return this.flag;
    }

    getEdit(){
        return this.edit;
    }

    getItemId(){
        return this.itemid;
    }

    saveItem(name, description, priority, dueDate){
        this.setName(name);
        this.setDescription(description);
        this.setPriority(priority);
        this.dueDate = dueDate;
        this.editItem();
        this.saveLocal();
    }

    setName(name){
        this.name = name;
        this.saveLocal();
    }

    setDescription(description){
        this.description = description;
        this.saveLocal();
    }

    setPriority(priority){
        this.priority = priority;
        this.saveLocal();
    }

    setDueDate(duedate){
        this.dueDate = format(duedate, "dd/mm/yyyy");
        this.saveLocal();
    }

    toggleFlag(){
        if(this.flag == false){
            this.flag = true;
        } else {
            this.flag = false;
        }
        this.saveLocal();
    }

    editItem(){
        if(this.edit == false){
            this.edit = true;
        } else {
            this.edit = false;
        }
    }

    deleteItem(){
        this.project.deleteItem(this.name);
    }

    saveLocal(){
        this.project.saveLocal();
    }
}