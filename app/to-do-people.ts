/// <reference path="to-do-classes-interfaces.ts" />
module ToDoList {
  var diane: ToDoList.IPerson = {
    name: "Diane D",
    email: "diane@epicodus.com"
  }

  var thor: ToDoList.IPerson = {
    name: "Thor son of Odin",
    email: "thor@asgard.com"
  }

  var loki: ToDoList.IPerson = {
    name: "god",
    email: "loki@epicodus.com",
    phone: "408-322-7722"
  }

  export var people = {
    "diane": diane,
    "thor": thor,
    "loki": loki
  };
}
