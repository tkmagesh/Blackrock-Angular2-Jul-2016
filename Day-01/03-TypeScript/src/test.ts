var x = 10;

var numbers : number[] = [10,20,30,40];

var nums : Array<number> = [10,20,30,40];

function add (x?:number, y?:number) : number{
	return x + y;
}

function sayHi() : void{
	console.log('Hi there');
}

console.log(add());


function onChangeOld(name : string,  scriptionFn:() => void){

}

onChangeOld('basic', () => {console.log('basic callback is invoked')});


interface iSubscription{
	name : string,
	subscriptionFn() :void
}
	
function onChange(subscription : iSubscription):void{

}

onChange({name : 'basic', subscriptionFn : function(){}});

class Employee{
	constructor(private id:number, public name:string, public salary:number){
		
	}
	print():void{
		console.log(this.id, this.name, this.salary);
	}
}

var emp : Employee = new Employee(100, 'Magesh', 10000);
emp.print();
