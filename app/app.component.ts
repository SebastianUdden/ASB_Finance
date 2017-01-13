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
    <h2>GIT IS WORKING!</h2>
    <table>
        <thead>
            <tr>
                <th>Lista</th>
                <th>Namn</th>
                <th>Symbol</th>
                <th>Sektor</th>
                <th>Valuta</th>
                <th>Börsvärde</th>
                <th>Beskrivning</th>
                <th>Fact sheet</th>
        </thead>
        <tbody>
        </tbody>
    </table>
    <ASBApp></ASBApp>
    
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