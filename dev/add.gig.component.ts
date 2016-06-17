import {Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'addGig',
    template: `
        <button (click)="addGigForm()">Add gig</button>        
        `
})

export class AddGigComponent {
    addGigForm() {

    },

    saveGig() {

    }
	
}