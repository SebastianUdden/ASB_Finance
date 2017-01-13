import {Component} from 'angular2/core';
import {MessagesComponent} from '../Reusable Components/messages.component';

@Component({
    selector: 'appMessages',
    template: `    
    <messages></messages>
    `,
    directives: [MessagesComponent]
})
export class AppMessagesComponent { 
   
}