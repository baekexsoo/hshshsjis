import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from '../../providers/utilisateur/utilisateur.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  objet = {
    id: "",
    budget: 0,
    email: "",
    nom: "",
    numero: "",
    numeroIFU: "",
    quartierOuVillage: "",
     }
     sms_err = '';
     loader = false;
profi_data: any;
  constructor( public profil : UtilisateurService) { }

  ngOnInit() {
    this.objet.email = sessionStorage.compte;
   // this.rec_id();
  }
 /* rec_id(){
    return this.profil.welcome(this.objet.email).subscribe(
      response => {
        this.objet.id = response.id;
        console.log(this.objet.id);
      }
    )
  }*/

  update(){
    this.loader = true;
    return this.profil.update_complete(JSON.stringify(this.objet)).subscribe(
      response =>{
        this.profi_data = response;
        this.loader = false;
      },err =>{
        if( err.status !== 200){
          this.sms_err= "un problème à été rencontré veuillez ressayer plus tard.";
        }
      }
    )
  }

}
