import {Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

@Component({
    template: `
        <h1>Add gig!!</h1>`

})

export class AddGigComponent {
    constructor(private _http: Http) { }  
}