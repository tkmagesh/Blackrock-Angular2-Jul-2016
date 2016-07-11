"use strict";
var Bug_1 = require('../models/Bug');
var BugStorage = (function () {
    function BugStorage() {
        this.maxBugId = 0;
    }
    BugStorage.prototype.getAll = function () {
        var result = [];
        for (var i = 0; i < localStorage.length; i++) {
            var dataAsString = localStorage.getItem(localStorage.key(i));
            var bugData = JSON.parse(dataAsString);
            var newBug = new Bug_1.Bug(bugData.id, bugData.name, bugData.isClosed, bugData.createdAt);
            this.maxBugId = this.maxBugId > newBug.id ? this.maxBugId : newBug.id;
            result.push(newBug);
        }
        return result;
    };
    BugStorage.prototype.addNew = function (bugName) {
        var newId = ++this.maxBugId;
        var newBug = new Bug_1.Bug(newId, bugName, false);
        window.localStorage.setItem(newId.toString(), JSON.stringify(newBug));
        return newBug;
    };
    BugStorage.prototype.save = function (bug) {
        window.localStorage.setItem(bug.id.toString(), JSON.stringify(bug));
    };
    BugStorage.prototype.remove = function (bug) {
        window.localStorage.removeItem(bug.id.toString());
    };
    return BugStorage;
}());
exports.BugStorage = BugStorage;
//# sourceMappingURL=BugStorage.js.map