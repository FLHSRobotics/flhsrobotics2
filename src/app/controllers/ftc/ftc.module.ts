import { CommonModule } from '@angular/common';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {FtcComponent} from '../../components/ftc-components/ftc/ftc.component';
import {FtcRoutingModule} from './ftc-routing.module';
import {FtcAboutComponent} from '../../components/ftc-components/ftc-about/ftc-about.component';
import {LoaderModule} from '../loader/loader.module';

@NgModule({
  imports: [
    CommonModule,
    FtcRoutingModule,
    LoaderModule,
  ],
  declarations: [
    FtcComponent,
    FtcAboutComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class FtcModule {

}
