import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  input={
    first:"",
    last:"",
    address:"",
    blood:""
  }

  recieve(value: any){
    this.input=value;
    console.log(this.input);
  }

}
