import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomStructural]'
})
export class CustomStructuralDirective {

  constructor(	private templateRef: TemplateRef<any>, 
  				private viewContainer:ViewContainerRef) { 

  	}

	/* set method name should be exactly same as directive selector  or aonther way is create  aliase as below*/
	  @Input() set appCustomStructural(condition:boolean){
	  	 
	  }

	/* Aliase of above method */
	 @Input('appCustomStructural') set showHide(condition:boolean) {
	 		if(condition){
	 			this.viewContainer.createEmbeddedView(this.templateRef);
	 		}
	 		else{
	 			this.viewContainer.clear();
	 		}
	 }

	 /* Directive  with for loop */
	 @Input ('appCustomStructural') set cploop (num:number){

	 		for (var i = 0; i < num; ++i) {
	 			this.viewContainer.createEmbeddedView(this.templateRef);
	 		}
	 }

}
