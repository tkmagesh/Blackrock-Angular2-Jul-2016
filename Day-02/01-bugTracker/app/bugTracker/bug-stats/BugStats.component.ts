import {Component, Input} from '@angular/core';

@Component({
	selector : 'bug-stats',
	template : `<section class="stats">
	<span class="closed">{{getClosedCount()}}</span>
	<span>/</span>
	<span>{{list.length}}</span>
</section>`
})
export class BugStats{
	@Input()
	list :Array<any> =  [];
	
	getClosedCount(){
		return this.list.reduce((result, bug) => bug.isClosed ? ++result : result, 0);
	}
}