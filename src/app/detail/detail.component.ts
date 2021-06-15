import { Component, OnInit } from '@angular/core';
import { DataPasseService } from 'src/providers/data-passe/data-passe.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  
  subscription: Subscription;
  mydetail: any;
  error: any;
  constructor( private data_passe: DataPasseService) { }

  ngOnInit() {
    this.get_detail();
  }

  get_detail() {

    this.subscription = this.data_passe.currentProgram
  .subscribe( mydetail => {
    this.mydetail=mydetail;
   // console.log(this.item);
  },
    err => this.error = err);
  }
  
  
  }
 






