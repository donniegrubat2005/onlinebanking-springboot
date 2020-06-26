import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BankAaccountService } from 'src/app/services/bank-aaccount.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-bank-account',
  templateUrl: './bank-account-form.component.html',
  styleUrls: ['./bank-account-form.component.css'],
})
export class BankAccountFormComponent implements OnInit {
  bankaccountForm: FormGroup;
  accountId = null;

  constructor(
    private fb: FormBuilder,
    private bankAccountService: BankAaccountService,
    private router: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.bankaccountForm = this.fb.group({
      id: [''],
      accountName: ['', Validators.required],
      accountNumber: ['', Validators.required],
      address: ['', Validators.required],
      gender: ['', Validators.required],
    });

    this.accountId = this.route.snapshot.params.id;
    if (this.accountId) {
      this.getAccount();
    }
  }

  getAccount() {
    this.bankAccountService.getBankAccount(this.accountId).subscribe(
      (resp) => {
        this.bankaccountForm.patchValue(resp);
        console.log(resp);
      },
      (error) => {
        alert(error);
      }
    );
  }

  submitForm() {
    if (this.accountId) {
      this.updateAccount();
    } else {
      this.createAccount();
    }
  }

  createAccount() {
    this.bankAccountService
      .save(this.bankaccountForm.value)
      .subscribe((result) => {
        this.router.navigate(['/bankaccounts']),
          this.toastr.success('Save Successfully!', 'Saved!');
        (error) => {
          this.toastr.error('everything is broken', 'Major Error', {
            timeOut: 3000,
          });
        };
      });
  }

  updateAccount() {
    this.bankAccountService
      .update(this.bankaccountForm.value)
      .subscribe((bankaccount) => {
        bankaccount = bankaccount;
        this.returnToBankList(),
          this.toastr.success('Updated Successfully!', 'Saved!');
        (error) => console.log(error);
      });
  }

  returnToBankList() {
    this.router.navigate(['/bankaccounts']);
  }
}
