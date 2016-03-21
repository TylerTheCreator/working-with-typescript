class Task {
  done: boolean = false;
  constructor(public description: string, public priority: string){}
  markDone(){
    this.done = true;
  }
}

class HomeTask extends Task {}

var tasks = [];
tasks.push(new HomeTask("Do the dishes.", "high"));
tasks.push(new HomeTask("buy chocolate", "low"));
tasks.push(new HomeTask("wash the laundry", "high"));
tasks[0].markDone();
console.log(tasks);
