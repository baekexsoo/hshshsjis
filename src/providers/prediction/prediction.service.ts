import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Api} from '../api/api';
import {  HttpHeaders, HttpClient} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Accept': '*/*'
   // 'responseType': 'text'
  })
};   // a retirer     
@Injectable({
  providedIn: 'root'
})


export class PredictionService {

  serviceport = "7050";
  constructor(public Api : Api) { 
     // this.Api.Setport(this.serviceport)
  }
  
  
  
  prediction(data : {}) : Observable<any>  {
      let endpoint = "prediction/previsions";
      return this.Api.post(endpoint, data, httpOptions);
     // return resultPrediction;
      
  }
}
