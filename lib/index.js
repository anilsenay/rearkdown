"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
    var file = _a.file, _b = _a.components, components = _b === void 0 ? [] : _b, overrides = _a.overrides, options = _a.options;
    var _c = React.useState(""), state = _c[0], setState = _c[1];
    React.useEffect(function () {
        fetch(file)
            .then(function (res) { return res.text(); })
            .then(function (post) { return setState(post); })
            .catch(function (err) { return console.error(err); });
    }, [file]);
    return (React.createElement("div", null, state && (React.createElement(markdown_to_jsx_1.default, { children: state, options: __assign({ slugify: function (str) { return str; }, overrides: components.length > 0
                ? Object.assign.apply(Object, __spreadArrays([__assign({}, overrides)], components === null || components === void 0 ? void 0 : components.map(function (item) {
                    var _a;
                    var name = item.name;
                    return _a = {}, _a[name] = { component: item }, _a;
                }))) : __assign({}, overrides) }, options) }))));
};
//# sourceMappingURL=index.js.map