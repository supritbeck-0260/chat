(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/allusers/allusers.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/allusers/allusers.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div nz-row class=\"user-row\">\n    <div nz-col nzSpan=\"12\" class=\"user-column\">\n        <h3 class='header'>Users</h3>\n        <div *ngIf='!users' class=\"loader\"><nz-spin nzSimple class=\"spin\"></nz-spin></div>\n        <input *ngIf='users' nz-input placeholder=\"search\" nzSize=\"large\" [(ngModel)]='searchText'/>\n        <div *ngIf='recent && !searchText'>\n            <h3>Recent Chats</h3>\n            <div *ngFor=\"let user of recent | hideRecent:searchText\">\n                <p (click)='clickHandler(user)'*ngIf='id !== user._id' class=\"user-list\">\n                        <nz-avatar nzIcon=\"user\" style=\"background-color:#87d068;\"></nz-avatar>\n                        <span class=\"user-name\">{{user.userName}}</span> \n                        <i nz-icon nzType=\"message\" nzTheme=\"outline\"></i>\n                </p>\n            </div>\n        </div>\n        <div *ngIf='users'>\n            <h3 class=\"header\">All users</h3>\n            <div *ngFor=\"let user of users | search:searchText\">\n            <p (click)='clickHandler(user)'*ngIf='id !== user._id' class=\"user-list\">\n                    <nz-avatar nzIcon=\"user\" style=\"background-color:#87d068;\"></nz-avatar>\n                    <span class=\"user-name\">{{user.userName}}</span> \n                    <i nz-icon nzType=\"message\" nzTheme=\"outline\"></i>\n            </p>\n        </div>\n        </div>\n    </div>\n</div>\n    \n                \n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-main\">\n  <app-navbar></app-navbar>\n  <div class=\"circle1\"></div>\n  <div class=\"circle2\"></div>\n  <div class=\"circle3\"></div>\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/chat-room/chat-room.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/chat-room/chat-room.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"chat-main\">\n    <h2 *ngIf='name' class=\"chat-heading\">Chatting with {{name}}</h2>\n    <app-messages [messages]='chats' [user]='user'></app-messages>\n    <app-input (sendMessage)='getMessage($event)'></app-input>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/form/form.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/form/form.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div nz-row class=\"form-row\">\n    <div nz-col nzSpan=\"24\" class=\"form-column\">\n            <nz-card class='form-card' [nzBordered]=\"false\" nzTitle=\"Signup\" [nzExtra]=\"extraTemplate\">\n                <form nz-form [nzLayout]=\"'inline'\" [formGroup]=\"validateForm\" (ngSubmit)=\"submitForm()\">\n                    <nz-form-item>\n                        <nz-form-item>\n                            <nz-form-control nzErrorTip=\"Invalid Email!\">\n                            <nz-input-group nzPrefixIcon=\"mail\">\n                                <input formControlName=\"email\" type=\"email\" nz-input placeholder=\"Email\" />\n                            </nz-input-group>\n                            </nz-form-control>\n                        </nz-form-item>\n                    <nz-form-control nzErrorTip=\"Invalid username!\">\n                        <nz-input-group nzPrefixIcon=\"user\">\n                        <input formControlName=\"userName\" nz-input placeholder=\"Username\" />\n                        </nz-input-group>\n                    </nz-form-control>\n                    </nz-form-item>\n                    <nz-form-item>\n                    <nz-form-control nzErrorTip=\"Invalid Password!\">\n                        <nz-input-group nzPrefixIcon=\"lock\">\n                        <input formControlName=\"password\" nz-input type=\"password\" placeholder=\"Password\" />\n                        </nz-input-group>\n                    </nz-form-control>\n                    </nz-form-item>\n                    <nz-form-item>\n                    <nz-form-control>\n                        <button nz-button nzType=\"primary\" [disabled]=\"!validateForm.valid\">Sign up</button>\n                    </nz-form-control>\n                    </nz-form-item>\n                    <nz-alert *ngIf='message' nzType={{type}} nzMessage={{message}}></nz-alert>\n                </form>\n            </nz-card>\n        </div>\n    </div>\n    \n                \n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home-main\">\n    <h1 class=\"welcome\">Welcome to Chat Application</h1>\n    <h3 class=\"info\">Please join any room and start chatting.</h3>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/input/input.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/input/input.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"input-main\">\n    <input type=\"text\" [(ngModel)]='message' (keyup.enter)='send()' class=\"input-text\"/>\n    <button class=\"input-send\" (click)='send()'>send</button>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/join/join.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/join/join.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"join-main\">\n    <h3 class=\"join-here\">JOIN HERE</h3>\n    <input type=\"text\" class=\"room\" [(ngModel)]='user.room' placeholder=\"Room name\"/>\n    <input type=\"text\" class=\"name\" [(ngModel)]='user.name' placeholder=\"User name\"/>\n    <button class=\"join-btn\" (click)='joinHandler()'>Join</button>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div nz-row class=\"form-row\">\n    <div nz-col nzSpan=\"24\" class=\"form-column\">\n            <nz-card class='form-card' [nzBordered]=\"false\" nzTitle=\"Login\" [nzExtra]=\"extraTemplate\">\n                <form nz-form [nzLayout]=\"'inline'\" [formGroup]=\"validateForm\" (ngSubmit)=\"submitForm()\">\n                    <nz-form-item>\n                        <nz-form-control nzErrorTip=\"Invalid Email!\">\n                        <nz-input-group nzPrefixIcon=\"mail\">\n                                <input formControlName=\"email\" type=\"email\" nz-input placeholder=\"Email\" />\n                        </nz-input-group>\n                        </nz-form-control>\n                    </nz-form-item>\n                    <nz-form-item>\n                    <nz-form-control nzErrorTip=\"Invalid Password!\">\n                        <nz-input-group nzPrefixIcon=\"lock\">\n                        <input formControlName=\"password\" nz-input type=\"password\" placeholder=\"Password\" />\n                        </nz-input-group>\n                    </nz-form-control>\n                    </nz-form-item>\n                    <nz-form-item>\n                    <nz-form-control>\n                        <button nz-button nzType=\"primary\" [disabled]=\"!validateForm.valid\">Log in</button>\n                    </nz-form-control>\n                    </nz-form-item>\n                    <nz-alert *ngIf='message' nzType={{type}} nzMessage={{message}}></nz-alert>\n                </form>\n            </nz-card>\n        </div>\n    </div>\n    \n                \n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/messages/messages.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/messages/messages.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"message-main\" appScroll>\n    <!-- <p class=\"my-text\">\n            \n            <span class=\"message\">\n                <span class=\"type\">You</span>\n                Hello there.\n            </span>\n    </p>\n    <p class=\"other-text\">\n            <span class=\"message\">\n                <span class=\"type\">Rick</span>\n                Hello there.\n            </span>\n    </p> -->\n    <p [ngClass]=\"{'other-text':elem.id != user.id,'my-text': elem.id == user.id}\" *ngFor='let elem of messages'>\n        <span class=\"message\">\n            <span class=\"type\" *ngIf='elem'>\n               <span *ngIf='elem.id == user.id'>You</span><span *ngIf='elem.id != user.id'>{{elem.name}}</span> \n               <span class=\"message-time\">{{elem.date | date:'short'}}</span>\n            </span>\n            {{elem.message}}\n        </span>\n    </p>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navbar/navbar.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-main\">\n    <h2 class=\"head\">\n        <a routerLink=''>\n            <span class=\"home\">Home</span>\n        </a>\n        <a routerLink='signup' *ngIf=\"!(isLoggedIn$ | async)\">\n            <span class=\"join\">Signup</span>\n        </a>\n        <a routerLink='login' *ngIf=\"!(isLoggedIn$ | async)\">\n            <span class=\"join\">Login</span>\n        </a>\n        <a routerLink='users' *ngIf=\"isLoggedIn$ | async\">\n            <span class=\"join\">Chats</span>\n        </a>\n        <a (click)='exit()' *ngIf=\"isLoggedIn$ | async\">\n            <span class=\"exit\">Logout</span>\n        </a>   \n    </h2>\n</div>\n"

/***/ }),

