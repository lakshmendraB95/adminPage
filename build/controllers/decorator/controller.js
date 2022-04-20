"use strict";
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
                router[method]("".concat(routePrefix).concat(path), routeHandler);
            }
        }
    };
}
exports.controller = controller;
