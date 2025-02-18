import { Item } from './item.js';
import { format } from "date-fns";

export class Project{
    constructor(store, name){
        this.store = store;
        this.name = name;
        this.projectData = {};
    }

    getName(){
        return this.name;
    }

    getProjectData(){
        return this.projectData;
    }

    getLength(){
        return this.projectData.length;
    }

    setName(name){
        this.name = name;
        this.saveLocal();
    }
    
    addItem(name, description = "", priority = "normal", dueDate = Date.now() + 86400000, flag = false){
        this.projectData[name] = new Item(this, name, description, priority, format(dueDate, "dd/MM/yyyy"), flag);
        this.saveLocal();
    }

    deleteProject(){
        this.store.deleteProject(this.name);
    }

    deleteItem(name){
        delete this.projectData[name];
        this.saveLocal();
    }

    saveLocal(){
        this.store.saveLocal();
    }
}