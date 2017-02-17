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
}
