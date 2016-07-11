import {Component} from 'angular2/core';
import {ApiService} from './api.service';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    template: `
        <h1>Gigs list</h1>
        <div class="searchResults" *ngIf = "gigs">
        	<table class="table">
            	<tr *ngFor="#data of gigs">
                <td width="10%">{{ data.date | slice:0:10}}</td>                
                <td><a [routerLink] = " ['GigDetail', {id: data._id }] ">{{ data.bands}}</a>
                <td width="20%"> {{ data.venue }} </td>
                </tr>
            </table>
        </div>`,
        directives: [ROUTER_DIRECTIVES]
})

export class GigsComponent {
    constructor(private _apiservice:ApiService) {
        this._apiservice
            .getGigs()
            .subscribe(gigs => this.gigs = gigs,
                error => console.log(error),
                () => console.log('Gigs loaded')
            );
    }
}