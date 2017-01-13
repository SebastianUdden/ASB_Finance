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
    <h1>Now GIT IS WORKING!!!!!!!! WEHOOOOOO!</h1>
    <p>Is it still not working?</p>
    <appMessages></appMessages>
>>>>>>> 552486ff61cbdae227dc56069a9e939e28ee04e9
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