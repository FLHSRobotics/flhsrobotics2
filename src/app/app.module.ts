import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './partical/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FrcComponent } from './frc/frc.component';
import { OutreachComponent } from './outreach/outreach.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { MediaComponent } from './media/media.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './partical/footer/footer.component';
import {ServiceWorkerModule} from "@angular/service-worker";
import {environment} from "../environments/environment";
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FrcComponent,
    OutreachComponent,
    SponsorsComponent,
    MediaComponent,
    ContactComponent,
    FooterComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
