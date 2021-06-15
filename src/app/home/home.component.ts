import { Component, OnInit, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import {UtilisateurService} from '../../providers/utilisateur/utilisateur.service';
import {Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  e_mail="";
  pass= "";
  data_conne: any;
  warning = "";
  // lien = new Constant();


  constructor( private router: Router) { }

  loader = false;
  ngOnInit() {
  }
  
 /* con(){

      this.loader = true ; //c'est ici qu'on impose au loader de s'afficher 
      this.warning = ""; // Pour réinitialiser un warning !!!! IMPORTANT 
      this.User.connect(this.e_mail,this.pass).subscribe(
          
              response =>{ // @jacques, structure changé pour respecter la norme angular
                this.data_conne = response;
                
               let  duniya = {
                    "usermail" : this.e_mail
                }
                  sessionStorage.setItem("duniya", JSON.stringify(duniya));
                 
                 //----------------------------------------------------------------------------------------
                  let compte = {
                    "usermail" : this.e_mail
                  }
                  sessionStorage.setItem("compte", compte.usermail);
               
                this.loader = false; // a la récuperation de la reponse on désactive le loader !!!!!!!!!!!
                this.router.navigate(['/prediction']);
              }, 
              err=>{
                  
                  console.log(err);
                  if(err.status ===500){this.warning = "Identifiants incorrects.";}
                  else{
                  this.warning = "Une erreur est survenue. Veuillez reessayer";
                  }
                  this.loader = false;

              })
  }*/

}
