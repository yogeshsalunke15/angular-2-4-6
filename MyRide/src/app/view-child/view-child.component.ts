import { Component, OnInit } from '@angular/core';
import { MessageSharingService } from '../message-sharing.service';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit {

  counterMsg: string = "";
  counter : number = 0;		
  constructor(private _dataService : MessageSharingService) { }

  ngOnInit() {
  	this._dataService.setObj('dob', '15-02-1990');
  }

  increaseBytwo(){
   	this.counter = this.counter + 2;
  	this.counterMsg = 'Counter Increased & current value is: '+this.counter;
  	this.sendMessage('Message from View-Child Component is : increaseBytwo !');
  	return this.counter;
  }

   sendMessage(msg): void {
        // send message to subscribers via observable subject
        this._dataService.sendData(msg);
    }

  decreaseByTwo(){
  	this.counter = this.counter - 2;
  	this.counterMsg = 'Counter Decreased & current value is: '+this.counter;
  	this.sendMessage('Message from View-Child Component is : decreaseByTwo !');
  	return this.counter;
  }


}
