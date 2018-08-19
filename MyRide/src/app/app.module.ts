import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserChildComponent } from './user-child/user-child.component';
import { AdminComponent } from './admin/admin.component';
import { AdminChildComponent } from './admin-child/admin-child.component';
import { ViewParentComponent } from './view-parent/view-parent.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { ServiceParentComponent } from './service-parent/service-parent.component';
import { ServiceChildComponent } from './service-child/service-child.component';

/*Services*/
import { MessageSharingService } from './message-sharing.service';


@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent,
    UserChildComponent,
    AdminComponent,
    AdminChildComponent,
    ViewParentComponent,
    ViewChildComponent,
    ServiceParentComponent,
    ServiceChildComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [MessageSharingService],
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
