import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { CurrencyComponent } from './parent/currency/currency.component';
import { BirthdayComponent } from './parent/birthday/birthday.component';
import { RadioButtonComponent } from './parent/birthday/radio-button/radio-button.component';
import { TableComponentComponent } from './parent/birthday/table-component/table-component.component';
import {CurrencyService} from './parent/currency/currency.service';
import {BirthdayService} from './parent/birthday/birthday.service';
@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    CurrencyComponent,
    BirthdayComponent,
    RadioButtonComponent,
    TableComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [CurrencyService,BirthdayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
