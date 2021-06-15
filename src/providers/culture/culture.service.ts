import { Injectable } from '@angular/core';
import {  HttpHeaders, HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Api } from '../api/api';
//import { Culture } from 'src/app/mock_data/culture';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Bearer 31c79287-65c4-3609-91f4-ffbd1240a873',
  })
};
@Injectable({
  providedIn: 'root'
})
export class CultureService {
  Base_url = 'https://api.dev.duniyadata.com/dunya/speculations';


  constructor(private Api : Api, private http: HttpClient) { }

  liste(): Observable<any> {
    let url = 'speculations';
    return this.Api.get(url , '', httpOptions);
  }

  /*liste_simulation_culture (): Observable<any> {
    return of(Culture);
  }*/
}