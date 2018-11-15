import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-in-built-directives',
  templateUrl: './in-built-directives.component.html',
  styleUrls: ['./in-built-directives.component.css']
})
export class InBuiltDirectivesComponent implements OnInit {

 valid:boolean = true;
 users = [
 	{name:'Yogesh', age:29},
 	{name:'Sapna', age:29},
 	{name:'Megha', age:30}
 ]
 ngclasses = {'one':true, 'three':true};
 test: null;
  constructor() { }

  ngOnInit() {
  }

  changeValue(condition:boolean){
  	this.valid = condition;
  }

  changePropagaionfn(index, item){
  		console.log(index,item);
  }

adduser(){
	this.users.push({name:'Yogesh', age:29});
}

}
