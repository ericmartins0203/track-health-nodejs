"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoute = void 0;
const express_1 = require("express");
const controllers_1 = require("../../controllers");
const middlewares_1 = require("../../middlewares");
const shapes_1 = require("../../shapes");
const userRoute = (app) => {
    const userRoute = (0, express_1.Router)();
    userRoute.post("/register", (0, middlewares_1.validateShape)(shapes_1.createUserShape), controllers_1.createUserController);
    userRoute.get("", middlewares_1.validateAuthToken, controllers_1.getUserController);
    userRoute.patch("", middlewares_1.validateAuthToken, (0, middlewares_1.validateShape)(shapes_1.updateUserShape), controllers_1.updateUserController);
    userRoute.post("/auth", (0, middlewares_1.validateShape)(shapes_1.updateUserShape), middlewares_1.validateAuthToken, (req, res) => {
        return res.json({ message: "Token validado" });
    });
    app.use("/user", userRoute);
};
exports.userRoute = userRoute;
