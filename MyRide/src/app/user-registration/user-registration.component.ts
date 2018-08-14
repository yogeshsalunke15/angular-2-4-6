import { Component, OnInit } from '@angular/core';
//import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  constructor(private userForm : FormBuilder) { }
  //userRegistrn:any;

  ngOnInit() {
  }

  // userRegistrn = new FormGroup({
  //   fName: new FormControl(''),
  //   lName: new FormControl(''),
  //   address: new FormGroup({
  //  		street: new FormControl(''),
  //   	city: new FormControl(''),
  //   	zip: new FormControl(''),
  //   	state: new FormControl('')
  //   })
  // });
  
  userRegistrn = this.userForm.group({
  		fName: ['', Validators.required],
  		lName: ['', Validators.required],
  		address: this.userForm.group({
  			street: [''],
		    city: [''],
		    state: [''],
		    zip: ['', Validators.required]
  		})
  });

  onUserSubmit(userform) {
  	console.warn(userform.value);
  	//console.log(this.userRegistrn.get(fName));
	}
}
