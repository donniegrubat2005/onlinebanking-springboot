import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MasterpagesComponent } from './shared/layout/masterpages/masterpages.component';
import { BankAaccountService } from './services/bank-aaccount.service';
import { HttpClientModule } from '@angular/common/http';
import { TitleService } from './services/title.service';
import { DataTablesModule } from 'angular-datatables';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { BankTransactionFormComponent } from './pages/bank-transaction/bank-transaction-form/bank-transaction-form.component';

@NgModule({
  declarations: [AppComponent, MasterpagesComponent, RoutingComponents, BankTransactionFormComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    DataTablesModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      timeOut: 3000,
      progressBar: true,
      progressAnimation: 'increasing',
      preventDuplicates: true,
      positionClass: 'toast-bottom-right',
    }), // ToastrModule added
    AppRoutingModule,
  ],
  providers: [TitleService, BankAaccountService],
  bootstrap: [AppComponent],
})
export class AppModule {}
