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
  user_validation_messages: any = {};
  formSubmitted : boolean = false;

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
    this.user_validation_messages = {
        'fName': [
          { type: 'required', message: 'First Name  is required' },
          { type: 'minlength', message: 'First Name  must be at least 3 characters long' }
        ],
        'lName': [
          { type: 'required', message: 'Last Name  is required' },
          { type: 'minlength', message: 'Last Name  must be at least 3 characters long' }
        ],
        'email': [
          { type: 'required', message: 'Email is required' },
          { type: 'pattern', message: 'Enter a valid email' }
        ],
        'phone': [
          { type: 'required', message: 'Phone is required' },
          { type: 'pattern', message: 'Enter a valid email' },
          { type: 'minlength', message: 'Phone must be at least 10 characters long' },
          { type: 'maxlength', message: 'Phone must not exceed more than 14 character' }
        ],
        'street': [
          { type: 'required', message: 'Street / house no is required' },
          { type: 'maxlength', message: 'Street / house no must not exceed more than 30 character'}
        ],
        'city': [
          { type: 'required', message: 'city is required' },
          { type: 'minlength', message: 'city must be at least 3 characters long' },
          { type: 'maxlength', message: 'city must not exceed more than 20 character' }
        ],
        'state': [
          { type: 'required', message: 'state is required' },
          { type: 'minlength', message: 'state must be at least 3 characters long' },
          { type: 'maxlength', message: 'state must not exceed more than 50 character' }
        ],
        'zip': [
          { type: 'required', message: 'zip code is required' },
          { type: 'minlength', message: 'zip must be at least 6 characters long' },
          { type: 'maxlength', message: 'zip must not exceed more than 18 character' }
        ]
    }

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
  		fName: ['', Validators.compose([Validators.required, 
                                      Validators.minLength(3)
                                      ])], 
  		lName: ['',  Validators.compose([Validators.required, 
                                      Validators.minLength(3)
                                      ])],
      email:['',  Validators.compose([Validators.required, 
                                      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
                                      ])],
      phone:['', Validators.compose([Validators.required,
                                     Validators.minLength(10),
                                     Validators.maxLength(14), 
                                      Validators.pattern('[0-9]+')
                                      ])],
  		address: this.userForm.group({
    			street: ['',Validators.compose([Validators.required,
                                         Validators.maxLength(50)
                                        ])],
  		    city: ['', Validators.compose([Validators.required,
                                         Validators.minLength(3),
                                         Validators.maxLength(20)
                                        ])],
  		    state: ['', Validators.compose([Validators.required,
                                         Validators.minLength(3),
                                         Validators.maxLength(30)
                                        ])],
  		    zip: ['', Validators.compose([Validators.required,
                                         Validators.minLength(6),
                                         Validators.maxLength(18)
                                        ])]
  		})
  });


  onUserSubmit(userform) {
  	//console.warn(userform.value, "userform");
      if (this.userRegistrn.invalid) { 
            return;
       }
    this.childAddress = userform.value;
    this.userRegistrn.reset();
	}

}
