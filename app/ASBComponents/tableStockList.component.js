System.register(['angular2/core', '../ASBServices/tableStockListService.service'], function(exports_1, context_1) {
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
    var core_1, tableStockListService_service_1;
    var TableStockListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tableStockListService_service_1_1) {
                tableStockListService_service_1 = tableStockListService_service_1_1;
            }],
        execute: function() {
            TableStockListComponent = (function () {
                function TableStockListComponent(tableStockListService) {
                    this.title = "The title of stocks page";
                    this.stocks = tableStockListService.getStocks();
                }
                TableStockListComponent = __decorate([
                    core_1.Component({
                        selector: 'tableStockList',
                        template: "\n        <h2>Stocks</h2>\n        {{ title }}\n        <ul>\n            <li *ngFor='#stock of stocks'>\n                {{ stock }}\n            </li>\n        </ul>\n        \n    ",
                        providers: [tableStockListService_service_1.TableStockListService]
                    }), 
                    __metadata('design:paramtypes', [tableStockListService_service_1.TableStockListService])
                ], TableStockListComponent);
                return TableStockListComponent;
            }());
            exports_1("TableStockListComponent", TableStockListComponent);
        }
    }
});
//# sourceMappingURL=tableStockList.component.js.map