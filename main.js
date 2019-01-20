(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/auth.guard */ "./src/app/core/auth.guard.ts");
/* harmony import */ var _chat_chat_dialog_chat_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chat/chat-dialog/chat-dialog.component */ "./src/app/chat/chat-dialog/chat-dialog.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");







var routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'agent', component: _chat_chat_dialog_chat_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ChatDialogComponent"], canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"], canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: '**', redirectTo: 'login' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\r\n  position: fixed;\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  background-color: #E5E4E9;\r\n  text-align: center;\r\n  z-index: 3;\r\n}\r\n.main-bot{\r\n  margin-bottom: 5rem;\r\n}\r\n.footer-text{\r\n  margin-top: 1rem;\r\n}\r\n.footer-container{\r\n  padding-left: 0px;\r\n  padding-right: 0px;\r\n}\r\na, .logout-button{\r\n  display: block;\r\n  color: black;\r\n  text-align: center;\r\n  padding-top: 1rem;\r\n  padding-bottom: 1rem;\r\n  text-decoration: none;\r\n}\r\na:hover, .logout-button:hover {\r\n  background-color: #2095FE;\r\n  color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsUUFBUTtFQUNSLFVBQVU7RUFDVixZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQixXQUFXO0NBQ1o7QUFDRDtFQUNFLG9CQUFvQjtDQUNyQjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0NBQ3BCO0FBQ0Q7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHNCQUFzQjtDQUN2QjtBQUNEO0VBQ0UsMEJBQTBCO0VBQzFCLGFBQWE7Q0FDZCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U1RTRFOTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgei1pbmRleDogMztcclxufVxyXG4ubWFpbi1ib3R7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXJlbTtcclxufVxyXG4uZm9vdGVyLXRleHR7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxufVxyXG4uZm9vdGVyLWNvbnRhaW5lcntcclxuICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbn1cclxuYSwgLmxvZ291dC1idXR0b257XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMXJlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuYTpob3ZlciwgLmxvZ291dC1idXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDk1RkU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"router.url !== '/login'; else elseBlock\">\n  <div class=\"container main-bot\">\n    <router-outlet></router-outlet>\n  </div>\n  <footer>\n    <div class=\"container-fluid footer-container\">\n      <div class=\"row justify-content-md-center\">\n        <div class=\"col-lg-2 col-sm-4 col-4\">\n          <a routerLink=\"/agent\"><i class=\"fas fa-2x fa-igloo\"></i></a>\n        </div>\n        <div class=\"col-lg-2 col-sm-4 col-4\">\n          <a routerLink=\"\" (click)=\"logout()\"><i class=\"fa fa-2x fa-door-open\"></i></a>\n        </div>\n        <div class=\"col-lg-2 col-sm-4 col-4\">\n          <a routerLink=\"/dashboard\"><i class=\"fas fa-2x fa-tachometer-alt\"></i></a>\n        </div>\n      </div>\n    </div>\n  </footer>\n</div>\n<ng-template #elseBlock>\n  <router-outlet></router-outlet>\n</ng-template>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/auth.service */ "./src/app/core/auth.service.ts");





