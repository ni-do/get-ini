"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIni = void 0;
const fs_1 = require("fs");
function getIni(path) {
    return (0, fs_1.readFileSync)(path, { encoding: 'utf8' });
}
exports.getIni = getIni;
