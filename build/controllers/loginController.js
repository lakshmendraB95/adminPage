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
Object.defineProperty(exports, "__esModule", { value: true });
var decorator_1 = require("./decorator");
var loginController = /** @class */ (function () {
    function loginController() {
    }
    loginController.prototype.getLogin = function (req, res) {
        res.send("\n          <div>\n          <form method =\"Post\">\n          <div>\n              <label> Email</label>\n              <input name=\"Email\">\n          </div>\n          <div>\n              <label> Password</label>\n              <input name=\"Password\" type=\"Password\">\n          </div>\n          <button>Submit</button>\n          </form>\n          </div>\n          ");
    };
    __decorate([
        (0, decorator_1.get)("/login"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], loginController.prototype, "getLogin", null);
    loginController = __decorate([
        (0, decorator_1.controller)("/auth")
    ], loginController);
    return loginController;
}());
