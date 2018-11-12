import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appCustomStructural]'
})
export class CustomStructuralDirective {

  constructor() { }

	/* set method name should be exactly same as directive selector  or aonther way is create  aliase as below*/
	  @Input() set appCustomStructural(condition:boolean){
	  	 
	  }

	/* Aliase of above method */
	 @Input('appCustomStructural') set showHide(condition:boolean) {
	 			alert("Structral Directive called");
	 		if(condition){

	 		}
	 		else{

	 		}
	 }

}
