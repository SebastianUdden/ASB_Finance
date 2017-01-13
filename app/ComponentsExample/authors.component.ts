import {Component} from 'angular2/core';
import {AuthorsService} from '../ServicesExample/authors.service'

@Component({
    selector: 'authors',
    template: `
        <h2>Authors</h2>
        {{ title }}
        <ul>
            <li *ngFor='#author of authors'>
                {{ author }}
            </li>
        </ul>
    `,
    providers: [AuthorsService]
})

export class AuthorsComponent{
    title = "The title of authors page"
    authors;

    constructor(authorsService: AuthorsService) {
        this.authors = authorsService.getAuthors();
    }
}