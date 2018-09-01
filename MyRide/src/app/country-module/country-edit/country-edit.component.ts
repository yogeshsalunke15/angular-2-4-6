import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-country-edit',
  templateUrl: './country-edit.component.html',
  styleUrls: ['./country-edit.component.css']
})
export class CountryEditComponent implements OnInit {

  constructor(	private activatedRte :ActivatedRoute,
  				private router :Router) { }

  ngOnInit() {
  		console.log("Inside Country Edit Component--------->");
  		
  }

}
