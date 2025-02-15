import { Project } from "./project.js"

export class ProjectStore {
    constructor(){
        this.storeData = {};
    }

    addProject(name){
        return this.storeData[name] = new Project(this, name);
    }

    deleteProject(name){
        delete this.storeData[name];
        console.log(this.storeData)
    }

    getStoreData(){
        return this.storeData;
    }
}