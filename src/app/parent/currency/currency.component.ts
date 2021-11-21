import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CurrencyService } from './currency.service';


@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  constructor(private currencyService:CurrencyService) { }
  currenCurrency:any[] = [];
  map=new Map();
  fromAmount:number|any;
  toAmount:number|any;
  fromCurr:string|any="USD";
  toCurr:string|any="USD";
  ngOnInit(): void {
    if(this.currenCurrency.length == 0){
      this.currencyService.getCurrencyData().subscribe(data => {
        Object.keys(data).forEach(key => {
         if(key == 'rates'){
           Object.keys(data[key]).forEach(key1 => {
            this.currenCurrency.push({"currCode":key1,"currValue":data[key][key1]});
            this.map.set(key1,data[key][key1]);
          });
         }
        });
        console.log(this.currenCurrency);
      });
    }
   
  }

  fromTo(){
    console.log(this.fromAmount);
    setTimeout(()=>{ 
      console.log(this.fromAmount/this.map.get(this.fromCurr));
      this.toAmount=Math.round((this.fromAmount/this.map.get(this.fromCurr))*this.map.get(this.toCurr)*1000)/1000;
    },1000);
   
  }
  toFrom(){
    console.log(this.toAmount);
    setTimeout(()=>{ 
      console.log(this.toAmount/this.map.get(this.toCurr));
      this.fromAmount=Math.round((this.toAmount/this.map.get(this.toCurr))*this.map.get(this.fromCurr)*1000)/1000;
    },500);
  }
    
  }


