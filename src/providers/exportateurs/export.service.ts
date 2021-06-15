import { Injectable } from '@angular/core';
import {  HttpHeaders, HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Api } from '../api/api';
import { Exportateurs } from 'src/app/mock_data/exportateurs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Bearer 31c79287-65c4-3609-91f4-ffbd1240a873',
  })
};


@Injectable({
  providedIn: 'root'
})
export class ExportService {

  Base_url = 'https://api.dev.duniyadata.com/?zone=';

  constructor( public api: Api, private http: HttpClient) { }

  list_exportateurs(): Observable<any> {
    let url = 'exportateurs';
    return this.api.get(url, httpOptions);
  }

  list_export_simulation(): Observable<any> {
      return of(Exportateurs);
  
  }

  /* fonction qui renvoie la liste en fonction de la zone et le produit (Romeo)  */

  list_filtre (zone, produit): Observable<any> {
    let url = 'dunya/programmes?zone=' + zone + '&produit=' + produit;
    return this.api.get(url, httpOptions);
  }

  list_by_zone (zone): Observable<any> {
    let url = 'dunya/exportateurs?zone=' + zone;
    return this.api.get(url, httpOptions);
  }
  list_by_produit (produit) {
    let url = 'dunya/exportateurs?produit=' + produit ;
    return this.api.get(url, httpOptions);
  }

}
