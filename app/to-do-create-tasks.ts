/// <reference path="to-do-classes-interfaces.ts" />
/// <reference path="to-do-people.ts" />
/// <reference path="to-do-listing-functions.ts" />

var people = ToDoList.people;




var tasks = [];
tasks.push(new ToDoList.HomeTask("Home", "Do the dishes.", "High"));
tasks.push(new ToDoList.HomeTask("Home", "Buy chocolate.", "Low", people.diane));
tasks.push(new ToDoList.HomeTask("Home", "Wash the laundry.", "High"));
tasks[0].markDone();
// console.log(tasks[0].type)

tasks.push(new ToDoList.HobbyTask("Hobby", "Practice origami."));
tasks.push(new ToDoList.HobbyTask("Hobby", "Bake a pie."));

var today = new Date();
var tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
var nextDay = new Date();
nextDay.setDate(today.getDate() + 2);

// tasks.push(new ToDoList.WorkTask("Work", today, "Update blog.", "High", people.diane));
tasks.push(new ToDoList.WorkTask("Work", tomorrow, "Go to meeting.", "Medium", people.thor));
tasks.push(new ToDoList.WorkTask("Work", nextDay, "Go to sleep." "high", people.thor));
tasks.push(new ToDoList.WorkTask("Work", nextDay, "Clean ceiling.", "Low", people.loki));

console.log(tasks);
var thorTasks = ToDoList.describeTasksForPerson(people.thor, tasks);
console.log("Here are Thor's tasks:");
for(var task of thorTasks){
  console.log(task);
}


  function printTask(){
    console.log(typeof tasks[0].type);
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].CheckMatch() === document.getElementById ("input-type").value) {
      var para = document.createElement("p");
      var node = document.createTextNode(tasks[i].description);
      para.appendChild(node);
      var element = document.getElementById("div1");
      element.appendChild(para);
    }
  }
}


// for (let i = 0; i < tasks.length; i++) {
//   if (tasks[i].CheckMatch() == document.getElementById ("input-type").innerText) {
//       document.write(array[i].description);
//   }
// }
