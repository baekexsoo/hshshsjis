import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Api } from 'src/providers/api/api';
import { Subscription, Subject } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class DataPasseService {

  subscription: Subscription;

  private programSource: any = new BehaviorSubject<string>(null);
  currentProgram: any = this.programSource.asObservable();


  constructor() { }

  changeProgram(query: any) {
    this.programSource.next(query);
   }


}