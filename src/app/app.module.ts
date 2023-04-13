import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ContactComponent } from './contact/contact.component';
import { DesktopComponent } from './desktop/desktop.component';
import { DirectsComponent } from './directs/directs.component';


@NgModule({
  declarations: [
    AppComponent, 
    ServerComponent, 
    ContactComponent, 
    DesktopComponent, 
    DirectsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
