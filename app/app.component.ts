import {Component} from 'angular2/core';
import {AppMessagesComponent} from './AppsForReusableComponents/appMessages.component'
import {AppLikeComponent} from './AppsForReusableComponents/appLike.component';
import {AppFavoriteComponent} from './AppsForReusableComponents/appFavorite.component';
import {AppVoterComponent} from './AppsForReusableComponents/appVoter.component';
import {AppAuthorsComponent} from './AppsForReusableComponents/appAuthors.component';
import {ASBAppComponent} from './ASBApps/ASBApp.component';

@Component({
    selector: 'my-app',
    template: `
    <h3>Small cap</h3>
        <tableStockList></tableStockList>        
    `,
    directives: [
        AppMessagesComponent,
        AppLikeComponent,    
        AppFavoriteComponent, 
        AppVoterComponent, 
        AppAuthorsComponent,
        ASBAppComponent]
})
export class AppComponent { 
    
}