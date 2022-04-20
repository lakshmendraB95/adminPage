import { RequestHandler } from "express";
import "reflect-metadata";
import { metadata } from "./metaData";
export function use(middleware: RequestHandler) {
  return (target: any, key: string, desc: PropertyDescriptor) => {
    const middlewares = Reflect.getMetadata(metadata.middleware, target, key)||[];
    Reflect.defineMetadata(
      metadata.middleware,
      [...middlewares, middleware],
      target,
      key
    );
  };
}
