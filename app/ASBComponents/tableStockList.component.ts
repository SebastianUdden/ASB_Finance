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
                    <th>Betyg (Tim)</th>
                    <th>Betyg (Sebbe)</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor='#stock of stocks'>
                    <td class="columnMedium">{{stock.Lista}}</td>
                    <td class="columnLarge">{{stock.Namn}}</td>
                    <td class="columnMedium">{{stock.Symbol}}</td>
                    <td class="columnLarge">{{stock.Sektor}}</td>
                    <td class="columnSmall">{{stock.Valuta}}</td>
                    <td class="columnLarge">{{stock.Borsvarde}}</td>
                    <td class="columnBox">{{stock.Beskrivning}}</td>
                    <td class="columnSmall"><img src="http://www.nasdaqomxnordic.com/static/img/pdf.gif"></td>
                    <td class="columnMedium"><div class="score" style="width: 80px"></div></td>
                    <td class="columnMedium"><div class="score" style="width: 57px"></div></td>
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