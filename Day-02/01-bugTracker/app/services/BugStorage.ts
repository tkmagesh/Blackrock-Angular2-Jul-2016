import {IBug} from '../models/Bug';
import {Inject, Injectable} from '@angular/core';
import {BugOperations} from './BugOperations';

@Injectable()
export class BugStorage{
	maxBugId : number = 0;

	constructor(@Inject(BugOperations) public bugOperations : BugOperations){

	}
	getAll() : Array<IBug> {
		let result : Array<IBug> = [];
		for(let i=0; i<localStorage.length; i++){
			var dataAsString = localStorage.getItem(localStorage.key(i));
			var newBug = JSON.parse(dataAsString);
			this.maxBugId = this.maxBugId > newBug.id ? this.maxBugId : newBug.id;
			result.push(newBug);
		}
		return result;
	}
	addNew(bugName : string) : IBug{
		var newId = ++this.maxBugId;
		var newBug =  this.bugOperations.create(newId, bugName)
		window.localStorage.setItem(newId.toString(), JSON.stringify(newBug));
		return newBug;
		
	}
	toggle(bug : IBug) :void {
		this.bugOperations.toggle(bug);
		window.localStorage.setItem(bug.id.toString(), JSON.stringify(bug));
	}
	remove(bug : IBug) : void{
		window.localStorage.removeItem(bug.id.toString());
	}
		
}