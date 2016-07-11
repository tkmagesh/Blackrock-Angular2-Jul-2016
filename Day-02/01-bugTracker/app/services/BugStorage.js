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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var BugOperations_1 = require('./BugOperations');
var BugStorage = (function () {
    function BugStorage(bugOperations) {
        this.bugOperations = bugOperations;
        this.maxBugId = 0;
    }
    BugStorage.prototype.getAll = function () {
        var result = [];
        for (var i = 0; i < localStorage.length; i++) {
            var dataAsString = localStorage.getItem(localStorage.key(i));
            var newBug = JSON.parse(dataAsString);
            this.maxBugId = this.maxBugId > newBug.id ? this.maxBugId : newBug.id;
            result.push(newBug);
        }
        return result;
    };
    BugStorage.prototype.addNew = function (bugName) {
        var newId = ++this.maxBugId;
        var newBug = this.bugOperations.create(newId, bugName);
        window.localStorage.setItem(newId.toString(), JSON.stringify(newBug));
        return newBug;
    };
    BugStorage.prototype.toggle = function (bug) {
        this.bugOperations.toggle(bug);
        window.localStorage.setItem(bug.id.toString(), JSON.stringify(bug));
    };
    BugStorage.prototype.remove = function (bug) {
        window.localStorage.removeItem(bug.id.toString());
    };
    BugStorage = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(BugOperations_1.BugOperations)), 
        __metadata('design:paramtypes', [BugOperations_1.BugOperations])
    ], BugStorage);
    return BugStorage;
}());
exports.BugStorage = BugStorage;
//# sourceMappingURL=BugStorage.js.map