webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_service__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentRegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StudentRegisterComponent = (function () {
    function StudentRegisterComponent(builder, auth, router) {
        this.builder = builder;
        this.auth = auth;
        this.router = router;
        this.spinner = false;
        this.redirectUrl = 'student';
        this.deparment = [
            { value: 'ECE' }, { value: 'CSE' }, { value: 'MECH' }, { value: 'IT' }, { value: 'EEE' }, { value: 'CE' }
        ];
    }
    StudentRegisterComponent.prototype.ngOnInit = function () {
        this.studentForm = this.builder.group({
            studentName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required],
            studentId: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].pattern('[0-9]+'), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].maxLength(4)])],
            studentDeparment: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required],
            studentYear: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].maxLength(4), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].pattern('[0-9]+')])],
            studentPassword: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(6)])],
            studentcPassword: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required /* [this.user.bind(this.studentValue)]*/]
        });
        this.studentForm.valueChanges.map(function (x) { console.log(x); });
    };
    /*password(control): Observable<{[s:string]:boolean}>{
      console.log(control);
      this.pass = control.value;
     
         return Observable.from([{match:false}]);
      
    }
  
    user(control: FormControl): Observable<{[s:string]:boolean}>{
     this.cpass = control.value;
     console.log(this.pass);
     console.log(this.cpass);
     if(this.cpass === this.pass){
     return Observable.from([{error:false}]);
      }
      else{
         return Observable.from([{error:true}]);
      }
  }*/
    StudentRegisterComponent.prototype.studentValue = function (value, valid) {
        var _this = this;
        if (valid && value.studentPassword === value.studentcPassword) {
            this.spinner = true;
            //this.http.post('http://localhost:3000/api/admin-login', data,  {headers : header}).map((x) => x.json()).subscribe(data => {localStorage.setItem('token',data); this.redirect();});;
            this.auth.studentRegister(value)
                .subscribe(function (data) {
                _this.spinner = false;
                if (data.success) {
                    _this.router.navigate([_this.redirectUrl]);
                }
                else {
                    _this.error = data.message;
                }
            }, function (error) {
            });
        }
    };
    StudentRegisterComponent.prototype.ngOnChanges = function () {
        console.log("changed");
    };
    StudentRegisterComponent.prototype.ngAfterViewInit = function () {
        console.log('view Init');
    };
    StudentRegisterComponent.prototype.ngAfterContentInit = function () {
        console.log('contentInit');
    };
    return StudentRegisterComponent;
}());
StudentRegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Component */])({
        selector: 'app-student-register',
        template: __webpack_require__(237),
        styles: [__webpack_require__(226)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__service_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], StudentRegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=student-register.component.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_service__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StudentViewComponent = (function () {
    function StudentViewComponent(router, auth, activate) {
        this.router = router;
        this.auth = auth;
        this.activate = activate;
        this.user = true;
        this.userDetail = {};
    }
    StudentViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activate.queryParams.subscribe(function (params) { _this.token = params['token']; console.log(params['token']); });
        console.log(this.token);
        if (localStorage.getItem('currentuser')) {
            var user = JSON.parse(localStorage.getItem('currentuser'));
            if (user.user.success) {
                this.auth.getStudentDetail(user.user.token)
                    .subscribe(function (data) {
                    if (data.success) {
                        _this.userDetail = data.message;
                    }
                    else {
                        _this.error = data.message;
                    }
                }, function (error) {
                });
            }
        }
        else if (this.token) {
            this.auth.getStudentDetail(this.token)
                .subscribe(function (data) {
                if (data.success) {
                    _this.userDetail = data.message;
                }
                else {
                    _this.error = data.message;
                }
            }, function (error) {
            });
        }
        else {
            this.router.navigate(['']);
        }
    };
    return StudentViewComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Input */])(),
    __metadata("design:type", Object)
], StudentViewComponent.prototype, "user", void 0);
StudentViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Component */])({
        selector: 'app-student-view',
        template: __webpack_require__(238),
        styles: [__webpack_require__(227)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], StudentViewComponent);

var _a, _b, _c;
//# sourceMappingURL=student-view.component.js.map

/***/ }),

/***/ 130:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 130;


/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(163);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDL; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by thangavel on 17/4/17.
 */

var MDL = (function () {
    function MDL() {
    }
    MDL.prototype.ngAfterContentChecked = function () {
        if (componentHandler) {
            componentHandler.upgradeAllRegistered();
        }
    };
    return MDL;
}());
MDL = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Directive */])({
        selector: '[mdl]'
    })
], MDL);