var AppComponent = /** @class */ (function () {
    function AppComponent(location, router, authService) {
        this.location = location;
        this.router = router;
        this.authService = authService;
        this.title = 'iot-agent';
    }
    AppComponent.prototype.logout = function () {
        this.authService.doLogout();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: MQTT_SERVICE_OPTIONS, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MQTT_SERVICE_OPTIONS", function() { return MQTT_SERVICE_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _chat_chat_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat/chat.module */ "./src/app/chat/chat.module.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _core_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/auth.guard */ "./src/app/core/auth.guard.ts");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var ngx_mqtt__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-mqtt */ "./node_modules/ngx-mqtt/src/index.js");












var MQTT_SERVICE_OPTIONS = {
    hostname: 'iot.eclipse.org',
    protocol: 'wss',
    port: 443,
    path: '/ws'
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _chat_chat_module__WEBPACK_IMPORTED_MODULE_6__["ChatModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ngx_mqtt__WEBPACK_IMPORTED_MODULE_11__["MqttModule"].forRoot(MQTT_SERVICE_OPTIONS)
            ],
            providers: [_core_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"], _core_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chat/chat-dialog/chat-dialog.component.css":
/*!************************************************************!*\
  !*** ./src/app/chat/chat-dialog/chat-dialog.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".message {\n    border-radius: 50px;\n    margin: 0 15px 10px;\n    padding: 15px 20px;\n    position: relative;\n    font-weight: bold;\n}\n.message.to {\n    background-color: #2095FE;\n    color: #fff;\n    margin-left: 100px;\n    text-align: right;\n}\n.message.from {\n    background-color: #E5E4E9;\n    color: #363636;\n    margin-right: 100px;\n\n}\n.message.to + .message.to,\n.message.from + .message.from {\nmargin-top: -10px;\n}\n.send-input{\n    border-top-left-radius: 1.5rem !important;\n    border-bottom-left-radius: 1.5rem !important;\n}\n.send-button{\n    border-top-right-radius: 1.5rem !important;\n    border-bottom-right-radius: 1.5rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9jaGF0LWRpYWxvZy9jaGF0LWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtDQUNyQjtBQUNEO0lBQ0ksMEJBQTBCO0lBQzFCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0NBQ3JCO0FBQ0Q7SUFDSSwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLG9CQUFvQjs7Q0FFdkI7QUFDRDs7QUFFQSxrQkFBa0I7Q0FDakI7QUFDRDtJQUNJLDBDQUEwQztJQUMxQyw2Q0FBNkM7Q0FDaEQ7QUFDRDtJQUNJLDJDQUEyQztJQUMzQyw4Q0FBOEM7Q0FDakQiLCJmaWxlIjoic3JjL2FwcC9jaGF0L2NoYXQtZGlhbG9nL2NoYXQtZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVzc2FnZSB7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBtYXJnaW46IDAgMTVweCAxMHB4O1xuICAgIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubWVzc2FnZS50byB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwOTVGRTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBtYXJnaW4tbGVmdDogMTAwcHg7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4ubWVzc2FnZS5mcm9tIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTVFNEU5O1xuICAgIGNvbG9yOiAjMzYzNjM2O1xuICAgIG1hcmdpbi1yaWdodDogMTAwcHg7XG5cbn1cbi5tZXNzYWdlLnRvICsgLm1lc3NhZ2UudG8sXG4ubWVzc2FnZS5mcm9tICsgLm1lc3NhZ2UuZnJvbSB7XG5tYXJnaW4tdG9wOiAtMTBweDtcbn1cbi5zZW5kLWlucHV0e1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEuNXJlbSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEuNXJlbSAhaW1wb3J0YW50O1xufVxuLnNlbmQtYnV0dG9ue1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMS41cmVtICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/chat/chat-dialog/chat-dialog.component.html":
/*!*************************************************************!*\
  !*** ./src/app/chat/chat-dialog/chat-dialog.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-md-center\">\n  <div class=\"col-lg-6\">\n    <h1 class=\"text-center\">IoT Agent</h1>\n    <ng-container *ngFor=\"let message of messages | async\">\n      <div class=\"message\" [ngClass]=\"{ 'from': message.sentBy === 'bot',\n                                    'to':   message.sentBy === 'user' }\">\n        {{ message.content }}\n      </div>\n    </ng-container>\n    <br>\n    <div class=\"input-group input-group-lg mb-3\">\n      <input type=\"text\" class=\"form-control send-input\" placeholder=\"Type Your Message\" aria-label=\"Type Your Message\"\n        aria-describedby=\"message\" [(ngModel)]=\"formValue\" (keyup.enter)=\"sendMessage()\">\n      <div class=\"input-group-append\">\n        <button class=\"btn btn-outline-secondary send-button\" type=\"button\" [disabled]=\"formValue===''\" (click)=\"sendMessage()\">\n          <i class=\"fa fa-paper-plane\"></i>\n        </button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/chat/chat-dialog/chat-dialog.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/chat/chat-dialog/chat-dialog.component.ts ***!
  \***********************************************************/
/*! exports provided: ChatDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatDialogComponent", function() { return ChatDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/chat.service */ "./src/app/chat/services/chat.service.ts");
/* harmony import */ var _services_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/message */ "./src/app/chat/services/message.ts");





var ChatDialogComponent = /** @class */ (function () {
    function ChatDialogComponent(chat) {
        this.chat = chat;
        this.formValue = '';
        this.messages = this.chat.conversation.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["scan"])(function (acc, val) { return acc.concat(val); }));
    }
    ChatDialogComponent.prototype.ngOnInit = function () {
        var botMessage = new _services_message__WEBPACK_IMPORTED_MODULE_4__["Message"]('Hi. I am your IoT agent. Tell me what you want to do.', 'bot');
        this.chat.conversation.next([botMessage]);
    };
    ChatDialogComponent.prototype.sendMessage = function () {
        if (this.formValue !== '') {
            this.chat.converse(this.formValue);
            this.formValue = '';
        }
    };
    ChatDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-chat-dialog',
            template: __webpack_require__(/*! ./chat-dialog.component.html */ "./src/app/chat/chat-dialog/chat-dialog.component.html"),
            styles: [__webpack_require__(/*! ./chat-dialog.component.css */ "./src/app/chat/chat-dialog/chat-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"]])
    ], ChatDialogComponent);
    return ChatDialogComponent;
}());



/***/ }),

/***/ "./src/app/chat/chat.module.ts":
/*!*************************************!*\
  !*** ./src/app/chat/chat.module.ts ***!
  \*************************************/
/*! exports provided: ChatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatModule", function() { return ChatModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _chat_dialog_chat_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat-dialog/chat-dialog.component */ "./src/app/chat/chat-dialog/chat-dialog.component.ts");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/chat.service */ "./src/app/chat/services/chat.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/data.service */ "./src/app/chat/services/data.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");













var ChatModule = /** @class */ (function () {
    function ChatModule() {
    }
    ChatModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _chat_dialog_chat_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ChatDialogComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_fire_database__WEBPACK_IMPORTED_MODULE_10__["AngularFireDatabaseModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_8__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].firebase),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestoreModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__["AngularFireAuthModule"]
            ],
            exports: [_chat_dialog_chat_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ChatDialogComponent"]],
            providers: [_services_chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"], _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]]
        })
    ], ChatModule);
    return ChatModule;
}());



