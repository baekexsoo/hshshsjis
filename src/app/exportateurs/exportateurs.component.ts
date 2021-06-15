import { Component, OnInit } from '@angular/core';
import { ExportService } from './../../providers/exportateurs/export.service';
@Component({
  selector: 'app-exportateurs',
  templateUrl: './exportateurs.component.html',
  styleUrls: ['./exportateurs.component.css']
})
export class ExportateursComponent implements OnInit {

  list_exporte: any;
  loading = false;
  constructor(private exporte: ExportService) { }

  ngOnInit() {
    this.liste();
  }

  liste(){
    this.loading = false;
    return this.exporte.list_exportateurs().subscribe( res => {
      this.list_exporte = res;
      this.loading = false;
    })
  }

}
