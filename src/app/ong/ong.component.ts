import { Component, OnInit } from '@angular/core';
import { OngService } from 'src/providers/ong/ong.service';
import { from } from 'rxjs';
import { MarketService } from 'src/providers/market/market.service';

@Component({
  selector: 'app-ong',
  templateUrl: './ong.component.html',
  styleUrls: ['./ong.component.css']
})
export class OngComponent implements OnInit {
  liste_departement: any;
  liste_communes: any;
  list: any;
  loading = false;
  objet_list = {
    departement: '',
    zone: '',
    produit: '',
    page: 1
  }
  constructor(private ong: OngService, public market: MarketService ) { }

  ngOnInit() {
    this.list_departement();
    //this.getAll();
    this.filtre_ong();
  }

  list_departement() {
    return this.market.departement().subscribe(response => {
      this.liste_departement = response;
    });
  }
  list_commune() {
    // this.warning = '';
    return this.market.commune(this.objet_list.departement).subscribe( response => {
      this.liste_communes = response.ville_list;
      console.log(response);
    });
  }


  /*getAll() {
    this.loading = true;
    return this.ong.liste_simulation_ong().subscribe( response => {
      this.list = response;
      this.loading = false;
      console.log(this.list);
    });
  }*/
  filtre_ong () {
    this.loading = true;
    return this.ong.list_by_zone(this.objet_list.zone).subscribe( reponse => {
      this.list = reponse;
      this.loading = false;
    });
  }

}