//# sourceMappingURL=MaterialDesignLiteUpgradeElement.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_dialog_service__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_service__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent(sanitizer, router, dialogsService, auth) {
        var _this = this;
        this.router = router;
        this.dialogsService = dialogsService;
        this.auth = auth;
        this.user = false;
        this.hov = false;
        this.router.events.subscribe(function () {
            if (localStorage.getItem('currentuser') || localStorage.getItem('userdetail')) {
                _this.user = true;
            }
            else {
                _this.user = false;
            }
        });
    }
    AppComponent.prototype.logout = function () {
        var _this = this;
        this.dialogsService
            .confirm('Confirm Dialog', 'Are you sure you want Logout?')
            .subscribe(function (res) {
            if (res) {
                _this.auth.logout();
                _this.router.navigate(['']);
                _this.hov = false;
                _this.test();
            }
        });
    };
    AppComponent.prototype.ngOnInit = function () {
        if (this.isOver())
            this.start.close();
    };
    AppComponent.prototype.onchange = function () {
        if (localStorage.getItem('currentuser')) {
            this.user = true;
        }
        else {
            this.user = false;
        }
    };
    AppComponent.prototype.isOver = function () {
        // return window.matchMedia(`(max-width: 960px)`).matches;
        return false;
    };
    AppComponent.prototype.test = function () {
        return this.hov;
    };
    AppComponent.prototype.close = function () {
        if (this.isOver())
            this.start.close();
    };
    AppComponent.prototype.onSignIn = function (googleUser) {
        var profile = googleUser.getBasicProfile();
        console.log(profile);
    };
    return AppComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* ViewChild */])('start'),
    __metadata("design:type", Object)
], AppComponent.prototype, "start", void 0);
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(232),
        styles: [__webpack_require__(221)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["e" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["e" /* DomSanitizer */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__service_dialog_service__["a" /* DialogsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_dialog_service__["a" /* DialogsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__service_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_service__["a" /* AuthService */]) === "function" && _d || Object])
], AppComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__router__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__student_login_student_login_component__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__admin_login_admin_login_component__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__admin_view_admin_view_component__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__student_view_student_view_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__index_index_component__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_animations__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__MaterialDesignLiteUpgradeElement__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_flex_layout__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__service_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__student_register_student_register_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__header_header_component__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__carousel_carousel_component__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__service_dialog_service__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__confirm__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__jsonPipe__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__student_register_directive__ = __webpack_require__(162);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__student_login_student_login_component__["a" /* StudentLoginComponent */],
            __WEBPACK_IMPORTED_MODULE_9__admin_login_admin_login_component__["a" /* AdminLoginComponent */],
            __WEBPACK_IMPORTED_MODULE_10__admin_view_admin_view_component__["a" /* AdminViewComponent */],
            __WEBPACK_IMPORTED_MODULE_11__student_view_student_view_component__["a" /* StudentViewComponent */],
            __WEBPACK_IMPORTED_MODULE_12__index_index_component__["a" /* IndexComponent */],
            __WEBPACK_IMPORTED_MODULE_10__admin_view_admin_view_component__["b" /* DialogComponent */],
            __WEBPACK_IMPORTED_MODULE_15__MaterialDesignLiteUpgradeElement__["a" /* MDL */],
            __WEBPACK_IMPORTED_MODULE_18__student_register_student_register_component__["a" /* StudentRegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_19__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_20__carousel_carousel_component__["a" /* CarouselComponent */],
            __WEBPACK_IMPORTED_MODULE_24__student_register_directive__["a" /* Dir */],
            __WEBPACK_IMPORTED_MODULE_22__confirm__["a" /* ConfirmDialog */],
            __WEBPACK_IMPORTED_MODULE_23__jsonPipe__["a" /* JsonPipe */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_10__admin_view_admin_view_component__["b" /* DialogComponent */], __WEBPACK_IMPORTED_MODULE_22__confirm__["a" /* ConfirmDialog */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__router__["a" /* router */]),
            __WEBPACK_IMPORTED_MODULE_16__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_17__service_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_21__service_dialog_service__["a" /* DialogsService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CarouselComponent = (function () {
    function CarouselComponent() {
    }
    CarouselComponent.prototype.ngOnInit = function () {
    };
    return CarouselComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Input */])(),
    __metadata("design:type", Number)
], CarouselComponent.prototype, "test", void 0);
CarouselComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Component */])({
        selector: 'app-carousel',
        template: __webpack_require__(233),
        styles: [__webpack_require__(222)]
    }),
    __metadata("design:paramtypes", [])
], CarouselComponent);

//# sourceMappingURL=carousel.component.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(router) {
        this.router = router;
        this.user = false;
        this.result = 0;
        this.toggleSidenav = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
    }
    HeaderComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('currentuser')) {
            this.user = true;
        }
        else {
            this.user = false;
        }
    };
    return HeaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Input */])(),
    __metadata("design:type", Number)
], HeaderComponent.prototype, "result", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Output */])(),
    __metadata("design:type", Object)
], HeaderComponent.prototype, "toggleSidenav", void 0);
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__(234),
        styles: [__webpack_require__(223)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], HeaderComponent);

var _a;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IndexComponent = (function () {
    function IndexComponent() {
    }
    IndexComponent.prototype.ngOnInit = function () {
    };
    return IndexComponent;
}());
IndexComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Component */])({
        selector: 'app-index',
        template: __webpack_require__(235),
        styles: [__webpack_require__(224)]
    }),
    __metadata("design:paramtypes", [])
], IndexComponent);

