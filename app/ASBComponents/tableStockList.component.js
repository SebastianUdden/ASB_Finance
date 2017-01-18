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
                        template: "\n        <table id=\"stockList\">\n            <thead>\n                <tr>\n                    <th>Lista</th>\n                    <th>Namn</th>\n                    <th>Symbol</th>\n                    <th>Sektor</th>\n                    <th>Valuta</th>\n                    <th>B\u00F6rsv\u00E4rde</th>\n                    <th>Beskrivning</th>\n                    <th>Fact sheet</th>\n            </thead>\n            <tbody>\n                <tr *ngFor='#stock of stocks'>\n                <td>{{stock.Lista}}</td>\n                <td>{{stock.Namn}}</td>\n                <td>Symbol</td>\n                <td>Sektor</td>\n                <td>Valuta</td>\n                <td>B\u00F6rsv\u00E4rde</td>\n                <td>Beskrivning</td>\n                <td>Fact Sheet</td>\n                </tr>\n            </tbody>\n        </table>\n    ",
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