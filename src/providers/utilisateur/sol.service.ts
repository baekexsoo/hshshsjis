import { Injectable } from '@angular/core';
import { Api } from './../api/api';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Accept': '*/*'
   // 'responseType': 'text'
  })
};

@Injectable({
  providedIn: 'root'
})
export class SolService {

  sol_url = 'http://192.168.9.16:7050/prediction/previsions';
  agr_url = 'http://192.168.9.16:7051/engrais/modeleEngraiss';
  url_eng_id ='http://192.168.9.16:7051/engrais/modeleEngraiss/'; 
  url_img = 'http://192.168.9.16:7050/prediction/previsions/file/'
  url_prediction = 'http://192.168.9.16:7050/prediction/previsions';

  constructor( public Api:Api, private http: HttpClient ) { }

  get_sol():Observable<any>{
    return this.http.get(this.sol_url,httpOptions);
  }
  engr_id(id){
    return this.http.get(this.url_eng_id + id, httpOptions)
  }
  get_ang():Observable<any>{
    return this.http.get(this.agr_url,httpOptions);
  }

  get_img(image): string{
     /// console.log(this.url_img+image);
    return (this.url_img+image);
    // this.http.get(this.url_img + image, httpOptions)
  }

  new_prediction(donne):Observable<any>{
    return this.http.post(this.url_prediction,donne,httpOptions);
  }
}
