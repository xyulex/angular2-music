import {Component} from 'angular2/core';
import {ApiService} from '../services/api.service';
import {RouteParams, Router} from 'angular2/router';

@Component({
    templateUrl: '/app/templates/gig-detail.html'
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