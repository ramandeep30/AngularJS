export class Task {
  date: Date;
  title: string;
  description: string;
  priority: string;

  constructor() {
    this.date = null;
    this.description = '';
    this.title = '';
    this.priority = '';
  }
  constructor(newDate: Date, newDescription: string,  newTitle: string, newPriority: string)  {
    this.date = newDate;
    this.description = newDescription;
    this.priority = newPriority;
    this.title = newTitle;
  }
}
