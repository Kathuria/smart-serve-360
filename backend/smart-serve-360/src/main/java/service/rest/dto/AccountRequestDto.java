package service.rest.dto;

import lombok.Data;
import service.model.refdata.AccountTypeLkp;

@Data
public class AccountRequestDto {
    
    private String email;
    private String pw;
    private AccountTypeLkp accountType;
}
