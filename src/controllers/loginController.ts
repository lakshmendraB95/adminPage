import { Request, Response } from "express";
import { controller, get } from "./decorator";
@controller("/auth")
class loginController {
  @get("/login")
  getLogin(req: Request, res: Response): void {
    res.send(`
          <div>
          <form method ="Post">
          <div>
              <label> Email</label>
              <input name="Email">
          </div>
          <div>
              <label> Password</label>
              <input name="Password" type="Password">
          </div>
          <button>Submit</button>
          </form>
          </div>
          `);
  }
}
