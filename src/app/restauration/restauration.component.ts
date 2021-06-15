import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from '../../providers/utilisateur/utilisateur.service';
import {WindowRefService} from './../window-ref.service';

@Component({
  selector: 'app-restauration',
  templateUrl: './restauration.component.html',
  styleUrls: ['./restauration.component.css']
})
export class RestaurationComponent implements OnInit {

  mail= '';
  loading = false;
  data :any;
  sms_err = '';
  confirm = false;
  Email = '';
    constructor(public restaurer: UtilisateurService, private window: WindowRefService) { }

  ngOnInit() {
    this.Email = sessionStorage.compte
  }

  restor(){
    if(this.mail === ''){
      this.sms_err = 'Renseignez le champ.';
    }else{
    this.loading = true;
    return this.restaurer.restauration(this.mail, this.window.nativeWindow.location.origin+"/update").subscribe(
      response =>{
        this.data =response;
        this.loading = false;
        this.confirm = true;
        this.sms_err ='';
      }, err =>{
        if( err.status === 500){
          this.sms_err = 'Identifiants incorrects.';
          this.loading = false;
        }else{
          if( err.status !== 200 ){
            this.sms_err = 'un problème à été rencontré veuillez ressayer plus tard.';
            this.loading = false;
          }
        }
      }

    )
  }
}

}
