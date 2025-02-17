import { Project } from "./project.js"

export class ProjectStore {
    constructor(){
        this.storeData = {};
    }

    addProject(name){
        var project = new Project(this, name)
        this.storeData[name] = project;
        this.saveLocal();
        return project;
    }

    deleteProject(name){
        delete this.storeData[name];
        this.saveLocal();
        //console.log(this.storeData)
    }

    getStoreData(){
        return this.storeData;
    }

    replacerFunc = () => {
        const visited = new WeakSet();
        return (key, value) => {
          if (typeof value === "object" && value !== null) {
            if (visited.has(value)) {
              return;
            }
            visited.add(value);
          }
          return value;
        };
      };

    saveLocal(){
        localStorage.setItem("ProjectStore", JSON.stringify(this.storeData, this.replacerFunc()));
    }

    loadLocal(){
        var loadData = JSON.parse(localStorage.getItem("ProjectStore"));
        Object.entries(loadData).map(project => {
            var loadedProject = this.addProject(project[0]);
            Object.entries(project[1]["projectData"]).map(item => {
                console.log(item);
                loadedProject.addItem(item[1]["name"], item[1]["description"], item[1]["priority"], item[1]["dueDate"]);

            });
        });
    }
}