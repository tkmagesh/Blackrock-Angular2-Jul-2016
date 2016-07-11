import {Component, Input} from '@angular/core';
import {IBug} from '../../models/Bug';
import {BugItem} from '../bug-item/BugItem.component';

@Component({
	template : `<section class="list">
				<div *ngIf="bugs.length === 0">
					<div>All Clear..!!  No bugs found!!!</div>
				</div>
				<ol>
					<li *ngFor="let bug of bugs">
						<bug-item [bug]="bug"></bug-item>
					</li>	
				</ol>
			</section>`,
	selector : 'bug-list',
	directives : [BugItem]
})
export class BugList{
	@Input() bugs : Array<IBug>;

}