"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Approuter = void 0;
var express_1 = __importDefault(require("express"));
var Approuter = /** @class */ (function () {
    function Approuter() {
    }
    Approuter.getInstance = function () {
        if (!this.instance) {
            this.instance = express_1.default.Router();
        }
        return this.instance;
    };
    return Approuter;
}());
exports.Approuter = Approuter;
