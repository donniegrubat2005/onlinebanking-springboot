package com.donniegrubat2005.OnlineBanking.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.donniegrubat2005.OnlineBanking.models.BankTransaction;

@Repository
public interface BankTransactionRepostiory extends JpaRepository<BankTransaction, Long> {

}
