import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
})
export class NotFoundComponent implements OnInit {

    location: Location;
  constructor(location: Location) { this.location = location; }

  ngOnInit() {
  }
  
  back() {
      this.location.back();
  }

}
