import {Component} from '@angular/core';
import {IBug, Bug} from '../models/Bug';

@Component({
	templateUrl : './app/bugTracker/bugTracker.template.html',
	selector : 'bug-tracker',
	styleUrls : ['./app/bugTracker/bugTracker.style.css']
})
export class BugTracker{
	bugs : Array<IBug> = [];
	onAddClick(txtBugName : any){
		var bugName = txtBugName.value;
		txtBugName.value = '';
		var newId = this.bugs.length > 0 ? 
			this.bugs.reduce((b1, b2) => b1.id > b2.id ? b1 : b2).id + 1 : 1;
		var newBug = new Bug(newId, bugName, false)
		
		this.bugs.push(newBug);
	}

	toggleBug(bug : Bug){
		bug.toggle();
	}
	getClosedCount(){
		return this.bugs.reduce((result, bug) => bug.isClosed ? ++result : result, 0);
	}
}

