import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BankAccountComponent } from './pages/bank-account/bank-account.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BankTransactionComponent } from './pages/bank-transaction/bank-transaction.component';
import { BankAccountFormComponent } from './pages/bank-account/bank-account-form/bank-account-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: { pageTitle: 'Dashboard' },
  },
  {
    path: 'bankaccounts',
    component: BankAccountComponent,
  },
  { path: 'bankaccounts/create', component: BankAccountFormComponent },

  { path: 'bankaccounts/:id/edit', component: BankAccountFormComponent },

  { path: 'banktransactions', component: BankTransactionComponent },

  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const RoutingComponents = [
  DashboardComponent,
  BankAccountComponent,
  BankTransactionComponent,
  BankAccountFormComponent,
];
