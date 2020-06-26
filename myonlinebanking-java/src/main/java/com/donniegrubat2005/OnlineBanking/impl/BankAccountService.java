package com.donniegrubat2005.OnlineBanking.impl;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.donniegrubat2005.OnlineBanking.models.BankAccount;
import com.donniegrubat2005.OnlineBanking.repository.BankAccountRepository;
import com.donniegrubat2005.OnlineBanking.service.IBankAccountService;

@Service(value="bankAccountService")
@Transactional
public class BankAccountService implements IBankAccountService {

	@Autowired
	private BankAccountRepository bankAccountRepo;
	
	@Override
	public List<BankAccount> getBankAccounts() {
		return bankAccountRepo.findAll();
	}

	@Override
	public BankAccount save(BankAccount bankAccount) {
		return bankAccountRepo.save(bankAccount);
	}

	@Override
	public BankAccount findById(Long id) {
		return bankAccountRepo.findById(id).orElse(null);
	}

	@Override
	public void delete(BankAccount bankAccount) {
		bankAccountRepo.delete(bankAccount);

	}

}
