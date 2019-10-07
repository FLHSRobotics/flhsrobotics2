import { RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {FrcAboutComponent} from '../../components/frc-components/frc-about/frc-about.component';
import {FrcComponent} from '../../components/frc-components/frc/frc.component';

const routes: Routes = [
  {
    path: '',
    component: FrcAboutComponent
  },
  {
    path: ':teamNum',
    component: FrcComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrcRoutingModule {

}
