System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ToDoListService;
    return {
        setters:[],
        execute: function() {
            ToDoListService = (function () {
                function ToDoListService() {
                }
                ToDoListService.prototype.getToDos = function () {
                    return [
                        {
                            "Amne": "Teknisk Analys",
                            "Beskrivning": "Teknisk analys, kanske efter sommaren",
                            "Prioritet": 9
                        }
                    ];
                };
                return ToDoListService;
            }());
            exports_1("ToDoListService", ToDoListService);
        }
    }
});
//# sourceMappingURL=toDoList.Service.js.map