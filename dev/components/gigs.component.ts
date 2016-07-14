import {Component} from 'angular2/core'; 
import {ApiService} from '../services/api.service';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({  
    templateUrl: '/app/templates/gigs.html',
    directives: [ROUTER_DIRECTIVES]
})

export class GigsComponent {
    public editing:boolean = true;
        
    constructor(private _apiservice:ApiService) {
        this._apiservice
            .getGigs()
            .subscribe(gigs => this.gigs = gigs,
                error => console.log(error),
                () => console.log('Gigs loaded')
            );
    }

    deleteGig(gigID) {
        if (confirm("Are you sure?")) {
            this._apiservice
                .deleteGig(gigID)
                .subscribe(console.log('Gig successfully deleted'),
                error => console.log(error),
                () => location.href = '/'
            );
        }
        
        return false;
    }

    toggleEdit() {
        return this.editing = !this.editing;
    }
}