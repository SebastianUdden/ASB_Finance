import {Component} from 'angular2/core';
import {AppMessagesComponent} from './AppsForReusableComponents/appMessages.component'
import {AppLikeComponent} from './AppsForReusableComponents/appLike.component';
import {AppFavoriteComponent} from './AppsForReusableComponents/appFavorite.component';
import {AppVoterComponent} from './AppsForReusableComponents/appVoter.component';
import {ASBAppComponent} from './ASBApps/ASBApp.component';

@Component({
    selector: 'my-app',
    template: `
    <h3>First north</h3>
        <ASBApp></ASBApp>        
    `,
    directives: [
        AppMessagesComponent,
        AppLikeComponent,    
        AppFavoriteComponent, 
        AppVoterComponent, 
        ASBAppComponent]
})
export class AppComponent { 
    
}