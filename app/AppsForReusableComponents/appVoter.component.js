System.register(['angular2/core', '../Reusable Components/voter.component'], function(exports_1, context_1) {
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
    var core_1, voter_component_1;
    var AppVoterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (voter_component_1_1) {
                voter_component_1 = voter_component_1_1;
            }],
        execute: function() {
            AppVoterComponent = (function () {
                function AppVoterComponent() {
                    this.myVote = 0;
                    this.voteCount = 100;
                }
                AppVoterComponent.prototype.onVote = function ($event) {
                    console.log($event);
                };
                AppVoterComponent = __decorate([
                    core_1.Component({
                        selector: 'appVoter',
                        template: "\n    <voter\n        [voteCount]=\"voteCount\"\n        [myVote]=\"myVote\"\n        (vote)=\"onVote($event)\">\n    </voter>\n    ",
                        directives: [voter_component_1.VoterComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppVoterComponent);
                return AppVoterComponent;
            }());
            exports_1("AppVoterComponent", AppVoterComponent);
        }
    }
});
//# sourceMappingURL=appVoter.component.js.map