import { Component, OnInit, Input, Output } from '@angular/core';
import { UtilisateurService } from '../../providers/utilisateur/utilisateur.service';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-pwd',
  templateUrl: './update-pwd.component.html',
  styleUrls: ['./update-pwd.component.css']
})
export class UpdatePwdComponent implements OnInit {

  
  ancien = "";
  nouveau = "";
  confirme = "";
  sms_erreur = "";
  sms_reus = false;
  email_token= "";
  rece_token = "";
  rece_resul: any;
  rece_pass: any;
  tokens: any;
  url: any;
  act_header: boolean;
  act_btn: boolean;
  charg :boolean;
  confirm = false;
  constructor(private route: ActivatedRoute, public modif : UtilisateurService) { 
    this.email_token = sessionStorage.compte;
    
  }

  ngOnInit() {
    this.tokens = this.route.snapshot.paramMap.get('ref?');

    this.affichage();
    
  }
  affichage(){
    if (this.tokens === null || this.tokens === undefined){
      this.act_btn = true;
      this.act_header = true;
    }
    else{
      this.act_btn = false;
      this.act_header = false;
    }
  }


  finale(){
    if (this.tokens === null || this.tokens === undefined){
   //   this.udapte_pass();
    }
    else{
      if (this.nouveau !== this.confirme){
        this.sms_erreur = 'confirmez votre mot de passe';
        console.log(this.tokens);
        this.sms_reus = false;
      }else{
      return this.modif.update(this.nouveau,this.tokens).subscribe(
        response =>{
          this.rece_resul = response;
          console.log(this.rece_resul)
          this.confirm = true;
          this.sms_reus = true;
        })
      }
    }
    this.charg = false;
  }

  /*token(){
    return this.modif.welcome(this.email_token).subscribe(
      response =>{
        this.rece_pass = response.password;   
        console.log(this.rece_pass); 

        if (this.ancien === this.rece_pass){

          return this.modif.modif_token(this.email_token).subscribe(
            response =>{
              this.rece_token = response;
              console.log(this.rece_token);

              return this.modif.update(this.nouveau,this.rece_token).subscribe(
                response =>{
                  this.rece_resul = response;
                  this.confirm = true;
                  this.sms_reus = true;
              
                }
              )
            }
          )
        }
        else{
          this.sms_erreur = "Ancien mot de passe incorrect";
        }
    
      }, err=>{
                  
        console.log(err);
        if(err.statusText === "Unknown Error"){this.sms_erreur= "un problème à été rencontré veuillez ressayer plus tard.";}
        else{
          if(err.status === 500){
            this.sms_erreur = "Identifiants incorrects."
          }
        }
    }    )
  }*/
 /* udapte_pass(){
    this.charg = true;
    
    if (this.ancien === "" || this.nouveau === "") {
      this.sms_erreur = 'Remplissez les champs';
    }  
    else{
      if (this.nouveau !== this.confirme){
        this.sms_erreur = 'confirmez votre mot de passe';
        this.sms_reus = false;
      }
      else{
        this.token();
        this.sms_erreur = "";
      }
    }
    this.charg = false;
    
  }   */        
}
