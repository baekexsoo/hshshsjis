import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {WindowRefService} from './window-ref.service';
import {NgxPaginationModule} from 'ngx-pagination';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { AngularPaginatorModule } from 'angular-paginator';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import * as $ from 'jquery';



// import { FilterModule } from 'ng-filter';
// import { LocalStorage, SessionStorage } from '';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import {UtilisateurService} from '../providers/utilisateur/utilisateur.service';
import {Api} from '../providers/api/api';
import { SpaceUserComponent } from './space-user/space-user.component';
import { SigninComponent } from './signin/signin.component';
import { SigninFormComponent } from './signin-form/signin-form.component';
import { SmsCreatComponent } from './sms-creat/sms-creat.component';
import { UpdatePwdComponent } from './update-pwd/update-pwd.component';
import { AnnonceComponent } from './annonce/annonce.component';

import { ProfilComponent } from './profil/profil.component';
import { RestaurationComponent } from './restauration/restauration.component';

import { NotFoundComponent } from './not-found/not-found.component';
import { FooterComponent } from './footer/footer.component';
import { SelectionSolComponent } from './selection-sol/selection-sol.component';
import { AuthGuard } from './auth/auth.guard';
import { DatavizComponent } from './dataviz/dataviz.component';
import { AccueilMarcheComponent } from './accueil-marche/accueil-marche.component';
import { MarketService } from '../providers/market/market.service';
import { OngComponent } from './ong/ong.component';
import { CulturesComponent } from './cultures/cultures/cultures.component';
import { ProgrammesComponent } from './programmes/programmes.component';
import { DetailProgramComponent } from './detail-program/detail-program.component';
//import { TransformeService } from 'src/providers/transforme/transforme.service';
//import { ExportService } from '../providers/exportateurs/export.service';
import { DistributeursService } from '../providers/distributeurs/distributeurs.service';
import { ProgrammeService } from '../providers/programmes/programme.service';
//import { ExportateursComponent } from './exportateurs/exportateurs/exportateurs.component';
import { DistributeursComponent } from './distributeurs/distributeurs.component';
//import { CulturesComponent } from './cultures/cultures.component';
import { CultureService } from '../providers/culture/culture.service';



import { OngService } from '../providers/ong/ong.service';
//import { CultureService } from '../providers/culture/culture.service';
import { from } from 'rxjs';
import { ExportateursComponent } from './exportateurs/exportateurs.component';
import { TransformateursComponent } from './transformateurs/transformateurs.component';
import { UnionProducteurComponent } from './union-producteur/union-producteur.component';
import { DetailComponent } from './detail/detail.component';
import { RevendeursComponent } from './revendeurs/revendeurs.component';
import { AcheteursComponent } from './acheteurs/acheteurs.component';
import { AcheteursFormComponent } from './acheteurs-form/acheteurs-form.component';
import { ArachideComponent } from './arachide/arachide.component';
//import { OngComponent } from './ong/ong.component';
//import { OngService } from '../providers/ong/ong.service';
//import { ProgrammesComponent } from './programmes/programmes.component';
//import { DetailProgramComponent } from './detail-program/detail-program.component';

const appRoutes: Routes = [

  { path: '', children: [
    { path: 'user', component: SpaceUserComponent},
    { path: 'profil', component: ProfilComponent},
    { path: 'update', component: UpdatePwdComponent},
    { path: 'visualisation', component: DatavizComponent},
  ], canActivate: [AuthGuard]
},
  { path: 'marches', component: AccueilMarcheComponent },
  { path: 'ong', component: OngComponent },
  { path: 'transformateur', component: TransformateursComponent },
  { path: 'programmes', component: ProgrammesComponent },
  { path: 'detail-programme', component: DetailProgramComponent },
//  { path: 'signin', component: SigninComponent },
  { path: 'home', component: HomeComponent},
  { path: 'revendeur', component: RevendeursComponent},
  { path: 'acheteur', component: AcheteursComponent},
  { path: 'acheteurForm', component: AcheteursFormComponent},
  { path: 'exportateurs', component: ExportateursComponent},
  { path: 'distributeurs', component: DistributeursComponent},
  { path: 'culture', component: CulturesComponent},
  { path: 'producteurs', component: UnionProducteurComponent },
  { path: 'detail', component: DetailComponent },
  { path: 'arachide', component: ArachideComponent },
//  { path: '', redirectTo: 'accueil', pathMatch: 'full'},
//  { path: 'signin/form/sms', component: SmsCreatComponent},
//  { path: 'update/activate/:ref?', component: UpdatePwdComponent},
//  { path: 'restauration', component: RestaurationComponent},
//  { path: 'h', component: SpaceUserComponent},
//  { path: 'error', component: NotFoundComponent},
  { path: 'prediction', component: SelectionSolComponent},
  { path: '**', redirectTo: 'accueil', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SpaceUserComponent,
    SigninComponent,
    SigninFormComponent,
    SmsCreatComponent,
    UpdatePwdComponent,
    AnnonceComponent,
    ProfilComponent,
    RestaurationComponent,
    NotFoundComponent,
    FooterComponent,
    SelectionSolComponent,
    DatavizComponent,
    AccueilMarcheComponent,
    OngComponent,
    CulturesComponent,
    ProgrammesComponent,
    DetailProgramComponent,
    ExportateursComponent,
    TransformateursComponent,
    DistributeursComponent,
    UnionProducteurComponent,
    DetailComponent,
    RevendeursComponent,
    AcheteursComponent,
    AcheteursFormComponent,
    ArachideComponent,
//    CulturesComponent,
//    OngComponent,
//    ProgrammesComponent,
//    DetailProgramComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule,
    NgxPaginationModule,
    NgbModule,
    Ng2SearchPipeModule,
    AngularPaginatorModule,
    LeafletModule.forRoot(),
    // FilterModule,
    LeafletModule.forRoot(),
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr' },
//  UtilisateurService,
  Api,
  WindowRefService,
  AuthGuard,
  MarketService,
//  TransformeService,
//  ExportService,
  DistributeursService,
  CultureService,
  ProgrammeService,
  OngService
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
      constructor() {
        registerLocaleData(localeFr, 'fr');
      }
}
