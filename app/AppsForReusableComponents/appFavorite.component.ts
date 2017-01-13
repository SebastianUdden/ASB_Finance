import {Component} from 'angular2/core';
import {FavoriteComponent} from '../Reusable Components/favorite.component';

@Component({
    selector: 'appFavorite',
    template: `
    <favorite
        [isFavorite]="isFavorite">
    </favorite>
    `,
    directives: [FavoriteComponent]
})
export class AppFavoriteComponent { 
    isFavorite = false;
}