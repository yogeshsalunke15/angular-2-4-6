import { Component, OnInit, ViewChild, ElementRef,AfterViewInit, OnDestroy } from '@angular/core';
import {ViewChildComponent} from '../view-child/view-child.component';
import { MessageSharingService } from '../message-sharing.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-view-parent',
  templateUrl: './view-parent.component.html',
  styleUrls: ['./view-parent.component.css']
})
export class ViewParentComponent implements OnInit, AfterViewInit, OnDestroy {

 @ViewChild(ViewChildComponent)
 private viewchild : ViewChildComponent;
 
 /* Modifies the DOM of current Component view Using Tempalte Variable */
  @ViewChild('parentDiv')
  private eleName : ElementRef;

  message : any;
  subscription: Subscription ;

  constructor(private MsgService : MessageSharingService) {

  	this.subscription = this.MsgService.getData().subscribe(message => { this.message = message; });
  	console.log("this.subscription  ==> "+this.subscription);
   }

  ngOnInit() {
  	let messages = this.MsgService.getAllUsers();
  	console.log("Messages from Mesage Service, ", messages);
  	console.log(this.MsgService.getSavedObj());
  	//this.MsgService.setObj('mobile', '9922020434');
  }

  increase(){
  	let fromChild = this.viewchild.increaseBytwo();
  	console.log("fromchild -- "+fromChild);
  	this.MsgService.setObj('mobile', '9922020434');
  }

  decrease(){
  	let fromChild = this.viewchild.decreaseByTwo();
  	console.log("fromchild -- "+fromChild);
  }

  ngAfterViewInit(){
  	this.eleName.nativeElement.style.backgroundColor = "cyan";
  }

  ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }

}
