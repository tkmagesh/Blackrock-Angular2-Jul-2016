import {Component, Input} from '@angular/core';
import {ToClosedCount} from '../../pipes/toClosedCount';

@Component({
	selector : 'bug-stats',
	template : `<section class="stats">
	<span class="closed">{{list | toClosedCount}}</span>
	<span>/</span>
	<span>{{list.length}}</span>
</section>`,
	pipes : [ToClosedCount]
})
export class BugStats{
	@Input()
	list :Array<any> =  [];
}