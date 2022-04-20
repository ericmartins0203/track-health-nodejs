"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRoute = void 0;
const express_1 = require("express");
const controllers_1 = require("../../controllers");
const middlewares_1 = require("../../middlewares");
const shapes_1 = require("../../shapes");
const loginRoute = (app) => {
    const loginRoute = (0, express_1.Router)();
    loginRoute.post("/login", (0, middlewares_1.validateShape)(shapes_1.loginUserShape), controllers_1.loginController);
    app.use("", loginRoute);
};
exports.loginRoute = loginRoute;