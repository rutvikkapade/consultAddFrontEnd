import { Component, OnInit, Output ,EventEmitter  } from '@angular/core';
import { BirthdayService } from '../birthday.service';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.css']
})
export class RadioButtonComponent implements OnInit {

  constructor(private birthdayService:BirthdayService) { }
  test:string="";
  ngOnInit(): void {
  }
  @Output() sortedData=new EventEmitter<any[]>();
  
  sortTable(): void{
    if(this.test=="name"){
      console.log(this.test);
      this.birthdayService.sortBirthdayDataByName().subscribe(data => {
        this.sortedData.emit(data);
      });
    }else{
      console.log(this.test);
      this.birthdayService.sortBirthdayDataByDate().subscribe(data => {
        this.sortedData.emit(data);
      });
    }
    
  }

  run(){
    console.log(this.test);
  }
}
