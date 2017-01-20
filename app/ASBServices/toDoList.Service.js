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
                            "Amne": "Teknisk analys",
                            "Beskrivning": "Teknisk analys, kanske efter sommaren",
                            "Prioritet": 5
                        },
                        {
                            "Amne": "Makroindikatorer",
                            "Beskrivning": "Makroindikatorer, efter first north + small cap",
                            "Prioritet": 7
                        },
                        {
                            "Amne": "Small cap lista",
                            "Beskrivning": "Small cap lista, efter First North",
                            "Prioritet": 8
                        },
                        {
                            "Amne": "First north lista",
                            "Beskrivning": "Automatisk parsing av alla bolag på First North",
                            "Prioritet": 9
                        },
                        {
                            "Amne": "Tooltips",
                            "Beskrivning": "Lägg till funktionalitet för tooltips",
                            "Prioritet": 6
                        },
                        {
                            "Amne": "Inline CSS (komponenter)",
                            "Beskrivning": "Flytta komponent CSS till inline (under template)",
                            "Prioritet": 10
                        },
                        {
                            "Amne": "Kommentars funktionalitet",
                            "Beskrivning": "Lägg till forms module, fixa kommentarsfunktionalitet. https://angular.io/docs/ts/latest/tutorial/toh-pt1.html",
                            "Prioritet": 10
                        }
                    ];
                };
                return ToDoListService;
            }());
            exports_1("ToDoListService", ToDoListService);
        }
    }
});
//# sourceMappingURL=toDoList.service.js.map