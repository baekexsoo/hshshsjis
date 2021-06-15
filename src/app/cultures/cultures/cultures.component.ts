import { Component, OnInit } from '@angular/core';
import { CultureService } from 'src/providers/culture/culture.service';
import { MarketService } from 'src/providers/market/market.service';
@Component({
  selector: 'app-cultures',
  templateUrl: './cultures.component.html',
  styleUrls: ['./cultures.component.css']
})
export class CulturesComponent implements OnInit {
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

  constructor( private culture: CultureService, public market: MarketService) { }

  ngOnInit() {
    this.list_departement();
    this.getAll();
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
    });
  }


  getAll() {
    this.loading = true;
    return this.culture.liste().subscribe(response => {
      this.list = response;
      this.loading = false;
    });
  }

}