module ToDoList {
  export interface ITask {
    description: string;
    done: boolean;
    priority: string;
    markDone(): void;
    assignedTo?: IPerson;
  }
  export interface IPerson {
    name: string;
    email: string;
    phone?: string;
  }
  export class Task implements ITask{
    done: boolean = false;
    
    constructor(public type: string, public description: string, public priority: string, public assignedTo?: IPerson){}
    markDone(){
      this.done = true;
    }
    CheckMatch(){
     return this.type;
    }
  }
  export class HomeTask extends Task {
    constructor(public type: string, public description: string, public priority: string, public assignedTo?: IPerson){
      super(description, priority);
    }
  }
  export class WorkTask extends Task{
    constructor(public type: string, public dueDate: Date, public description: string, public priority: string, public assignedTo: IPerson){
      super(description, priority, assignedTo);
    }
  }
  export class HobbyTask extends Task{
    constructor(public type: string, public description: string){
      super(description, "low");
    }
  }
}
