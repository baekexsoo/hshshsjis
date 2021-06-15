import { Injectable } from '@angular/core';
import {  HttpHeaders, HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Api } from '../api/api';
//import { Ong } from 'src/app/mock_data/ong';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Bearer 31c79287-65c4-3609-91f4-ffbd1240a873',
  })
};
@Injectable({
  providedIn: 'root'
})
export class OngService {

  constructor(public Api: Api) { }

  liste(): Observable<any> {
    let url = 'dunya/ongs';
    return this.Api.get(url , httpOptions);
  }
  list_by_zone (zone) {
    let url = 'ongs?zone=' + zone;
    return this.Api.get(url,'', httpOptions);
  }
  /*liste_simulation_ong (): Observable<any> {
    return of(Ong);
  }*/
}