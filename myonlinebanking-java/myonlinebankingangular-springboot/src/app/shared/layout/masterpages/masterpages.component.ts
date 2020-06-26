import { Component, OnInit } from '@angular/core';
import { BankAaccountService } from 'src/app/services/bank-aaccount.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-masterpages',
  templateUrl: './masterpages.component.html',
  styleUrls: ['./masterpages.component.css'],
})
export class MasterpagesComponent implements OnInit {
  pageTitle: string;

  constructor(private bankAccountService: BankAaccountService) {}

  ngOnInit(): void {}
}
