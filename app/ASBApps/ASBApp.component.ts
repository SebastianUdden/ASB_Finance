import {Component} from 'angular2/core';
import {TableStockListComponent} from '../ASBComponents/tableStockList.component';
import {ToDoListComponent} from '../ASBComponents/toDoList.component';

@Component({
    selector: 'ASBApp',
    template: `
    <toDoList></toDoList>
    <tableStockList></tableStockList>
    `,
    directives: [TableStockListComponent, ToDoListComponent]
})
export class ASBAppComponent { 
   
}