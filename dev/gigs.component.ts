import {Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {ApiService} from './api.service';


@Component({
    template: `
        <h1>Gigs list</h1>
        <div class="searchResults" *ngIf = "gigs">
        	<table>
            	<tr *ngFor="#data of gigs">
                <td>{{ data.date | slice:0:10}}</td>
                <td><a href="#" (click)="getGigDetail(data._id)">{{ data.bands}}</a></td>
                <td> {{ data.venue }} </td>                
                </tr>
        	</table>
        </div>`       
})

export class GigsComponent {
    constructor(private _apiservice: ApiService) { }
 
    ngOnInit() {
        this.getGigs();
    }
  
    private getGigs(){
        this._apiservice
            .getGigs()
            .subscribe(gigs => this.gigs = gigs,
                error => console.log(error),
                () => console.log('Gigs loaded')
            );
    },

    private getGigDetail(gigID) {
        this._apiservice
            .getGigDetail(gigID)
            .subscribe(gigDetail => this.gigDetail = gigDetail,
                error => console.log('Gig detail error'),
                () => console.log('Gig detail loaded')
            );
    }
}