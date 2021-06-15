import { Injectable } from '@angular/core';
import {Constant} from '../../app/api'; //romeo
import {  HttpHeaders, HttpClient} from '@angular/common/http'; //romeo 
import {Api} from '../api/api';
import { Observable } from 'rxjs'; // romeo  
import { sol} from '../../app/Json_Type_de_sol';

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
export class UtilisateurService {

  constructor(public Api: Api,private myhttp: HttpClient ) { }

   // fonction de connexion de l'utilisateur 
  connect(email : string, pwd : string){
      let url  = '/utilisateur/utilisateurs/connexion?mail='+email+'&pwd='+pwd;
      return this.Api.get(url, {}, {responseType: 'text'});
  }  // Good CODE
  
  
  
  //romeo ; a restructurer 
  
  url_bases = new Constant();

 get_type_sol () {
   return sol;
 }
  connexion(Email, pass):Observable<any>{
    return this.myhttp.get(this.url_bases.url_connect + Email + '&pwd=' + pass, httpOptions)
  }
  inscription(base_url, donne):Observable<any>{
      let endpoint= "utilisateur/utilisateurs?basePath="+ base_url;
      return this.Api.post(endpoint,donne,httpOptions);
  
  }
  restauration(mail, base_url ):Observable<any>{
    let endpoint= 'utilisateur/utilisateurs/forget_password?mail='+ mail + '&basePath=' + base_url;
    return this.Api.put(endpoint,{}, httpOptions);

}
 /* welcome(mail):Observable<any>{
    return this.myhttp.get(this.url_bases.url_accueil + mail);
  }*/

  modif_token(email : string){
   let url = 'utilisateur/utilisateurs/generate_token?mail=';
    return this.Api.get(url + email, {}, {responseType: 'text'});
  }

  update(pass:string, token: string){
    let url= 'utilisateur/utilisateurs/reset?password=';
    return this.Api.put(url + pass + '&token=' + token, httpOptions);
   
  }
  update_complete(donne: any):Observable<any>{
    let url = 'utilisateur/utilisateurs'; 
    return this.Api.put(url, donne, httpOptions);
  }
}