/***/ }),

/***/ "./src/app/chat/services/chat.service.ts":
/*!***********************************************!*\
  !*** ./src/app/chat/services/chat.service.ts ***!
  \***********************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data.service */ "./src/app/chat/services/data.service.ts");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./message */ "./src/app/chat/services/message.ts");
/* harmony import */ var _rooms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rooms */ "./src/app/chat/services/rooms.ts");








var ChatService = /** @class */ (function () {
    function ChatService(http, data) {
        this.http = http;
        this.data = data;
        this.roomsList = new _rooms__WEBPACK_IMPORTED_MODULE_7__["Rooms"]().getRoomList();
        this.baseURL = 'https://api.dialogflow.com/v1/query';
        this.token = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].developerAccessToken;
        this.sessioId = 'gEAMpOd50625lPt9IK4u0+IZM3umA5totT1phaHZYAV\nxiQjIQXdzH8IrVJin+e+tJ1MAJLkcMihIo25';
        this.conversation = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        var botMessage = new _message__WEBPACK_IMPORTED_MODULE_6__["Message"]('Hi. I am your IoT agent. Tell me what you want to do.', 'bot');
        this.update(botMessage);
    }
    ChatService.prototype.converse = function (msg) {
        var userMessage = new _message__WEBPACK_IMPORTED_MODULE_6__["Message"](msg, 'user');
        this.update(userMessage);
        this.getRequest(msg);
    };
    ChatService.prototype.update = function (msg) {
        this.conversation.next([msg]);
    };
    ChatService.prototype.getRequest = function (msg) {
        var _this = this;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]()
            .set('Authorization', 'Bearer ' + this.token);
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]()
            .set('v', '20170712')
            .set('lang', 'en')
            .set('query', msg)
            .set('sessionId', this.sessioId)
            .set('timezone', 'Europe/Kaliningrad');
        var httpOptions = {
            headers: headers,
            params: params
        };
        this.http.get(this.baseURL, httpOptions)
            .subscribe(function (data) {
            var inputText = data.result.fulfillment.speech;
            _this.caseHandling(inputText);
        }, function (error) {
            var botMessage = new _message__WEBPACK_IMPORTED_MODULE_6__["Message"]('Error! Something went terribly wrong. Read about it. Try again later.', 'bot');
            console.log('This is for the developer: ' + error);
            _this.update(botMessage);
        });
    };
    ChatService.prototype.caseHandling = function (input) {
        if (input.includes('$temperature$')) {
            this.temperatureMeasuring(input);
        }
        else if (input.includes('$humidity$')) {
            this.humidityMeasuring(input);
        }
        else if (input.includes('$light$')) {
            this.lightHandling(input);
        }
        else if (input.includes('$light-state$')) {
            this.lightMeasuring(input);
        }
        else if (input === '') {
            var botMessage = new _message__WEBPACK_IMPORTED_MODULE_6__["Message"]('Something went wrong. Try again.', 'bot');
            this.update(botMessage);
        }
        else {
            var botMessage = new _message__WEBPACK_IMPORTED_MODULE_6__["Message"](input, 'bot');
            this.update(botMessage);
        }
    };
    ChatService.prototype.temperatureMeasuring = function (input) {
        if (input.includes('$room')) {
            var roomNumber = '';
            for (var i = input.indexOf('$room') + 5; i < input.length; i++) {
                if (input[i] !== '$') {
                    roomNumber = roomNumber + input[i];
                }
                else {
                    break;
                }
            }
            var roomName = this.roomsList[Number(roomNumber) - 1];
            var replace = '$room' + roomNumber + '$';
            var output = input.replace(replace, roomName);
            this.data.getTemperatureElement('room' + roomNumber, output, this.conversation);
        }
        else {
            this.data.getTemperatures(this.conversation);
        }
    };
    ChatService.prototype.humidityMeasuring = function (input) {
        if (input.includes('$room')) {
            var roomNumber = '';
            for (var i = input.indexOf('$room') + 5; i < input.length; i++) {
                if (input[i] !== '$') {
                    roomNumber = roomNumber + input[i];
                }
                else {
                    break;
                }
            }
            var roomName = this.roomsList[Number(roomNumber) - 1];
            var replace = '$room' + roomNumber + '$';
            var output = input.replace(replace, roomName);
            this.data.getHumidityElement('room' + roomNumber, output, this.conversation);
        }
        else {
            this.data.getHumidities(this.conversation);
        }
    };
    ChatService.prototype.lightMeasuring = function (input) {
        if (input.includes('$room')) {
            var roomNumber = '';
            for (var i = input.indexOf('$room') + 5; i < input.length; i++) {
                if (input[i] !== '$') {
                    roomNumber = roomNumber + input[i];
                }
                else {
                    break;
                }
            }
            var roomName = this.roomsList[Number(roomNumber) - 1];
            var replace = '$room' + roomNumber + '$';
            var output = input.replace(replace, roomName);
            this.data.getLightSate('room' + roomNumber, output, this.conversation);
        }
        else {
            this.data.getLightsStates(this.conversation);
        }
    };
    ChatService.prototype.lightHandling = function (input) {
        var output = input.replace('$light$', '');
        if (input.includes('$turn-on$') || input.includes('$turn-off$')) {
            var roomNumber = '';
            for (var i = input.indexOf('$room') + 5; i < input.length; i++) {
                if (input[i] !== '$') {
                    roomNumber = roomNumber + input[i];
                }
                else {
                    break;
                }
            }
            var roomName = this.roomsList[Number(roomNumber) - 1];
            var replace = '$room' + roomNumber + '$';
            var out = output.replace(replace, roomName);
            this.data.setLightSate('room' + roomNumber, out, this.conversation);
        }
        else if (input.includes('$turn-on-all$') || input.includes('$turn-off-all$')) {
            var replace = '$all-rooms$';
            var out = output.replace(replace, 'house');
            this.data.setAllLightSate(out, this.conversation);
        }
    };
    ChatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]])
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "./src/app/chat/services/data.service.ts":
/*!***********************************************!*\
  !*** ./src/app/chat/services/data.service.ts ***!
  \***********************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _rooms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rooms */ "./src/app/chat/services/rooms.ts");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./message */ "./src/app/chat/services/message.ts");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ngx_mqtt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-mqtt */ "./node_modules/ngx-mqtt/src/index.js");







