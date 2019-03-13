/** entrypoint */
function main() {
}/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/commonUtil.ts":
/*!***************************!*\
  !*** ./src/commonUtil.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var CommonUtils = /** @class */ (function () {
    function CommonUtils() {
    }
    CommonUtils.getSimpleDate = function (date) {
        return Utilities.formatDate(date, "JST", "yyyy/MM/dd");
    };
    CommonUtils.sortArray = function (array, sortOptions) {
        return array.sort(function (a, b) {
            for (var _i = 0, sortOptions_1 = sortOptions; _i < sortOptions_1.length; _i++) {
                var sort = sortOptions_1[_i];
                if (a[sort.keyName] > b[sort.keyName]) {
                    return 1 * (sort.type === "ASC" ? 1 : -1);
                }
                if (a[sort.keyName] < b[sort.keyName]) {
                    return -1 * (sort.type === "ASC" ? 1 : -1);
                }
            }
            return 0;
        });
    };
    /** TODO gas用のlodashを探す */
    CommonUtils.find = function (array, filter) {
        for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
            var item = array_1[_i];
            if (filter(item)) {
                return item;
            }
        }
    };
    CommonUtils.arrayToMap = function (array, key) {
        var map = {};
        array.forEach(function (item) {
            map[item[key]] = item;
        });
        return map;
    };
    CommonUtils.mapToArray = function (map) {
        return Object.keys(map).map(function (key) { return map[key]; });
    };
    return CommonUtils;
}());
exports.CommonUtils = CommonUtils;


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
exports.__esModule = true;
var shiwakeSheet_1 = __webpack_require__(/*! sheet/shiwakeSheet */ "./src/sheet/shiwakeSheet.ts");
var kamokuSheet_1 = __webpack_require__(/*! sheet/kamokuSheet */ "./src/sheet/kamokuSheet.ts");
var soukanjoSheet_1 = __webpack_require__(/*! sheet/soukanjoSheet */ "./src/sheet/soukanjoSheet.ts");
var commonUtil_1 = __webpack_require__(/*! commonUtil */ "./src/commonUtil.ts");
var shisanSheet_1 = __webpack_require__(/*! sheet/shisanSheet */ "./src/sheet/shisanSheet.ts");
/** entrypoint */
global.main = function () {
    var shiwakeSheet = new shiwakeSheet_1.ShiwakeSheet();
    var kamokuSheet = new kamokuSheet_1.KamokuSheet();
    var soukanjoSheet = new soukanjoSheet_1.SoukanjoSheet();
    var shisanSheet = new shisanSheet_1.ShisanSheet();
    var kashiKariTaishoSheet = new shisanSheet_1.KashiKariTaishoSheet();
    var sonekiKeisanSheet = new shisanSheet_1.SonekiKeisanSheet();
    var calculator = new ChoboCalculator(shiwakeSheet, kamokuSheet);
    var soukanjoRecords = calculator.calcSoukanjomotocho();
    var shisanRecords = calculator.calcShisan(soukanjoRecords);
    soukanjoSheet.insertRecords(soukanjoRecords);
    shisanSheet.insertRecords(shisanRecords);
    kashiKariTaishoSheet.insertRecords(calculator.calcKessan(shisanRecords, "貸借対照表"));
    sonekiKeisanSheet.insertRecords(calculator.calcKessan(shisanRecords, "損益計算書"));
};
/** 帳簿計算 */
var ChoboCalculator = /** @class */ (function () {
    function ChoboCalculator(shiwakeSheet, kamokuSheet) {
        this.shiwakeSheet = shiwakeSheet;
        this.kamokuSheet = kamokuSheet;
    }
    /** 総勘定元帳のレコード作成 */
    ChoboCalculator.prototype.calcSoukanjomotocho = function () {
        var shiwakeRecords = this.shiwakeSheet.getRecords();
        var kamokuRecords = this.kamokuSheet.getRecords();
        var kamokuMap = commonUtil_1.CommonUtils.arrayToMap(kamokuRecords, "name");
        var zandaka = {};
        for (var _i = 0, kamokuRecords_1 = kamokuRecords; _i < kamokuRecords_1.length; _i++) {
            var kamoku = kamokuRecords_1[_i];
            zandaka[kamoku.name] = 0;
        }
        var soukanjoRecords = [];
        for (var _a = 0, shiwakeRecords_1 = shiwakeRecords; _a < shiwakeRecords_1.length; _a++) {
            var shiwake = shiwakeRecords_1[_a];
            var kariKamoku = kamokuMap[shiwake.kariKamoku];
            if (kariKamoku === undefined) {
                throw new Error("\u79D1\u76EE\u540D: " + shiwake.kariKamoku + " \u306F\u3001\u79D1\u76EE\u30DE\u30B9\u30BF\u306B\u5B58\u5728\u3057\u306A\u3044\u501F\u65B9\u79D1\u76EE\u3067\u3059");
            }
            var plusMinusKari = kariKamoku.kashikariType === "借方" ? 1 : -1;
            zandaka[shiwake.kariKamoku] += shiwake.kariPrice * plusMinusKari;
            soukanjoRecords.push({
                shiwakeId: shiwake.id,
                kamokuOrder: kariKamoku.outputOrder,
                date: shiwake.date,
                kamoku: shiwake.kariKamoku,
                aiteKamoku: shiwake.kashiKamoku,
                summary: shiwake.summary,
                kariPrice: shiwake.kariPrice,
                kashiPrice: 0,
                zandaka: zandaka[shiwake.kariKamoku]
            });
            var kashiKamoku = kamokuMap[shiwake.kashiKamoku];
            if (kashiKamoku === undefined) {
                throw new Error("\u79D1\u76EE\u540D: " + shiwake.kashiKamoku + " \u306F\u3001\u79D1\u76EE\u30DE\u30B9\u30BF\u306B\u5B58\u5728\u3057\u306A\u3044\u8CB8\u65B9\u79D1\u76EE\u3067\u3059");
            }
            var plusMinusKashi = kashiKamoku.kashikariType === "貸方" ? 1 : -1;
            zandaka[shiwake.kashiKamoku] += shiwake.kashiPrice * plusMinusKashi;
            soukanjoRecords.push({
                shiwakeId: shiwake.id,
                kamokuOrder: kashiKamoku.outputOrder,
                date: shiwake.date,
                kamoku: shiwake.kashiKamoku,
                aiteKamoku: shiwake.kariKamoku,
                summary: shiwake.summary,
                kariPrice: 0,
                kashiPrice: shiwake.kashiPrice,
                zandaka: zandaka[shiwake.kashiKamoku]
            });
        }
        soukanjoRecords = commonUtil_1.CommonUtils.sortArray(soukanjoRecords, [
            { keyName: "kamokuOrder", type: "ASC" },
            { keyName: "kamoku", type: "ASC" },
            { keyName: "date", type: "ASC" }
        ]);
        if (soukanjoRecords.length !== (shiwakeRecords.length * 2)) {
            throw new Error("総勘定元帳の出力行数が合いません");
        }
        return soukanjoRecords;
    };
    /** 試算表の作成 */
    ChoboCalculator.prototype.calcShisan = function (soukanjoRecords) {
        var shisanMap = {};
        var kamokuRecords = this.kamokuSheet.getRecords();
        var kamokuMap = commonUtil_1.CommonUtils.arrayToMap(kamokuRecords, "name");
        for (var _i = 0, kamokuRecords_2 = kamokuRecords; _i < kamokuRecords_2.length; _i++) {
            var kamoku = kamokuRecords_2[_i];
            shisanMap[kamoku.name] = {
                order: kamoku.outputOrder,
                kamokuName: kamoku.name,
                kariZandaka: 0,
                kashiZandaka: 0,
                totalKariPrice: 0,
                totalKashiPrice: 0
            };
        }
        for (var _a = 0, soukanjoRecords_1 = soukanjoRecords; _a < soukanjoRecords_1.length; _a++) {
            var soukanjo = soukanjoRecords_1[_a];
            var kamoku = kamokuMap[soukanjo.kamoku];
            var shisan = shisanMap[soukanjo.kamoku];
            if (kamoku === undefined) {
                throw new Error("科目マスタに存在しない勘定科目です");
            }
            var totalKariPrice = soukanjo.kariPrice;
            var totalKashiPrice = soukanjo.kashiPrice;
            var kariZandaka = kamoku.kashikariType === "借方" ? (soukanjo.kariPrice - soukanjo.kashiPrice) : 0;
            var kashiZandaka = kamoku.kashikariType === "貸方" ? (soukanjo.kashiPrice - soukanjo.kariPrice) : 0;
            shisan.totalKariPrice += totalKariPrice;
            shisan.totalKashiPrice += totalKashiPrice;
            shisan.kariZandaka += kariZandaka;
            shisan.kashiZandaka += kashiZandaka;
        }
        var shisanRecords = commonUtil_1.CommonUtils.mapToArray(shisanMap);
        shisanRecords = commonUtil_1.CommonUtils.sortArray(shisanRecords, [{
                keyName: "order", type: "ASC"
            }]);
        return shisanRecords;
    };
    /** 貸借対照表 or 損益計算書のレコード作成 */
    ChoboCalculator.prototype.calcKessan = function (shisanRecords, seisanType) {
        var kamokuRecords = this.kamokuSheet.getRecords();
        var kamokuMap = commonUtil_1.CommonUtils.arrayToMap(kamokuRecords, "name");
        return shisanRecords.filter(function (shisan) { return kamokuMap[shisan.kamokuName].seisanType === seisanType; });
    };
    return ChoboCalculator;
}());
exports.ChoboCalculator = ChoboCalculator;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/sheet/abstractSheet.ts":
/*!************************************!*\
  !*** ./src/sheet/abstractSheet.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
/** シートの読み書きを行う規定クラス */
var AbstractSheet = /** @class */ (function () {
    function AbstractSheet() {
        var spreadSheet = SpreadsheetApp.getActiveSpreadsheet();
        this.sheet = spreadSheet.getSheetByName(this.getSheetName());
    }
    return AbstractSheet;
}());
exports.AbstractSheet = AbstractSheet;


