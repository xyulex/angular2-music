import {Component, Injectable} from 'angular2/core'; 
import {AddGigComponent} from  './components/add.gig.component';
import {BandsComponent}  from  './components/bands.component';
import {GigsComponent}   from  './components/gigs.component';
import {GigDetailComponent}   from  './components/gig.detail.component';
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
                <span class="glyphicon glyphicon-home"></span> <a [routerLink] = " ['Gigs'] ">Start</a>
                <span class="glyphicon glyphicon-plus"></span> <a [routerLink] = " ['AddGig'] ">Add gig</a>
                <span class="glyphicon glyphicon-ok"></span> <a [routerLink] = " ['Bands'] ">Bands seen</a>
            </ul>
        </nav>
        <router-outlet></router-outlet>
    `,
})

@Injectable()
export class AppComponent {    
}