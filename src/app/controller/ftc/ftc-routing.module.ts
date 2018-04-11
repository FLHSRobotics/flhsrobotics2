import { RouterModule, Routes} from "@angular/router";
import {FtcComponent} from "../../ftc/ftc.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path:':teamNum',
    component:FtcComponent
  }
];
@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class FtcRoutingModule {

}
