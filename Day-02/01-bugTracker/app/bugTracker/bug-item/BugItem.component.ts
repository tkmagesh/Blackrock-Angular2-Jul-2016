import {Component, Input} from '@angular/core';
import {IBug} from '../../models/Bug';
import {BugStorage} from '../../services/BugStorage';
import {Elapsed} from '../../pipes/Elapsed';

@Component({
	template : `<div class="bugname"
							(click)="toggleBug(bug)"
							[ngClass]="{closed : bug.isClosed}">

							{{bug.name}}
						</div>
						<div class="datetime">{{bug.createdAt | elapsed}}</div>`,
	selector : 'bug-item',
	pipes : [Elapsed]

})
export class BugItem{
	@Input() bug : IBug ;

	constructor(public bugStorage : BugStorage){
		
	}
	toggleBug(bug : IBug){
		this.bugStorage.toggle(bug);
	}
}