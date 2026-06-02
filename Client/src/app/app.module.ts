import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GryComponent } from './gry/gry.component';
import { FormularzComponent } from './formularz/formularz.component';
import { FormsModule } from '@angular/forms';
import { RepozytoriumPamiecioweService } from './repozytorium-pamieciowe.service';
import { FORM_SUBMIT_TOKEN } from './tokens/form-submit.token';
import { GET_DATA_TOKEN } from './tokens/get-data.token';
import localePl from '@angular/common/locales/pl';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { WebApiService } from './services/web-api.service';

registerLocaleData(localePl);

@NgModule({
  declarations: [
    AppComponent,
    GryComponent,
    FormularzComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    RepozytoriumPamiecioweService, 
    {
      provide: GET_DATA_TOKEN, useClass: WebApiService,
    }, 
    {
      provide: FORM_SUBMIT_TOKEN, useClass: WebApiService
    },
    { 
      provide: LOCALE_ID, useValue: 'pl-PL' 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }