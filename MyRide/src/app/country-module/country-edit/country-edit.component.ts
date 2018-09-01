import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-country-edit',
  templateUrl: './country-edit.component.html',
  styleUrls: ['./country-edit.component.css']
})
export class CountryEditComponent implements OnInit {

  constructor(	private activatedRte :ActivatedRoute,
  				private router :Router) { 
  	
  		console.log("Inside Country Edit Component--------->",this.activatedRte);
  		console.log("router--------->", this.router);
  		//console.log("Router Parameters--------->", this.parm);
		
  }

  ngOnInit() {
  	this.router.navigate([ '../../../list/view', 19], { relativeTo: this.activatedRte });

  	setTimeout(() => 	{ 	console.log("Inside setTimeout Arrow Function.....") ; 
  							this.router.navigate(['/country/list/view', '08']); 
  						}, 5000);

  }

}
