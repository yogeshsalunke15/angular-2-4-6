import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directive',
  templateUrl: './attribute-directive.component.html',
  styleUrls: ['./attribute-directive.component.css']
})
export class AttributeDirectiveComponent implements OnInit {

bgColor = '#36ef36';
textdeco = "underline";
bdr = "2px solid blue";
pink = 'pink';

  constructor() { }

  ngOnInit() {
  }

}
