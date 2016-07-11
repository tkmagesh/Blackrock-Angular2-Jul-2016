import {Component} from '@angular/core'

@Component({
	template : `
		<h1 [textContent]="message"></h1>
		<label for="">Name :</label>
		<input type="text" [(ngModel)]="name" />
		<input type="button" value="Greet" (click)="onGreet()"/>`,
	selector : 'greeter'
})
export class Greeter{
	message : string = 'Welcome to Angular.js 2.0';
	name : string = "Magesh";
	onGreet(){
		this.message = `Welcome ${this.name}!!`;
	}
	ngOnInit(){
		this.message = `Welcome ${this.name}!!`;
	}
}