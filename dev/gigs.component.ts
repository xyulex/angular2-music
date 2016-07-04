import {Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {ApiService} from './api.service';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

// getgigdetail component route!!!
@Component({
    template: `
        <h1>Gigs list</h1>
        <div class="searchResults" *ngIf = "gigs">
        	<table class="table">
            	<tr *ngFor="#data of gigs">
                <td width="10%">{{ data.date | slice:0:10}}</td>
                <td><a href="#" (click)="getGigDetail(data._id)">{{ data.bands}}</a></td>
                <td width="20%"> {{ data.venue }} </td>
                </tr>
            </table>
        </div>`,
        directives: [ROUTER_DIRECTIVES]
})

export class GigsComponent {
    constructor(private _apiservice: ApiService) { 
        let showDetail = false; }

    ngOnInit() {

        this._apiservice
            .getGigs()
            .subscribe(gigs => this.gigs = gigs,
                error => console.log(error),
                () => console.log('Gigs loaded')
        );
    }

    public getGigDetail(gigID) {
        this.showDetail = !this.showDetail;
        this._apiservice
            .getGigDetail(gigID)
            .subscribe(gigDetail => this.gigDetail = gigDetail,
                error => console.log('Gig detail error'),
                () => console.log(this.gigDetail);//showDetail = true;

    }
}