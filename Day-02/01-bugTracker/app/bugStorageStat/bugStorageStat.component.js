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
var BugStorage_1 = require('../services/BugStorage');
var BugStat = (function () {
    function BugStat(bugStorage) {
        this.bugStorage = bugStorage;
        this.count = 0;
    }
    BugStat.prototype.displayCount = function () {
        console.log(this.bugStorage);
        this.count = this.bugStorage.maxBugId;
    };
    BugStat = __decorate([
        core_1.Component({
            selector: 'bug-stat',
            template: "<div>{{count}}</div>\n<input type=\"button\" value=\"Display Count\" (click)=\"displayCount()\">",
            providers: [BugStorage_1.BugStorage]
        }), 
        __metadata('design:paramtypes', [BugStorage_1.BugStorage])
    ], BugStat);
    return BugStat;
}());
exports.BugStat = BugStat;
//# sourceMappingURL=bugStorageStat.component.js.map