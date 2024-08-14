import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  constructor(private _HttpClient:HttpClient) {}

  getData():Observable<any>{
  return  this._HttpClient.get<any>('https://reqres.in/api/users?page={page')
  }
}
