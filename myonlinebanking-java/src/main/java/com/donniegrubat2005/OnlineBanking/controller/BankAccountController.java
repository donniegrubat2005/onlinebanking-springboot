package com.donniegrubat2005.OnlineBanking.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.donniegrubat2005.OnlineBanking.models.BankAccount;
import com.donniegrubat2005.OnlineBanking.service.IBankAccountService;


@CrossOrigin(origins = "http://localhost:4200")
@RestController

@RequestMapping(path="/api/")
public class BankAccountController {

	@Autowired
	private IBankAccountService bankAccountService;

	@GetMapping(path="bankaccounts")
	public List<BankAccount> getBankAccounts() {
		return bankAccountService.getBankAccounts();
	}
	
	@GetMapping(path="bankaccounts/{id}")
    public ResponseEntity<BankAccount> getBankAccount(@PathVariable Long id) {
		BankAccount bankAccount = bankAccountService.findById(id);
        return ResponseEntity.ok().body(bankAccount);

    }

    @PostMapping(path = "bankaccounts")
    public BankAccount create(@RequestBody BankAccount bankAccount) {
    	bankAccountService.save(bankAccount);
        return bankAccount;
    }

    @PutMapping(path="bankaccounts/{id}")
    public ResponseEntity<BankAccount> update(@PathVariable(value = "id") Long id,
        @Validated @RequestBody BankAccount bankAccount) {
    	bankAccountService.save(bankAccount);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping(path="bankaccounts/{id}")
    public ResponseEntity<BankAccount> delete(@PathVariable Long id) {
    	BankAccount bankAccount = bankAccountService.findById(id);
    	bankAccountService.delete(bankAccount);
        return new ResponseEntity<>(HttpStatus.OK);

    }
	
}