var DataService = /** @class */ (function () {
    function DataService(afDb, mqttService) {
        this.afDb = afDb;
        this.mqttService = mqttService;
        this.roomsList = new _rooms__WEBPACK_IMPORTED_MODULE_3__["Rooms"]().getRoomList();
        this.temperaturesList = this.afDb.list('temperature');
        this.humidityList = this.afDb.list('humidity');
        this.lightsList = this.afDb.list('lights');
    }
    DataService.prototype.getTemperature = function () {
        this.temperaturesList = this.afDb.list('temperatures');
        return this.temperaturesList;
    };
    DataService.prototype.getHumidity = function () {
        this.humidityList = this.afDb.list('humidity');
        return this.humidityList;
    };
    DataService.prototype.getLights = function () {
        this.lightsList = this.afDb.list('lights');
        return this.lightsList;
    };
    DataService.prototype.getTemperatures = function (conversation) {
        var _this = this;
        firebase_app__WEBPACK_IMPORTED_MODULE_5__["database"]().ref('temperature').once('value').then(function (item) {
            var tempList = [];
            item.forEach(function (element) {
                var temp = element.val();
                tempList.push(temp);
            });
            var output = 'The temperature of ' + _this.roomsList[0] + ' is ' + tempList[0].value + '. '
                + 'The temperature of ' + _this.roomsList[1] + ' is ' + tempList[1].value + '. '
                + 'The temperature of ' + _this.roomsList[2] + ' is ' + tempList[2].value + '. '
                + 'The temperature of ' + _this.roomsList[3] + ' is ' + tempList[3].value + '. '
                + 'The temperature of ' + _this.roomsList[4] + ' is ' + tempList[4].value + '. '
                + 'The temperature of ' + _this.roomsList[5] + ' is ' + tempList[5].value + '. ';
            var botMessage = new _message__WEBPACK_IMPORTED_MODULE_4__["Message"](output, 'bot');
            conversation.next([botMessage]);
        });
    };
    DataService.prototype.getHumidities = function (conversation) {
        var _this = this;
        firebase_app__WEBPACK_IMPORTED_MODULE_5__["database"]().ref('humidity').once('value').then(function (item) {
            var humList = [];
            item.forEach(function (element) {
                var hum = element.val();
                humList.push(hum);
            });
            var output = 'The humidity of ' + _this.roomsList[0] + ' is ' + humList[0].value + '. '
                + 'The humidity of ' + _this.roomsList[1] + ' is ' + humList[1].value + '. '
                + 'The humidity of ' + _this.roomsList[2] + ' is ' + humList[2].value + '. '
                + 'The humidity of ' + _this.roomsList[3] + ' is ' + humList[3].value + '. '
                + 'The humidity of ' + _this.roomsList[4] + ' is ' + humList[4].value + '. '
                + 'The humidity of ' + _this.roomsList[5] + ' is ' + humList[5].value + '. ';
            var botMessage = new _message__WEBPACK_IMPORTED_MODULE_4__["Message"](output, 'bot');
            conversation.next([botMessage]);
        });
    };
    DataService.prototype.getLightsStates = function (conversation) {
        var _this = this;
        firebase_app__WEBPACK_IMPORTED_MODULE_5__["database"]().ref('lights').once('value').then(function (item) {
            var liList = [];
            item.forEach(function (element) {
                var li = element.val();
                if (li.state === 1) {
                    liList.push('on');
                }
                else {
                    liList.push('off');
                }
            });
            var output = 'The light of ' + _this.roomsList[0] + ' is ' + liList[0] + '. '
                + 'The light of ' + _this.roomsList[1] + ' is ' + liList[1] + '. '
                + 'The light of ' + _this.roomsList[2] + ' is ' + liList[2] + '. '
                + 'The light of ' + _this.roomsList[3] + ' is ' + liList[3] + '. '
                + 'The light of ' + _this.roomsList[4] + ' is ' + liList[4] + '. '
                + 'The light of ' + _this.roomsList[5] + ' is ' + liList[5] + '. ';
            var botMessage = new _message__WEBPACK_IMPORTED_MODULE_4__["Message"](output, 'bot');
            conversation.next([botMessage]);
        });
    };
    DataService.prototype.getTemperatureElement = function (room, input, conversation) {
        firebase_app__WEBPACK_IMPORTED_MODULE_5__["database"]().ref('temperature/' + room).once('value').then(function (item) {
            var temperature = item.val();
            var replace = '$temperature$';
            var output = input.replace(replace, temperature.value);
            var botMessage = new _message__WEBPACK_IMPORTED_MODULE_4__["Message"](output, 'bot');
            conversation.next([botMessage]);
        });
    };
    DataService.prototype.getHumidityElement = function (room, input, conversation) {
        firebase_app__WEBPACK_IMPORTED_MODULE_5__["database"]().ref('humidity/' + room).once('value').then(function (item) {
            var humidity = item.val();
            var replace = '$humidity$';
            var output = input.replace(replace, humidity.value);
            var botMessage = new _message__WEBPACK_IMPORTED_MODULE_4__["Message"](output, 'bot');
            conversation.next([botMessage]);
        });
    };
    DataService.prototype.getLightSate = function (room, input, conversation) {
        firebase_app__WEBPACK_IMPORTED_MODULE_5__["database"]().ref('lights/' + room).once('value').then(function (item) {
            var light = item.val();
            var state;
            if (light.state === 1) {
                state = 'on';
            }
            else {
                state = 'off';
            }
            var replace = '$light-state$';
            var output = input.replace(replace, state);
            var botMessage = new _message__WEBPACK_IMPORTED_MODULE_4__["Message"](output, 'bot');
            conversation.next([botMessage]);
        });
    };
    DataService.prototype.setLightSate = function (room, input, conversation) {
        var state;
        var message;
        var replace;
        if (input.includes('$turn-on$')) {
            state = 1;
            message = 'on';
            replace = '$turn-on$';
        }
        else {
            state = 0;
            message = 'off';
            replace = '$turn-off$';
        }
        this.subscription = this.mqttService.publish('lightState', room[4] + state).subscribe(function () { });
        this.lightsList.update(room, {
            state: state
        });
        var output = input.replace(replace, message);
        var botMessage = new _message__WEBPACK_IMPORTED_MODULE_4__["Message"](output, 'bot');
        conversation.next([botMessage]);
    };
    DataService.prototype.setAllLightSate = function (input, conversation) {
        var state;
        var message;
        var replace;
        if (input.includes('$turn-on-all$')) {
            state = 1;
            message = 'on';
            replace = '$turn-on-all$';
        }
        else {
            state = 0;
            message = 'off';
            replace = '$turn-off-all$';
        }
        for (var i = 1; i <= 6; i++) {
            this.subscription = this.mqttService.publish('lightState', i + '' + state).subscribe(function () { });
            this.lightsList.update('room' + i, {
                state: state
            });
        }
        var output = input.replace(replace, message);
        var botMessage = new _message__WEBPACK_IMPORTED_MODULE_4__["Message"](output, 'bot');
        conversation.next([botMessage]);
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"],
            ngx_mqtt__WEBPACK_IMPORTED_MODULE_6__["MqttService"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/chat/services/humidity.ts":
/*!*******************************************!*\
  !*** ./src/app/chat/services/humidity.ts ***!
  \*******************************************/
/*! exports provided: Humidity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Humidity", function() { return Humidity; });
var Humidity = /** @class */ (function () {
    function Humidity() {
    }
    return Humidity;
}());



/***/ }),

/***/ "./src/app/chat/services/light.ts":
/*!****************************************!*\
  !*** ./src/app/chat/services/light.ts ***!
  \****************************************/
/*! exports provided: Light */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Light", function() { return Light; });
var Light = /** @class */ (function () {
    function Light() {
    }
    return Light;
}());



/***/ }),

