var x = 10;
var numbers = [10, 20, 30, 40];
var nums = [10, 20, 30, 40];
function add(x, y) {
    return x + y;
}
function sayHi() {
    console.log('Hi there');
}
console.log(add());
function onChangeOld(name, scriptionFn) {
}
onChangeOld('basic', function () { console.log('basic callback is invoked'); });
function onChange(subscription) {
}
onChange({ name: 'basic', subscriptionFn: function () { } });

var Employee = (function () {
    function Employee(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    Employee.prototype.print = function () {
        console.log(this.id, this.name, this.salary);
    };
    return Employee;
}());


var emp = new Employee(100, 'Magesh', 10000);
emp.print();
