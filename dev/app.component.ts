import {Component, Injectable} from 'angular2/core';
import {AddGigComponent} from  './add.gig.component';
import {BandsComponent}  from  './bands.component';
import {GigsComponent}   from  './gigs.component';
import {GigDetailComponent}   from  './gig.detail.component';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import 'rxjs/add/operator/map';

@RouteConfig([
  { path: '/', name: 'Gigs', component: GigsComponent },
  { path: '/add/', name: 'AddGig', component: AddGigComponent },
  { path: '/bands/', name: 'Bands', component: BandsComponent },
  { path: '/gig/:id/', name: 'GigDetail', component: GigDetailComponent },
])

@Component({
    selector: 'searchBox',
    directives: [ROUTER_DIRECTIVES],
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

@Injectable()
export class AppComponent {
}