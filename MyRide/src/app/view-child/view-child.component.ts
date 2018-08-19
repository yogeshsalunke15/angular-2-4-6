import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit {

  counterMsg: string = "";
  counter : number = 0;		
  constructor() { }

  ngOnInit() {
  }

  increaseBytwo(){
   	this.counter = this.counter + 2;
  	this.counterMsg = 'Counter Increased & current value is: '+this.counter;
  	return this.counter;
  }

  decreaseByTwo(){
  	this.counter = this.counter - 2;
  	this.counterMsg = 'Counter Decreased & current value is: '+this.counter;
  	return this.counter;
  }


}
