System.register(['angular2/core', './AppsForReusableComponents/appMessages.component', './AppsForReusableComponents/appLike.component', './AppsForReusableComponents/appFavorite.component', './AppsForReusableComponents/appVoter.component', './AppsForReusableComponents/appAuthors.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, appMessages_component_1, appLike_component_1, appFavorite_component_1, appVoter_component_1, appAuthors_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (appMessages_component_1_1) {
                appMessages_component_1 = appMessages_component_1_1;
            },
            function (appLike_component_1_1) {
                appLike_component_1 = appLike_component_1_1;
            },
            function (appFavorite_component_1_1) {
                appFavorite_component_1 = appFavorite_component_1_1;
            },
            function (appVoter_component_1_1) {
                appVoter_component_1 = appVoter_component_1_1;
            },
            function (appAuthors_component_1_1) {
                appAuthors_component_1 = appAuthors_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <h2>GIT IS WORKING!</h2>\n    <appAuthors></appAuthors>\n    \n    ",
                        directives: [
                            appMessages_component_1.AppMessagesComponent,
                            appLike_component_1.AppLikeComponent,
                            appFavorite_component_1.AppFavoriteComponent,
                            appVoter_component_1.AppVoterComponent,
                            appAuthors_component_1.AppAuthorsComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map