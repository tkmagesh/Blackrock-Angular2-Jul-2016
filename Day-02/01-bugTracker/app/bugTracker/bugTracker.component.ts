import {Component} from '@angular/core';
import {IBug, Bug} from '../models/Bug';
import {BugStorage} from '../services/BugStorage';
import {BugStats} from './bug-stats/BugStats.component';


@Component({
	templateUrl : './app/bugTracker/bugTracker.template.html',
	selector : 'bug-tracker',
	styleUrls : ['./app/bugTracker/bugTracker.style.css'],
	providers : [BugStorage] ,
	directives : [BugStats]
	
})
export class BugTracker{
	bugs : Array<IBug> = [];
	
	constructor(public bugStorage : BugStorage){
		
	}

	ngOnInit(){
		this.bugs = this.bugStorage.getAll();
		
	}
	onAddClick(txtBugName : any){
		var bugName = txtBugName.value;
		txtBugName.value = '';
		this.bugs.push(this.bugStorage.addNew(bugName));
	}

	toggleBug(bug : Bug){
		
		this.bugStorage.toggle(bug);
	}
	

	onRemoveClosedClick(){
		for(let i=this.bugs.length-1; i>=0; i--)
			if (this.bugs[i].isClosed){
				this.bugStorage.remove(this.bugs[i]);
				this.bugs.splice(i,1);
			}
	}
}

