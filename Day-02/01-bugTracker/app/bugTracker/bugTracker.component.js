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
var BugStats_component_1 = require('./bug-stats/BugStats.component');
var BugList_component_1 = require('./bug-list/BugList.component');
var BugEdit_component_1 = require('./bug-edit/BugEdit.component');
var BugTracker = (function () {
    function BugTracker(bugStorage) {
        this.bugStorage = bugStorage;
        this.bugs = [];
    }
    BugTracker.prototype.ngOnInit = function () {
        this.bugs = this.bugStorage.getAll();
    };
    BugTracker.prototype.onNewBugAddedHandler = function (bugName) {
        console.log(arguments);
        var newBug = this.bugStorage.addNew(bugName);
        this.bugs.push(newBug);
    };
    BugTracker.prototype.onRemoveClosedHandler = function () {
        for (var i = this.bugs.length - 1; i >= 0; i--)
            if (this.bugs[i].isClosed) {
                //this.bugStorage.remove(this.bugs[i]);
                this.bugs.splice(i, 1);
            }
    };
    BugTracker = __decorate([
        core_1.Component({
            templateUrl: './app/bugTracker/bugTracker.template.html',
            selector: 'bug-tracker',
            styleUrls: ['./app/bugTracker/bugTracker.style.css'],
            providers: [BugStorage_1.BugStorage],
            directives: [BugStats_component_1.BugStats, BugList_component_1.BugList, BugEdit_component_1.BugEdit]
        }), 
        __metadata('design:paramtypes', [BugStorage_1.BugStorage])
    ], BugTracker);
    return BugTracker;
}());
exports.BugTracker = BugTracker;
//# sourceMappingURL=bugTracker.component.js.map