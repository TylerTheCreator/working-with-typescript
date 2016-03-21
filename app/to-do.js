var Task = (function () {
    function Task(description, priority) {
        this.description = description;
        this.priority = priority;
        this.done = false;
    }
    Task.prototype.markDone = function () {
        this.done = true;
    };
    return Task;
}());

var tasks = [];
tasks.push(new Task("Do the dishes.", "high"));
tasks.push(new Task("buy chocolate", "low"));
tasks.push(new Task("wash the laundry", "high"));
tasks[0].markDone();
console.log(tasks);
