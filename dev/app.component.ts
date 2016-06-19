import {Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {ApiService} from './api.service';
import {AddGigComponent} from './add.gig.component';
import {BandsComponent} from './bands.component';
import 'rxjs/add/operator/map';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@RouteConfig([
  { path: '/add/', name: 'AddGig', component: AddGigComponent },
  { path: '/bands/', name: 'Bands', component: BandsComponent }
])


@Component({
    selector: 'searchBox', 
    directives: [ROUTER_DIRECTIVES]
    template: `
    <main>
        <router-outlet></router-outlet>
        </main>
        <h1>Gigs list</h1>
        <nav>
            <ul>         
                <li>
                <a [routerLink] = " ['AddGig'] ">Add gig</a>
                <a [routerLink] = " ['Bands'] ">Bands seen</a>
                </li>
            </ul>   
      </nav>
        
        <div class="searchResults" *ngIf = "gigs">
        	<table>
            	<tr *ngFor="#data of gigs">
                <td>{{ data.date | slice:0:10}}</td>
                <td><a href="#" (click)="getGigDetail(data._id)">{{ data.bands}}</a></td>
                <td> {{ data.venue }} </td>                
                </tr>
        	</table>
        </div>
    `,
})

export class AppComponent implements OnInit {
    constructor(private _apiservice: ApiService) { }
 
    ngOnInit() {
        home : true;
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