/***/ "./src/app/allusers/allusers.component.css":
/*!*************************************************!*\
  !*** ./src/app/allusers/allusers.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-row{\r\ndisplay: flex;\r\njustify-content: center;\r\n}\r\n.user-column{\r\n    background: rgba(255,255,255,0.2);\r\n    margin: 5px auto;\r\n    padding: 5px;\r\n    border-radius: 10px;\r\n    border-top:2px solid rgba(255,255,255,0.5);\r\n    border-left:1px solid rgba(255,255,255,0.5);\r\n    -webkit-backdrop-filter: blur(2px);\r\n            backdrop-filter: blur(2px);\r\n    box-shadow: 20px 20px 50px rgba(0,0,0,0.2);\r\n    max-height: 90vh;\r\n    overflow-y:scroll;\r\n\r\n}\r\n.user-column::-webkit-scrollbar {\r\n    display: none;\r\n}\r\n.user-column .header{\r\n    color: rgba(255,255,255,1);\r\n    text-align: center;\r\n}\r\n.user-name{\r\n    margin:0px 5px;\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n}\r\n.user-list{\r\n    padding: 5px;\r\n    border-radius: 10px;\r\n}\r\n.user-list:hover{\r\n    background: rgba(255,255,255,0.5);\r\n    cursor: pointer;\r\n}\r\n.loader{\r\n    text-align: center;\r\n    background: rgba(255,255,255,0.5);\r\n    padding: 5px;\r\n    border-radius: 10px;\r\n    margin: 5px;\r\n}\r\n.loader .spin{\r\n    margin: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxsdXNlcnMvYWxsdXNlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGFBQWE7QUFDYix1QkFBdUI7QUFDdkI7QUFDQTtJQUNJLGlDQUFpQztJQUNqQyxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQiwwQ0FBMEM7SUFDMUMsMkNBQTJDO0lBQzNDLGtDQUEwQjtZQUExQiwwQkFBMEI7SUFDMUIsMENBQTBDO0lBQzFDLGdCQUFnQjtJQUNoQixpQkFBaUI7O0FBRXJCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksaUNBQWlDO0lBQ2pDLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixpQ0FBaUM7SUFDakMsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2FsbHVzZXJzL2FsbHVzZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlci1yb3d7XHJcbmRpc3BsYXk6IGZsZXg7XHJcbmp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi51c2VyLWNvbHVtbntcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4yKTtcclxuICAgIG1hcmdpbjogNXB4IGF1dG87XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLXRvcDoycHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjUpO1xyXG4gICAgYm9yZGVyLWxlZnQ6MXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xyXG4gICAgYm94LXNoYWRvdzogMjBweCAyMHB4IDUwcHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gICAgbWF4LWhlaWdodDogOTB2aDtcclxuICAgIG92ZXJmbG93LXk6c2Nyb2xsO1xyXG5cclxufVxyXG4udXNlci1jb2x1bW46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLnVzZXItY29sdW1uIC5oZWFkZXJ7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwxKTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4udXNlci1uYW1le1xyXG4gICAgbWFyZ2luOjBweCA1cHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4udXNlci1saXN0e1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4udXNlci1saXN0OmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjUpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5sb2FkZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuNSk7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbn1cclxuLmxvYWRlciAuc3BpbntcclxuICAgIG1hcmdpbjogNXB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/allusers/allusers.component.ts":
/*!************************************************!*\
  !*** ./src/app/allusers/allusers.component.ts ***!
  \************************************************/
/*! exports provided: AllusersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllusersComponent", function() { return AllusersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _localstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../localstorage.service */ "./src/app/localstorage.service.ts");





let AllusersComponent = class AllusersComponent {
    constructor(http, router, store) {
        this.http = http;
        this.router = router;
        this.store = store;
        const data = this.store.get('user');
        if (!data)
            return;
        this.token = data.token;
        this.id = data.id;
    }
    clickHandler(user) {
        this.http.gotoRoom(Object.assign({}, user, { token: this.token })).subscribe((data) => {
            if (data.status == 200)
                this.router.navigate(['chat', { room: data.room, name: data.name }]);
        });
    }
    ngOnInit() {
        if (this.id) {
            this.http.recentChats({ id: this.id }).subscribe((data) => {
                if (data)
                    this.recent = data;
            });
        }
        this.http.getusers().subscribe((data) => {
            if (data)
                this.users = data;
        });
    }
};
AllusersComponent.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"] }
];
AllusersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-allusers',
        template: __webpack_require__(/*! raw-loader!./allusers.component.html */ "./node_modules/raw-loader/index.js!./src/app/allusers/allusers.component.html"),
        styles: [__webpack_require__(/*! ./allusers.component.css */ "./src/app/allusers/allusers.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _localstorage_service__WEBPACK_IMPORTED_MODULE_4__["LocalstorageService"]])
], AllusersComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _chat_room_chat_room_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat-room/chat-room.component */ "./src/app/chat-room/chat-room.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form/form.component */ "./src/app/form/form.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _allusers_allusers_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./allusers/allusers.component */ "./src/app/allusers/allusers.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");









const routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    },
    {
        path: 'chat',
        component: _chat_room_chat_room_component__WEBPACK_IMPORTED_MODULE_3__["ChatRoomComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
    },
    {
        path: 'signup',
        component: _form_form_component__WEBPACK_IMPORTED_MODULE_5__["FormComponent"]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
    },
    {
        path: 'users',
        component: _allusers_allusers_component__WEBPACK_IMPORTED_MODULE_7__["AllusersComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
    },
    {
        path: '**',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-main{\r\n    /* background: linear-gradient(to right ,rgb(45, 173, 173), rgb(1, 54, 54)); */\r\n    background: teal;\r\n    height: 100%;\r\n}\r\n.circle1{\r\n    content:'';\r\n    position: absolute;\r\n    top:0;\r\n    left: 0;\r\n    width:100%;\r\n    height: 100%;\r\n    background-image: linear-gradient(to bottom, rgb(4, 60, 82), rgb(11, 2, 26));\r\n    -webkit-clip-path: circle(25% at 70% 70%);\r\n            clip-path: circle(25% at 70% 70%);\r\n}\r\n.circle2{\r\n    content:'';\r\n    position: absolute;\r\n    top:0;\r\n    left: 0;\r\n    width:100%;\r\n    height: 100%;\r\n    background: linear-gradient(to top, rgb(247, 116, 192) 0%, rgb(170, 145, 4) 100%);\r\n    -webkit-clip-path: circle(15% at 30% 35%);\r\n            clip-path: circle(15% at 30% 35%);\r\n}\r\n.circle3{\r\n    content:'';\r\n    position: absolute;\r\n    top:0;\r\n    left: 0;\r\n    width:100%;\r\n    height: 100%;\r\n    background: linear-gradient(to top, #ddd6f3,#7e0e08);\r\n    -webkit-clip-path: circle(10% at 10% 70%);\r\n            clip-path: circle(10% at 10% 70%);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw4RUFBOEU7SUFDOUUsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsS0FBSztJQUNMLE9BQU87SUFDUCxVQUFVO0lBQ1YsWUFBWTtJQUNaLDRFQUE0RTtJQUM1RSx5Q0FBaUM7WUFBakMsaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLEtBQUs7SUFDTCxPQUFPO0lBQ1AsVUFBVTtJQUNWLFlBQVk7SUFDWixpRkFBaUY7SUFDakYseUNBQWlDO1lBQWpDLGlDQUFpQztBQUNyQztBQUVBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixLQUFLO0lBQ0wsT0FBTztJQUNQLFVBQVU7SUFDVixZQUFZO0lBQ1osb0RBQW9EO0lBQ3BELHlDQUFpQztZQUFqQyxpQ0FBaUM7QUFDckMiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtbWFpbntcclxuICAgIC8qIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCAscmdiKDQ1LCAxNzMsIDE3MyksIHJnYigxLCA1NCwgNTQpKTsgKi9cclxuICAgIGJhY2tncm91bmQ6IHRlYWw7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLmNpcmNsZTF7XHJcbiAgICBjb250ZW50OicnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOjA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYig0LCA2MCwgODIpLCByZ2IoMTEsIDIsIDI2KSk7XHJcbiAgICBjbGlwLXBhdGg6IGNpcmNsZSgyNSUgYXQgNzAlIDcwJSk7XHJcbn1cclxuLmNpcmNsZTJ7XHJcbiAgICBjb250ZW50OicnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOjA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYigyNDcsIDExNiwgMTkyKSAwJSwgcmdiKDE3MCwgMTQ1LCA0KSAxMDAlKTtcclxuICAgIGNsaXAtcGF0aDogY2lyY2xlKDE1JSBhdCAzMCUgMzUlKTtcclxufVxyXG5cclxuLmNpcmNsZTN7XHJcbiAgICBjb250ZW50OicnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOjA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICNkZGQ2ZjMsIzdlMGUwOCk7XHJcbiAgICBjbGlwLXBhdGg6IGNpcmNsZSgxMCUgYXQgMTAlIDcwJSk7XHJcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'chat';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _chat_room_chat_room_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chat-room/chat-room.component */ "./src/app/chat-room/chat-room.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _input_input_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./input/input.component */ "./src/app/input/input.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _join_join_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./join/join.component */ "./src/app/join/join.component.ts");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./socket.service */ "./src/app/socket.service.ts");
/* harmony import */ var _scroll_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./scroll.directive */ "./src/app/scroll.directive.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./form/form.component */ "./src/app/form/form.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/locales/en */ "./node_modules/@angular/common/locales/en.js");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ant-design/icons-angular/icons */ "./node_modules/@ant-design/icons-angular/fesm2015/ant-design-icons-angular-icons.js");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-icon.js");
/* harmony import */ var _zorro_zorro_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./zorro/zorro.module */ "./src/app/zorro/zorro.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _allusers_allusers_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./allusers/allusers.component */ "./src/app/allusers/allusers.component.ts");
/* harmony import */ var _search_pipe__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./search.pipe */ "./src/app/search.pipe.ts");
/* harmony import */ var _hide_recent_pipe__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./hide-recent.pipe */ "./src/app/hide-recent.pipe.ts");




























Object(_angular_common__WEBPACK_IMPORTED_MODULE_19__["registerLocaleData"])(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_20___default.a);
const config = { url: 'http://localhost:5000', options: {} };
const antDesignIcons = _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_21__;
const icons = Object.keys(antDesignIcons).map(key => antDesignIcons[key]);
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _chat_room_chat_room_component__WEBPACK_IMPORTED_MODULE_7__["ChatRoomComponent"],
            _messages_messages_component__WEBPACK_IMPORTED_MODULE_8__["MessagesComponent"],
            _input_input_component__WEBPACK_IMPORTED_MODULE_9__["InputComponent"],
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
            _join_join_component__WEBPACK_IMPORTED_MODULE_12__["JoinComponent"],
            _scroll_directive__WEBPACK_IMPORTED_MODULE_14__["ScrollDirective"],
            _form_form_component__WEBPACK_IMPORTED_MODULE_15__["FormComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_24__["LoginComponent"],
            _allusers_allusers_component__WEBPACK_IMPORTED_MODULE_25__["AllusersComponent"],
            _search_pipe__WEBPACK_IMPORTED_MODULE_26__["SearchPipe"],
            _hide_recent_pipe__WEBPACK_IMPORTED_MODULE_27__["HideRecentPipe"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__["SocketIoModule"].forRoot(config),
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_16__["NgZorroAntdModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"],
            _zorro_zorro_module__WEBPACK_IMPORTED_MODULE_23__["ZoroModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"]
        ],
        providers: [_socket_service__WEBPACK_IMPORTED_MODULE_13__["SocketService"], { provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_16__["NZ_I18N"], useValue: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_16__["en_US"] }, { provide: ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_22__["NZ_ICONS"], useValue: icons }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");




let AuthGuard = class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(next, state) {
        if (!this.authService.isLoggedin().value) {
            this.router.navigate(['login']);
        }
        return true;
    }
    canActivateChild(next, state) {
        return true;
    }
    canLoad(route, segments) {
        return true;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AuthGuard);



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _localstorage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");






let AuthService = class AuthService {
    constructor(store, http, router) {
        this.store = store;
        this.http = http;
        this.router = router;
        this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false);
        this.token = this.store.get('user') && this.store.get('user').token;
        if (!this.token)
            return;
        this.http.isLoggedIn(this.token).subscribe((response) => {
            if (response.status == 200)
                return this.loggedIn.next(response.loggedin);
            this.store.remove('user');
            this.router.navigate(['login']);
        });
    }
    login(data) {
        this.loggedIn.next(true);
        this.store.set('user', data);
    }
    logout() {
        this.loggedIn.next(false);
        this.store.remove('user');
    }
    isLoggedin() {
        return this.loggedIn;
    }
};
AuthService.ctorParameters = () => [
    { type: _localstorage_service__WEBPACK_IMPORTED_MODULE_2__["LocalstorageService"] },
    { type: _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_localstorage_service__WEBPACK_IMPORTED_MODULE_2__["LocalstorageService"], _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], AuthService);



/***/ }),

