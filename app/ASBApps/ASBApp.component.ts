import {Component} from 'angular2/core';
import {TableStockListComponent} from '../ASBComponents/tableStockList.component';

@Component({
    selector: 'ASBApp',
    template: `
    <tableStockList></tableStockList>
    `,
    directives: [TableStockListComponent]
})
export class ASBAppComponent { 
   
}