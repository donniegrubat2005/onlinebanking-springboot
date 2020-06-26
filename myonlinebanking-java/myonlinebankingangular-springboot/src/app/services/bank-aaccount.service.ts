import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BankAaccountService {
  appUrl: any;

  constructor(private http: HttpClient) {
    this.appUrl = 'http://localhost:8080/api';
  }

  public getBankAccounts(): Observable<any[]> {
    let url = this.appUrl + '/bankaccounts';
    return this.http.get<any[]>(url);
  }

  getBankAccount(id: number): Observable<any[]> {
    let url = this.appUrl + '/bankaccounts';
    return this.http.get<any[]>(url + '/' + id);
  }

  public save(bankaccount: any) {
    let url = this.appUrl + '/bankaccounts';
    return this.http.post<any>(url, bankaccount);
  }

  update(bankaccount: any): Observable<any> {
    let url = this.appUrl + '/bankaccounts';
    return this.http.put<any>(url + '/' + bankaccount.id, bankaccount);
  }

  delete(id: number): Observable<any> {
    let url = this.appUrl + '/bankaccounts';
    return this.http.delete<any>(url + '/' + id);
  }
}