//# sourceMappingURL=index.component.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JsonPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var JsonPipe = (function () {
    function JsonPipe() {
    }
    JsonPipe.prototype.transform = function (value, args) {
        var keys = [];
        for (var key in value) {
            keys.push({ key: key, value: value[key] });
        }
        return keys;
    };
    return JsonPipe;
}());
JsonPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* Pipe */])({ name: 'keys' })
], JsonPipe);

//# sourceMappingURL=jsonPipe.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__student_login_student_login_component__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__admin_login_admin_login_component__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_view_admin_view_component__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__student_view_student_view_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__student_register_student_register_component__ = __webpack_require__(100);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return router; });
/**
 * Created by thangavel on 17/4/17.
 */





var router = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__student_login_student_login_component__["a" /* StudentLoginComponent */] },
    { path: 'studentlogin', component: __WEBPACK_IMPORTED_MODULE_0__student_login_student_login_component__["a" /* StudentLoginComponent */] },
    { path: 'adminlogin', component: __WEBPACK_IMPORTED_MODULE_1__admin_login_admin_login_component__["a" /* AdminLoginComponent */] },
    { path: 'student', component: __WEBPACK_IMPORTED_MODULE_3__student_view_student_view_component__["a" /* StudentViewComponent */] },
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_2__admin_view_admin_view_component__["a" /* AdminViewComponent */] },
    { path: 'studentregister', component: __WEBPACK_IMPORTED_MODULE_4__student_register_student_register_component__["a" /* StudentRegisterComponent */] }
];
//# sourceMappingURL=router.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dir; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Dir = (function () {
    function Dir(el) {
        this.el = el;
        this.inc = 0;
        this.user = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
        this.c_color = "blue";
        this.el = el;
    }
    Dir.prototype.onclick = function (event) {
        var confirmed = window.confirm('Are you sure');
        if (confirmed) {
            location.href = 'https://google.com';
        }
    };
    ;
    Dir.prototype.test = function (event) {
        return window.confirm('Are you sure');
    };
    Dir.prototype.sort = function (value) {
    };
    Object.defineProperty(Dir.prototype, "colour", {
        set: function (color) {
            console.log(color);
            this.el.nativeElement.style.color = color;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dir.prototype, "bgColor", {
        set: function (color) {
            this.el.nativeElement.style.backgroundColor = color;
        },
        enumerable: true,
        configurable: true
    });
    return Dir;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Input */])(),
    __metadata("design:type", Number)
], Dir.prototype, "inc", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Output */])(),
    __metadata("design:type", Object)
], Dir.prototype, "user", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* HostListener */])('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Dir.prototype, "onclick", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* HostBinding */])('style.backgroundColour'),
    __metadata("design:type", Object)
], Dir.prototype, "c_color", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Input */])('sort'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Dir.prototype, "sort", null);
Dir = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Directive */])({
        selector: "[sapp]",
        inputs: ['colour:sapp', 'bgColor'],
        host: {
            '(click)': 'test($event)'
        },
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _a || Object])
], Dir);

var _a;
//# sourceMappingURL=directive.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by thangavel on 18/4/17.
 */



