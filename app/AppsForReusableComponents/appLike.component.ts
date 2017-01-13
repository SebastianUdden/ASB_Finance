import {Component} from 'angular2/core';
import {LikeComponent} from '../Reusable Components/like.component';

@Component({
    selector: 'appLike',
    template: `
    <like
        [totalLikes]="tweet.totalLikes"
        [iLike]="tweet.iLike">
    </like>
    `,
    directives: [LikeComponent]
})
export class AppLikeComponent { 
    tweet = {
        totalLikes: 10,
        iLike: false
    }
}