/***/ "./src/app/chat/services/message.ts":
/*!******************************************!*\
  !*** ./src/app/chat/services/message.ts ***!
  \******************************************/
/*! exports provided: Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
var Message = /** @class */ (function () {
    function Message(content, sentBy) {
        this.content = content;
        this.sentBy = sentBy;
    }
    return Message;
}());



/***/ }),

/***/ "./src/app/chat/services/rooms.ts":
/*!****************************************!*\
  !*** ./src/app/chat/services/rooms.ts ***!
  \****************************************/
/*! exports provided: Rooms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rooms", function() { return Rooms; });
var Rooms = /** @class */ (function () {
    function Rooms() {
        this.roomsList = [
            'kitchen',
            'master bedroom',
            'child bedroom',
            'quests bedroom',
            'living room',
            'dining room'
        ];
    }
    Rooms.prototype.getRoomList = function () {
        return this.roomsList;
    };
    return Rooms;
}());



/***/ }),

/***/ "./src/app/chat/services/temperature.ts":
/*!**********************************************!*\
  !*** ./src/app/chat/services/temperature.ts ***!
  \**********************************************/
/*! exports provided: Temperature */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Temperature", function() { return Temperature; });
var Temperature = /** @class */ (function () {
    function Temperature() {
    }
    return Temperature;
}());



