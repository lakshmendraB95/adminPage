import express from "express";
export class Approuter {
  private static instance: express.Router;
  static getInstance(): express.Router {
    if (!this.instance) {
      this.instance = express.Router();
    }
    return this.instance;
  }
}
