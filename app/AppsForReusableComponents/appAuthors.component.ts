import {Component} from 'angular2/core';
import {AuthorsComponent} from '../ComponentsExample/authors.component';

@Component({
    selector: 'appAuthors',
    template: `    
    <authors></authors>
    `,
    directives: [AuthorsComponent]
})
export class AppAuthorsComponent { 
   
}