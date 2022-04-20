import "reflect-metadata";
import { metadata } from "./metaData";
import { Methods } from "./methods";

function routerBinder(method: Methods) {
  return function (path: string) {
    return (target: any, key: string, desc: PropertyDescriptor) => {
      Reflect.defineMetadata(metadata.path, path, target, key);
      Reflect.defineMetadata(metadata.mehtod, method, target, key);
    };
  };
}

export const get = routerBinder(Methods.get);
export const post = routerBinder(Methods.post);
export const del = routerBinder(Methods.delete);
export const patch = routerBinder(Methods.patch);