/***/ "./src/app/chat-room/chat-room.component.css":
/*!***************************************************!*\
  !*** ./src/app/chat-room/chat-room.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chat-main{\r\n    position: absolute;\r\n    background-color: rgba(255,255,255,0.3);\r\n    display: flex;\r\n    width: 50vw;\r\n    top:50%;\r\n    left: 50%;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    border-top: 2px solid rgba(255,255,255,0.5);\r\n    border-left: 2px solid rgba(255,255,255,0.5);\r\n    border-radius: 15px;\r\n    box-shadow: 20px 20px 50px rgba(0,0,0,0.2);\r\n    -webkit-backdrop-filter: blur(5px);\r\n            backdrop-filter: blur(5px);\r\n    -webkit-transform: translate(-50%,-50%);\r\n            transform: translate(-50%,-50%);\r\n    -webkit-animation: chatRoom 2s ease-out;\r\n            animation: chatRoom 2s ease-out;\r\n}\r\n.chat-heading{\r\n    background: linear-gradient(to right,rgb(6, 59, 55,0.1),rgb(10, 5, 32,0.3));\r\n    margin: 5px;\r\n    padding: 5px;\r\n    border-top: 1px solid rgba(255,255,255,0.5);\r\n    border-left: 1px solid rgba(255,255,255,0.5);\r\n    border-radius: 5px;\r\n    color: rgba(255,255,255,0.8);\r\n    -webkit-animation: heading 2s ease-out;\r\n            animation: heading 2s ease-out;\r\n}\r\n@-webkit-keyframes chatRoom {\r\n    0%{width: 60vw;height: 100vh;}\r\n    100%{width: 50vw;height: 81vh;}\r\n}\r\n@keyframes chatRoom {\r\n    0%{width: 60vw;height: 100vh;}\r\n    100%{width: 50vw;height: 81vh;}\r\n}\r\n@-webkit-keyframes heading {\r\n    0%{font-size: 0px;}\r\n    100%{font-size: 25px;}\r\n}\r\n@keyframes heading {\r\n    0%{font-size: 0px;}\r\n    100%{font-size: 25px;}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC1yb29tL2NoYXQtcm9vbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLHVDQUF1QztJQUN2QyxhQUFhO0lBQ2IsV0FBVztJQUNYLE9BQU87SUFDUCxTQUFTO0lBQ1QsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsMkNBQTJDO0lBQzNDLDRDQUE0QztJQUM1QyxtQkFBbUI7SUFDbkIsMENBQTBDO0lBQzFDLGtDQUEwQjtZQUExQiwwQkFBMEI7SUFDMUIsdUNBQStCO1lBQS9CLCtCQUErQjtJQUMvQix1Q0FBK0I7WUFBL0IsK0JBQStCO0FBQ25DO0FBQ0E7SUFDSSwyRUFBMkU7SUFDM0UsV0FBVztJQUNYLFlBQVk7SUFDWiwyQ0FBMkM7SUFDM0MsNENBQTRDO0lBQzVDLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsc0NBQThCO1lBQTlCLDhCQUE4QjtBQUNsQztBQUVBO0lBQ0ksR0FBRyxXQUFXLENBQUMsYUFBYSxDQUFDO0lBQzdCLEtBQUssV0FBVyxDQUFDLFlBQVksQ0FBQztBQUNsQztBQUhBO0lBQ0ksR0FBRyxXQUFXLENBQUMsYUFBYSxDQUFDO0lBQzdCLEtBQUssV0FBVyxDQUFDLFlBQVksQ0FBQztBQUNsQztBQUNBO0lBQ0ksR0FBRyxjQUFjLENBQUM7SUFDbEIsS0FBSyxlQUFlLENBQUM7QUFDekI7QUFIQTtJQUNJLEdBQUcsY0FBYyxDQUFDO0lBQ2xCLEtBQUssZUFBZSxDQUFDO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvY2hhdC1yb29tL2NoYXQtcm9vbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXQtbWFpbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4zKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogNTB2dztcclxuICAgIHRvcDo1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcclxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGJveC1zaGFkb3c6IDIwcHggMjBweCA1MHB4IHJnYmEoMCwwLDAsMC4yKTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuICAgIGFuaW1hdGlvbjogY2hhdFJvb20gMnMgZWFzZS1vdXQ7XHJcbn1cclxuLmNoYXQtaGVhZGluZ3tcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCxyZ2IoNiwgNTksIDU1LDAuMSkscmdiKDEwLCA1LCAzMiwwLjMpKTtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC44KTtcclxuICAgIGFuaW1hdGlvbjogaGVhZGluZyAycyBlYXNlLW91dDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBjaGF0Um9vbSB7XHJcbiAgICAwJXt3aWR0aDogNjB2dztoZWlnaHQ6IDEwMHZoO31cclxuICAgIDEwMCV7d2lkdGg6IDUwdnc7aGVpZ2h0OiA4MXZoO31cclxufVxyXG5Aa2V5ZnJhbWVzIGhlYWRpbmcge1xyXG4gICAgMCV7Zm9udC1zaXplOiAwcHg7fVxyXG4gICAgMTAwJXtmb250LXNpemU6IDI1cHg7fVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/chat-room/chat-room.component.ts":
/*!**************************************************!*\
  !*** ./src/app/chat-room/chat-room.component.ts ***!
  \**************************************************/
/*! exports provided: ChatRoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatRoomComponent", function() { return ChatRoomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _localstorage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../socket.service */ "./src/app/socket.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");






let ChatRoomComponent = class ChatRoomComponent {
    constructor(realtime, store, parameters, http) {
        this.realtime = realtime;
        this.store = store;
        this.parameters = parameters;
        this.http = http;
        this.chats = [];
    }
    getMessage(event) {
        this.chats.push({ message: event, name: this.user.name, id: this.user.id, time: new Date() });
        this.realtime.socket.emit('message', { message: event, user: this.user });
    }
    ngOnDestroy() {
        this.realtime.socket.emit('disconnected', { user: this.user });
    }
    ngOnInit() {
        this.roomId = this.parameters.snapshot.paramMap.get('room');
        this.name = this.parameters.snapshot.paramMap.get('name');
        if (!this.name && !this.roomId)
            return;
        this.user = { name: this.store.get('user').name, room: this.roomId, id: this.store.get('user').id };
        this.http.getMessages({ room: this.roomId }).subscribe((data) => {
            if (data.status == 200)
                this.chats = data.messages;
        });
    }
};
ChatRoomComponent.ctorParameters = () => [
    { type: _socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"] },
    { type: _localstorage_service__WEBPACK_IMPORTED_MODULE_2__["LocalstorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"] }
];
ChatRoomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat-room',
        template: __webpack_require__(/*! raw-loader!./chat-room.component.html */ "./node_modules/raw-loader/index.js!./src/app/chat-room/chat-room.component.html"),
        styles: [__webpack_require__(/*! ./chat-room.component.css */ "./src/app/chat-room/chat-room.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"], _localstorage_service__WEBPACK_IMPORTED_MODULE_2__["LocalstorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]])
], ChatRoomComponent);



/***/ }),

