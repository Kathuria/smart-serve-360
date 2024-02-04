package service.rest.controller;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import service.model.Account;
import service.rest.dto.AccountRequestDto;
import service.rest.dto.LoginResponseDto;
import service.service.AccountService;

@RestController
public class AccountController {
    
    @Autowired
    private ModelMapper mapper;
    
    @Autowired
    private AccountService accountService;
    
    @GetMapping("/login/{username}")
    public ResponseEntity<LoginResponseDto> login(@PathVariable(value = "username") String username) {
        
        Account account = accountService.findAccount(username);
        if (account == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        
        LoginResponseDto responseDto = mapper.map(account, LoginResponseDto.class);
        
        return new ResponseEntity<>(responseDto, HttpStatus.OK);
    }
    
    @PostMapping("account/create")
    public ResponseEntity<LoginResponseDto> createAccount(@RequestBody AccountRequestDto requestDto) {
        
        Account account = mapper.map(requestDto, Account.class);
        
        Account accountResponse = accountService.createAccount(account);
        LoginResponseDto responseDto = mapper.map(accountResponse, LoginResponseDto.class);
        
        return new ResponseEntity<LoginResponseDto>(responseDto, HttpStatus.CREATED);
    }
}
