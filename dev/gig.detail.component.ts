import {Component} from 'angular2/core';
import {ApiService} from './api.service';
import {RouteParams, Router} from 'angular2/router';

@Component({
    template: `
        
        <div class="gigDetail" *ngIf="gigDetail">
        <h1>{{ gigDetail.bands }}</h1>
        	<table class="table">
            	<tr><td> {{ gigDetail.date | slice:0:10}} </td></tr>
                <tr><td> {{ gigDetail.venue }} </td></tr>
                <tr><td> {{ gigDetail.price | currency }} </td></tr>
                <tr><td><button type="button" class="btn btn-info" (click)="goToIndex()"><< Back</button></td></tr>
        	</table>
        </div>`
})

export class GigDetailComponent {
    constructor(private _apiservice: ApiService, params:RouteParams, private router: Router) {
        this._apiservice
            .getGigDetail(params.get('id'))
            .subscribe(gigDetail => this.gigDetail = gigDetail,
                error => console.log('Gig detail error'),
                () => console.log('Gig detail loaded' + this.gigDetail));    
    }

    goToIndex () {
        this.router.navigate(['Gigs']);
    }
}