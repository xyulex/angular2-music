import {Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {ApiService} from './api.service';

@Component({
    template: `
        <h1>Gig detail</h1>
        <div class="gigDetail" *ngIf = "gigDetail">
        	<table class="table">
            	<tr>
                <td width="10%"> {{ gigDetail.date | slice:0:10}} </td>
                <td> {{ gigDetail.bands }} </td>
                <td width="20%"> {{ gigDetail.venue }} </td>
                </tr>
        	</table>
        </div>`
})

export class GigDetailComponent {
    constructor(private _apiservice: ApiService) { }

    ngOnInit() {
        
    }

    public getGigDetail(gigID) {
        this._apiservice
            .getGigDetail(gigID)
            .subscribe(gigDetail => this.gigDetail = gigDetail,
                error => console.log('Gig detail error'),
                () => console.log('Gig detail loaded' + this.gigDetail));
    }
}