import {Pipe, PipeTransform} from '@angular/core';
import {IBug} from '../models/Bug';

@Pipe({
	name : 'toClosedCount',
	pure : false
})
export class ToClosedCount implements PipeTransform{
	transform(bugs : IBug[]) : number{
		return bugs.reduce((result, bug) => bug.isClosed ? ++result : result, 0);
	}
}