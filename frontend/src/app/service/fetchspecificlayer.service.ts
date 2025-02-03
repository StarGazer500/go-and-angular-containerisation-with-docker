import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FetchspecificlayerService {

  constructor(private http: HttpClient) { }

  // Method using subscribe
  querySpecficFeatureLayer(featurelayer:string): Observable<any> {
    return this.http.post<any>('http://127.0.0.1:80/map/searchbyfeaturelayer',{ 
      selectedLayer: featurelayer
    },);
  }
}

