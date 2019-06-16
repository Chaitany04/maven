import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseURI = "http://dummy.restapiexample.com/api/v1/employees";
const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(private http: HttpClient) { }

  getRecord(): Observable<{}> {
    return this.http.get<any>(baseURI , httpOptions);
  }
}