/***/ "./src/app/form/form.component.css":
/*!*****************************************!*\
  !*** ./src/app/form/form.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-row{\r\n    background: none;\r\n    color: rgba(255,255,255,1);\r\n}\r\n.form-column{\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n.form-card{\r\n    width: 300px;\r\n    margin: 5px;\r\n    padding: 5px;\r\n    border-top:1px solid rgba(255,255,255,0.5);\r\n    border-left:1px solid rgba(255,255,255,0.5);\r\n    border-right:none;\r\n    border-left:none;\r\n    border-radius: 5px; \r\n    background: rgba(255,255,255,0.2);\r\n\r\n    font-weight: bolder;\r\n    -webkit-backdrop-filter: blur(5px);\r\n            backdrop-filter: blur(5px);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybS9mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7SUFDWiwwQ0FBMEM7SUFDMUMsMkNBQTJDO0lBQzNDLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlDQUFpQzs7SUFFakMsbUJBQW1CO0lBQ25CLGtDQUEwQjtZQUExQiwwQkFBMEI7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC9mb3JtL2Zvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLXJvd3tcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwxKTtcclxufVxyXG4uZm9ybS1jb2x1bW57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmZvcm0tY2FyZHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyLXRvcDoxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjUpO1xyXG4gICAgYm9yZGVyLWxlZnQ6MXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcclxuICAgIGJvcmRlci1yaWdodDpub25lO1xyXG4gICAgYm9yZGVyLWxlZnQ6bm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDsgXHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMik7XHJcblxyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/form/form.component.ts":
/*!****************************************!*\
  !*** ./src/app/form/form.component.ts ***!
  \****************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");





let FormComponent = class FormComponent {
    constructor(fb, http, router) {
        this.fb = fb;
        this.http = http;
        this.router = router;
    }
    submitForm() {
        this.message = '';
        this.type = '';
        const { email, userName, password } = this.validateForm.controls;
        for (const i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
            this.validateForm.controls[i].updateValueAndValidity();
        }
        this.http.signup({ email: email.value, userName: userName.value, password: password.value })
            .subscribe((data) => {
            this.message = data.message;
            if (data.status == 200)
                return this.navigateTo();
            this.type = 'error';
            if (data.emailFlag)
                this.validateForm.controls['email'].setErrors({ 'incorrect': true });
            if (data.userNameFlag)
                this.validateForm.controls['userName'].setErrors({ 'incorrect': true });
            if (data.passwordFlag)
                this.validateForm.controls['password'].setErrors({ 'incorrect': true });
        });
    }
    navigateTo() {
        this.type = 'success';
        setTimeout(() => this.router.navigate(['/login']), 2000);
    }
    ngOnInit() {
        this.validateForm = this.fb.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            userName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    }
};
FormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
FormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form',
        template: __webpack_require__(/*! raw-loader!./form.component.html */ "./node_modules/raw-loader/index.js!./src/app/form/form.component.html"),
        styles: [__webpack_require__(/*! ./form.component.css */ "./src/app/form/form.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], FormComponent);



/***/ }),

/***/ "./src/app/hide-recent.pipe.ts":
/*!*************************************!*\
  !*** ./src/app/hide-recent.pipe.ts ***!
  \*************************************/
/*! exports provided: HideRecentPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HideRecentPipe", function() { return HideRecentPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HideRecentPipe = class HideRecentPipe {
    transform(value, input) {
        if (input)
            return [];
        return value;
    }
};
HideRecentPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'hideRecent'
    })
], HideRecentPipe);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-main{\r\n    width: 100%;\r\n    height: 90%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n}\r\n.home-main .welcome,.home-main .info{\r\n    position: relative;\r\n    background:rgba(255,255,255,0.2);\r\n    margin: 10px;\r\n    padding: 5px;\r\n    border-top: 2px solid rgba(255,255,255,0.5);\r\n    border-left: 2px solid rgba(255,255,255,0.5);\r\n    border-radius: 5px;\r\n    color: whitesmoke;\r\n    box-shadow: 20px 20px 20px rgba(0,0,0,0.3);\r\n    z-index: 1;\r\n    -webkit-backdrop-filter: blur(3px);\r\n            backdrop-filter: blur(3px);\r\n}\r\n.home-main .welcome{\r\n    -webkit-animation: welcome 2s ease-out;\r\n            animation: welcome 2s ease-out;\r\n}\r\n@-webkit-keyframes welcome {\r\n    0%{margin-top: 50px;font-size: 100px;}\r\n    100%{margin-top: 10px;font-size: 30px;}\r\n}\r\n@keyframes welcome {\r\n    0%{margin-top: 50px;font-size: 100px;}\r\n    100%{margin-top: 10px;font-size: 30px;}\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdDQUFnQztJQUNoQyxZQUFZO0lBQ1osWUFBWTtJQUNaLDJDQUEyQztJQUMzQyw0Q0FBNEM7SUFDNUMsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQiwwQ0FBMEM7SUFDMUMsVUFBVTtJQUNWLGtDQUEwQjtZQUExQiwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLHNDQUE4QjtZQUE5Qiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLEdBQUcsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUM7SUFDckMsS0FBSyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUM7QUFDMUM7QUFIQTtJQUNJLEdBQUcsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUM7SUFDckMsS0FBSyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUM7QUFDMUMiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lLW1haW57XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogOTAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuLmhvbWUtbWFpbiAud2VsY29tZSwuaG9tZS1tYWluIC5pbmZve1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZDpyZ2JhKDI1NSwyNTUsMjU1LDAuMik7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjUpO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIGJveC1zaGFkb3c6IDIwcHggMjBweCAyMHB4IHJnYmEoMCwwLDAsMC4zKTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcclxufVxyXG4uaG9tZS1tYWluIC53ZWxjb21le1xyXG4gICAgYW5pbWF0aW9uOiB3ZWxjb21lIDJzIGVhc2Utb3V0O1xyXG59XHJcbkBrZXlmcmFtZXMgd2VsY29tZSB7XHJcbiAgICAwJXttYXJnaW4tdG9wOiA1MHB4O2ZvbnQtc2l6ZTogMTAwcHg7fVxyXG4gICAgMTAwJXttYXJnaW4tdG9wOiAxMHB4O2ZvbnQtc2l6ZTogMzBweDt9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HomeComponent);



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let HttpService = class HttpService {
    constructor(http) {
        this.http = http;
    }
    signup(data) {
        return this.http.post('api/signup', data);
    }
    login(data) {
        return this.http.post('api/login', data);
    }
    getusers() {
        return this.http.get('api/allusers');
    }
    gotoRoom(data) {
        const { name, _id, userName } = data;
        return this.http.post('api/room', { name, _id, userName }, {
            headers: {
                authentication: data.token
            }
        });
    }
    getMessages(data) {
        return this.http.post('api/messages', data);
    }
    isLoggedIn(data) {
        return this.http.get('api/isloggedin', {
            headers: {
                authentication: data
            }
        });
    }
    recentChats(id) {
        return this.http.post('api/recentchats', id);
    }
};
HttpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], HttpService);



/***/ }),

/***/ "./src/app/input/input.component.css":
/*!*******************************************!*\
  !*** ./src/app/input/input.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-main{\r\n    background-color: rgba(255, 248, 220,0.5);\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    margin: 5px;\r\n    padding: 5px;\r\n    border: 1px solid silver;\r\n    border-radius: 8px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n.input-send,.input-text{\r\n    margin: 10px;\r\n    padding: 10px;\r\n    border: 1px solid silver;\r\n    border-radius: 6px;\r\n}\r\n.input-text{\r\n    width: 20vw;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5wdXQvaW5wdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlDQUF5QztJQUN6QywwQkFBa0I7SUFBbEIsdUJBQWtCO0lBQWxCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvaW5wdXQvaW5wdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dC1tYWlue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI0OCwgMjIwLDAuNSk7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHNpbHZlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmlucHV0LXNlbmQsLmlucHV0LXRleHR7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgc2lsdmVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG59XHJcbi5pbnB1dC10ZXh0e1xyXG4gICAgd2lkdGg6IDIwdnc7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/input/input.component.ts":
/*!******************************************!*\
  !*** ./src/app/input/input.component.ts ***!
  \******************************************/
/*! exports provided: InputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputComponent", function() { return InputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InputComponent = class InputComponent {
    constructor() {
        this.sendMessage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.message = '';
    }
    send() {
        if (!this.message)
            return;
        this.sendMessage.emit(this.message);
        this.message = '';
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], InputComponent.prototype, "sendMessage", void 0);
InputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-input',
        template: __webpack_require__(/*! raw-loader!./input.component.html */ "./node_modules/raw-loader/index.js!./src/app/input/input.component.html"),
        styles: [__webpack_require__(/*! ./input.component.css */ "./src/app/input/input.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], InputComponent);



/***/ }),

