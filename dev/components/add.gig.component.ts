import {Component} from 'angular2/core'; 
import {FormBuilder, ControlGroup, Validators} from 'angular2/common';
import {ApiService} from '../services/api.service';

@Component({
  selector: 'add-gig-form',
  templateUrl: '/app/templates/add-gig-form.html'
})

export class AddGigComponent {
  userForm: ControlGroup;

  constructor(private _apiservice: ApiService, fb: FormBuilder) {

    this.userForm = fb.group({
      bands: fb.control('', Validators.compose([Validators.required, Validators.minLength(3)])),
      date:  fb.control('', Validators.required),
      price: fb.control('', Validators.required),
      venue: fb.control('', Validators.required) 
    });

    this._apiservice
        .getGigs()
        .subscribe(gigs => this.gigs = gigs,
            error => console.log(error),
            () => console.log('Gigs loaded in add gig component')
        );
    }

    addGig () {
      return this._apiservice
          .addGig(this.userForm)
          .subscribe(
            console.log('Gig add data sent'),
            error => console.log(error),
            () => location.href = '/'
          );
    }
}