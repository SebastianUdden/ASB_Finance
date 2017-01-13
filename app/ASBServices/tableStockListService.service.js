System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TableStockListService;
    return {
        setters:[],
        execute: function() {
            TableStockListService = (function () {
                function TableStockListService() {
                }
                TableStockListService.prototype.getStocks = function () {
                    return [
                        "Aktie1",
                        "Aktie2",
                        "Aktie3",
                        "Aktie4"
                    ];
                };
                return TableStockListService;
            }());
            exports_1("TableStockListService", TableStockListService);
        }
    }
});
//# sourceMappingURL=tableStockListService.service.js.map