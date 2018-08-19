import { Injectable } from '@angular/core';
import { Observable, Subject  } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MessageSharingService {

 private SharedObject : any = {};a
 private observableMsg = new Subject<any>();
  
  constructor() { 
  	this.SharedObject.name = "Yogesh salunke";
  }

  sendData(msg : string){ //alert(msg);
  	this.observableMsg.next(msg);
  }

  getData(): Observable<any> {
  	return this.observableMsg.asObservable();
  }


  getAllUsers() {
    return [
      { name: 'Luke Skywalker', height: 177, weight: 70 },
      { name: 'Darth Vader', height: 200, weight: 100 },
      { name: 'Han Solo', height: 185, weight: 85 },
    ]
  }

  setObj(key, value){
  		this.SharedObject[key] = value;
  }

  getSavedObj() {
  	return this.SharedObject;
  }

}
