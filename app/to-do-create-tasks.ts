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

tasks.push(new ToDoList.HobbyTask("Hobby", "Practice origami", "High", people.loki));
tasks.push(new ToDoList.HobbyTask("Hobby", "Bake a pie", "High", people.loki));

var today = new Date();
var tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
var nextDay = new Date();
nextDay.setDate(today.getDate() + 2);

// tasks.push(new ToDoList.WorkTask("Work", today, "Update blog.", "High", people.diane));
tasks.push(new ToDoList.WorkTask("Work", tomorrow, "Go to meeting", "Medium", people.thor));
tasks.push(new ToDoList.WorkTask("Work", nextDay, "Go to sleep", "High", people.thor));
tasks.push(new ToDoList.WorkTask("Work", nextDay, "Clean ceiling", "Low", people.thor));

console.log(tasks);
var thorTasks = ToDoList.describeTasksForPerson(people.thor, tasks);
console.log("Here are Thor's tasks:");
for(var task of thorTasks){
  console.log(task);
}




  function printTask(){
  for (let i = 0; i < tasks.length; i++) {
      if(tasks[i].assignedTo.name == document.getElementById("input-priority").value){
          console.log("asd");
        if(tasks[i].priority == "High"){
        var para = document.createElement("p");
        var node = document.createTextNode(tasks[i].description + ": " + tasks[i].priority);
        para.appendChild(node);
        var element = document.getElementById("div1");
        element.appendChild(para);
        }
      }
    }
  }
