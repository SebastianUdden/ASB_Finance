System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var VoterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            VoterComponent = (function () {
                function VoterComponent() {
                    this.myVote = 0;
                    this.voteCount = 0;
                    this.vote = new core_1.EventEmitter();
                }
                VoterComponent.prototype.upVote = function () {
                    if (this.myVote == 1) {
                        return;
                    }
                    this.myVote++;
                    this.vote.emit({ myVote: this.myVote });
                };
                VoterComponent.prototype.downVote = function () {
                    if (this.myVote == -1) {
                        return;
                    }
                    this.myVote--;
                    this.vote.emit({ myVote: this.myVote });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], VoterComponent.prototype, "myVote", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], VoterComponent.prototype, "voteCount", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], VoterComponent.prototype, "vote", void 0);
                VoterComponent = __decorate([
                    core_1.Component({
                        selector: 'voter',
                        template: "\n    <div class=\"voter\">\n        <i \n            class=\"glyphicon glyphicon-menu-up vote-button\" \n            [class.highlighted]=\"myVote == 1\"\n            (click)=\"upVote()\" >\n        </i>\n        <span class=\"vote-count\">{{ voteCount + myVote }}</span>\n        <i \n            class=\"glyphicon glyphicon-menu-down vote-button\"\n            [class.highlighted]=\"myVote == -1\"\n            (click)=\"downVote()\">\n        </i>\n    </div>\n    ",
                        styles: ["\n        .voter {\n            width: 20px;\n            text-align:center;\n            color: #999;\n        }\n\n        .vote-count {\n            font-siz: 1.2em\n        }\n\n        .vote-button {\n            cursor: pointer; \n        }\n\n        .highlighted {\n            color: orange;\n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], VoterComponent);
                return VoterComponent;
            }());
            exports_1("VoterComponent", VoterComponent);
        }
    }
});
//# sourceMappingURL=voter.component.js.map