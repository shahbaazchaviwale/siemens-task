import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { iTableList } from './model';

@Injectable({
  providedIn: 'root'
})
export class TableListService {

  // private tableURL = "https://api.myjson.com/bins/j4svb";
  private tableURL = "https://api.myjson.com/bins/1gia17";
  constructor(private http: HttpClient) { }

  getTableList(): Observable<iTableList[]>{
    return  this.http.get<iTableList[]>(this.tableURL);
  }
}
