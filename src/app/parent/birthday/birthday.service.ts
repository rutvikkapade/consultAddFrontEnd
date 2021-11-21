import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BirthdayService {

  constructor(private http:HttpClient) { }

  generateBirthdayData():Observable<any>{
    return this.http.get('http://localhost:8080/getUserTwoData');
  }

  sortBirthdayDataByName():Observable<any>{
    return this.http.get('http://localhost:8080/sortByName');
  }

  sortBirthdayDataByDate():Observable<any>{
    return this.http.get('http://localhost:8080/sortByAge');
  }

}
