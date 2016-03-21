/// <reference path="to-do-classes-interfaces.ts" />
module ToDoList {
  var diane: ToDoList.IPerson = {
    name: "Diane",
    email: "diane@epicodus.com"
  }

  var thor: ToDoList.IPerson = {
    name: "Thor",
    email: "thor@asgard.com"
  }

  var loki: ToDoList.IPerson = {
    name: "Loki",
    email: "loki@epicodus.com",
    phone: "408-322-7722"
 }

  export var people = {
    "diane": diane,
    "thor": thor,
    "loki": loki
  };
}
