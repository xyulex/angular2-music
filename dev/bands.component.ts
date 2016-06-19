import {Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {ApiService} from './api.service';


@Component({
    template: `
        <h1>Bands!!</h1>`       
})

export class BandsComponent {
    constructor(private _apiservice: ApiService) { }  
}