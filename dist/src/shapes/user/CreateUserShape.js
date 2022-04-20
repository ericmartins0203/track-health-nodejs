"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserShape = void 0;
const bcrypt_1 = require("bcrypt");
const moment_1 = __importDefault(require("moment"));
const yup = __importStar(require("yup"));
const createUserShape = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup
        .string()
        .transform((pwd) => (0, bcrypt_1.hashSync)(pwd, 10))
        .required(),
    birthDate: yup
        .date()
        .transform((value, originalValue, context) => {
        if (context.isType(value))
            return value;
        const valueFormated = (0, moment_1.default)(originalValue, "dd/MM/yyyy");
        return valueFormated.isValid() ? valueFormated.toDate() : new Date("");
    })
        .required(),
    gender: yup.string(),
    sex: yup.string(),
});
exports.createUserShape = createUserShape;