/***/ "./src/app/join/join.component.css":
/*!*****************************************!*\
  !*** ./src/app/join/join.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".join-main{\r\n    width: 300px;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n    background-color: rgba(255,255,255,0.1);\r\n    position: absolute;\r\n    top:50%;\r\n    left: 50%;\r\n    padding: 40px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    border-top:1px solid rgba(255,255,255,0.5);\r\n    border-left:1px solid rgba(255,255,255,0.5);\r\n    border-radius: 10px;\r\n    box-shadow: 20px 20px 50px rgba(0,0,0,0.5);\r\n    color: white;\r\n    -webkit-transform: translate(-50%,-50%);\r\n            transform: translate(-50%,-50%);\r\n    -webkit-backdrop-filter: blur(5px);\r\n            backdrop-filter: blur(5px);\r\n    overflow: hidden;\r\n}\r\n\r\n.join-main .join-here , .join-main .room,  .join-main .name{\r\n    margin: 5px;\r\n    padding: 10px;\r\n    border:1px solid silver;\r\n    border-radius: 8px; \r\n    text-decoration: none;\r\n    outline: none;\r\n}\r\n\r\n.join-main .join-btn{\r\n    margin: 5px;\r\n    padding: 5px 15px;  \r\n    border-top:1px solid rgba(255,255,255,0.5);\r\n    border-left:1px solid rgba(255,255,255,0.5);\r\n    border-right:none;\r\n    border-left:none;\r\n    border-radius: 5px; \r\n    background: rgba(255,255,255,0.2);\r\n    color: rgba(255,255,255,1);\r\n    font-weight: bolder;\r\n}\r\n\r\n.join-here{\r\n    font-weight: bold;\r\n    border: none !important;    \r\n}\r\n\r\n.join-main .join-btn:hover{\r\n    background-color: steelblue;\r\n    transition-duration: 0.5s;\r\n}\r\n\r\n.join-main .room:hover,  .join-main .name:hover{\r\n    border-radius: 20px;\r\n    transition-duration: 0.5s;\r\n    color: black;\r\n}\r\n\r\n.join-main .room{\r\n    -webkit-animation: room 1.5s ease-out;\r\n            animation: room 1.5s ease-out;\r\n}\r\n\r\n.join-main .name{\r\n    -webkit-animation: name 1.5s ease-out;\r\n            animation: name 1.5s ease-out;\r\n}\r\n\r\n.join-main .join-here,.join-main .join-btn{\r\n    -webkit-animation: joinHere 2s ease-out;\r\n            animation: joinHere 2s ease-out;\r\n}\r\n\r\n@-webkit-keyframes room {\r\n    0%{ margin-left:100% ;opacity: 0;}\r\n    100%{margin-left: 5px;opacity: 1;}\r\n}\r\n\r\n@keyframes room {\r\n    0%{ margin-left:100% ;opacity: 0;}\r\n    100%{margin-left: 5px;opacity: 1;}\r\n}\r\n\r\n@-webkit-keyframes name {\r\n    0%{ margin-right:100% ;opacity: 0;}\r\n    100%{margin-right: 5px;opacity: 1;}\r\n}\r\n\r\n@keyframes name {\r\n    0%{ margin-right:100% ;opacity: 0;}\r\n    100%{margin-right: 5px;opacity: 1;}\r\n}\r\n\r\n@-webkit-keyframes joinHere {\r\n    0%{font-size: 0px; }\r\n    100%{font-size: 20px; }\r\n}\r\n\r\n@keyframes joinHere {\r\n    0%{font-size: 0px; }\r\n    100%{font-size: 20px; }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvam9pbi9qb2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osMkJBQW1CO0lBQW5CLHdCQUFtQjtJQUFuQixtQkFBbUI7SUFDbkIsdUNBQXVDO0lBQ3ZDLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsU0FBUztJQUNULGFBQWE7SUFDYixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsMENBQTBDO0lBQzFDLDJDQUEyQztJQUMzQyxtQkFBbUI7SUFDbkIsMENBQTBDO0lBQzFDLFlBQVk7SUFDWix1Q0FBK0I7WUFBL0IsK0JBQStCO0lBQy9CLGtDQUEwQjtZQUExQiwwQkFBMEI7SUFDMUIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixhQUFhO0FBQ2pCOztBQUNBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQiwwQ0FBMEM7SUFDMUMsMkNBQTJDO0lBQzNDLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlDQUFpQztJQUNqQywwQkFBMEI7SUFDMUIsbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLHVCQUF1QjtBQUMzQjs7QUFDQTtJQUNJLDJCQUEyQjtJQUMzQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxxQ0FBNkI7WUFBN0IsNkJBQTZCO0FBQ2pDOztBQUNBO0lBQ0kscUNBQTZCO1lBQTdCLDZCQUE2QjtBQUNqQzs7QUFDQTtJQUNJLHVDQUErQjtZQUEvQiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxJQUFJLGlCQUFpQixDQUFDLFVBQVUsQ0FBQztJQUNqQyxLQUFLLGdCQUFnQixDQUFDLFVBQVUsQ0FBQztBQUNyQzs7QUFIQTtJQUNJLElBQUksaUJBQWlCLENBQUMsVUFBVSxDQUFDO0lBQ2pDLEtBQUssZ0JBQWdCLENBQUMsVUFBVSxDQUFDO0FBQ3JDOztBQUVBO0lBQ0ksSUFBSSxrQkFBa0IsQ0FBQyxVQUFVLENBQUM7SUFDbEMsS0FBSyxpQkFBaUIsQ0FBQyxVQUFVLENBQUM7QUFDdEM7O0FBSEE7SUFDSSxJQUFJLGtCQUFrQixDQUFDLFVBQVUsQ0FBQztJQUNsQyxLQUFLLGlCQUFpQixDQUFDLFVBQVUsQ0FBQztBQUN0Qzs7QUFDQTtJQUNJLEdBQUcsY0FBYyxFQUFFO0lBQ25CLEtBQUssZUFBZSxFQUFFO0FBQzFCOztBQUhBO0lBQ0ksR0FBRyxjQUFjLEVBQUU7SUFDbkIsS0FBSyxlQUFlLEVBQUU7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9qb2luL2pvaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5qb2luLW1haW57XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjEpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOjUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHBhZGRpbmc6IDQwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJvcmRlci10b3A6MXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcclxuICAgIGJvcmRlci1sZWZ0OjFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMjBweCAyMHB4IDUwcHggcmdiYSgwLDAsMCwwLjUpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmpvaW4tbWFpbiAuam9pbi1oZXJlICwgLmpvaW4tbWFpbiAucm9vbSwgIC5qb2luLW1haW4gLm5hbWV7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkIHNpbHZlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDsgXHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi5qb2luLW1haW4gLmpvaW4tYnRue1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHggMTVweDsgIFxyXG4gICAgYm9yZGVyLXRvcDoxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjUpO1xyXG4gICAgYm9yZGVyLWxlZnQ6MXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcclxuICAgIGJvcmRlci1yaWdodDpub25lO1xyXG4gICAgYm9yZGVyLWxlZnQ6bm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDsgXHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMik7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwxKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuLmpvaW4taGVyZXtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7ICAgIFxyXG59XHJcbi5qb2luLW1haW4gLmpvaW4tYnRuOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc3RlZWxibHVlO1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcclxufVxyXG5cclxuLmpvaW4tbWFpbiAucm9vbTpob3ZlciwgIC5qb2luLW1haW4gLm5hbWU6aG92ZXJ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG4uam9pbi1tYWluIC5yb29te1xyXG4gICAgYW5pbWF0aW9uOiByb29tIDEuNXMgZWFzZS1vdXQ7XHJcbn1cclxuLmpvaW4tbWFpbiAubmFtZXtcclxuICAgIGFuaW1hdGlvbjogbmFtZSAxLjVzIGVhc2Utb3V0O1xyXG59XHJcbi5qb2luLW1haW4gLmpvaW4taGVyZSwuam9pbi1tYWluIC5qb2luLWJ0bntcclxuICAgIGFuaW1hdGlvbjogam9pbkhlcmUgMnMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcm9vbSB7XHJcbiAgICAwJXsgbWFyZ2luLWxlZnQ6MTAwJSA7b3BhY2l0eTogMDt9XHJcbiAgICAxMDAle21hcmdpbi1sZWZ0OiA1cHg7b3BhY2l0eTogMTt9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbmFtZSB7XHJcbiAgICAwJXsgbWFyZ2luLXJpZ2h0OjEwMCUgO29wYWNpdHk6IDA7fVxyXG4gICAgMTAwJXttYXJnaW4tcmlnaHQ6IDVweDtvcGFjaXR5OiAxO31cclxufVxyXG5Aa2V5ZnJhbWVzIGpvaW5IZXJlIHtcclxuICAgIDAle2ZvbnQtc2l6ZTogMHB4OyB9XHJcbiAgICAxMDAle2ZvbnQtc2l6ZTogMjBweDsgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/join/join.component.ts":
/*!****************************************!*\
  !*** ./src/app/join/join.component.ts ***!
  \****************************************/
