/*export class Bug{
	
	constructor(public id : number, 
		public name : string, 
		public isClosed : boolean){

	}
}*/

export interface IBug{
	id : number;
	name : string;
	isClosed : boolean;
	createdAt : Date;
	toggle() : void;
}

export class Bug implements IBug{
	createdAt : Date;
	constructor(public id : number, public name : string, public isClosed : boolean, createdAt? : Date){
		this.createdAt = createdAt || new Date();
	}
	toggle(){
		this.isClosed = !this.isClosed;
	}
}
