import { Approuter } from "../../appRouter";

export function controller(routePrefix: string) {
  return (target: Function) => {
    for (let key in target.prototype) {
      const router = Approuter.getInstance();
      const routeHandler = target.prototype[key];
      const path = Reflect.getMetadata("path", target.prototype, key);
      if (path) {
        router.get(`${routePrefix}${path}`, routeHandler);
      }
    }
  };
}
