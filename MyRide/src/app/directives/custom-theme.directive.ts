import { Directive, ElementRef, AfterViewInit, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomTheme]'
})
export class CustomThemeDirective implements AfterViewInit{

@Input() inputColor: string;
@Input() align : string;
@Input() defaultColor : string;
@Input('appCustomTheme') textDeco : string;

  constructor(private elRef: ElementRef ) { }

@HostListener('mouseover') onMouseOver() {
  	this.changeBackgroundColor(this.textDeco || this.defaultColor);
}

@HostListener('mouseleave') onMouseLeave() {
	 this.changeBackgroundColor(this.defaultColor || this.textDeco);
}
@HostListener('click') onClick() {
   this.changeBackgroundColor('red');
}


  ngAfterViewInit():void { console.log("textDeco", this.textDeco);
  	this.elRef.nativeElement.style.color = 'red';
  	this.elRef.nativeElement.style.textAlign = this.align;
  	this.elRef.nativeElement.style.backgroundColor = this.inputColor;
  	this.elRef.nativeElement.style.fontSize = '20px';
  	this.elRef.nativeElement.style.textDecoration = this.textDeco;
  	this.elRef.nativeElement.style.border = this.textDeco;

  }

  private changeBackgroundColor(color:string){
  		this.elRef.nativeElement.style.backgroundColor= color;
  }

}
