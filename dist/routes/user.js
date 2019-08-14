"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dataStore_1 = require("../lib/dataStore");
const router = express_1.Router();
router.get('/', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    const users = yield dataStore_1.DataStore.getUsers();
    res.status(200).send(users);
}));
exports.default = router;
//# sourceMappingURL=user.js.map