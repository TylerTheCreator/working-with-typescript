var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ToDoList;
(function (ToDoList) {
    var Task = (function () {
        function Task(type, description, priority, assignedTo) {
            this.type = type;
            this.description = description;
            this.priority = priority;
            this.assignedTo = assignedTo;
            this.done = false;
        }
        Task.prototype.markDone = function () {
            this.done = true;
        };
        Task.prototype.CheckMatch = function () {
            return this.type;
        };
        Task.prototype.CheckType = function () {
            return this.priority;
        };
        return Task;
    }());
    ToDoList.Task = Task;
    var HomeTask = (function (_super) {
        __extends(HomeTask, _super);
        function HomeTask(type, description, priority, assignedTo) {
            _super.call(this, description, priority);
            this.type = type;
            this.description = description;
            this.priority = priority;
            this.assignedTo = assignedTo;
        }
        return HomeTask;
    }(Task));
    ToDoList.HomeTask = HomeTask;
    var WorkTask = (function (_super) {
        __extends(WorkTask, _super);
        function WorkTask(type, dueDate, description, priority, assignedTo) {
            _super.call(this, description, priority);
            this.type = type;
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
        function HobbyTask(type, description, priority, assignedTo) {
            _super.call(this, description, priority);
            this.type = type;
            this.description = description;
            this.priority = priority;
            this.assignedTo = assignedTo;
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
var ToDoList;
(function (ToDoList) {
    ToDoList.describeTasksForPerson = function (assignee, taskCollection) {
        var descriptions = [];
        for (var _i = 0, taskCollection_1 = taskCollection; _i < taskCollection_1.length; _i++) {
            var task = taskCollection_1[_i];
            if (task.assignedTo === assignee) {
                descriptions.push(task.description);
            }
        }
        return descriptions;
    };
})(ToDoList || (ToDoList = {}));
/// <reference path="to-do-classes-interfaces.ts" />
/// <reference path="to-do-people.ts" />
/// <reference path="to-do-listing-functions.ts" />
var people = ToDoList.people;
var tasks = [];
tasks.push(new ToDoList.HomeTask("Home", "Do the dishes.", "High", people.diane));
tasks.push(new ToDoList.HomeTask("Home", "Buy chocolate.", "Low", people.diane));
tasks.push(new ToDoList.HomeTask("Home", "Wash the laundry.", "High", people.diane));
tasks[0].markDone();
// console.log(tasks[0].type)
tasks.push(new ToDoList.HobbyTask("Hobby", "Practice origami.", "High", people.loki));
tasks.push(new ToDoList.HobbyTask("Hobby", "Bake a pie.", "High", people.loki));
var today = new Date();
var tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
var nextDay = new Date();
nextDay.setDate(today.getDate() + 2);
// tasks.push(new ToDoList.WorkTask("Work", today, "Update blog.", "High", people.diane));
tasks.push(new ToDoList.WorkTask("Work", tomorrow, "Go to meeting.", "Medium", people.thor));
tasks.push(new ToDoList.WorkTask("Work", nextDay, "Go to sleep.", "High", people.thor));
tasks.push(new ToDoList.WorkTask("Work", nextDay, "Clean ceiling.", "Low", people.thor));
console.log(tasks);
var thorTasks = ToDoList.describeTasksForPerson(people.thor, tasks);
console.log("Here are Thor's tasks:");
for (var _i = 0, thorTasks_1 = thorTasks; _i < thorTasks_1.length; _i++) {
    var task = thorTasks_1[_i];
    console.log(task);
}
function printTask() {
    for (var i = 0; i < tasks.length; i++) {
        console.log(tasks[i].assignedTo.name);
        if (tasks[i].CheckType() === document.getElementById("input-priority").value) {
            var para = document.createElement("p");
            var node = document.createTextNode(tasks[i].description + ": " + tasks[i].priority);
            para.appendChild(node);
            var element = document.getElementById("div1");
            element.appendChild(para);
        }
    }
}
