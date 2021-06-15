import { ProductService } from './../product.service';
import { Component, Input, OnInit } from '@angular/core';
import { CultureService } from 'src/providers/culture/culture.service';
import { MarketService } from 'src/providers/market/market.service';
import { Product } from '../models/product.interface';

@Component({
  selector: 'app-acheteurs',
  templateUrl: './acheteurs.component.html',
  styleUrls: ['./acheteurs.component.css']
})
export class AcheteursComponent implements OnInit {
  @Input() product: Product;
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

  constructor( private culture: CultureService, public market: MarketService, private productService: ProductService) { }

  ngOnInit() {
    console.log(this.product);
    this.list_departement();
    this.getProducts();
    // this.getAll();
    
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


  // getAll() {
  //   this.loading = true;
  //   return this.culture.liste().subscribe(response => {
  //     this.list = response;
  //     this.loading = false;
  //   });
  // }
  getProducts(){
    this.productService.getProducts().subscribe(response => {
      console.log(response);
           this.list = response;
           this.loading = false;
         });
  }

}