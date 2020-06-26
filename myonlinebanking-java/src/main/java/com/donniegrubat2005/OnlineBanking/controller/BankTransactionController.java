package com.donniegrubat2005.OnlineBanking.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.donniegrubat2005.OnlineBanking.models.BankTransaction;
import com.donniegrubat2005.OnlineBanking.service.IBankTransactionService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController

@RequestMapping(path="/api/")
public class BankTransactionController {

	@Autowired
	private IBankTransactionService bankTransactionService;
	
	
	@GetMapping(path="banktransactions")
	public List<BankTransaction> getBankTransactions() {
		return bankTransactionService.getBankTransactions();
	}
	
	 @PostMapping(path = "banktransactions")
	    public BankTransaction create(@RequestBody BankTransaction bankTransaction) {
		 bankTransactionService.save(bankTransaction);
	        return bankTransaction;
	    }
}
