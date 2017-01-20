import {Component} from 'angular2/core';
import {ToDoListService} from '../ASBServices/toDoList.service'

@Component({
    selector: 'toDoList',
    template: `
        <table class="tableStandard" id="toDoList">
            <thead>
                <tr>
                    <th>Ämne</th>
                    <th>Beskrivning</th>
                    <th>Prioritets score</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor='#toDo of toDos'>
                    <td class="columnMedium">{{toDo.Amne}}</td>
                    <td class="columnLarge">{{toDo.Beskrivning}}</td>
                    <td class="columnMedium">{{toDo.Prioritet}}</td>
                </tr>
            </tbody>
        </table>
    `,
    providers: [ToDoListService]
})

export class ToDoListComponent{
    title = "The title of todos page"
    toDos;

    constructor(toDoListService: ToDoListService) {
        this.toDos = toDoListService.getToDos();
    }
}