class Task {
  done: boolean;
  constructor(public description: string, public priority: string){
    this.done = false;
  }
  markDone(){
    this.done = true;
  }
}

var tasks = [];
tasks.push(new Task("Do the dishes.", "high"));
tasks.push(new Task("buy chocolate", "low"));
tasks.push(new Task("wash the laundry", "high"));
tasks[0].markDone();
console.log(tasks);
