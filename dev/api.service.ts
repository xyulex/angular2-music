import {Injectable} from 'angular2/core';
import {Http, RequestOptions, Headers} from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {
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

    addGig(formData: string) {
        let body = JSON.stringify(formData.value);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.urlApi + '/gigs/', body, options);
    }
}