/*! exports provided: JoinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinComponent", function() { return JoinComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _localstorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../socket.service */ "./src/app/socket.service.ts");





let JoinComponent = class JoinComponent {
    constructor(router, realtime, store) {
        this.router = router;
        this.realtime = realtime;
        this.store = store;
        this.user = {
            room: '',
            name: ''
        };
    }
    joinHandler() {
        if (!this.user.room || !this.user.name)
            return;
        this.router.navigate(['chat']);
        this.store.set('user', this.user);
    }
    ngOnInit() {
    }
};
JoinComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"] },
    { type: _localstorage_service__WEBPACK_IMPORTED_MODULE_3__["LocalstorageService"] }
];
JoinComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-join',
        template: __webpack_require__(/*! raw-loader!./join.component.html */ "./node_modules/raw-loader/index.js!./src/app/join/join.component.html"),
        styles: [__webpack_require__(/*! ./join.component.css */ "./src/app/join/join.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"], _localstorage_service__WEBPACK_IMPORTED_MODULE_3__["LocalstorageService"]])
], JoinComponent);



/***/ }),

/***/ "./src/app/localstorage.service.ts":
/*!*****************************************!*\
  !*** ./src/app/localstorage.service.ts ***!
  \*****************************************/
/*! exports provided: LocalstorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalstorageService", function() { return LocalstorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LocalstorageService = class LocalstorageService {
    constructor() { }
    get(item) {
        return JSON.parse(localStorage.getItem(item));
    }
    set(item, value) {
        localStorage.setItem(item, JSON.stringify(value));
    }
    remove(item) {
        localStorage.removeItem(item);
    }
};
LocalstorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], LocalstorageService);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-row{\r\n    background: none;\r\n    color: rgba(255,255,255,1);\r\n}\r\n.form-column{\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n.form-card{\r\n    width: 300px;\r\n    margin: 5px;\r\n    padding: 5px;\r\n    border-top:1px solid rgba(255,255,255,0.5);\r\n    border-left:1px solid rgba(255,255,255,0.5);\r\n    border-right:none;\r\n    border-left:none;\r\n    border-radius: 5px; \r\n    background: rgba(255,255,255,0.2);\r\n\r\n    font-weight: bolder;\r\n    -webkit-backdrop-filter: blur(5px);\r\n            backdrop-filter: blur(5px);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQiwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLDBDQUEwQztJQUMxQywyQ0FBMkM7SUFDM0MsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUNBQWlDOztJQUVqQyxtQkFBbUI7SUFDbkIsa0NBQTBCO1lBQTFCLDBCQUEwQjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1yb3d7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMSk7XHJcbn1cclxuLmZvcm0tY29sdW1ue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5mb3JtLWNhcmR7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlci10b3A6MXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcclxuICAgIGJvcmRlci1sZWZ0OjFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuNSk7XHJcbiAgICBib3JkZXItcmlnaHQ6bm9uZTtcclxuICAgIGJvcmRlci1sZWZ0Om5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7IFxyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjIpO1xyXG5cclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcclxufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _localstorage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../localstorage.service */ "./src/app/localstorage.service.ts");







