import { Project } from './project.js';
import { ProjectStore } from './projectStore.js';
import { projectDisplay } from './projectDisplay.js';

export function testProject(){
    const name = "Test Project";
    var projectStore = new ProjectStore();
    if(localStorage.getItem("ProjectStore")){
        projectStore.loadLocal();
    } else {
        
        var project = projectStore.addProject(name);
        project.addItem("Test Item 1");
        project.addItem("Test Item 2");
        project.addItem("Test Item 3");
        projectStore.addProject("Test Project 2");
    }
    nav.appendChild(projectDisplay(content,projectStore));
}
