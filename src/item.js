import { format } from "date-fns";

export class Item {
    constructor(project, name, description = "", priority = "normal", dueDate = format(Date.now() + 86400000, "dd/mm/yyyy")){
        this.project = project;
        this.name = name;
        this.description = description;
        this.priority = priority;
        this.dueDate = dueDate;
        this.flag = false;
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
    }

    setDescription(description){
        this.description = description;
    }

    setPriority(priority){
        this.priority = priority;
    }

    setDueDate(duedate){
        this.dueDate = format(duedate, "dd/mm/yyyy");
    }

    toggleFlag(){
        if(this.flag == false){
            this.flag = true;
        } else {
            this.flag = false;
        }
    }

    deleteItem(){
        this.project.deleteItem(this.name);
    }
}