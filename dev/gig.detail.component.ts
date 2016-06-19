import {Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'gigDetailDiv',
    template: `<div>
    		{{ result }}
    			</div>
              
        `,
    directive: 'gigDetail'
})

export class GigDetailComponent {    
	
}