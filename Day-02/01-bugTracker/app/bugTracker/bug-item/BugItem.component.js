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
var BugStorage_1 = require('../../services/BugStorage');
var BugItem = (function () {
    function BugItem(bugStorage) {
        this.bugStorage = bugStorage;
    }
    BugItem.prototype.toggleBug = function (bug) {
        this.bugStorage.toggle(bug);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], BugItem.prototype, "bug", void 0);
    BugItem = __decorate([
        core_1.Component({
            template: "<div class=\"bugname\"\n\t\t\t\t\t\t\t(click)=\"toggleBug(bug)\"\n\t\t\t\t\t\t\t[ngClass]=\"{closed : bug.isClosed}\">\n\n\t\t\t\t\t\t\t{{bug.name}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"datetime\">{{bug.createdAt | date:'dd-MMM-yyyy'}}</div>",
            selector: 'bug-item',
        }), 
        __metadata('design:paramtypes', [BugStorage_1.BugStorage])
    ], BugItem);
    return BugItem;
}());
exports.BugItem = BugItem;
//# sourceMappingURL=BugItem.component.js.map