var AuthService = (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.redirectUrl = 'studentlogin';
    }
    AuthService.prototype.adminLogin = function (name, password) {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        header.append('Content-Type', 'application/x-www-form-urlencoded');
        var data = 'adminId=' + name + '&adminPassword=' + password;
        var url = window.location.origin;
        return this.http.post(url + '/api/admin-login', data, { headers: header })
            .map(function (res) {
            var user = res.json();
            if (user.success && user.token) {
                localStorage.setItem('currentuser', JSON.stringify({ user: user }));
            }
            return res.json();
        });
    };
    AuthService.prototype.studentLogin = function (name, password) {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        header.append('Authorization', btoa("{'user':{'name:'password'}"));
        header.append('Content-Type', 'application/x-www-form-urlencoded');
        var data = 'studentId=' + name + '&studentPassword=' + password;
        var url = window.location.origin;
        return this.http.post(url + '/api/student-login', data, { headers: header })
            .map(function (res) {
            var user = res.json();
            if (user.success && user.token) {
                localStorage.setItem('currentuser', JSON.stringify({ user: user }));
            }
            return res.json();
        });
    };
    AuthService.prototype.studentRegister = function (value) {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        var data = 'studentName=' + value.studentName + '&studentId=' + value.studentId + '&studentYear=' + value.studentYear + '&studentDeparment=' + value.studentDeparment + '&studentPassword=' + value.studentPassword;
        var url = window.location.origin;
        header.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post(url + '/api/student-register', data, { headers: header })
            .map(function (res) {
            var user = res.json();
            console.log(user);
            if (user.success && user.token) {
                localStorage.setItem('currentuser', JSON.stringify({ user: user }));
            }
            return res.json();
        });
    };
    AuthService.prototype.getStudentDetail = function (token) {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        var url = window.location.origin;
        var data = 'token=' + token;
        header.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post(url + '/api/student-detail', data, { headers: header })
            .map(function (res) {
            var user = res.json();
            console.log(user);
            if (user.success) {
                localStorage.setItem('userdetail', JSON.stringify({ user: user }));
                return res.json();
            }
            else {
                _this.router.navigate(['']);
            }
        });
    };
    AuthService.prototype.logout = function () {
        localStorage.clear();
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=service.js.map

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".sidenav-content{\n    height:1000px;\n}\n.menu{\n    cursor: pointer;\n}\ntable {\n    font-family: arial, sans-serif;\n    border-collapse: collapse;\n    width: 100%;\n}\n\ntd, th {\n    border: 1px solid #dddddd;\n    text-align: left;\n    padding: 8px;\n}\n\ntr:nth-child(even) {\n    background-color: #dddddd;\n}\n.button{\n       padding: 9px 11px 9px 12px;\n    border-radius: 3px;\n    color: white;\n    background-color: #303f9f;\n    border-color: #303f9f;\n    cursor:pointer;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".docs-component-viewer-sidenav{\n  box-shadow: 3px 0 6px rgba(0,0,0,0.24);\n    padding-bottom: 64px;\n    width: 240px;\n    min-width: 5%;\n    bottom: 0;\n    overflow: auto;\n    height: 100%;\n}\n.sidenav-content{\n  height: 1000px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "\n.mtop100{\n  margin-top:100px;\n}\n                                                                    \n                                                               \n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".full{\n    margin-top: 10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 230:
/***/ (function(module, exports) {

module.exports = "\n<div mdl class=\"center-position\" fxLayout fxLayoutAlign=\"center\">\n    <md-card fxFlex.xs=\"70%\" fxFlex.md=\"70%\" fxFlex.sm=\"70%\" fxFlex.lg=\"20%\" fxFlex.xl=\"15%\">\n   <md-card-title>ADMIN LOGIN</md-card-title>\n   <md-card-content>\n     <div sapp=\"red\">{{error}}</div>\n      <form [formGroup]=\"adminForm\" #f=\"ngForm\" (ngSubmit)=\"adminValue(adminForm.value,adminForm.valid)\">\n          <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\" [ngClass]=\"{'is-invalid' : (adminForm.controls.adminId.touched && adminForm.controls.adminId.errors) || (f.submitted && adminForm.controls.adminId.errors)}\">\n            <input class=\"mdl-textfield__input\" type=\"text\" id=\"number\" pattern=\"-?[0-9]*(\\.[0-9]+)?\" formControlName=\"adminId\" >\n            <label class=\"mdl-textfield__label\" for=\"number\">Admin ID</label>\n            <span class=\"mdl-textfield__error\" *ngIf =\"(adminForm.controls.adminId.touched && adminForm.controls.adminId.errors?.required) || (f.submitted && adminForm.controls.adminId.errors?.required)\">ID should not be Empty!!!</span>\n             <span class=\"mdl-textfield__error\" *ngIf =\"(adminForm.controls.adminId.touched && adminForm.controls.adminId.errors?.pattern) || (f.submitted && adminForm.controls.adminId.errors?.pattern)\">ID should be number!!!</span>\n          </div>\n          <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\" [ngClass]=\"{'is-invalid' : (adminForm.controls.adminPassword.touched && adminForm.controls.adminPassword.errors) || (f.submitted && adminForm.controls.adminPassword.errors)}\">\n            <input class=\"mdl-textfield__input\" type=\"password\" id=\"password\" formControlName=\"adminPassword\">\n            <label class=\"mdl-textfield__label\" for=\"password\">password</label>\n            <span class=\"mdl-textfield__error\">Password should not be Empty</span>\n          </div>\n\n          <button class=\"mdl-button mdl-js-button mdl-button--raised mdl-button--colored\">\n            Login Me\n          </button>\n        </form>\n   </md-card-content>\n    </md-card>\n</div>\n"

/***/ }),

/***/ 231:
/***/ (function(module, exports) {

module.exports = "\n<md-card>\n<table>\n  <thead>\n      <tr>\n      <th class=\"mdl-data-table__cell--non-numeric\">studentID</th>\n      <th>Student Name</th>\n      <th>Student Year</th>\n      <th>student Deparment</th>\n      <th>student Details</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr  *ngFor= \"let student of allstudent\">\n      <td>{{student.studentID}}</td>\n      <td>{{student.studentName}}</td>\n      <td>{{student.studentYear}}</td>\n      <td>{{student.studentDeparment}}</td>\n      <td><button class=\"button \">View Details</button></td>\n    </tr>\n  </tbody>\n</table>\n</md-card>\n"

/***/ }),

/***/ 232:
/***/ (function(module, exports) {

module.exports = "\n<app-header (toggleSidenav)=\"sidenav.toggle()\"></app-header>\n<md-sidenav-container class=\"sidenav-content\">\n  <md-sidenav #sidenav class=\"docs-component-viewer-sidenav\"  [mode]=\"isOver() ? 'over' : 'side'\" [opened]=\"test()\">\n      <md-nav-list>\n          <md-list-item routerLinkActive=\"active-link\" >\n              <md-icon class=\"icon-position\">home</md-icon><div>Home</div>\n          </md-list-item>\n            <md-list-item *ngIf=\"user\" routerLinkActive=\"active-link\" (click)=\"logout()\">\n               <md-icon class=\"icon-position\">power_settings_new</md-icon><span>Logout</span> \n          </md-list-item>    \n            \n      </md-nav-list>\n  </md-sidenav>\n  <div class=\"sidenav-content\">\n      \n  <router-outlet></router-outlet>\n\n  </div>\n\n</md-sidenav-container>\n\n"

/***/ }),

/***/ 233:
/***/ (function(module, exports) {

module.exports = "<p>Hellow {{test}} </p>\n"

/***/ }),

/***/ 234:
/***/ (function(module, exports) {

module.exports = "  <md-toolbar color=\"primary\" fxLayout>\n     \n      <md-icon  class=\"menu\" (click)=\"toggleSidenav.emit()\">menu</md-icon>\n      <span  fxFlexOffset=\"10px\" >DashBoard</span>\n    </md-toolbar>\n"

/***/ }),

/***/ 235:
/***/ (function(module, exports) {

module.exports = "\n\n\n<h1>Welcome to Student Login Portal!!!</h1>\n<div class=\"mtop\">\n  <div class=\"center-position\" fxLayout  fxLayoutAlign=\"center\" fxLayoutGap=\"5%\">\n    <button class=\"mdl-button mdl-js-button mdl-button--raised mdl-button--colored\" routerLink=\"/adminlogin\">\n      ADMIN LOGIN\n    </button>\n    <button class=\"mdl-button mdl-js-button mdl-button--raised mdl-button--accent\" routerLink=\"/studentlogin\">\n      STUDENT LOGIN\n    </button>\n  </div>   \n</div>"

/***/ }),

/***/ 236:
/***/ (function(module, exports) {

module.exports = "\n<md-grid-list cols=\"7\" rowHeight=\"100px\">\n  <md-grid-tile [colspan]=7><h3>Welcome to Student Login Portal</h3></md-grid-tile>\n  <md-grid-tile [rowspan]=4 [colspan]=4 >\n       <img md-card-image src=\"assets/stone.jpeg\" >\n  </md-grid-tile>\n  <md-grid-tile [rowspan]=3 [colspan]=3>\n    <div mdl  fxLayout fxLayoutAlign=\"center\">\n  <md-card fxFlex=\"80%\">\n   <md-card-title>STUDENT LOGIN</md-card-title>\n   <div sapp=\"red\">{{error}}</div>\n   <md-card-content>\n    <form [formGroup]=\"studentForm\" #f=\"ngForm\" (ngSubmit)=\"login(studentForm.value,studentForm.valid)\">\n          <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\" [ngClass]=\"{'is-invalid' : (studentForm.controls.studentId.touched && studentForm.controls.studentId.errors?.required) || (f.submitted && studentForm.controls.studentId.errors)}\">\n            <input class=\"mdl-textfield__input\" type=\"text\" id=\"number\" pattern=\"-?[0-9]*(\\.[0-9]+)?\" formControlName=\"studentId\" >\n            <label class=\"mdl-textfield__label\" for=\"number\">student Id</label>\n            <span class=\"mdl-textfield__error\" *ngIf =\"(studentForm.controls.studentId.touched && studentForm.controls.studentId.errors?.pattern) || (f.submitted && studentForm.controls.studentId.errors?.pattern)\">ID should be number</span>\n            <span class=\"mdl-textfield__error\" *ngIf =\"(studentForm.controls.studentId.touched && studentForm.controls.studentId.errors?.required) || (f.submitted && studentForm.controls.studentId.errors?.required)\">ID should not be Empty!!!</span>\n          </div>\n          <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\" [ngClass]=\"{'is-invalid' : (studentForm.controls.password.touched && studentForm.controls.password.errors) || (f.submitted && studentForm.controls.password.errors)}\">\n            <input class=\"mdl-textfield__input\" type=\"password\" id=\"password\" formControlName=\"password\">\n            <label class=\"mdl-textfield__label\" for=\"password\">password</label>\n            <span class=\"mdl-textfield__error\">Password should not be Empty</span>\n          </div>\n          <div>\n          <button  class=\"mdl-button mdl-js-button mdl-button--raised mdl-button--accent\">\n            Login Me!\n          </button>\n          </div>\n        </form>\n   </md-card-content>\n  </md-card>\n</div>\n\n  </md-grid-tile>\n  <md-grid-tile [rowspan]=1 [colspan]=3>\n     <button class=\"mdl-button mdl-js-button mdl-button--flat mdl-button--primary\" routerLink=\"studentregister\">New Register</button>\n          <a href=\"/api/auth/google\" class=\"mdl-button mdl-js-button mdl-button--flat mdl-button--accent\" (click)=\"google()\">Login with Google</a>\n           <a href=\"/api/auth/facebook\" class=\"mdl-button mdl-js-button mdl-button--flat mdl-color-text--light-blue-900\" >Login with Facebook</a>\n  </md-grid-tile>\n  <md-grid-tile [colspan]=7 fxLayout fxLayoutAlign=\"left\">\n     <h3 fxFlex>student login</h3>\n    </md-grid-tile>\n    <md-grid-tile [colspan]=7>\n      <p>The Kansas City Cowboys' players participated in the American Association (AA) for two seasons from 1888 to 1889. A professional baseball team based in Kansas City, Missouri, the franchise initially used Association Park as their home field in 1888, then moved to Exposition Park for the 1889 season. Although the Cowboys completed their initial season in last place out of the league's eight teams, there were notable player achievements; on June 6, Henry Porter threw a no-hitter, and on June 13, Barkley hit for the cycle. The franchise's only future Hall of Fame player, \"Slidin' Billy\" Hamilton (pictured), began his career as a part-time outfielder in 1888, and was their starting right fielder in 1889. He is the franchise's all-time leader in runs scored, bases on balls, and stolen bases. With Bill Watkins as the team's manager in 1889, the team improved to seventh in the league. On November 15, 1889, the Cowboys submitted their resignation from the AA</p>\n    </md-grid-tile>\n</md-grid-list>\n\n\n{{error | json}}"

/***/ }),

/***/ 237:
/***/ (function(module, exports) {

module.exports = " <div  *ngIf = \"spinner\" fxLayoutAlign=\"center\">\n  <md-spinner ></md-spinner>\n </div>\n<div mdl  fxLayoutAlign=\"center\">\n    <md-card class=\"full\"  fxFlex.xs=\"70%\" fxFlex.md=\"70%\" fxFlex.sm=\"70%\" fxFlex.lg=\"20%\" fxFlex.xl=\"15%\">\n   <md-card-title>STUDENT REGISTER</md-card-title>\n   <md-card-content>\n     <span sapp=\"red\">{{error}}</span>\n      <form [formGroup]=\"studentForm\" #f=\"ngForm\" (ngSubmit)=\"studentValue(studentForm.value,studentForm.valid)\">\n          <div  [ngClass]=\"{'is-invalid' : (studentForm.controls.studentName.dirty && studentForm.controls.studentName.errors) || (f.submitted && studentForm.controls.studentName.errors)}\" class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n            <input class=\"mdl-textfield__input\" type=\"text\" id=\"number\"  formControlName=\"studentName\" >\n            <label class=\"mdl-textfield__label\" for=\"number\">student Name</label>\n            <span sapp=\"red\" *ngIf =\"(studentForm.controls.studentName.touched && studentForm.controls.studentName.errors) || (f.submitted && studentForm.controls.studentName.errors)\">Name should not be Empty!!!</span>\n          </div>\n            <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\" [ngClass]=\"{'is-invalid' : (studentForm.controls.studentId.touched && studentForm.controls.studentId.errors) || (f.submitted && studentForm.controls.studentId.errors)}\">\n            <input class=\"mdl-textfield__input\" type=\"text\" id=\"number\"  formControlName=\"studentId\" >\n            <label class=\"mdl-textfield__label\" for=\"number\">student RollNumber</label>\n            <span sapp=\"red\" *ngIf =\"(studentForm.controls.studentId.touched && studentForm.controls.studentId.errors?.required) || (f.submitted && studentForm.controls.studentId.errors?.required)\">ID should not be Empty!!!</span>\n            <span sapp=\"red\" *ngIf =\"(studentForm.controls.studentId.touched && studentForm.controls.studentId.errors?.pattern) || (f.submitted && studentForm.controls.studentId.errors?.pattern)\">ID should Number!!!</span>\n            <span sapp=\"red\" *ngIf =\"(studentForm.controls.studentId.touched && studentForm.controls.studentId.errors?.maxLength) || (f.submitted && studentForm.controls.studentId.errors?.maxLength)\">Maximum 4 Digits only!!!</span>\n          </div>\n           <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\" [ngClass]=\"{'is-invalid' : (studentForm.controls.studentYear.touched && studentForm.controls.studentYear.errors) || (f.submitted && studentForm.controls.studentYear.errors)}\">\n            <input class=\"mdl-textfield__input\" type=\"text\" id=\"password\" formControlName=\"studentYear\">\n            <label class=\"mdl-textfield__label\" for=\"password\">Year</label>\n            <span sapp=\"red\" *ngIf =\"(studentForm.controls.studentYear.touched && studentForm.controls.studentYear.errors?.required) || (f.submitted && studentForm.controls.studentYear.errors?.required)\">Year should not be Empty!!!</span>\n            <span sapp=\"red\" *ngIf =\"(studentForm.controls.studentYear.touched && studentForm.controls.studentYear.errors?.pattern) || (f.submitted && studentForm.controls.studentYear.errors?.pattern)\">Year should Number!!!</span>\n             <span sapp=\"red\" *ngIf =\"(studentForm.controls.studentYear.touched && studentForm.controls.studentYear.errors?.maxlength) || (f.submitted && studentForm.controls.studentYear.errors?.maxlength)\">Maximum 4 Digits only</span>\n          </div>\n          <div  class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\" [ngClass]=\"{'is-invalid' : (studentForm.controls.studentDeparment.touched && studentForm.controls.studentDeparment.errors) || (f.submitted && studentForm.controls.studentDeparment.errors)}\"> \n         <md-select  placeholder=\"Select Your Deparment\" formControlName=\"studentDeparment\">\n            <md-option *ngFor=\"let dept of deparment\" [value]=\"dept.value\" >\n              {{ dept.value }}\n             </md-option>\n          </md-select>\n          <span class=\"mdl-textfield__error\" *ngIf =\"(studentForm.controls.studentDeparment.touched && studentForm.controls.studentDeparment.errors?.required) || (f.submitted && studentForm.controls.studentDeparment.errors?.required)\">ID should not be Empty!!!</span>\n          </div>\n        \n          <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\" [ngClass]=\"{'is-invalid' : (studentForm.controls.studentPassword.touched && studentForm.controls.studentPassword.errors) || (f.submitted && studentForm.controls.studentPassword.errors)}\">\n            <input class=\"mdl-textfield__input\" type=\"password\" id=\"password\" formControlName=\"studentPassword\" [(ngModel)]=\"pass\">\n            <label class=\"mdl-textfield__label\" for=\"password\">password</label>\n          <span sapp=\"red\" *ngIf =\"(studentForm.controls.studentPassword.touched && studentForm.controls.studentPassword.errors?.required) || (f.submitted && studentForm.controls.studentPassword.errors?.required)\">Password should not be Empty!!!</span>\n          <span sapp=\"red\" *ngIf =\"(studentForm.controls.studentPassword.touched && studentForm.controls.studentPassword.errors?.minlength) || (f.submitted && studentForm.controls.studentPassword.errors?.minlength)\">Password should  be atleast 6 characters!!!</span>\n         \n          </div>\n            <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\" [ngClass]=\"{'is-invalid' : (studentForm.controls.studentcPassword.touched && studentForm.controls.studentcPassword.errors) || (f.submitted && studentForm.controls.studentcPassword.errors)}\">\n            <input class=\"mdl-textfield__input\" type=\"password\" id=\"password\" formControlName=\"studentcPassword\" [(ngModel)]=\"cpass\">\n            <label class=\"mdl-textfield__label\" for=\"password\">Confirm password</label>\n           <span sapp=\"red\" *ngIf =\"(studentForm.controls.studentcPassword.touched && studentForm.controls.studentcPassword.errors?.required) || (f.submitted && studentForm.controls.studentcPassword.errors?.required)\">Password should not be Empty!!!</span>\n          <span sapp=\"red\" *ngIf = \"(studentForm.controls.studentcPassword.touched && pass!==cpass)\">Password Match error</span>\n         \n          </div>\n\n          <button class=\"mdl-button mdl-js-button mdl-button--raised mdl-button--colored\">\n            Login Me\n          </button>\n        </form>\n        \n   </md-card-content>\n   \n    </md-card>\n   \n</div>\n\n\n\n"

/***/ }),

/***/ 238:
/***/ (function(module, exports) {

module.exports = "\n<md-tab-group>\n  <md-tab label=\"Profile\"><div fxLayout fxLayoutAlign=\"center\" fxLayoutGap=\"100px\">\n<h4>{{userDetail.studentName | uppercase }} PROFILE</h4>\n</div>\n<div fxLayout fxLayoutAlign=\"center\">\n  <table>\n  <tr>\n    <th fxFlex=\"200px\" fxFlexOffset=\"-50px\">Name:</th>\n    <td >{{userDetail.studentName}}</td>\n  </tr>\n  <tr>\n    <th fxFlex fxFlexOffset=\"-70px\">Deparment:</th>\n    <td>{{userDetail.studentDeparment}}</td>\n  </tr>\n</table>\n</div></md-tab>\n  <md-tab label=\"Tab 2\">Exam Results</md-tab>\n</md-tab-group>"

/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(131);


/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_service__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminLoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminLoginComponent = (function () {
    function AdminLoginComponent(builder, http, router, auth) {
        this.builder = builder;
        this.http = http;
        this.router = router;
        this.auth = auth;
        this.redirectUrl = 'admin';
    }
    AdminLoginComponent.prototype.ngOnInit = function () {
        this.adminForm = this.builder.group({
            adminId: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].pattern('[0-9]+')])],
            adminPassword: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required])]
        });
    };
    AdminLoginComponent.prototype.adminValue = function (value, valid) {
        var _this = this;
        console.log(value);
        if (valid) {
            //this.http.post('http://localhost:3000/api/admin-login', data,  {headers : header}).map((x) => x.json()).subscribe(data => {localStorage.setItem('token',data); this.redirect();});;
            this.auth.adminLogin(value.adminId, value.adminPassword)
                .subscribe(function (data) {
                console.log(data.message);
                if (data.success) {
                    if (data.Role == 'student') {
                        _this.router.navigate(['student']);
                    }
                    else if (data.Role == 'admin') {
                        _this.router.navigate(['admin']);
                    }
                }
                else {
                    _this.error = data.message;
                }
            }, function (error) {
            });
        }
    };
    AdminLoginComponent.prototype.redirect = function () {
        this.router.navigate([this.redirectUrl]);
    };
    return AdminLoginComponent;
}());
AdminLoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Component */])({
        selector: 'app-admin-login',
        template: __webpack_require__(230),
        styles: [__webpack_require__(219)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__service_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_service__["a" /* AuthService */]) === "function" && _d || Object])
], AdminLoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=admin-login.component.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_service__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DialogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminViewComponent = (function () {
    function AdminViewComponent(router, auth, dialog) {
        this.router = router;
        this.auth = auth;
        this.dialog = dialog;
        this.allstudent = [{}];
    }
    AdminViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('currentuser')) {
            var user = JSON.parse(localStorage.getItem('currentuser'));
            if (user.user.success && user.user.Role == "admin") {
                this.auth.getStudentDetail(user.user.token)
                    .subscribe(function (data) {
                    if (data.success) {
                        _this.allstudent = data.message;
                    }
                    else {
                        _this.error = data.message;
                    }
                }, function (error) {
                });
            }
        }
        else {
            this.router.navigate(['adminlogin']);
        }
    };
    AdminViewComponent.prototype.ngAfterContentChecked = function () {
        if (componentHandler) {
            componentHandler.upgradeAllRegistered();
        }
    };
    AdminViewComponent.prototype.logout = function () {
        this.auth.logout();
        this.router.navigate(['']);
    };
    AdminViewComponent.prototype.openDialog = function () {
        this.dialog.open(DialogComponent);
    };
    return AdminViewComponent;
}());
AdminViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Component */])({
        selector: 'app-admin-view',
        template: __webpack_require__(231),
        styles: [__webpack_require__(220)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__service_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdDialog */]) === "function" && _c || Object])
], AdminViewComponent);

