import { Item } from './item.js';

export class Project{
    constructor(name){
        this.name = name;
        this.projectData = {};
    }

    getName(){
        return this.name;
    }

    getProjectData(){
        return this.projectData;
    }

    setName(name){
        this.name = name;
    }
    
    addItem(name){
        this.projectData[name] = new Item(name);
    }

}