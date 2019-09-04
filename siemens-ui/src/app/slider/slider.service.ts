import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  private url = 'https://jsonplaceholder.typicode.com/photos'
  constructor(private http: HttpClient) { }

  getPhotos(): Observable<any[]>{
    return this.http.get<any[]>(this.url);
  }


}