//http://www.techrepublic.com/article/developers-guide-to-peer-reviews/
var DialogComponent = (function () {
    function DialogComponent() {
    }
    return DialogComponent;
}());
DialogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Component */])({
        selector: 'test',
        template: 'TEst',
    })
], DialogComponent);

var _a, _b, _c;
//# sourceMappingURL=admin-view.component.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmDialog; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmDialog = (function () {
    function ConfirmDialog(dialogRef) {
        this.dialogRef = dialogRef;
    }
    return ConfirmDialog;
}());
ConfirmDialog = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["p" /* Component */])({
        selector: 'confirm-dialog',
        template: "\n        <p>{{ title }}</p>\n        <p>{{ message }}</p>\n        <button type=\"button\" md-raised-button \n            (click)=\"dialogRef.close(true)\">OK</button>\n        <button type=\"button\" md-button \n            (click)=\"dialogRef.close()\">Cancel</button>\n    ",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_material__["c" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_material__["c" /* MdDialogRef */]) === "function" && _a || Object])
], ConfirmDialog);

var _a;
//# sourceMappingURL=confirm.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__confirm__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DialogsService = (function () {
    function DialogsService(dialog) {
        this.dialog = dialog;
    }
    DialogsService.prototype.confirm = function (title, message) {
        var dialogRef;
        dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_0__confirm__["a" /* ConfirmDialog */]);
        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.message = message;
        return dialogRef.afterClosed();
    };
    return DialogsService;
}());
DialogsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialog */]) === "function" && _a || Object])
], DialogsService);

