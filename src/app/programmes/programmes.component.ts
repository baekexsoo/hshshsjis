import { Component, OnInit } from '@angular/core';
import { ProgrammeService } from '../../providers/programmes/programme.service';
import { MarketService } from '../../providers/market/market.service';
import { DataPasseService } from 'src/providers/data-passe/data-passe.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-programmes',
  templateUrl: './programmes.component.html',
  styleUrls: ['./programmes.component.css']
})
export class ProgrammesComponent implements OnInit {
  liste_communes: any;
  liste_departement: any;
  list_programmes: any;
  loading = false;
  warning: any;
  form_data = {
    zone: '',
    produit: '',
  };


  constructor(private programService: ProgrammeService, private data_passe: DataPasseService, public market: MarketService,
     private router: Router) { }

  ngOnInit() {
    this.list_departement();
    this.programmes();
  }


  programmes() {
  this.loading = true;
    return this.programService.list_programmes(this.form_data.zone, this.form_data.produit).subscribe(response => {
      this.list_programmes = response;
      this.loading = false;
    });

  }

  detail_program(program_object) {
    this.data_passe.changeProgram(program_object);
    this.router.navigate(['/detail-programme']);
  }

  /**
   * departement getAll function
   * list of departement
   * Author Christian
   */
  list_departement() {
    return this.market.departement().subscribe(response => {
      this.liste_departement = response;
    }, error => {
      console.log('Callback error : ' + error);
    });
  }

  /*list_commune() {
    this.warning = '';
    return this.market.commune(this.form_data.departement).subscribe( response => {
      this.liste_communes = response.ville_list;
      console.log(response);
    });
  }*/

}
