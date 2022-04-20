"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patch = exports.del = exports.post = exports.get = void 0;
require("reflect-metadata");
var metaData_1 = require("./metaData");
var methods_1 = require("./methods");
function routerBinder(method) {
    return function (path) {
        return function (target, key, desc) {
            Reflect.defineMetadata(metaData_1.metadata.path, path, target, key);
            Reflect.defineMetadata(metaData_1.metadata.mehtod, method, target, key);
        };
    };
}
exports.get = routerBinder(methods_1.Methods.get);
exports.post = routerBinder(methods_1.Methods.post);
exports.del = routerBinder(methods_1.Methods.delete);
exports.patch = routerBinder(methods_1.Methods.patch);