/***/ }),

/***/ "./src/sheet/kamokuSheet.ts":
/*!**********************************!*\
  !*** ./src/sheet/kamokuSheet.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
/** 科目マスタシートへの読み込みを行う */
var KamokuSheet = /** @class */ (function () {
    function KamokuSheet() {
    }
    KamokuSheet.prototype.getRecords = function () {
        return [
            {
                outputOrder: 2,
                name: "事業主借",
                kashikariType: "貸方",
                seisanType: "貸借対照表"
            }, {
                outputOrder: 0,
                name: "普通預金",
                kashikariType: "借方",
                seisanType: "貸借対照表"
            }, {
                outputOrder: 1,
                name: "売上",
                kashikariType: "貸方",
                seisanType: "損益計算書"
            }, {
                outputOrder: 2,
                name: "事業主貸",
                kashikariType: "借方",
                seisanType: "貸借対照表"
            }, {
                outputOrder: 1,
                name: "売掛金",
                kashikariType: "借方",
                seisanType: "貸借対照表"
            }, {
                outputOrder: 5,
                name: "旅費交通費",
                kashikariType: "借方",
                seisanType: "損益計算書"
            }, {
                outputOrder: 3,
                name: "地代家賃",
                kashikariType: "借方",
                seisanType: "損益計算書"
            }, {
                outputOrder: 3,
                name: "水道光熱費",
                kashikariType: "借方",
                seisanType: "損益計算書"
            }, {
                outputOrder: 3,
                name: "通信費",
                kashikariType: "借方",
                seisanType: "損益計算書"
            }, {
                outputOrder: 4,
                name: "消耗品費",
                kashikariType: "借方",
                seisanType: "損益計算書"
            }, {
                outputOrder: 4,
                name: "接待交際費",
                kashikariType: "借方",
                seisanType: "損益計算書"
            }
        ];
    };
    return KamokuSheet;
}());
exports.KamokuSheet = KamokuSheet;


/***/ }),

/***/ "./src/sheet/shisanSheet.ts":
/*!**********************************!*\
  !*** ./src/sheet/shisanSheet.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var abstractSheet_1 = __webpack_require__(/*! ./abstractSheet */ "./src/sheet/abstractSheet.ts");
/** 試算表シートへの書き込みを行う */
var ShisanSheet = /** @class */ (function (_super) {
    __extends(ShisanSheet, _super);
    function ShisanSheet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShisanSheet.prototype.getSheetName = function () {
        return "試算表";
    };
    ShisanSheet.prototype.insertRecords = function (shisanRecords) {
        var rows = shisanRecords.map(function (shisan) {
            return [
                shisan.kamokuName,
                shisan.totalKariPrice,
                shisan.totalKashiPrice,
                shisan.kariZandaka,
                shisan.kashiZandaka
            ];
        });
        this.sheet.getRange(ShisanSheet.START_ROW_NUM, 1, 1000, ShisanSheet.COLUMN_LENGTH).clearContent();
        var range = this.sheet.getRange(ShisanSheet.START_ROW_NUM, 1, rows.length, ShisanSheet.COLUMN_LENGTH);
        range.setValues(rows);
    };
    ShisanSheet.START_ROW_NUM = 3;
    ShisanSheet.COLUMN_LENGTH = 5;
    return ShisanSheet;
}(abstractSheet_1.AbstractSheet));
exports.ShisanSheet = ShisanSheet;
/** 貸借対照表シートへの書き込みを行う */
var KashiKariTaishoSheet = /** @class */ (function (_super) {
    __extends(KashiKariTaishoSheet, _super);
    function KashiKariTaishoSheet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    KashiKariTaishoSheet.prototype.getSheetName = function () {
        return "貸借対照表";
    };
    return KashiKariTaishoSheet;
}(ShisanSheet));
exports.KashiKariTaishoSheet = KashiKariTaishoSheet;
/** 損益計算書シートへの書き込みを行う */
var SonekiKeisanSheet = /** @class */ (function (_super) {
    __extends(SonekiKeisanSheet, _super);
    function SonekiKeisanSheet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SonekiKeisanSheet.prototype.getSheetName = function () {
        return "損益計算書";
    };
    return SonekiKeisanSheet;
}(ShisanSheet));
exports.SonekiKeisanSheet = SonekiKeisanSheet;


/***/ }),

/***/ "./src/sheet/shiwakeSheet.ts":
/*!***********************************!*\
  !*** ./src/sheet/shiwakeSheet.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var abstractSheet_1 = __webpack_require__(/*! ./abstractSheet */ "./src/sheet/abstractSheet.ts");
/** 仕訳帳シートへの読み込みを行う */
var ShiwakeSheet = /** @class */ (function (_super) {
    __extends(ShiwakeSheet, _super);
    function ShiwakeSheet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShiwakeSheet.prototype.getSheetName = function () {
        return "仕訳帳";
    };
    ShiwakeSheet.prototype.getRecords = function () {
        var values = this.sheet.getRange("A:G").getValues();
        var shiwakeRecords = [];
        values.shift();
        values.shift();
        for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
            var row = values_1[_i];
            if (row[0] === undefined || row[0] === null || row[0] === "") {
                continue;
            }
            var shiwake = {
                id: row[0],
                date: row[1],
                kariKamoku: row[2],
                kariPrice: row[3],
                kashiKamoku: row[4],
                kashiPrice: row[5],
                summary: row[6]
            };
            shiwakeRecords.push(shiwake);
        }
        console.log("\u4ED5\u8A33\u5E33\u30B7\u30FC\u30C8\u304B\u3089 " + shiwakeRecords.length + " \u884C\u8AAD\u307F\u8FBC\u307F\u307E\u3057\u305F");
        return shiwakeRecords;
    };
    return ShiwakeSheet;
}(abstractSheet_1.AbstractSheet));
exports.ShiwakeSheet = ShiwakeSheet;


/***/ }),

/***/ "./src/sheet/soukanjoSheet.ts":
/*!************************************!*\
  !*** ./src/sheet/soukanjoSheet.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var abstractSheet_1 = __webpack_require__(/*! ./abstractSheet */ "./src/sheet/abstractSheet.ts");
/** 総勘定元帳シートへの書き込みを行う */
var SoukanjoSheet = /** @class */ (function (_super) {
    __extends(SoukanjoSheet, _super);
    function SoukanjoSheet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SoukanjoSheet.prototype.getSheetName = function () {
        return "総勘定元帳";
    };
    SoukanjoSheet.prototype.insertRecords = function (soukanjoRecords) {
        var header = ["仕訳帳ID", "日付", "勘定科目", "相手勘定科目", "摘要", "借方金額（円）", "貸方金額（円）", "残高（円）"];
        var beforeKamokuName = "";
        var rows = [];
        for (var _i = 0, soukanjoRecords_1 = soukanjoRecords; _i < soukanjoRecords_1.length; _i++) {
            var soukanjo = soukanjoRecords_1[_i];
            if (soukanjo.kamoku !== beforeKamokuName) {
                beforeKamokuName = soukanjo.kamoku;
                if (rows.length !== 0) {
                    rows.push(["", "", "", "", "", "", "", ""]); // 空行の追加
                }
                rows.push(["\u52D8\u5B9A\u79D1\u76EE\u540D: " + soukanjo.kamoku, "", "", "", "", "", "", ""]);
                rows.push(header);
            }
            var row = [
                soukanjo.shiwakeId,
                soukanjo.date,
                soukanjo.kamoku,
                soukanjo.aiteKamoku,
                soukanjo.summary,
                soukanjo.kariPrice,
                soukanjo.kashiPrice,
                soukanjo.zandaka
            ];
            rows.push(row);
        }
        this.sheet.getRange(SoukanjoSheet.START_ROW_NUM, 1, 1000, header.length).clearContent();
        var range = this.sheet.getRange(SoukanjoSheet.START_ROW_NUM, 1, rows.length, header.length);
        range.setValues(rows);
        console.log("\u7DCF\u52D8\u5B9A\u5143\u5E33\u30B7\u30FC\u30C8\u306B" + soukanjoRecords.length + "\u884C\u66F8\u304D\u8FBC\u307F\u307E\u3057\u305F");
    };
    SoukanjoSheet.START_ROW_NUM = 2;
    return SoukanjoSheet;
}(abstractSheet_1.AbstractSheet));
exports.SoukanjoSheet = SoukanjoSheet;


/***/ })

/******/ });