/***/ }),

/***/ "./src/app/core/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/core/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");






var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.auth.authState).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (state) { return !!state; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (authenticated) {
            if (!authenticated) {
                _this.router.navigate(['/login']);
            }
        }));
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/core/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/core/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);




var AuthService = /** @class */ (function () {
    function AuthService(afAuth) {
        this.afAuth = afAuth;
    }
    AuthService.prototype.doLogin = function (value) {
        return new Promise(function (resolve, reject) {
            firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"]().signInWithEmailAndPassword(value.email, value.password)
                .then(function (res) {
                resolve(res);
            }, function (err) { return reject(err); });
        });
    };
    AuthService.prototype.doLogout = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser) {
                _this.afAuth.auth.signOut();
                resolve();
            }
            else {
                reject();
            }
        });
    };
    AuthService.prototype.getCurrentUserId = function () {
        if (firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser !== null) {
            return firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.uid;
        }
        else {
            return null;
        }
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/core/user.ts":
/*!******************************!*\
  !*** ./src/app/core/user.ts ***!
  \******************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".switch {\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 60px;\r\n    height: 34px;\r\n}\r\n  .switch input { \r\n    opacity: 0;\r\n    width: 0;\r\n    height: 0;\r\n  }\r\n  .slider {\r\n    position: absolute;\r\n    cursor: pointer;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: #ccc;\r\n    transition: .4s;\r\n  }\r\n  .slider:before {\r\n    position: absolute;\r\n    content: \"\";\r\n    height: 26px;\r\n    width: 26px;\r\n    left: 4px;\r\n    bottom: 4px;\r\n    background-color: white;\r\n    transition: .4s;\r\n  }\r\n  input:checked + .slider {\r\n    background-color: #ff9600;\r\n  }\r\n  input:focus + .slider {\r\n    box-shadow: 0 0 1px #ff9600;\r\n  }\r\n  input:checked + .slider:before {\r\n    -webkit-transform: translateX(26px);\r\n    transform: translateX(26px);\r\n  }\r\n  .slider.round {\r\n    border-radius: 34px;\r\n  }\r\n  .slider.round:before {\r\n    border-radius: 50%;\r\n  }\r\n  .switch-label{\r\n    font-size: 1.3rem;\r\n    height:34px;\r\n    margin-left: 1.5rem;\r\n    position: absolute;\r\n  }\r\n  .default-label{\r\n    font-size: 1.3rem;\r\n  }\r\n  .dashboard-card{\r\n    height:100%;\r\n    border: 0;\r\n    border-top-right-radius: 1.5rem !important;\r\n    border-bottom-right-radius: 1.5rem !important;\r\n    border-top-left-radius: 1.5rem !important;\r\n    border-bottom-left-radius: 1.5rem !important;\r\n  }\r\n  .dashboard-card-header{\r\n    border: 0;\r\n    border-top-right-radius: 1.5rem !important;\r\n    border-top-left-radius: 1.5rem !important;\r\n  }\r\n  .panel-card{\r\n    margin-bottom: 2rem;\r\n  }\r\n  .values{\r\n    height: 42px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osYUFBYTtDQUNoQjtFQUNDO0lBQ0UsV0FBVztJQUNYLFNBQVM7SUFDVCxVQUFVO0dBQ1g7RUFFRDtJQUNFLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1QsVUFBVTtJQUNWLHVCQUF1QjtJQUV2QixnQkFBZ0I7R0FDakI7RUFFRDtJQUNFLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7SUFDWixVQUFVO0lBQ1YsWUFBWTtJQUNaLHdCQUF3QjtJQUV4QixnQkFBZ0I7R0FDakI7RUFFRDtJQUNFLDBCQUEwQjtHQUMzQjtFQUVEO0lBQ0UsNEJBQTRCO0dBQzdCO0VBRUQ7SUFDRSxvQ0FBb0M7SUFFcEMsNEJBQTRCO0dBQzdCO0VBRUQ7SUFDRSxvQkFBb0I7R0FDckI7RUFFRDtJQUNFLG1CQUFtQjtHQUNwQjtFQUVEO0lBQ0Usa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsbUJBQW1CO0dBQ3BCO0VBRUQ7SUFDRSxrQkFBa0I7R0FDbkI7RUFFRDtJQUNFLFlBQVk7SUFDWixVQUFVO0lBQ1YsMkNBQTJDO0lBQzNDLDhDQUE4QztJQUM5QywwQ0FBMEM7SUFDMUMsNkNBQTZDO0dBQzlDO0VBRUQ7SUFDRSxVQUFVO0lBQ1YsMkNBQTJDO0lBQzNDLDBDQUEwQztHQUMzQztFQUVEO0lBQ0Usb0JBQW9CO0dBQ3JCO0VBQ0Q7SUFDRSxhQUFhO0dBQ2QiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3dpdGNoIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiAzNHB4O1xyXG59XHJcbiAgLnN3aXRjaCBpbnB1dCB7IFxyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gIH1cclxuICBcclxuICAuc2xpZGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcclxuICAgIHRyYW5zaXRpb246IC40cztcclxuICB9XHJcbiAgXHJcbiAgLnNsaWRlcjpiZWZvcmUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGhlaWdodDogMjZweDtcclxuICAgIHdpZHRoOiAyNnB4O1xyXG4gICAgbGVmdDogNHB4O1xyXG4gICAgYm90dG9tOiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xyXG4gICAgdHJhbnNpdGlvbjogLjRzO1xyXG4gIH1cclxuICBcclxuICBpbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5NjAwO1xyXG4gIH1cclxuICBcclxuICBpbnB1dDpmb2N1cyArIC5zbGlkZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDFweCAjZmY5NjAwO1xyXG4gIH1cclxuICBcclxuICBpbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xyXG4gIH1cclxuICBcclxuICAuc2xpZGVyLnJvdW5kIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDM0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zbGlkZXIucm91bmQ6YmVmb3JlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB9XHJcblxyXG4gIC5zd2l0Y2gtbGFiZWx7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgIGhlaWdodDozNHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEuNXJlbTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB9XHJcblxyXG4gIC5kZWZhdWx0LWxhYmVse1xyXG4gICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgfVxyXG5cclxuICAuZGFzaGJvYXJkLWNhcmR7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxLjVyZW0gIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxLjVyZW0gIWltcG9ydGFudDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEuNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMS41cmVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuZGFzaGJvYXJkLWNhcmQtaGVhZGVye1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEuNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMS41cmVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAucGFuZWwtY2FyZHtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgfVxyXG4gIC52YWx1ZXN7XHJcbiAgICBoZWlnaHQ6IDQycHg7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-md-center\">\n  <div class=\"col-lg-6\">\n    <h1 class=\"text-center\">Dashboard</h1>\n  </div>\n</div>\n<div class=\"row justify-content-md-center\">\n  <div class=\"col-lg-6 panel-card\">\n    <div class=\"card shadow-lg dashboard-card\">\n      <div class=\"card-header dashboard-card-header\">\n        <h5>Lights of Rooms</h5>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"row\" *ngFor=\"let lightRow of light; let i = index;\">\n          <div class=\"col-lg-12\">\n            <label class=\"switch\">\n              <input type=\"checkbox\" [checked]=\"lightRow.state === 1\" (click)=\"changeState(lightRow, i)\">\n              <span class=\"slider round\"></span>\n            </label>\n            <span class=\"switch-label\">{{roomsList[i].charAt(0).toUpperCase() + roomsList[i].slice(1)}}</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-lg-6 panel-card\">\n    <div class=\"card shadow-lg dashboard-card\">\n      <div class=\"card-header dashboard-card-header\">\n        <h5>Temperature & Humidity</h5>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"row\" *ngFor=\"let row of roomsList; let i = index;\">\n          <div class=\"col-lg-5 col-md-5\">\n            <span class=\"default-label\">{{row.charAt(0).toUpperCase() + row.slice(1)}}: </span>\n          </div>\n          <div class=\"col-lg-7 col-md-7 values\">\n            <span class=\"default-label\">T: {{temperature[i].value}} ℃ - H: {{humidity[i].value}} %</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _chat_services_light__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../chat/services/light */ "./src/app/chat/services/light.ts");
