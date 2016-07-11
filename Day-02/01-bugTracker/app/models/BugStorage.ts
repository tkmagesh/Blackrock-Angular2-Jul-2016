import {Bug} from './Bug';
import {Dummy} from './Dummy';
import {Inject, Injectable} from '@angular/core';


export class BugStorage{
	maxBugId : number = 0;

	constructor(@Inject(Dummy) public dummy : Dummy){

	}
	getAll() : Array<Bug> {
		let result : Array<Bug> = [];
		for(let i=0; i<localStorage.length; i++){
			var dataAsString = localStorage.getItem(localStorage.key(i));
			var bugData = JSON.parse(dataAsString);
			var newBug = new Bug(bugData.id, bugData.name, bugData.isClosed, bugData.createdAt);
			this.maxBugId = this.maxBugId > newBug.id ? this.maxBugId : newBug.id;
			result.push(newBug);
		}
		return result;
	}
	addNew(bugName : string) : Bug{
		var newId = ++this.maxBugId;
		var newBug = new Bug(newId, bugName, false)
		window.localStorage.setItem(newId.toString(), JSON.stringify(newBug));
		return newBug;
		
	}
	save(bug : Bug) :void {
		window.localStorage.setItem(bug.id.toString(), JSON.stringify(bug));
	}
	remove(bug : Bug) : void{
		window.localStorage.removeItem(bug.id.toString());
	}
		
}