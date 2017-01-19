import {Component} from 'angular2/core';
import {TableStockListService} from '../ASBServices/tableStockListService.service'

@Component({
    selector: 'tableStockList',
    template: `
        <table id="stockList">
            <thead>
                <tr>
                    <th>Lista</th>
                    <th>Namn</th>
                    <th>Symbol</th>
                    <th>Sektor</th>
                    <th>Valuta</th>
                    <th>Börsvärde</th>
                    <th>Beskrivning</th>
                    <th>Fact sheet</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor='#stock of stocks'>
                    <td class="columnMedium">{{stock.Lista}}</td>
                    <td class="columnLarge">{{stock.Namn}}</td>
                    <td class="columnMedium">BACTI B</td>
                    <td class="columnLarge">Hälsovård</td>
                    <td class="columnSmall">SEK</td>
                    <td class="columnLarge">569 470 578 SEK</td>
                    <td class="columnBox">Bactiguard är ett svenskt medicinteknikbolag som utvecklar och tillverkar infektionshämmande katetrar och endotrakealtuber. Bactiguards produktportfölj omfattar urinvägskatetrar, endotrakealtuber och centrala venkatetrar, där samtliga produkter är behandlade med bolagets infektionshämmande beläggning. Marknaden finns i Sverige, Schwiez, USA, Södra Afrika,Israel, Saudiarabien, Iran och Japan.</td>
                    <td class="columnSmall"><img src="http://www.nasdaqomxnordic.com/static/img/pdf.gif"></td>
                </tr>
                <tr *ngFor='#stock of stocks'>
                    <td class="columnMedium">{{stock.Lista}}</td>
                    <td class="columnLarge">{{stock.Namn}}</td>
                    <td class="columnMedium">MIND</td>
                    <td class="columnLarge">Informationsteknik</td>
                    <td class="columnSmall">SEK</td>
                    <td class="columnLarge">102 496 891 SEK</td>
                    <td class="columnBox">Mindmancer erbjuder och utvecklar säkerhetslösningar inom intelligent videobevakning kopplat till certifierade larmcentraler. Företaget är verksamt inom bygg- och skolbevakning i Sverige och intelligent kamerabevakning till industriföretag. Bolaget har verksamhet i Sverige, Finland, Norge, Danmark och Polen samt levererar till övriga Europa och USA.</td>
                    <td class="columnSmall"><img src="http://www.nasdaqomxnordic.com/static/img/pdf.gif"></td>
                </tr>
                <tr *ngFor='#stock of stocks'>
                    <td class="columnMedium">{{stock.Lista}}</td>
                    <td class="columnLarge">{{stock.Namn}}</td>
                    <td class="columnMedium">SF</td>
                    <td class="columnLarge">Sällanköpsvaror- och tjänster</td>
                    <td class="columnSmall">SEK</td>
                    <td class="columnLarge">506 513 430 SEK</td>
                    <td class="columnBox">Stillfront är en fristående spelutvecklare av digitala spel, Företagets verksamhet drivs i de fyra autonoma dotterbolagen, BytroLabs i Tyskland, Coldwood Interactive i Sverige, Power Challenge i Storbritannien och Dorado Online Games på Malta. Stillfronts spel distribueras globalt och företagets huvudmarknader är Sverige, Tyskland, USA och Sydamerika.</td>
                    <td class="columnSmall"><img src="http://www.nasdaqomxnordic.com/static/img/pdf.gif"></td>
                </tr>
            </tbody>
        </table>
    `,
    providers: [TableStockListService]
})

export class TableStockListComponent{
    title = "The title of stocks page"
    stocks;

    constructor(tableStockListService: TableStockListService) {
        this.stocks = tableStockListService.getStocks();
    }
}