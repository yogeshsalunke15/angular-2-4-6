import { Component, OnInit, ViewChild, ElementRef,AfterViewInit } from '@angular/core';
import {ViewChildComponent} from '../view-child/view-child.component';

@Component({
  selector: 'app-view-parent',
  templateUrl: './view-parent.component.html',
  styleUrls: ['./view-parent.component.css']
})
export class ViewParentComponent implements OnInit, AfterViewInit {

 @ViewChild(ViewChildComponent)
 private viewchild : ViewChildComponent;
 
  @ViewChild('parentDiv')
  private eleName : ElementRef;


  constructor() { }

  ngOnInit() {
  }

  increase(){
  	let fromChild = this.viewchild.increaseBytwo();
  	console.log("fromchild -- "+fromChild);
  }

  decrease(){
  	let fromChild = this.viewchild.decreaseByTwo();
  	console.log("fromchild -- "+fromChild);
  }

  ngAfterViewInit(){
  	this.eleName.nativeElement.style.backgroundColor = "cyan";
  }

}
