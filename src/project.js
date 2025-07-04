import { Item } from "./item.js";
import { format } from "date-fns";

export class Project {
  constructor(store, name) {
    this.store = store;
    this.name = name;
    this.count = 0;
    this.projectData = {};
  }

  getName() {
    return this.name;
  }

  getProjectData() {
    return this.projectData;
  }

  getLength() {
    return this.projectData.length;
  }

  setName(name) {
    this.name = name;
    this.saveLocal();
  }

  addItem(
    name,
    description = "",
    priority = "normal",
    dueDate = format(Date.now() + 86400000, "dd/MM/yyyy"),
    flag = false,
    itemid = this.count
  ) {
    this.projectData[name] = new Item(
      this,
      name,
      description,
      priority,
      dueDate,
      flag,
      itemid
    );
    this.saveLocal();
    this.count += 1;
  }

  deleteProject() {
    this.store.deleteProject(this.name);
  }

  deleteItem(name) {
    delete this.projectData[name];
    this.saveLocal();
  }

  saveLocal() {
    this.store.saveLocal();
  }
}
