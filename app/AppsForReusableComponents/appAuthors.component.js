System.register(['angular2/core', '../ComponentsExample/authors.component'], function(exports_1, context_1) {
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
    var core_1, authors_component_1;
    var AppAuthorsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (authors_component_1_1) {
                authors_component_1 = authors_component_1_1;
            }],
        execute: function() {
            AppAuthorsComponent = (function () {
                function AppAuthorsComponent() {
                }
                AppAuthorsComponent = __decorate([
                    core_1.Component({
                        selector: 'appAuthors',
                        template: "    \n    <authors></authors>\n    ",
                        directives: [authors_component_1.AuthorsComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppAuthorsComponent);
                return AppAuthorsComponent;
            }());
            exports_1("AppAuthorsComponent", AppAuthorsComponent);
        }
    }
});
//# sourceMappingURL=appAuthors.component.js.map