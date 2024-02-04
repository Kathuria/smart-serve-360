package service.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import service.model.Account;
import service.repository.AccountRepository;

@Service
public class AccountService {
    
    @Autowired
    private AccountRepository accountRepository;
    
    public Account findAccount(String email) {
        
        return accountRepository.findByEmail(email);
    }
    
    public Account createAccount(Account account) {
        
        return accountRepository.save(account);
    }
}
