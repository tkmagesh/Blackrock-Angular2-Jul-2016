"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var BugEdit = (function () {
    function BugEdit() {
        this.onNewBugAdd = new core_1.EventEmitter();
        this.onRemoveClosed = new core_1.EventEmitter();
    }
    BugEdit.prototype.onAddClick = function (txtBugName) {
        var bugName = txtBugName.value;
        txtBugName.value = '';
        this.onNewBugAdd.emit(bugName);
        //this.bugs.push(this.bugStorage.addNew(bugName));
    };
    BugEdit.prototype.onRemoveClosedClick = function () {
        this.onRemoveClosed.emit();
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], BugEdit.prototype, "onNewBugAdd", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], BugEdit.prototype, "onRemoveClosed", void 0);
    BugEdit = __decorate([
        core_1.Component({
            template: "<section class=\"edit\">\n\t\t\t\t<label for=\"\">Bug :</label>\n\t\t\t\t<input type=\"text\" #txtBugName>\n\t\t\t\t<input type=\"button\" value=\"Add New\" (click)=\"onAddClick(txtBugName)\">\n\t\t\t\t<input type=\"button\" value=\"Remove Closed\" (click)= \"onRemoveClosedClick()\">\n\t\t\t</section>",
            selector: 'bug-edit'
        }), 
        __metadata('design:paramtypes', [])
    ], BugEdit);
    return BugEdit;
}());
exports.BugEdit = BugEdit;
//# sourceMappingURL=BugEdit.component.js.map