let LoginComponent = class LoginComponent {
    constructor(fb, http, router, store, auth) {
        this.fb = fb;
        this.http = http;
        this.router = router;
        this.store = store;
        this.auth = auth;
    }
    submitForm() {
        this.message = '';
        this.type = '';
        const { email, password } = this.validateForm.controls;
        for (const i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
            this.validateForm.controls[i].updateValueAndValidity();
        }
        this.http.login({ email: email.value, password: password.value })
            .subscribe((data) => {
            this.message = data.message;
            if (data.status == 200) {
                this.auth.login({ name: data.name, token: data.token, id: data.id });
                this.router.navigate(['users']);
                return;
            }
            ;
            this.type = 'error';
            if (data.emailFlag)
                this.validateForm.controls['email'].setErrors({ 'incorrect': true });
            if (data.passwordFlag)
                this.validateForm.controls['password'].setErrors({ 'incorrect': true });
        });
    }
    ngOnInit() {
        this.validateForm = this.fb.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _localstorage_service__WEBPACK_IMPORTED_MODULE_6__["LocalstorageService"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _localstorage_service__WEBPACK_IMPORTED_MODULE_6__["LocalstorageService"], _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/messages/messages.component.css":
/*!*************************************************!*\
  !*** ./src/app/messages/messages.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".message-main{\r\n    background: rgba(255, 255, 255,0.4);\r\n    width: 45vw;\r\n    height: 60vh;\r\n    margin: 5px;\r\n    padding: 5px;\r\n    border: 1px solid silver;\r\n    border-radius: 5px;\r\n    overflow-y: scroll;\r\n}\r\n.my-text,.other-text{\r\n    display: flex;\r\n    margin: 0px;\r\n    padding: 0px;\r\n}\r\n.my-text{\r\n    justify-content: flex-start;\r\n}\r\n.other-text{\r\n    justify-content: flex-end;\r\n}\r\n.my-text .message,.other-text .message{\r\n    margin: 5px;\r\n    padding: 5px;\r\n    border-top: 2px solid rgb(255, 255, 255,0.5);\r\n    border-left: 2px solid rgb(255, 255, 255,0.5);\r\n    border-radius: 5px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    box-shadow: 15px 15px 15px rgb(0, 0, 0,0.4);\r\n}\r\n.other-text .message{\r\n    background-color: skyblue;\r\n}\r\n.my-text .message{\r\n    background-color: rgb(57, 170, 214);\r\n}\r\n.message-main::-webkit-scrollbar {\r\n    display: none;\r\n}\r\n.my-text .type , .other-text .type {\r\n font-size: 10px;\r\n}\r\n.message-time{\r\n    margin: 0 5px;\r\n    font-size: 8px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1DQUFtQztJQUNuQyxXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osNENBQTRDO0lBQzVDLDZDQUE2QztJQUM3QyxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QiwyQ0FBMkM7QUFDL0M7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksbUNBQW1DO0FBQ3ZDO0FBRUE7SUFDSSxhQUFhO0FBQ2pCO0FBRUE7Q0FDQyxlQUFlO0FBQ2hCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVzc2FnZS1tYWlue1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LDAuNCk7XHJcbiAgICB3aWR0aDogNDV2dztcclxuICAgIGhlaWdodDogNjB2aDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgc2lsdmVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcbi5teS10ZXh0LC5vdGhlci10ZXh0e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcbi5teS10ZXh0e1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG59XHJcbi5vdGhlci10ZXh0e1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG4ubXktdGV4dCAubWVzc2FnZSwub3RoZXItdGV4dCAubWVzc2FnZXtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1LDAuNSk7XHJcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1LDAuNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJveC1zaGFkb3c6IDE1cHggMTVweCAxNXB4IHJnYigwLCAwLCAwLDAuNCk7XHJcbn1cclxuLm90aGVyLXRleHQgLm1lc3NhZ2V7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBza3libHVlO1xyXG59XHJcbi5teS10ZXh0IC5tZXNzYWdle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU3LCAxNzAsIDIxNCk7XHJcbn1cclxuXHJcbi5tZXNzYWdlLW1haW46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5teS10ZXh0IC50eXBlICwgLm90aGVyLXRleHQgLnR5cGUge1xyXG4gZm9udC1zaXplOiAxMHB4O1xyXG59XHJcbi5tZXNzYWdlLXRpbWV7XHJcbiAgICBtYXJnaW46IDAgNXB4O1xyXG4gICAgZm9udC1zaXplOiA4cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _localstorage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../socket.service */ "./src/app/socket.service.ts");




let MessagesComponent = class MessagesComponent {
    constructor(realtime, store) {
        this.realtime = realtime;
        this.store = store;
        this.messages = [];
    }
    ngOnInit() {
        if (!this.user)
            return;
        this.realtime.socket.emit('newjoinee', this.user);
        this.realtime.socket.on(this.user.room, data => {
            this.messages.push(Object.assign({}, data));
        });
    }
};
MessagesComponent.ctorParameters = () => [
    { type: _socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"] },
    { type: _localstorage_service__WEBPACK_IMPORTED_MODULE_2__["LocalstorageService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], MessagesComponent.prototype, "user", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], MessagesComponent.prototype, "messages", void 0);
MessagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-messages',
        template: __webpack_require__(/*! raw-loader!./messages.component.html */ "./node_modules/raw-loader/index.js!./src/app/messages/messages.component.html"),
        styles: [__webpack_require__(/*! ./messages.component.css */ "./src/app/messages/messages.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"], _localstorage_service__WEBPACK_IMPORTED_MODULE_2__["LocalstorageService"]])
], MessagesComponent);



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-main{\r\n    position: relative;\r\n    background:rgba(255, 255, 255, 0.2);\r\n    padding: 5px;\r\n    border-top:2px solid rgba(255, 255, 255, 0.6);\r\n    border-left:2px solid rgba(255, 255, 255, 0.6);\r\n    border-radius: 5px;\r\n    color: white;\r\n    z-index: 1;\r\n    -webkit-backdrop-filter: blur(2px);\r\n            backdrop-filter: blur(2px);\r\n    /* box-shadow: 10px 10px 40px rgba(0,0,0,0.1); */\r\n}\r\n.navbar-main .head{\r\n    margin: 5px;\r\n}\r\n.navbar-main .home,.navbar-main .join , .navbar-main .exit{\r\n    margin: 5px;\r\n    padding: 5px;\r\n}\r\n.navbar-main .exit{\r\n    float: right;\r\n    cursor: pointer;\r\n}\r\n.navbar-main a{\r\n    color: inherit;\r\n    text-decoration:none; \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1DQUFtQztJQUNuQyxZQUFZO0lBQ1osNkNBQTZDO0lBQzdDLDhDQUE4QztJQUM5QyxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFVBQVU7SUFDVixrQ0FBMEI7WUFBMUIsMEJBQTBCO0lBQzFCLGdEQUFnRDtBQUNwRDtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGNBQWM7SUFDZCxvQkFBb0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyLW1haW57XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kOnJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlci10b3A6MnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcclxuICAgIGJvcmRlci1sZWZ0OjJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7XHJcbiAgICAvKiBib3gtc2hhZG93OiAxMHB4IDEwcHggNDBweCByZ2JhKDAsMCwwLDAuMSk7ICovXHJcbn1cclxuLm5hdmJhci1tYWluIC5oZWFke1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbn1cclxuLm5hdmJhci1tYWluIC5ob21lLC5uYXZiYXItbWFpbiAuam9pbiAsIC5uYXZiYXItbWFpbiAuZXhpdHtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcbi5uYXZiYXItbWFpbiAuZXhpdHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ubmF2YmFyLW1haW4gYXtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7IFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");




let NavbarComponent = class NavbarComponent {
    constructor(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    exit() {
        this.auth.logout();
        this.router.navigate(['']);
    }
    ngOnInit() {
        this.isLoggedIn$ = this.auth.isLoggedin();
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
], NavbarComponent);



/***/ }),

/***/ "./src/app/scroll.directive.ts":
/*!*************************************!*\
  !*** ./src/app/scroll.directive.ts ***!
  \*************************************/
/*! exports provided: ScrollDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollDirective", function() { return ScrollDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ScrollDirective = class ScrollDirective {
    constructor(elem) {
        this.elem = elem;
    }
    ngDoCheck() {
        if (!this.elem.nativeElement)
            return;
        this.elem.nativeElement.scrollTop = this.elem.nativeElement.scrollHeight;
    }
};
ScrollDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
ScrollDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appScroll]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], ScrollDirective);



/***/ }),

/***/ "./src/app/search.pipe.ts":
/*!********************************!*\
  !*** ./src/app/search.pipe.ts ***!
  \********************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SearchPipe = class SearchPipe {
    transform(value, search) {
        if (!value)
            return [];
        if (!search)
            return value;
        return value.filter(data => data.userName.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
    }
};
SearchPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'search'
    })
], SearchPipe);



/***/ }),

/***/ "./src/app/socket.service.ts":
/*!***********************************!*\
  !*** ./src/app/socket.service.ts ***!
  \***********************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm2015/ngx-socket-io.js");



let SocketService = class SocketService {
    constructor(socket) {
        this.socket = socket;
    }
};
SocketService.ctorParameters = () => [
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__["Socket"] }
];
SocketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__["Socket"]])
], SocketService);



/***/ }),

/***/ "./src/app/zorro/zorro.module.ts":
/*!***************************************!*\
  !*** ./src/app/zorro/zorro.module.ts ***!
  \***************************************/
/*! exports provided: ZoroModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoroModule", function() { return ZoroModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/grid */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-grid.js");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/card */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-card.js");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/input */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-input.js");
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/alert */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-alert.js");
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/list */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-list.js");
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/avatar */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-avatar.js");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-icon.js");
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/spin */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-spin.js");











let ZoroModule = class ZoroModule {
};
ZoroModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [
            ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzGridModule"],
            ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_4__["NzCardModule"],
            ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_5__["NzInputModule"],
            ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_6__["NzAlertModule"],
            ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_7__["NzListModule"],
            ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_8__["NzAvatarModule"],
            ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__["NzIconModule"],
            ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_10__["NzSpinModule"]
        ]
    })
], ZoroModule);



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
const environment = {
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\dellpc\Desktop\Angular8\chat\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map