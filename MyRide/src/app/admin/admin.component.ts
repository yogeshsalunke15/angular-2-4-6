import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  template: `
	    <div class='row mb-4'><h3>Hello Yogesh Salunke: Wlecome to Component Inter Communication </h3></div>
	    <div class='mb-3'><app-admin-child [msg1]="parentMessge" 
								    [msg2]="IndiaMessge" 
								    [AtalMsg]="AtalMsg"
								    [voterList] = "votersList"
								    (voted) = "onVote($event)"
								    >
	    </app-admin-child></div>
	    <div>---------------------------------------------------------------------------------</div>
	    <div class='row'>Below is Admin Parent Component rendering  @Output Data from Child Component !</div>
	    <div class='row'>
	    	<div class='col'>
	    		<div>Agreed : {{agreed}}</div>
	    		<div>Disagreed : {{disagreed}}</div>
	    	</div>
	    </div>

	  `,
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  parentMessge: string = "Bharat Mata Ki Jay !";
  IndiaMessge: string = " Vande Mataram !";
  AtalMsg: string = "Atal Bihari Vajapeyi !";
  agreed: number = 0;
  disagreed: number = 0;
  votersList = ['Mr. Yogesh', 'Ms. Megha', 'Mr.Dixit', 'Mr.Shejul'];

  constructor() { }

  ngOnInit() {
  }

  onVote(agreed: boolean){
  	agreed ? this.agreed++ : this.disagreed++;
  }

}
