import {Component} from 'angular2/core'; 
import {ApiService} from '../services/api.service';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({  
    templateUrl: '/app/templates/gigs.html',
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