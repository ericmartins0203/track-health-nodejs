"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const loginRoute_1 = require("./login/loginRoute");
const userRoute_1 = require("./user/userRoute");
const routes = (app) => {
    (0, userRoute_1.userRoute)(app);
    (0, loginRoute_1.loginRoute)(app);
};
exports.routes = routes;
