import {Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {AddGigComponent} from  './add.gig.component';
import {BandsComponent}  from  './bands.component';
import {GigsComponent}   from  './gigs.component';
import 'rxjs/add/operator/map';

import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@RouteConfig([
  { path: '/', name: 'Gigs', component: GigsComponent },
  { path: '/add/', name: 'AddGig', component: AddGigComponent },
  { path: '/bands/', name: 'Bands', component: BandsComponent }
])


@Component({
    selector: 'searchBox', 
    directives: [ROUTER_DIRECTIVES]
    template: `
        <nav>
            <ul>
                <a [routerLink] = " ['Gigs'] ">Start</a>                
                <a [routerLink] = " ['AddGig'] ">Add gig</a>
                <a [routerLink] = " ['Bands'] ">Bands seen</a>
            </ul>   
        </nav>
        <router-outlet></router-outlet>
    `,
})

export class AppComponent {
    
}