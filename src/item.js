import { format } from "date-fns";

export class Item {
    constructor(project, name, description, priority, dueDate, flag){
        this.project = project;
        this.name = name;
        this.description = description;
        this.priority = priority;
        this.dueDate = dueDate;
        this.flag = flag;
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

    deleteItem(){
        this.project.deleteItem(this.name);
    }

    saveLocal(){
        this.project.saveLocal();
    }
}