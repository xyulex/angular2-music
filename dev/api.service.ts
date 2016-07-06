import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
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
}