import { Router, Request, Response, application, NextFunction } from "express";

const router = Router();
interface RequestwithBody extends Request {
  body: { [keys: string]: string | undefined };
}

function reqAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.isLoggedin) {
    next();
    return;
  }
  res.status(403);
  res.send("Not Permitted");
}
router.post("/login", (req: Request, res: Response) => {
  const { Email, Password } = req.body;
  if (Email == "lakshmendrap123@gmail.com" && Password == "lucky8802") {
    req.session = { isLoggedin: true };
    res.redirect("/");
  } else {
    res.send("wrong id or password");
  }
});
router.get("/", (req: Request, res: Response) => {
  if (req.session && req.session.isLoggedin) {
    res.send(`<div>
        <div>User is logged in</div>
        <a href="/logout">LogOut</a>
        </div>`);
  } else {
    res.send(`<div>
    <div>User is not logged in</div>
    <a href="/login">LogIn</a>
    </div>`);
  }
});
router.get("/logout", (req: Request, res: Response) => {
  req.session = undefined;
  res.redirect("/");
});

router.get("/protected", reqAuth, (req: Request, res: Response) => {
  res.send("Welcome logged in user");
});
export { router };
