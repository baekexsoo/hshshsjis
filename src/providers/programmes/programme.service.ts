import { Injectable } from '@angular/core';
import {  HttpHeaders, HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Api } from '../api/api';
import { Programmes } from 'src/app/mock_data/programmes';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Bearer 31c79287-65c4-3609-91f4-ffbd1240a873',
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProgrammeService {
 
  Base_url = 'https://api.dev.duniyadata.com/dunya/';

  constructor(public api: Api, private http: HttpClient) { }

  list_programmes(zone,produit): Observable<any> {
    let url ='programmes';
    return this.api.get(url , httpOptions);

}

/*liste_simulation_prog (): Observable<any> {
  return of(Programmes);
}*/

}
