import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked,
           AfterViewInit, AfterViewChecked, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-user-child',
  templateUrl: './user-child.component.html',
  styleUrls: ['./user-child.component.css']
})
export class UserChildComponent implements OnInit, OnChanges {

	@Input() childAddress: any;

	constructor() { console.log('----------------------------------child constructor '); }

	ngOnInit() {
		console.log('Child ngOnInit');
	}

	ngOnChanges(changes: SimpleChanges) {
        console.log(' Child OnChanges');
        console.log('changes Object -->', changes);
         for (let propName in changes) {  
			let change = changes[propName];
			let curVal  = JSON.stringify(change.currentValue);
			let prevVal = JSON.stringify(change.previousValue);

		        console.log("curVal ",curVal);
		        console.log("prevVal ",prevVal);
		}
    }


	  ngDoCheck() {
	    console.log(" Child ngDoCheck Called")
	  }

	  
	  ngAfterContentInit() {
	    console.log(" Child ngAfterContentInit Called");
	  }

	  
	  ngAfterContentChecked() {
	    console.log("Child ngAfterContentChecked Called");
	  }

	  
	  ngAfterViewInit() {
	    console.log("Child ngAfterViewInit Called");
	  }


	  ngAfterViewChecked() {
	    console.log("Child ngAfterViewChecked  Called ");
	  }

	  ngOnDestroy() {
	    console.log(" Child ngOnDestroy  Called");
	    //alert("Destroying Component");
	  }


}
