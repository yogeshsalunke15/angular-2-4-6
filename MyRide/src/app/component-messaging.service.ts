import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ComponentMessagingService {
 apiUrl : string;
  constructor(private http: HttpClient) {
  	this.apiUrl = 'assets/users.json';
   }

   getUsers() {
    	return this.http.get(this.apiUrl);
    }
}
