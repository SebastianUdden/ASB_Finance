System.register(['angular2/core', '../Reusable Components/favorite.component'], function(exports_1, context_1) {
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
    var core_1, favorite_component_1;
    var AppFavoriteComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (favorite_component_1_1) {
                favorite_component_1 = favorite_component_1_1;
            }],
        execute: function() {
            AppFavoriteComponent = (function () {
                function AppFavoriteComponent() {
                    this.isFavorite = false;
                }
                AppFavoriteComponent = __decorate([
                    core_1.Component({
                        selector: 'appFavorite',
                        template: "\n    <favorite\n        [isFavorite]=\"isFavorite\">\n    </favorite>\n    ",
                        directives: [favorite_component_1.FavoriteComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppFavoriteComponent);
                return AppFavoriteComponent;
            }());
            exports_1("AppFavoriteComponent", AppFavoriteComponent);
        }
    }
});
//# sourceMappingURL=appFavorite.component.js.map