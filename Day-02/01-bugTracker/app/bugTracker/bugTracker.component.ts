import {Component} from '@angular/core';
import {IBug, Bug} from '../models/Bug';
import {BugStorage} from '../services/BugStorage';
import {BugStats} from './bug-stats/BugStats.component';
import {BugList} from './bug-list/BugList.component';
import {BugEdit} from './bug-edit/BugEdit.component';


@Component({
	templateUrl : './app/bugTracker/bugTracker.template.html',
	selector : 'bug-tracker',
	styleUrls : ['./app/bugTracker/bugTracker.style.css'],
	providers : [BugStorage] ,
	directives : [BugStats, BugList, BugEdit]
	
})
export class BugTracker{
	bugs : Array<IBug> = [];
	
	constructor(public bugStorage : BugStorage){
		
	}

	ngOnInit(){
		this.bugs = this.bugStorage.getAll();
		
	}
	
	onNewBugAddedHandler(bugName : string){
		console.log(arguments);
		var newBug = this.bugStorage.addNew(bugName);
		this.bugs.push(newBug);
	}

	onRemoveClosedHandler(){
		for(let i=this.bugs.length-1; i>=0; i--)
			if (this.bugs[i].isClosed){
				//this.bugStorage.remove(this.bugs[i]);
				this.bugs.splice(i,1);
			}
	}
}

