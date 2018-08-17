import { Component, OnInit, Input, Output,  EventEmitter } from '@angular/core';

@Component({
  selector: 'app-admin-child',
  templateUrl: './admin-child.component.html',
  styleUrls: ['./admin-child.component.css']
})
export class AdminChildComponent implements OnInit {

  @Input() msg1: string;
  @Input() msg2: string;
  @Input() AtalMsg:	string;
  @Input() voterList;
  
  @Output() voted = new EventEmitter<boolean>();
  
  didVote: boolean = false;


    constructor() { }

  ngOnInit() {
  }

  vote(agreed: boolean){
  	//alert(agreed);
  	this.voted.emit(agreed);
  	this.didVote = true;
  }

}
