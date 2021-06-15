import { Component, OnInit, Input } from '@angular/core';
//import {UtilisateurService} from '../../providers/utilisateur/utilisateur.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  data_mail: any;
  rec_session: any;
  donne: any;
  constructor( private route: ActivatedRoute, private router: Router) {
    this.rec_session = sessionStorage.compte;
  //  this.bienve();
   }

  ngOnInit() {
    if(this.rec_session === null || this.rec_session === undefined){
      this.donne = this.route.snapshot.params['/home'];
    }
  }
   

 /* bienve(){
    return this.profil.welcome(this.rec_session).subscribe( Response =>{
        this.data_mail = Response.nom;
        console.log(this.data_mail);
    })
  }*/

/*  logout() {
      
       sessionStorage.removeItem('duniya');
       sessionStorage.removeItem('compte');
       this.router.navigate(['/home']);
  }*/
}
