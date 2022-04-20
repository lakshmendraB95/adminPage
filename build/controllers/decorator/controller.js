"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = void 0;
var appRouter_1 = require("../../appRouter");
var metaData_1 = require("./metaData");
function controller(routePrefix) {
    return function (target) {
        for (var key in target.prototype) {
            var router = appRouter_1.Approuter.getInstance();
            var routeHandler = target.prototype[key];
            var path = Reflect.getMetadata(metaData_1.metadata.path, target.prototype, key);
            var method = Reflect.getMetadata(metaData_1.metadata.mehtod, target.prototype, key);
            if (path) {
                var middlewares = Reflect.getMetadata(metaData_1.metadata.middleware, target.prototype, key) || [];
                router[method].apply(router, __spreadArray(__spreadArray(["".concat(routePrefix).concat(path)], middlewares, false), [routeHandler], false));
            }
        }
    };
}
exports.controller = controller;
