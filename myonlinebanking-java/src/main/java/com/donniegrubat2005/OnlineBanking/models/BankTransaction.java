package com.donniegrubat2005.OnlineBanking.models;

import java.util.Date;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.RequiredArgsConstructor;
@Data
@RequiredArgsConstructor
@EqualsAndHashCode(callSuper = false)
@Entity
@Table(name="banktransactions")
public class BankTransaction {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name="trans_date")
	private Date transDate;
	
	@Column(name="account_number")
	private long accountNumber;
	
	@Column(name="amount")
	private double amount;
			
	@Column(name="currency_type")
	private String currencyType;
	
	@Column(name="trans_type")
	private String transType;
	
	@Column(name="description")
	private String description;
	
	
	
}
