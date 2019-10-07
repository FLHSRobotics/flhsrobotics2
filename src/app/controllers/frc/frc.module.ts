import { CommonModule } from '@angular/common';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {FrcRoutingModule} from './frc-routing.module';
import {FrcComponent} from '../../components/frc-components/frc/frc.component';
import {FrcAboutComponent} from '../../components/frc-components/frc-about/frc-about.component';
import {LoaderModule} from '../loader/loader.module';
@NgModule({
  imports: [
    CommonModule,
    FrcRoutingModule,
    LoaderModule
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
