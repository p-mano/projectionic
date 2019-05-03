(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");







var Tab1PageModule = /** @class */ (function () {
    function Tab1PageModule() {
    }
    Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }])
            ],
            declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
        })
    ], Tab1PageModule);
    return Tab1PageModule;
}());



/***/ }),

/***/ "./src/app/tab1/tab1.page.html":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Ionic Notifications\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n \n<ion-content padding>\n \n  <ion-button expand=\"block\" (click)=\"scheduleNotification()\">Schedule</ion-button>\n  <ion-button expand=\"block\" (click)=\"recurringNotification()\">Every Minute</ion-button>\n  <ion-button expand=\"block\" (click)=\"repeatingDaily()\">Daily</ion-button>\n  <ion-button expand=\"block\" (click)=\"getAll()\">Get All</ion-button>\n \n  <ion-list>\n    <ion-item *ngFor=\"let n of scheduled\">\n      <ion-label text-wrap>\n        {{ n.id }} - {{ n.title }}\n        <p>Trigger: {{ n.trigger | json }} </p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n \n</ion-content>"

/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS9DOlxcVGVjaC1NRmluYWxcXFByb2plY3Rpb25pYy9zcmNcXGFwcFxcdGFiMVxcdGFiMS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpb24taW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/ngx/index.js");




var Tab1Page = /** @class */ (function () {
    function Tab1Page(plt, localnotifications, alertcnt) {
        var _this = this;
        this.plt = plt;
        this.localnotifications = localnotifications;
        this.alertcnt = alertcnt;
        this.scheduled = [];
        this.plt.ready().then(function () {
            _this.localnotifications.on('click').subscribe(function (res) {
                var msg = res.data ? res.data.mydata : '';
                _this.showAlert(res.title, res.text, msg);
            });
            _this.localnotifications.on('trigger').subscribe(function (res) {
                var msg = res.data ? res.data.mydata : '';
                _this.showAlert(res.title, res.text, msg);
            });
        });
    }
    Tab1Page.prototype.scheduleNotification = function () {
        this.localnotifications.schedule({
            id: 1,
            title: 'Attention',
            text: 'Local Notification',
            data: { mydata: 'My data is here' },
            trigger: { in: 5, unit: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_3__["ELocalNotificationTriggerUnit"].SECOND }
        });
    };
    Tab1Page.prototype.recurringNotification = function () {
        this.localnotifications.schedule({
            id: 2,
            title: 'Recuring',
            text: 'Local Notification',
            data: { mydata: 'My data is here' },
            trigger: { every: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_3__["ELocalNotificationTriggerUnit"].MINUTE }
        });
    };
    Tab1Page.prototype.repeatingDaily = function () {
        this.localnotifications.schedule({
            id: 4,
            title: 'Good Morning',
            text: 'Local Notification',
            data: { mydata: 'My data is here' },
            trigger: { every: { hour: 11, minute: 59 } }
        });
    };
    Tab1Page.prototype.getAll = function () {
        var _this = this;
        this.localnotifications.getAll().then(function (res) {
            _this.scheduled = res;
        });
    };
    Tab1Page.prototype.showAlert = function (header, sub, msg) {
        this.alertcnt.create({
            header: header,
            subHeader: sub,
            message: msg,
            buttons: ['ok']
        }).then(function (alert) { return alert.present(); });
    };
    Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab1',
            template: __webpack_require__(/*! ./tab1.page.html */ "./src/app/tab1/tab1.page.html"),
            styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_3__["LocalNotifications"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], Tab1Page);
    return Tab1Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module.js.map