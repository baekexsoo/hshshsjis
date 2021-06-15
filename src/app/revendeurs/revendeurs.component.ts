import { Component, Input, OnInit } from '@angular/core';
import { UtilisateurService } from 'src/providers/utilisateur/utilisateur.service';
import { Constant } from '../api';
import { WindowRefService } from '../window-ref.service';

@Component({
  selector: 'app-revendeurs',
  templateUrl: './revendeurs.component.html',
  styleUrls: ['./revendeurs.component.css']
})
export class RevendeursComponent implements OnInit {
  getValues(val){
    console.warn(val)
  }
  inscrit={
    email: "",
    nom: "",
    numero: "",
    type: "",
    quoi: ""
    }

  lien = new Constant();
  loading = false;  // a l'initialisation le loading est toujours FALSE
  sign_data: any;
  warning ="";
  suscribed = false; // variable définssant si l'enregistrement a été effectué avec succès
  @Input() rec_mail= this.inscrit.email;

  constructor(public inscr: UtilisateurService,private window: WindowRefService) { 
    
  }

  ngOnInit() {
     // console.log(this.window.location.origin);
      
  }

  sign(){
    this.loading= true;
    this.warning = "";
      console.log(this.window.nativeWindow.location.origin);
      return this.inscr.inscription(this.window.nativeWindow.location.origin+"/update", JSON.stringify(this.inscrit)).subscribe(
        response =>{
            this.loading= false;
            this.suscribed = true;  // affecter a true, si l'inscription est réussie 
    },
        err=>{
            if(err.status ===500){this.warning = "Ce compte email existe déjà.";}
            else{
              if(err.status === 415 ){
                this.warning = "Informations Incorrectes. Vérifiez L'email"; 
              }
              else{
                this.warning = "Une erreur est survenue. Veuillez reessayer";
              }
            }
            this.loading = false;
  })
  }
  onRevendeurSubmit() {
    alert(this.inscrit.nom + " Merci pour votre inscription. Nous vous reviendrons sous peu");
  }

}

