import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserChildComponent } from './user-child/user-child.component';
import { AdminComponent } from './admin/admin.component';
import { AdminChildComponent } from './admin-child/admin-child.component';

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent,
    UserChildComponent,
    AdminComponent,
    AdminChildComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  //bootstrap: [AppComponent] 
  entryComponents: [UserRegistrationComponent, AdminComponent]

})
export class AppModule { 

	ngDoBootstrap(app){
 		
 		let element = document.createElement('app-admin');
 		document.body.appendChild(element);
 		app.bootstrap(AdminComponent);
	}
}
