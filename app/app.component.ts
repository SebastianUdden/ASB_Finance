import {Component} from 'angular2/core';
import {AppMessagesComponent} from './AppsForReusableComponents/appMessages.component'
import {AppLikeComponent} from './AppsForReusableComponents/appLike.component';
import {AppFavoriteComponent} from './AppsForReusableComponents/appFavorite.component';
import {AppVoterComponent} from './AppsForReusableComponents/appVoter.component';
import {AppAuthorsComponent} from './AppsForReusableComponents/appAuthors.component';

@Component({
    selector: 'my-app',
    template: `
    <appMessages></appMessages>
    <appLike></appLike>
    <appFavorite></appFavorite>
    <appVoter></appVoter>
    <appAuthors></appAuthors>
    <appMessages></appMessages>
    <h2>Try this TIMMEY!!</h2>
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