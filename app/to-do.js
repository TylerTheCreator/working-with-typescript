// class Task {
//   done: boolean = false;
//   constructor(public description: string, public priority: string){}
//   markDone(){
//     this.done = true;
//   }
// }
//
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var HomeTask = (function (_super) {
    __extends(HomeTask, _super);
    function HomeTask() {
        _super.apply(this, arguments);
    }
    return HomeTask;
}(Task));
var WorkTask = (function (_super) {
    __extends(WorkTask, _super);
    function WorkTask(dueDate, description, priority) {
        _super.call(this, description, priority);
        this.dueDate = dueDate;
        this.description = description;
        this.priority = priority;
    }
    return WorkTask;
}(Task));
var HobbyTask = (function (_super) {
    __extends(HobbyTask, _super);
    function HobbyTask(description) {
        _super.call(this, description, "low");
        this.description = description;
    }
    return HobbyTask;
}(Task));
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
