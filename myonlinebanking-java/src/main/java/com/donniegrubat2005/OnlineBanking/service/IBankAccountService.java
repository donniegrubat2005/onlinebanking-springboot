package com.donniegrubat2005.OnlineBanking.service;

import java.util.List;

import com.donniegrubat2005.OnlineBanking.models.BankAccount;


public interface IBankAccountService {

	public List<BankAccount> getBankAccounts();
	public BankAccount save(BankAccount bankAccount);
	public BankAccount findById(Long id);
	public void delete(BankAccount bankAccount);
}
