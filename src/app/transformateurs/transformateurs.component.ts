import { Component, OnInit } from '@angular/core';
import { TransformateursService} from './../../providers/transformateur/transformateurs.service';

@Component({
  selector: 'app-transformateurs',
  templateUrl: './transformateurs.component.html',
  styleUrls: ['./transformateurs.component.css']
})
export class TransformateursComponent implements OnInit {

  list_transform : any;
  loading= false;
  constructor( private transform : TransformateursService) { }

  ngOnInit() {
    this.list();  
  }

  list() {
    this.loading = true;
    return this.transform.list().subscribe( res => {
      this.list_transform = res;
      this.loading = false;
    })
  }

}
