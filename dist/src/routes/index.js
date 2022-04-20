"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const allergyRoute_1 = require("./allergies/allergyRoute");
const diseaseRoute_1 = require("./disease/diseaseRoute");
const loginRoute_1 = require("./login/loginRoute");
const userRoute_1 = require("./user/userRoute");
const userAllergyRoutes_1 = require("./userallergy/userAllergyRoutes");
const routes = (app) => {
    (0, userRoute_1.userRoute)(app);
    (0, loginRoute_1.loginRoute)(app);
    (0, userAllergyRoutes_1.userAllergyRoute)(app);
    (0, allergyRoute_1.AllergyRoute)(app);
    (0, diseaseRoute_1.diseaseRoute)(app);
};
exports.routes = routes;
