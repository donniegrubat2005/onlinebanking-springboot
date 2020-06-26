import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { BankAaccountService } from 'src/app/services/bank-aaccount.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bank-account',
  templateUrl: './bank-account.component.html',
  styleUrls: ['./bank-account.component.css'],
})
export class BankAccountComponent implements OnInit {
  //this is for data tables configuration
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;

  dtTrigger: Subject<any> = new Subject();
  dtOptions: DataTables.Settings = {};
  rowData = [];
  bankAccountlist: any;
  isDtInitialized: boolean = false;

  constructor(
    private bankAccountService: BankAaccountService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.LoadDatatable();
    this.loadBankAccountList();
  }

  loadBankAccountList() {
    this.bankAccountService.getBankAccounts().subscribe(
      (data) => {
        this.rowData = this.bankAccountlist = data;
        //this.dtTrigger.next();
        if (this.isDtInitialized) {
          this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
            dtInstance.destroy();
            this.dtTrigger.next();
          });
        } else {
          this.isDtInitialized = true;
          this.dtTrigger.next();
        }
      },
      (error) => {
        //this.alertService.error("Unable to load email template.");
        console.log(error);
      }
    );
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }

  LoadDatatable() {
    this.dtOptions = {
      pagingType: 'simple_numbers',
      pageLength: 10,
      processing: true,
      info: true,
      dom: "<'myfilter'f><'mylength'l>tp",
    };
  }

  remove(bankaccount: any): void {
    this.bankAccountService.delete(bankaccount.id).subscribe((res) => {
      this.toastr.warning('Deleted successfully!', 'Deleted!');
      this.loadBankAccountList();
    });
  }

  edit(id: number) {
    this.router.navigate(['/bankaccounts/' + id + '/edit']);
  }
}
