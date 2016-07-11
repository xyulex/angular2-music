import {Component} from 'angular2/core';

@Component({
    template: `
        <h1>Bands!!</h1>`       
})

export class BandsComponent {
    constructor(private _apiservice: ApiService) { }  
}