var _a;
//# sourceMappingURL=dialog.service.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_service__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentLoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StudentLoginComponent = (function () {
    function StudentLoginComponent(builder, auth, router, activate) {
        this.builder = builder;
        this.auth = auth;
        this.router = router;
        this.activate = activate;
        this.redirectUrl = 'student';
    }
    StudentLoginComponent.prototype.ngOnInit = function () {
        this.activate.queryParams.subscribe(function (params) { console.log(params); });
        this.studentForm = this.builder.group({
            studentId: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].pattern('[0-9]+')])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]
        });
    };
    StudentLoginComponent.prototype.login = function (value, valid) {
        var _this = this;
        if (valid) {
            this.auth.studentLogin(value.studentId, value.password)
                .subscribe(function (data) {
                console.log(data.message);
                if (data.success) {
                    if (data.Role == 'student') {
                        _this.router.navigate(['student']);
                    }
                    else if (data.Role == 'admin') {
                        _this.router.navigate(['admin']);
                    }
                }
                else {
                    _this.error = data.message;
                }
            }, function (error) {
            });
        }
    };
    StudentLoginComponent.prototype.google = function () {
    };
    return StudentLoginComponent;
}());
StudentLoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Component */])({
        selector: 'app-student-login',
        template: __webpack_require__(236),
        styles: [__webpack_require__(225)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__service_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object])
], StudentLoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=student-login.component.js.map

/***/ })

},[287]);
//# sourceMappingURL=main.bundle.js.map