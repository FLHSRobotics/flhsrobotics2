import { RouterModule, Routes} from '@angular/router';
import {FtcComponent} from '../../components/ftc-components/ftc/ftc.component';
import {NgModule} from '@angular/core';
import {FtcAboutComponent} from '../../components/ftc-components/ftc-about/ftc-about.component';

const routes: Routes = [
  {
    path: '',
    component: FtcAboutComponent
  },
  {
    path: ':teamNum',
    component: FtcComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FtcRoutingModule {

}
