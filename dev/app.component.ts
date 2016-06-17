import {Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'searchBox',
    template: `
        <h1>Gigs list</h1>
        <div class="searchResults" *ngIf="initialized">
        	<table>
            	<tr *ngFor="#data of datas">
                <td>{{ data.date | slice:0:10}}</td>
                <td><a href="#" (click)="gigDetail(data._id)">{{ data.bands}}</a></td>
                <td> {{ data.venue }} </td>
                </tr>
        	</table>
        </div>
        `
})

export class AppComponent {
	initialized = false;
	
    constructor(private http: Http) {  
    	http.get('http://localhost:18000/api/gigs/')
    		.map(res => res.json())
    		.subscribe( datas => this.datas = datas,
    					err   => this.createJSON(),
    					()    => this.initialized = true;
    				);
   	},

    gigDetail(gigID) {
        this.http.get('http://localhost:18000/api/gigs/' + gigID)
        .map(res => res.text())
        .subscribe(
          err => console.log(err),
          () => console.log('DONE!');
        );
    },

    gigAdd() {
    }      		
}