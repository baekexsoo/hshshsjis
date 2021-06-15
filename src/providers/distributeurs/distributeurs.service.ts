import { Injectable } from '@angular/core';
import {  HttpHeaders, HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Api } from '../api/api';
import { Dist } from 'src/app/mock_data/distributeurs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class DistributeursService {

  Base_url = 'https://api.dev.duniyadata.com/dunya/distributeurs?zone=';

  constructor( public api: Api, private http: HttpClient) { }

  list_distributeurs(zone, produit, page): Observable<any> {

        return this.http.get(this.Base_url + zone + '&produit=' + produit + '&page=' + page, httpOptions)

  }


  liste_simulation_dist (): Observable<any> {
    return of(Dist);
  }
}
