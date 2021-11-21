import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.css']
})
export class BirthdayComponent implements OnInit {

  constructor( ) { }
  birthdayData: any[]=[];
  ngOnInit(): void {
   
  }
  recievedTable($event: any[]){
    this.birthdayData = $event;
    console.log(this.birthdayData);
  }




}
