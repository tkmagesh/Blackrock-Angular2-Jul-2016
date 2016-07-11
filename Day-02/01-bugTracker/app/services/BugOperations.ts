import {Injectable} from '@angular/core';


@Injectable()
export class BugOperations{
	create(id : number, name:string) : any{
		return {
			id, name, isClosed : false, createdAt : new Date()
		}
	}

	toggle (bug : any) : void{
		bug.isClosed = !bug.isClosed;
	}
}