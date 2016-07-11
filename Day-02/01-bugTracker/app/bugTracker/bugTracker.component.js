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
var Bug_1 = require('../models/Bug');
var BugTracker = (function () {
    function BugTracker() {
        this.bugs = [];
    }
    BugTracker.prototype.onAddClick = function (txtBugName) {
        var bugName = txtBugName.value;
        txtBugName.value = '';
        var newId = this.bugs.length > 0 ?
            this.bugs.reduce(function (b1, b2) { return b1.id > b2.id ? b1 : b2; }).id + 1 : 1;
        var newBug = new Bug_1.Bug(newId, bugName, false);
        this.bugs.push(newBug);
    };
    BugTracker.prototype.toggleBug = function (bug) {
        bug.isClosed = !bug.isClosed;
    };
    BugTracker.prototype.getClosedCount = function () {
        return this.bugs.reduce(function (result, bug) { return bug.isClosed ? ++result : result; }, 0);
    };
    BugTracker = __decorate([
        core_1.Component({
            templateUrl: './app/bugTracker/bugTracker.template.html',
            selector: 'bug-tracker',
            styleUrls: ['./app/bugTracker/bugTracker.style.css']
        }), 
        __metadata('design:paramtypes', [])
    ], BugTracker);
    return BugTracker;
}());
exports.BugTracker = BugTracker;
//# sourceMappingURL=bugTracker.component.js.map