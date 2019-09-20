import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ContactComponent} from './components/contact/contact.component';
import {MediaComponent} from './components/media/media.component';
import {SponsorsComponent} from './components/sponsors/sponsors.component';
import {OutreachComponent} from './components/outreach/outreach.component';
import {NotFoundComponent} from './components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'frc',
    loadChildren: () => import('app/controllers/frc/frc.module').then(m => m.FrcModule),
  },
  {
    path: 'ftc',
    loadChildren: () => import('app/controllers/ftc/ftc.module').then(m => m.FtcModule)
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
