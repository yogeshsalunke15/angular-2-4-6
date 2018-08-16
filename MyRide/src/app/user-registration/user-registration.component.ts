import {   Component, OnInit, OnChanges, 
           DoCheck, AfterContentInit, AfterContentChecked,
           AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

//import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  degree : string  = '';
  childAddress : any = {};

  constructor(private userForm : FormBuilder) {
      console.log(" Parent constructor Called ");
      this.degree = "BE Computer";
   }

  // checkDegree(value){
  //   console.log("CheckDegree Called !", value) ;
  // }

  ngOnInit() {
    console.log(" Parent ngOnInit Called ");
    //this.onFormChange();
  }

  onFormChange(): void {
      this.userRegistrn.valueChanges.subscribe(val => {
        this.childAddress = val;
        console.log(this.childAddress);
      });
  }
  
  // ngOnChanges() {
  //   console.log(` Parent ngOnChanges - Called`);
  // }
  // ngDoCheck() {
  //   console.log(" Parent ngDoCheck Called")
  // }
  // ngAfterContentInit() {
  //   console.log(" Parent ngAfterContentInit Called");
  // }
  // ngAfterContentChecked() {
  //   console.log("Parent ngAfterContentChecked Called");
  // }
  // ngAfterViewInit() {
  //   console.log("Parent ngAfterViewInit Called");
  // }
  // ngAfterViewChecked() {
  //   console.log("Parent ngAfterViewChecked  Called ");
  // }
  // ngOnDestroy() {
  //   console.log(" Parent ngOnDestroy  Called");
  //   //alert("Destroying Component");
  // }

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
      degree:[''],
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
  	console.warn(userform.value, "userform");
    this.childAddress = userform.value;
	}

}
