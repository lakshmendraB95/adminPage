"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/login", (req, res) => {
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
});
