package com.donniegrubat2005.OnlineBanking.impl;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.donniegrubat2005.OnlineBanking.models.BankTransaction;
import com.donniegrubat2005.OnlineBanking.repository.BankTransactionRepostiory;
import com.donniegrubat2005.OnlineBanking.service.IBankTransactionService;

@Service(value="bankTransactionService")
@Transactional
public class BankTransactionService implements IBankTransactionService {

	@Autowired
	private BankTransactionRepostiory bankTransRepository;
	
	@Override
	public List<BankTransaction> getBankTransactions() {
		return bankTransRepository.findAll();
	}

	@Override
	public BankTransaction save(BankTransaction bankTransaction) {
		return bankTransRepository.save(bankTransaction);
	}

	@Override
	public BankTransaction findById(Long id) {
		return bankTransRepository.findById(id).orElse(null);
	}

	@Override
	public void delete(BankTransaction bankTransaction) {
		bankTransRepository.delete(bankTransaction);

	}

}
