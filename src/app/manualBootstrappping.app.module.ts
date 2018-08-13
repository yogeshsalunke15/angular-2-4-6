import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [UserComponent]
})
export class AppModule {

		ngDoBootstrap(app) { 
		    const componentElement = document.createElement('app-user');
		    document.body.appendChild(componentElement);
		    app.bootstrap(UserComponent);
		  }

   }
