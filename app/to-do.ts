// class Task {
//   done: boolean = false;
//   constructor(public description: string, public priority: string){}
//   markDone(){
//     this.done = true;
//   }
// }
//


interface IPerson{
  name: string;
  email: string;
}


interface ITask{
  description: string;
  done: boolean;
  priority: string;
  markDone(): void;
  assignedTo?: IPerson;
}

class Task implements ITask{
  done: boolean = false;
  constructor(public description: string, public priority: string, public assignedTo?: IPerson){}
  markDone(){
    this.done = true;
  }
}

class HomeTask extends Task {}

class WorkTask extends Task{
  constructor(public dueDate: Date, public description: string, public priority: string){
    super(description, priority);
  }
}

class HobbyTask extends Task{
  constructor(public description: string){
    super(description, "low");
  }
}

var tasks = [];
tasks.push(new HomeTask("Do the dishes.", "high"));
tasks.push(new HomeTask("buy chocolate", "low"));
tasks.push(new HomeTask("wash the laundry", "high"));

tasks.push(new HobbyTask("practice origami"));
tasks.push(new HobbyTask("bake a pie"));

var today = new Date();
var tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
var nextDay = new Date();
nextDay.setDate(today.getDate() + 2);

tasks.push(new WorkTask(today, "update blug", "HIIIGH"));
tasks.push(new WorkTask(tomorrow, "go meet some people", "super high dog"));
tasks.push(new WorkTask(nextDay, "wash the roof", "looow"));

console.log(tasks);
