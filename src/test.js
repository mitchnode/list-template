import { Project } from './project.js';

export function testProject(){
    const name = "Test Project";
    var project = new Project(name);
    project.addItem("Test Item 1");
    project.addItem("Test Item 2");
    project.addItem("Test Item 3");
    console.log(project)
}
