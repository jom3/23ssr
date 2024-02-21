import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({providedIn:'root'})
export class DataService{
  private readonly _http = inject(HttpClient)
  private readonly _apiUrl = 'https://fakestoreapi.com/products';

  getAllProducts():Observable<any>{
    return this._http.get(`${this._apiUrl}`);
  }

  getProduct():Observable<any>{
    return this._http.get(`${this._apiUrl}/1`)
  }
}

