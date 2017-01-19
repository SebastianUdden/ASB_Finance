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
                        template: "\n        <table id=\"stockList\">\n            <thead>\n                <tr>\n                    <th>Lista</th>\n                    <th>Namn</th>\n                    <th>Symbol</th>\n                    <th>Sektor</th>\n                    <th>Valuta</th>\n                    <th>B\u00F6rsv\u00E4rde</th>\n                    <th>Beskrivning</th>\n                    <th>Fact sheet</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor='#stock of stocks'>\n                    <td class=\"columnMedium\">{{stock.Lista}}</td>\n                    <td class=\"columnLarge\">{{stock.Namn}}</td>\n                    <td class=\"columnMedium\">BACTI B</td>\n                    <td class=\"columnLarge\">H\u00E4lsov\u00E5rd</td>\n                    <td class=\"columnSmall\">SEK</td>\n                    <td class=\"columnLarge\">569 470 578 SEK</td>\n                    <td class=\"columnBox\">Bactiguard \u00E4r ett svenskt medicinteknikbolag som utvecklar och tillverkar infektionsh\u00E4mmande katetrar och endotrakealtuber. Bactiguards produktportf\u00F6lj omfattar urinv\u00E4gskatetrar, endotrakealtuber och centrala venkatetrar, d\u00E4r samtliga produkter \u00E4r behandlade med bolagets infektionsh\u00E4mmande bel\u00E4ggning. Marknaden finns i Sverige, Schwiez, USA, S\u00F6dra Afrika,Israel, Saudiarabien, Iran och Japan.</td>\n                    <td class=\"columnSmall\"><img src=\"http://www.nasdaqomxnordic.com/static/img/pdf.gif\"></td>\n                </tr>\n                <tr *ngFor='#stock of stocks'>\n                    <td class=\"columnMedium\">{{stock.Lista}}</td>\n                    <td class=\"columnLarge\">{{stock.Namn}}</td>\n                    <td class=\"columnMedium\">MIND</td>\n                    <td class=\"columnLarge\">Informationsteknik</td>\n                    <td class=\"columnSmall\">SEK</td>\n                    <td class=\"columnLarge\">102 496 891 SEK</td>\n                    <td class=\"columnBox\">Mindmancer erbjuder och utvecklar s\u00E4kerhetsl\u00F6sningar inom intelligent videobevakning kopplat till certifierade larmcentraler. F\u00F6retaget \u00E4r verksamt inom bygg- och skolbevakning i Sverige och intelligent kamerabevakning till industrif\u00F6retag. Bolaget har verksamhet i Sverige, Finland, Norge, Danmark och Polen samt levererar till \u00F6vriga Europa och USA.</td>\n                    <td class=\"columnSmall\"><img src=\"http://www.nasdaqomxnordic.com/static/img/pdf.gif\"></td>\n                </tr>\n                <tr *ngFor='#stock of stocks'>\n                    <td class=\"columnMedium\">{{stock.Lista}}</td>\n                    <td class=\"columnLarge\">{{stock.Namn}}</td>\n                    <td class=\"columnMedium\">SF</td>\n                    <td class=\"columnLarge\">S\u00E4llank\u00F6psvaror- och tj\u00E4nster</td>\n                    <td class=\"columnSmall\">SEK</td>\n                    <td class=\"columnLarge\">506 513 430 SEK</td>\n                    <td class=\"columnBox\">Stillfront \u00E4r en frist\u00E5ende spelutvecklare av digitala spel, F\u00F6retagets verksamhet drivs i de fyra autonoma dotterbolagen, BytroLabs i Tyskland, Coldwood Interactive i Sverige, Power Challenge i Storbritannien och Dorado Online Games p\u00E5 Malta. Stillfronts spel distribueras globalt och f\u00F6retagets huvudmarknader \u00E4r Sverige, Tyskland, USA och Sydamerika.</td>\n                    <td class=\"columnSmall\"><img src=\"http://www.nasdaqomxnordic.com/static/img/pdf.gif\"></td>\n                </tr>\n            </tbody>\n        </table>\n    ",
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