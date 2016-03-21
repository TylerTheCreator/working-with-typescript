//
// interface IPerson{
//   name: string;
//   email: string;
// }
//
// interface ITask{
//   description: string;
//   done: boolean;
//   priority: string;
//   markDone(): void;
//   assignedTo?: IPerson;
// }
//
// class Task implements ITask{
//   done: boolean = false;
//   constructor(public description: string, public priority: string, public assignedTo?: IPerson){}
//   markDone(){
//     this.done = true;
//   }
// }
//
// // class HomeTask extends Task {}
//
// class HomeTask extends Task {
//   constructor(public description: string, public priority: string, public assignedTo?: IPerson){
//     super(description, priority);
//   }
// }
//
// class WorkTask extends Task{
//   constructor(public dueDate: Date, public description: string, public priority: string, public assignedTo?: IPerson){
//     super(description, priority, assignedTo);
//   }
// }
//
// class HobbyTask extends Task{
//   constructor(public description: string){
//     super(description, "low");
//   }
// }
//
// var tim: IPerson = {
//   name: "Tim D",
//   email: "Tim.D@example.com"
// }
//
// var tyler: IPerson = {
//   name: "Tyler F",
//   email: "Tyler.F@example.com"
// }
//
// var loki: IPerson = {
//   name: "God of mischief",
//   email: "loki@geocities.com"
// }
//
// var tasks = [];
// tasks.push(new HomeTask("Do the dishes.", "high", tim));
// tasks.push(new HomeTask("buy chocolate", "low"));
// tasks.push(new HomeTask("wash the laundry", "high"));
//
// tasks.push(new HobbyTask("practice origami"));
// tasks.push(new HobbyTask("bake a pie"));
//
// var today = new Date();
// var tomorrow = new Date();
// tomorrow.setDate(today.getDate() + 1);
// var nextDay = new Date();
// nextDay.setDate(today.getDate() + 2);
//
// tasks.push(new WorkTask(today, "update blug", "HIIIGH", tyler));
// tasks.push(new WorkTask(tomorrow, "go meet some people", "super high dog", tim));
// tasks.push(new WorkTask(nextDay, "wash the roof", "looow", loki));
//
// console.log(tasks);
