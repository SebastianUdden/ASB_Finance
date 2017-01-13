import {Component} from 'angular2/core';
import {TableStockListService} from '../ASBServices/tableStockListService.service'

@Component({
    selector: 'tableStockList',
    template: `
        <h2>Stocks</h2>
        {{ title }}
        <ul>
            <li *ngFor='#stock of stocks'>
                {{ stock }}
            </li>
        </ul>
        
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