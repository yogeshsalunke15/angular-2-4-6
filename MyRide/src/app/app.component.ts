import { Component } from '@angular/core';
//import { cpDefaultTheme  } from './directives-attribute/custom-theme.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyRide Application ';
  bgColor = '#36ef36';
  textdeco = "underline";
  bdr = "2px solid blue";
  pink = 'pink';
}
