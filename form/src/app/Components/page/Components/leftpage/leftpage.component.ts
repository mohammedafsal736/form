import { Component,EventEmitter, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-leftpage',
  templateUrl: './leftpage.component.html',
  styleUrls: ['./leftpage.component.css']
})

export class LeftpageComponent implements OnInit {

  input={
    first:"",
    last:"",
    address:"",
    blood:""
  }
   

  constructor() { }

  ngOnInit(): void {
  }

 

  @Output() public out = new EventEmitter<any>();
  submitProjectDetails(){
    this.out.emit(this.input);
    console.log("clicked");
    // console.log(this.input);
  }
  

}
