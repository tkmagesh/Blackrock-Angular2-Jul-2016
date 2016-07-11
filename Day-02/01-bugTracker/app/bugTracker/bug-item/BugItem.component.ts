import {Component, Input} from '@angular/core';
import {IBug} from '../../models/Bug';
import {BugStorage} from '../../services/BugStorage';

@Component({
	template : `<div class="bugname"
							(click)="toggleBug(bug)"
							[ngClass]="{closed : bug.isClosed}">

							{{bug.name}}
						</div>
						<div class="datetime">{{bug.createdAt | date:'dd-MMM-yyyy'}}</div>`,
	selector : 'bug-item',

})
export class BugItem{
	@Input() bug : IBug ;

	constructor(public bugStorage : BugStorage){
		
	}
	toggleBug(bug : IBug){
		this.bugStorage.toggle(bug);
	}
}