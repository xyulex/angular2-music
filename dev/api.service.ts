import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {
	initialized = false;
    urlApi = "http://localhost:18000/api";

    constructor(private http:Http) { }

    getGigs() {
    	return this.http.get(this.urlApi + '/gigs/')
    	       .map(res => res.json());
   	}

    getGigDetail(gigID) {
        return this.http.get(this.urlApi + '/gigs/' + gigID)
                .map(res => res.json())
    }

    /*addGig() { 
        return this.http.post(this.urlApi + '/gigs/')
                .map(res => res.json())

    }*/
}