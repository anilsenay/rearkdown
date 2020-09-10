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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rearkdown = void 0;
var React = __importStar(require("react"));
var markdown_to_jsx_1 = __importDefault(require("markdown-to-jsx"));
exports.Rearkdown = function (_a) {
    var file = _a.file, components = _a.components;
    var _b = React.useState(""), state = _b[0], setState = _b[1];
    React.useEffect(function () {
        fetch(file)
            .then(function (res) { return res.text(); })
            .then(function (post) { return setState(post); })
            .catch(function (err) { return console.error(err); });
    }, [file]);
    console.log.apply(console, components === null || components === void 0 ? void 0 : components.map(function (item) {
        var _a;
        var name = item.name;
        return _a = {}, _a[name] = { component: item }, _a;
    }));
    return (React.createElement("div", null, state && (React.createElement(markdown_to_jsx_1.default, { children: state, options: {
            overrides: components && Object.assign.apply(Object, __spreadArrays([{}], components === null || components === void 0 ? void 0 : components.map(function (item) {
                var _a;
                var name = item.name;
                return _a = {}, _a[name] = { component: item }, _a;
            }))),
        } }))));
};
//# sourceMappingURL=index.js.map