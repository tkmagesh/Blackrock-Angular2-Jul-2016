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
var BugItem_component_1 = require('../bug-item/BugItem.component');
var BugList = (function () {
    function BugList() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], BugList.prototype, "bugs", void 0);
    BugList = __decorate([
        core_1.Component({
            template: "<section class=\"list\">\n\t\t\t\t<div *ngIf=\"bugs.length === 0\">\n\t\t\t\t\t<div>All Clear..!!  No bugs found!!!</div>\n\t\t\t\t</div>\n\t\t\t\t<ol>\n\t\t\t\t\t<li *ngFor=\"let bug of bugs\">\n\t\t\t\t\t\t<bug-item [bug]=\"bug\"></bug-item>\n\t\t\t\t\t</li>\t\n\t\t\t\t</ol>\n\t\t\t</section>",
            selector: 'bug-list',
            directives: [BugItem_component_1.BugItem]
        }), 
        __metadata('design:paramtypes', [])
    ], BugList);
    return BugList;
}());
exports.BugList = BugList;
//# sourceMappingURL=BugList.component.js.map