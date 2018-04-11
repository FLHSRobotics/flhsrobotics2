import { CommonModule } from "@angular/common";
import {NgModule,CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {FtcComponent} from "../../ftc/ftc.component";
import {FtcRoutingModule} from "./ftc-routing.module";
@NgModule({
  imports:[
    CommonModule,
    FtcRoutingModule
  ],
  declarations:[
    FtcComponent
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class FtcModule {

}
