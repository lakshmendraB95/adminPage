import { Approuter } from "../../appRouter";
import { metadata } from "./metaData";
import { Methods } from "./methods";

export function controller(routePrefix: string) {
  return (target: Function) => {
    for (let key in target.prototype) {
      const router = Approuter.getInstance();
      const routeHandler = target.prototype[key];
      const path = Reflect.getMetadata(metadata.path, target.prototype, key);
      const method: Methods = Reflect.getMetadata(
        metadata.mehtod,
        target.prototype,
        key
      );
      if (path) {
        const middlewares =
          Reflect.getMetadata(metadata.middleware, target.prototype, key) || [];
        router[method](`${routePrefix}${path}`, ...middlewares, routeHandler);
      }
    }
  };
}
