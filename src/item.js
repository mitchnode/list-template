import { format, toDate } from "date-fns";

export class Item {
  constructor(project, name, description, priority, dueDate, flag, itemid) {
    this.project = project;
    this.name = name;
    this.description = description;
    this.priority = priority;
    this.dueDate = dueDate;
    this.flag = flag;
    this.itemid = itemid;
    this.edit = false;
  }

  getProject() {
    return this.project;
  }

  getName() {
    return this.name;
  }

  getDescription() {
    return this.description;
  }

  getPriority() {
    return this.priority;
  }

  getDueDate() {
    var newDate = this.dueDate;
    const [date1, date2, date3] = this.dueDate.split(/[/-]/);
    if (date1 > 32) {
      newDate = new Date(date1, date2 - 1, date3);
    } else {
      newDate = new Date(date3, date2 - 1, date1);
    }
    return format(newDate, "dd/MM/yyyy");
  }

  getFlag() {
    return this.flag;
  }

  getEdit() {
    return this.edit;
  }

  getItemId() {
    return this.itemid;
  }

  saveItem(name, description, priority, dueDate) {
    this.setName(name);
    this.setDescription(description);
    this.setPriority(priority);
    this.dueDate = dueDate;
    this.editItem();
    this.saveLocal();
  }

  setName(name) {
    this.name = name;
    this.saveLocal();
  }

  setDescription(description) {
    this.description = description;
    this.saveLocal();
  }

  setPriority(priority) {
    this.priority = priority;
    this.saveLocal();
  }

  setDueDate(duedate) {
    this.dueDate = duedate;
    this.saveLocal();
  }

  toggleFlag() {
    if (this.flag == false) {
      this.flag = true;
    } else {
      this.flag = false;
    }
    this.saveLocal();
  }

  editItem() {
    if (this.edit == false) {
      this.edit = true;
    } else {
      this.edit = false;
    }
  }

  deleteItem() {
    this.project.deleteItem(this.name);
  }

  saveLocal() {
    this.project.saveLocal();
  }
}
