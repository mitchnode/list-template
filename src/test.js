import { ProjectStore } from './projectStore.js';
import { projectDisplay } from './projectDisplay.js';

export function testProject(){
    const pageTitle = document.createElement("H1");
    pageTitle.textContent = "To Do List";
    title.appendChild(pageTitle);

    const name = "Test Project";
    var projectStore = new ProjectStore();
    if(localStorage.getItem("ProjectStore")){
        projectStore.loadLocal();
    } else {
        
        var project = projectStore.addProject(name);
        project.addItem("Test Item 1");
        project.addItem("Test Item 2", "This is a test item.", "High");
        project.addItem("Test Item 3", "This is also a test item.", "Low", "25/02/2025");
        projectStore.addProject("Test Project 2");
    }
    nav.appendChild(projectDisplay(content,projectStore));
}
