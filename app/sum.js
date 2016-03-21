// var findSum = function(first: number, second: number){
//   var sum = first + second;
//   alert(' ther sum of your two numbers is' + sum);
// }
// var number = parseInt(prompt('please enter a number '));
// var otherNumber = parseInt(prompt('enter another number'));
// findSum(number, otherNumber);
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
var greeters = [];
greeters.push(new Greeter("World"));
greeters.push(new Greeter("How are you?"));
greeters.push(new Greeter("I'm doing fine"));
console.log(greeters);
for (var _i = 0, greeters_1 = greeters; _i < greeters_1.length; _i++) {
    var greeter = greeters_1[_i];
    alert(greeter.greet());
}
