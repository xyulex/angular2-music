import {Component} from 'angular2/core';
import {FormBuilder, ControlGroup, Validators} from 'angular2/common';

@Component({
  selector: 'add-gig-form',
  templateUrl: './add-gig-form.html',
  //moduleId: module.id
})
export class AddGigComponent {
  userForm: ControlGroup;

  constructor(fb: FormBuilder) {
    this.userForm = fb.group({
      bands: fb.control('', Validators.compose([Validators.required, Validators.minLength(3)])),
      date: fb.control('', Validators.required),
      price: fb.control('', Validators.required),
      venue: fb.control('', Validators.required)
    });
  }

  addGig() {
    console.log(this.userForm.value);
  }
}