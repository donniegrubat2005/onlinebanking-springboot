import { Component, OnInit } from '@angular/core';
import { BankAaccountService } from 'src/app/services/bank-aaccount.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  pageTitle: string;

  constructor() {}

  ngOnInit(): void {}
}
