import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rightpage',
  templateUrl: './rightpage.component.html',
  styleUrls: ['./rightpage.component.css']
})
export class RightpageComponent implements OnInit {

  constructor() { }
  
    
  @Input() public result:any;
  

  ngOnInit(): void {
    this.result={
      first:"",
      last:"",
      address:"",
      blood:""
    }
  }


}
