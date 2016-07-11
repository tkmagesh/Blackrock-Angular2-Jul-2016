import {Component, EventEmitter, Output} from '@angular/core';

@Component({
	template : `<section class="edit">
				<label for="">Bug :</label>
				<input type="text" #txtBugName>
				<input type="button" value="Add New" (click)="onAddClick(txtBugName)">
				<input type="button" value="Remove Closed" (click)= "onRemoveClosedClick()">
			</section>`,
	selector : 'bug-edit'
})
export class BugEdit{
	@Output() onNewBugAdd : EventEmitter<string> = new EventEmitter<string>();
	@Output() onRemoveClosed : EventEmitter = new EventEmitter();
	onAddClick(txtBugName : any){
		var bugName = txtBugName.value;
		txtBugName.value = '';
		this.onNewBugAdd.emit(bugName);
		//this.bugs.push(this.bugStorage.addNew(bugName));
	}
	
	onRemoveClosedClick(){
		this.onRemoveClosed.emit();
	}

	
}