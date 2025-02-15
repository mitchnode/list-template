import { Item } from './item.js';

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
    }
    
    addItem(name){
        this.projectData[name] = new Item(this, name);
    }

    deleteProject(){
        this.store.deleteProject(this.name);
    }

    deleteItem(name){
        delete this.projectData[name];
    }
}