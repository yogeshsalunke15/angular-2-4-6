import { Component, OnInit } from '@angular/core';
import { ComponentMessagingService } from '../component-messaging.service';
import { Users } from '../users';

@Component({
  selector: 'app-service-parent',
  templateUrl: './service-parent.component.html',
  styleUrls: ['./service-parent.component.css'],
  providers:  [ ComponentMessagingService ]
})
export class ServiceParentComponent implements OnInit {
	users : Users[];

  constructor(private userService : ComponentMessagingService) { }

  ngOnInit() {

  	this.userService	
      .getUsers()
      .subscribe((data: Users[]) => {
          this.users = data;
          console.log("Users Service Data", this.users);
        });
  }

}
