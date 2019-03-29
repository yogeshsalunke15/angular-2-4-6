import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {
Routesub : any;
parmertrId : any = null;
  constructor(private activatedRte :ActivatedRoute,
  				private router :Router) { 
  	this.Routesub = this.activatedRte.params.subscribe(paramsId => {
  		console.log("paramsId",paramsId);
  			//this.parmertrId = paramsId.	
  		});
  }

  ngOnInit() {
  }

	ngOnDestroy() {
	    this.Routesub.unsubscribe();
	}
}
