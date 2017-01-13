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
                        {
                            "Lista": "First North",
                            "Namn": "ThisStock"
                        },
                        {
                            "Lista": "First North",
                            "Namn": "ThisStock2"
                        }
                    ];
                };
                return TableStockListService;
            }());
            exports_1("TableStockListService", TableStockListService);
        }
    }
});
//# sourceMappingURL=tableStockListService.service.js.map