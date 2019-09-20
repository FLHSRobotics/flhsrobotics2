import { CommonModule } from '@angular/common';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {FrcRoutingModule} from './frc-routing.module';
import {FrcComponent} from '../../components/frc/frc.component';
import {FrcAboutComponent} from '../../components/frc-about/frc-about.component';
@NgModule({
  imports: [
    CommonModule,
    FrcRoutingModule
  ],
  declarations: [
    FrcComponent,
    FrcAboutComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class FrcModule {

}
