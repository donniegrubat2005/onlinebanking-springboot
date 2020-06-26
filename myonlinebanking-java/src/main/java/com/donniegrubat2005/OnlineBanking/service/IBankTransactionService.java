package com.donniegrubat2005.OnlineBanking.service;

import java.util.List;


import com.donniegrubat2005.OnlineBanking.models.BankTransaction;

public interface IBankTransactionService {

	public List<BankTransaction> getBankTransactions();
	public BankTransaction save(BankTransaction bankTransaction);
	public BankTransaction findById(Long id);
	public void delete(BankTransaction bankTransaction);
}
