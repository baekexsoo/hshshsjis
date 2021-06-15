import { Component, OnInit } from '@angular/core';
import { SolService } from '../../providers/utilisateur/sol.service';
import { Departement } from '../entities/departement';
import { Commune } from '../entities/commune';
import { Sols } from '../entities/sols';
import {PredictionService} from '../../providers/prediction/prediction.service';
import {DataAnalys} from '../../providers/mock/prediction';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { format } from 'url';
import { removeAllListeners, removeListener } from 'cluster';

@Component({
  selector: 'app-selection-sol',
  templateUrl: './selection-sol.component.html',
  styleUrls: ['./selection-sol.component.css']
})
export class SelectionSolComponent implements OnInit {

  // declaration
  departements: Departement[] = [];
  selectedDepartement: Departement;

  communes: Commune[] = [];
  selectedCommune: Commune;

  sols: Sols[] = [];
  selectedSols: Sols;

  data_engrais: any;
  step = 0 ; // variable qui definit l'état du workflow.
  type_sol = false;
  select = false;
  btn_suivant = false;
  donne_engrais = {
    dose: 0.0,
    idModele:'',
  }
  prediction = {
    input: {
      idUtilisateur: 'User',
      listDoseEngrais: [
        this.donne_engrais,
      ]
    },
    sol: {
      azote: 0,
      carbone: 0,

      commune: '',
      departement: '',
      nom: '',
      ordreDeDominanace: 0,
      ph: 0,
      phosphore: 0,
      potassium: 0
    }
  }

  img_0: any;
  img_1: any;
  img_2: any;
  img_3: any;
        tauxN: number;
        tauxP: number;
        tauxK: number;
        tauxB: number;
        tauxS: number;
        tauxN1: number;
        tauxP1: number;
        tauxK1: number;
        tauxB1: number;
        tauxS1: number;
 type_engrais: '';
 caracte_sol: any;
 data_img: any;
 sol_selected: any;
 engr_ajou1: any;
 engr_ajou2: any;
 supp: any
 animat_pred= false
 name_engrais: any
 erreur_alert = false
 constructor(private route: ActivatedRoute, public sol: SolService, public Prediction: PredictionService) {}

  ngOnInit() {
      this.goto(0);
      this.retrieveDepartements();
      this.selectedDepartement = new Departement();
      this.list_engr();
  }
  goto(n= 0) {
      this.step = n;
  }
  fonc_preditio() {
    console.log(JSON.stringify(this.prediction));
 }
  fon_ajou(i) {
    this.prediction.input.listDoseEngrais.push({dose: this.donne_engrais.dose, idModele:this.donne_engrais.idModele});
    this.donne_engrais.dose = null;
    this.donne_engrais.idModele = undefined;
    console.log(this.prediction.input.listDoseEngrais);

   if (this.prediction.input.listDoseEngrais[0]['dose'] === null){
   
   this.prediction.input.listDoseEngrais.shift()
   console.log(this.prediction.input.listDoseEngrais);

   }
    this.animat_pred = true
  }

  fon_sup_ajou(i) {
      this.supp = this.prediction.input.listDoseEngrais.indexOf(this.prediction.input.listDoseEngrais[i])
      this.prediction.input.listDoseEngrais.splice(this.supp,1)
      console.log(this.supp)
    }

  userslect(s: any) {
    this.prediction.sol = s;
    this.prediction.sol.departement = this.selectedDepartement.nom;
    this.prediction.sol.commune = this.selectedCommune.nom;
    console.log(this.prediction.sol);
    this.btn_suivant = true;
 }
  retrieveDepartements() {

    console.log( 'Calliing retrieveDepartements() ...');

   return this.sol.get_sol().subscribe(
     response => {
       this.departements = response;
     }
   );
 }

  onDepartementSelect() {
    console.log('Calliing onDepartementSelect() ... : ' + JSON.stringify(this.selectedDepartement));
    this.communes =  this.selectedDepartement.listCommune;
 }

  onCommuneSelect() {
    this.sols = this.selectedCommune.listTypeSol; // commune['listTypeSol']
       }
  get_sol_img(name: string): string {
      return this.sol.get_img(name);
  }

  fon_prediction() {
    console.log(JSON.stringify(this.prediction))
    return this.sol.new_prediction(JSON.stringify(this.prediction)).subscribe(
      response => {
      }
    );
 }

  btn_recherche() {
    this.type_sol = true;
 }

 nom_engrais(){
  return this.sol.engr_id(this.type_engrais).subscribe(
    response =>{
    this.name_engrais = response;
    this.donne_engrais.idModele = this.name_engrais.nom;
    console.log(this.name_engrais.nom)
  }
  )
 }

  list_engr() {
    return this.sol.get_ang().subscribe(
      response => {
        this.data_engrais = response;
        console.log(this.donne_engrais.idModele);
        for (var i = 0; i < this.data_engrais.length; i++) {
          if (this.data_engrais[i]['id'] === this.type_engrais) {
            this.nom_engrais();
            this.tauxN = this.data_engrais[i]['tauxN']*this.donne_engrais.dose;
            this.tauxN1 =parseFloat(this.tauxN.toFixed(2)) 
            this.tauxK = this.data_engrais[i]['tauxK']*this.donne_engrais.dose;
            this.tauxK1 =parseFloat(this.tauxK.toFixed(2))
            this.tauxP = this.data_engrais[i]['tauxP']*this.donne_engrais.dose;
            this.tauxP1 =parseFloat(this.tauxP.toFixed(2))
            this.tauxS = this.data_engrais[i]['tauxS']*this.donne_engrais.dose;
            this.tauxS1 =parseFloat(this.tauxS.toFixed(2))
            this.tauxB = this.data_engrais[i]['tauxB']*this.donne_engrais.dose;
            this.tauxB1 =parseFloat(this.tauxB.toFixed(2))
          }
        }
        }
    );
 }
result = {
    prediction : 0
};
loadresult = false ;
    data = DataAnalys;
    
predict() {
  if(this.prediction.input.listDoseEngrais[0]["dose"] === null){
    /*this.prediction.input.listDoseEngrais.shift()
    this.loadresult = true;
    console.log(JSON.stringify(this.prediction))
    this.Prediction.prediction(this.prediction).subscribe(
     response => {
      if(this.result.prediction === 0){
        this.erreur_alert = true
      }else{
         this.result.prediction = Math.round(response.prediction);
        // this.result.prediction = parseFloat(this.result.prediction.toPrecision(2));
         this.loadresult = false;
         console.log(this.result.prediction)
        }
     },
     error => {
         this.loadresult = false;
        
     }
    );
    */
  }else{
  console.log(JSON.stringify(this.prediction))
    this.loadresult = true;
    this.Prediction.prediction(this.prediction).subscribe(
     response => {
       if (response.prediction === 0){
        this.erreur_alert = true;
       }
         this.result.prediction = Math.round(response.prediction);
        // this.result.prediction = parseFloat(this.result.prediction.toPrecision(2));
         this.loadresult = false;
         console.log(this.result.prediction)
     },
     error => {
         this.loadresult = false;
     }
    );
}
}
}
