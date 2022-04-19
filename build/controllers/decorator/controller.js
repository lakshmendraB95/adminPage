"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = void 0;
var appRouter_1 = require("../../appRouter");
function controller(routePrefix) {
    return function (target) {
        for (var key in target.prototype) {
            var router = appRouter_1.Approuter.getInstance();
            var routeHandler = target.prototype[key];
            var path = Reflect.getMetadata("path", target.prototype, key);
            if (path) {
                router.get("".concat(routePrefix).concat(path), routeHandler);
            }
        }
    };
}
exports.controller = controller;
