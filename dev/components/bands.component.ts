import {Component} from 'angular2/core';
import {ApiService} from '../services/api.service';

@Component({
    template: `
        <h1>Bands!!</h1>`       
})

export class BandsComponent {
    constructor(private _apiservice:ApiService) {
        this._apiservice
            .getGigs()
            .subscribe(gigs => this.gigs = gigs,
                error => console.log(error),
                () => console.log('Gigs loaded in Bands')
            );
    }

    
}