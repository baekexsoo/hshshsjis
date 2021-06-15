import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataPasseService } from 'src/providers/data-passe/data-passe.service';


@Component({
  selector: 'app-detail-program',
  templateUrl: './detail-program.component.html',
  styleUrls: ['./detail-program.component.css']
})
export class DetailProgramComponent implements OnInit {
  subscription: Subscription;
  item: any;
  error: any;
  constructor( private data_passe: DataPasseService) { }

  ngOnInit() {
    this.get_program();
  }

  get_program() {

    this.subscription = this.data_passe.currentProgram
  .subscribe( item => {
    this.item = item;
   // console.log(this.item);
  },
    err => this.error = err);
  }

}