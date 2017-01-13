import {Component} from 'angular2/core';
import {VoterComponent} from '../Reusable Components/voter.component';

@Component({
    selector: 'appVoter',
    template: `
    <voter
        [voteCount]="voteCount"
        [myVote]="myVote"
        (vote)="onVote($event)">
    </voter>
    `,
    directives: [VoterComponent]
})
export class AppVoterComponent { 
    myVote = 0;
    voteCount = 100;

    onVote($event){
        console.log($event);
    }
}