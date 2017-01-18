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
            </thead>
            <tbody>
                <tr *ngFor='#stock of stocks'>
                <td>{{stock.Lista}}</td>
                <td>{{stock.Namn}}</td>
                <td>Symbol</td>
                <td>Sektor</td>
                <td>Valuta</td>
                <td>Börsvärde</td>
                <td>Beskrivning</td>
                <td>Fact Sheet</td>
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