/* harmony import */ var _chat_services_temperature__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../chat/services/temperature */ "./src/app/chat/services/temperature.ts");
/* harmony import */ var _chat_services_humidity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../chat/services/humidity */ "./src/app/chat/services/humidity.ts");
/* harmony import */ var _chat_services_rooms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../chat/services/rooms */ "./src/app/chat/services/rooms.ts");
/* harmony import */ var ngx_mqtt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-mqtt */ "./node_modules/ngx-mqtt/src/index.js");








var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(afDb, mqttService) {
        this.afDb = afDb;
        this.mqttService = mqttService;
        this.roomsList = new _chat_services_rooms__WEBPACK_IMPORTED_MODULE_6__["Rooms"]().getRoomList();
        this.init();
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getLightStates();
        this.getTemperature();
        this.getHumidity();
    };
    DashboardComponent.prototype.init = function () {
        this.light = [];
        this.temperature = [];
        this.humidity = [];
        var l = new _chat_services_light__WEBPACK_IMPORTED_MODULE_3__["Light"]();
        var t = new _chat_services_temperature__WEBPACK_IMPORTED_MODULE_4__["Temperature"]();
        var h = new _chat_services_humidity__WEBPACK_IMPORTED_MODULE_5__["Humidity"]();
        for (var i = 0; i < 6; i++) {
            l.state = 0;
            t.value = 0;
            h.value = 0;
            this.light.push(l);
            this.temperature.push(t);
            this.humidity.push(h);
        }
    };
    DashboardComponent.prototype.getLightStates = function () {
        var _this = this;
        this.lightsList = this.afDb.list('lights');
        this.lightsList.snapshotChanges().subscribe(function (item) {
            _this.light = [];
            item.forEach(function (element) {
                var y = element.payload.toJSON();
                y['lid'] = element.key;
                _this.light.push(y);
            });
        });
    };
    DashboardComponent.prototype.getTemperature = function () {
        var _this = this;
        this.temperaturesList = this.afDb.list('temperature');
        this.temperaturesList.snapshotChanges().subscribe(function (item) {
            _this.temperature = [];
            item.forEach(function (element) {
                var y = element.payload.toJSON();
                y['tid'] = element.key;
                _this.temperature.push(y);
            });
        });
    };
    DashboardComponent.prototype.getHumidity = function () {
        var _this = this;
        this.humidityList = this.afDb.list('humidity');
        this.humidityList.snapshotChanges().subscribe(function (item) {
            _this.humidity = [];
            item.forEach(function (element) {
                var y = element.payload.toJSON();
                y['hid'] = element.key;
                _this.humidity.push(y);
            });
        });
    };
    DashboardComponent.prototype.changeState = function (light, index) {
        if (light.state === 1) {
            this.subscription = this.mqttService.publish('lightState', index + 1 + '0').subscribe(function () { });
            this.lightsList.update(light.lid, {
                state: 0
            });
        }
        else {
            this.subscription = this.mqttService.publish('lightState', index + 1 + '1').subscribe(function () { });
            this.lightsList.update(light.lid, {
                state: 1
            });
        }
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"],
            ngx_mqtt__WEBPACK_IMPORTED_MODULE_7__["MqttService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-card{\r\n    margin-top: 9em;\r\n    padding: 2em;\r\n    border: 0;\r\n    border-top-right-radius: 1.5rem !important;\r\n    border-bottom-right-radius: 1.5rem !important;\r\n    border-top-left-radius: 1.5rem !important;\r\n    border-bottom-left-radius: 1.5rem !important;\r\n}\r\n.login-button{\r\n    border-top-right-radius: 1.5rem !important;\r\n    border-bottom-right-radius: 1.5rem !important;\r\n    border-top-left-radius: 1.5rem !important;\r\n    border-bottom-left-radius: 1.5rem !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsVUFBVTtJQUNWLDJDQUEyQztJQUMzQyw4Q0FBOEM7SUFDOUMsMENBQTBDO0lBQzFDLDZDQUE2QztDQUNoRDtBQUNEO0lBQ0ksMkNBQTJDO0lBQzNDLDhDQUE4QztJQUM5QywwQ0FBMEM7SUFDMUMsNkNBQTZDO0NBQ2hEIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1jYXJke1xyXG4gICAgbWFyZ2luLXRvcDogOWVtO1xyXG4gICAgcGFkZGluZzogMmVtO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEuNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEuNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMS41cmVtICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxLjVyZW0gIWltcG9ydGFudDtcclxufVxyXG4ubG9naW4tYnV0dG9ue1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEuNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEuNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMS41cmVtICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxLjVyZW0gIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row justify-content-md-center\">\n        <div class=\"col-lg-6 col-md-8\">\n            <div class=\"card login-card login-card shadow-lg p-3 mb-5 bg-white rounded\">\n                <div class=\"header\">\n                    <h4>Login</h4>\n                </div>\n                <div class=\"content\">\n                    <form [formGroup]=\"loginForm\">\n                        <div class=\"row\">\n                            <div class=\"col-md-12\">\n                                <div class=\"form-group\">\n                                    <label>Username</label>\n                                    <input id=\"email\" type=\"email\" formControlName=\"email\" class=\"form-control\"\n                                        placeholder=\"Username\">\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-12\">\n                                <div class=\"form-group\">\n                                    <label>Password</label>\n                                    <input id=\"password\" type=\"password\" formControlName=\"password\" class=\"form-control\"\n                                        placeholder=\"Password\">\n                                </div>\n                            </div>\n                        </div>\n                        <small class=\"text-danger\">{{errorMessage}}</small>\n                        <br>\n                        <br>\n                        <button type=\"submit\" (click)=\"tryLogin(loginForm.value)\" (keyup.enter)=\"tryLogin(loginForm.value)\"\n                            class=\"btn btn-dark btn-block login-button\">Login</button>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/user */ "./src/app/core/user.ts");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, formBuilder) {
        this.authService = authService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.errorMessage = '';
        this.user = new _core_user__WEBPACK_IMPORTED_MODULE_5__["User"];
        this.createForm();
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.createForm = function () {
        this.loginForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    };
    LoginComponent.prototype.tryLogin = function (formValues) {
        var _this = this;
        this.authService.doLogin(formValues)
            .then(function (result) {
            _this.router.navigate(['/agent']);
        }, function (error) {
            if (error.message.includes('signInWithEmailAndPassword failed: ')) {
                error.message = error.message.replace('signInWithEmailAndPassword failed: ', '');
            }
            _this.errorMessage = '*' + error.message;
            _this.loginForm.reset();
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    clientAccessToken: '6484c0605ab942ef916f68ab04a3cca5',
    developerAccessToken: '595329ff62f145f8b60d988e529b7bfd',
    firebase: {
        apiKey: 'AIzaSyDKyarCYk0Mf7EzWOlzfPQAdY4mpxIPG4U',
        authDomain: 'iot-smart-agent.firebaseapp.com',
        databaseURL: 'https://iot-smart-agent.firebaseio.com',
        projectId: 'iot-smart-agent',
        storageBucket: 'iot-smart-agent.appspot.com',
        messagingSenderId: '174514371914'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\georg\Έγγραφα\Angular\iot-agent\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map