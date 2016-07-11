import {Component} from '@angular/core';
import {BugStorage} from '../services/BugStorage';

@Component({
	selector : 'bug-stat',
	template : `<div>{{count}}</div>
<input type="button" value="Display Count" (click)="displayCount()">`,
	providers : [BugStorage]
})
export class BugStat{
	count :number = 0;
	constructor(public bugStorage : BugStorage){

	}
	displayCount() : void{
		console.log(this.bugStorage);
		this.count = this.bugStorage.maxBugId;
	}
}