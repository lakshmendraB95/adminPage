"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var router = (0, express_1.Router)();
exports.router = router;
function reqAuth(req, res, next) {
    if (req.session && req.session.isLoggedin) {
        next();
        return;
    }
    res.status(403);
    res.send("Not Permitted");
}
router.post("/login", function (req, res) {
    var _a = req.body, Email = _a.Email, Password = _a.Password;
    if (Email == "lakshmendrap123@gmail.com" && Password == "lucky8802") {
        req.session = { isLoggedin: true };
        res.redirect("/");
    }
    else {
        res.send("wrong id or password");
    }
});
router.get("/", function (req, res) {
    if (req.session && req.session.isLoggedin) {
        res.send("<div>\n        <div>User is logged in</div>\n        <a href=\"/logout\">LogOut</a>\n        </div>");
    }
    else {
        res.send("<div>\n    <div>User is not logged in</div>\n    <a href=\"/login\">LogIn</a>\n    </div>");
    }
});
router.get("/logout", function (req, res) {
    req.session = undefined;
    res.redirect("/");
});
router.get("/protected", reqAuth, function (req, res) {
    res.send("Welcome logged in user");
});
