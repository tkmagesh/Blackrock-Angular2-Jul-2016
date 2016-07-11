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
var Greeter = (function () {
    function Greeter() {
        this.message = 'Welcome to Angular.js 2.0';
        this.name = "Magesh";
    }
    Greeter.prototype.onGreet = function () {
        this.message = "Welcome " + this.name + "!!";
    };
    Greeter.prototype.ngOnInit = function () {
        this.message = "Welcome " + this.name + "!!";
    };
    Greeter = __decorate([
        core_1.Component({
            template: "\n\t\t<h1 [textContent]=\"message\"></h1>\n\t\t<label for=\"\">Name :</label>\n\t\t<input type=\"text\" [(ngModel)]=\"name\" />\n\t\t<input type=\"button\" value=\"Greet\" (click)=\"onGreet()\"/>",
            selector: 'greeter'
        }), 
        __metadata('design:paramtypes', [])
    ], Greeter);
    return Greeter;
}());
exports.Greeter = Greeter;
//# sourceMappingURL=greeter.component.js.map