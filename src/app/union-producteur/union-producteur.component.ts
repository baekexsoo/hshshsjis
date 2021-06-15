import { Component, OnInit } from '@angular/core';
import { ProducteursService } from '../../providers/union_producteur/producteurs.service';
import { DataPasseService } from 'src/providers/data-passe/data-passe.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-union-producteur',
  templateUrl: './union-producteur.component.html',
  styleUrls: ['./union-producteur.component.css']
})
export class UnionProducteurComponent implements OnInit {

  list_union: any;
  loading=false;

  constructor(private unions: ProducteursService, private data_passe: DataPasseService, 
    private router: Router) { }

  ngOnInit() {
    this.liste();
  }

  liste() {
    this.loading=true;
    return this.unions.list().subscribe( res => {
      this.list_union = res;
      this.loading=false;
    })
  }


  detail(program_object) {
    this.data_passe.changeProgram(program_object);
    this.router.navigate(['../detail']);
  }

}
