/*export class Bug{
    
    constructor(public id : number,
        public name : string,
        public isClosed : boolean){

    }
}*/
"use strict";
var Bug = (function () {
    function Bug(id, name, isClosed, createdAt) {
        this.id = id;
        this.name = name;
        this.isClosed = isClosed;
        this.createdAt = createdAt || new Date();
    }
    Bug.prototype.toggle = function () {
        this.isClosed = !this.isClosed;
    };
    return Bug;
}());
exports.Bug = Bug;
//# sourceMappingURL=Bug.js.map