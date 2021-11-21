import { Component, Input, OnInit } from '@angular/core';
import { BirthdayService } from '../birthday.service';

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.css']
})
export class TableComponentComponent implements OnInit {

  constructor(private birthdayService: BirthdayService) { }

  
  @Input() birthdayData: any[] = [];
  
  ngOnInit(): void {
    this.birthdayService.generateBirthdayData().subscribe(data => {
      this.birthdayData = data;
    });
  }

  

}
