import { Injectable } from '@angular/core';
import {  HttpHeaders, HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constant } from './api';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

// url_bases = new Constant();

  constructor( private myhttp: HttpClient) { }

 /* connexion(Email, pass):Observable<any>{
    return this.myhttp.get(this.url_bases.url_connect + Email + '&pwd=' + pass, httpOptions)
  }
  inscription(base_url, donne):Observable<any>{
  return this.myhttp.post(this.url_bases.url_save + base_url,donne,httpOptions)
  }
  welcome(mail):Observable<any>{
    return this.myhttp.get(this.url_bases.url_accueil + mail);
  }*/

}
