import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {FrcComponent} from './frc/frc.component';
import {ContactComponent} from './contact/contact.component';
import {MediaComponent} from './media/media.component';
import {SponsorsComponent} from './sponsors/sponsors.component';
import {OutreachComponent} from './outreach/outreach.component';
import {NotFoundComponent} from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'frc/:teamNum',
    component: FrcComponent,
  },
  {
    path: 'ftc',
    loadChildren:'app/controller/ftc/ftc.module#FtcModule'
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'media',
    component: MediaComponent
  },
  {
    path: 'sponsors',
    component: SponsorsComponent
  },
  {
    path: 'outreach',
    component: OutreachComponent
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
