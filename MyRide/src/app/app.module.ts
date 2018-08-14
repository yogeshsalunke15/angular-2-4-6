import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  //bootstrap: [AppComponent] 
  entryComponents: [UserRegistrationComponent]

})
export class AppModule { 

	ngDoBootstrap(app){
 		
 		let element = document.createElement('app-user-registration');
 		document.body.appendChild(element);
 		app.bootstrap(UserRegistrationComponent);
	}
}
