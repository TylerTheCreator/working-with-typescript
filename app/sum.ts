// var findSum = function(first: number, second: number){
//   var sum = first + second;
//   alert(' ther sum of your two numbers is' + sum);
// }
// var number = parseInt(prompt('please enter a number '));
// var otherNumber = parseInt(prompt('enter another number'));
// findSum(number, otherNumber);

class Greeter {
  greeting: string;

  constructor (message: string) {
    this.greeting = message;
  }

  greet() {
    return "Hello, " + this.greeting;
  }
}

var greeters = [];

greeters.push(new Greeter("World"));
greeters.push(new Greeter("How are you?"));
greeters.push(new Greeter("I'm doing fine"));
console.log(greeters);
  for(var greeter of greeters){
    alert(greeter.greet());
  }
