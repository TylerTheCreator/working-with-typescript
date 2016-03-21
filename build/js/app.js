var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ToDoList;
(function (ToDoList) {
    var Task = (function () {
        function Task(description, priority, assignedTo) {
            this.description = description;
            this.priority = priority;
            this.assignedTo = assignedTo;
            this.done = false;
        }
        Task.prototype.markDone = function () {
            this.done = true;
        };
        return Task;
    }());
    ToDoList.Task = Task;
    var HomeTask = (function (_super) {
        __extends(HomeTask, _super);
        function HomeTask(description, priority, assignedTo) {
            _super.call(this, description, priority);
            this.description = description;
            this.priority = priority;
            this.assignedTo = assignedTo;
        }
        return HomeTask;
    }(Task));
    ToDoList.HomeTask = HomeTask;
    var WorkTask = (function (_super) {
        __extends(WorkTask, _super);
        function WorkTask(dueDate, description, priority, assignedTo) {
            _super.call(this, description, priority, assignedTo);
            this.dueDate = dueDate;
            this.description = description;
            this.priority = priority;
            this.assignedTo = assignedTo;
        }
        return WorkTask;
    }(Task));
    ToDoList.WorkTask = WorkTask;
    var HobbyTask = (function (_super) {
        __extends(HobbyTask, _super);
        function HobbyTask(description) {
            _super.call(this, description, "low");
            this.description = description;
        }
        return HobbyTask;
    }(Task));
    ToDoList.HobbyTask = HobbyTask;
})(ToDoList || (ToDoList = {}));
/// <reference path="to-do-classes-interfaces.ts" />
var ToDoList;
(function (ToDoList) {
    var diane = {
        name: "Diane D",
        email: "diane@epicodus.com"
    };
    var thor = {
        name: "Thor son of Odin",
        email: "thor@asgard.com"
    };
    var loki = {
        name: "god",
        email: "loki@epicodus.com",
        phone: "408-322-7722"
    };
    ToDoList.people = {
        "diane": diane,
        "thor": thor,
        "loki": loki
    };
})(ToDoList || (ToDoList = {}));
/// <reference path="to-do-classes-interfaces.ts" />
/// <reference path="to-do-people.ts" />
var people = ToDoList.people;
var tasks = [];
tasks.push(new ToDoList.HomeTask("Do the dishes.", "High"));
tasks.push(new ToDoList.HomeTask("Buy chocolate.", "Low", people.diane));
tasks.push(new ToDoList.HomeTask("Wash the laundry.", "High"));
tasks.push(new ToDoList.HobbyTask("Practice origami."));
tasks.push(new ToDoList.HobbyTask("Bake a pie."));
var today = new Date();
var tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
var nextDay = new Date();
nextDay.setDate(today.getDate() + 2);
tasks.push(new ToDoList.WorkTask(today, "Update blog.", "High", people.diane));
tasks.push(new ToDoList.WorkTask(tomorrow, "Go to meeting.", "Medium", people.thor));
tasks.push(new ToDoList.WorkTask(nextDay, "Clean ceiling.", "Low", people.loki));
console.log(tasks);
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
