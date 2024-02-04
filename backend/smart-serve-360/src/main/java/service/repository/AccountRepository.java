package service.repository;

import org.springframework.data.repository.CrudRepository;

import service.model.Account;

public interface AccountRepository extends CrudRepository<Account, Integer> {
    
    public Account findByEmail(String email);
}
