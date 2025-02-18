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
        project.addItem("Test Item 2", "This is a test item.", "High");
        project.addItem("Test Item 3", "This is also a test item.", "Low", Date.parse("2025/02/25".toString()));
        projectStore.addProject("Test Project 2");
    }
    nav.appendChild(projectDisplay(content,projectStore));
}
