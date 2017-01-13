import {Component} from 'angular2/core';
import {AppMessagesComponent} from './AppsForReusableComponents/appMessages.component'
import {AppLikeComponent} from './AppsForReusableComponents/appLike.component';
import {AppFavoriteComponent} from './AppsForReusableComponents/appFavorite.component';
import {AppVoterComponent} from './AppsForReusableComponents/appVoter.component';
import {AppAuthorsComponent} from './AppsForReusableComponents/appAuthors.component';

@Component({
    selector: 'my-app',
    template: `
<<<<<<< HEAD
=======
    <h1>This is a commit</h1>
    <appMessages></appMessages>
>>>>>>> c81ac151245bda1f772e1a33c5ab1f3e25d2bbe1
    <appLike></appLike>
    <appFavorite></appFavorite>
    <appVoter></appVoter>
    <appAuthors></appAuthors>
    <appMessages></appMessages>
    `,
    directives: [
        AppMessagesComponent,
        AppLikeComponent,    
        AppFavoriteComponent, 
        AppVoterComponent, 
        AppAuthorsComponent]
})
export class AppComponent { 
    
}