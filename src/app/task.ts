export class Task {
  date: string;
  title: string;
  description: string;
  priority: string;

  constructor(newDate?: string, newTitle?: string, newDescription?: string, newPriority?: string)  {
    this.date = newDate;
    this.description = newDescription;
    this.priority = newPriority;
    this.title = newTitle;
  }
}
