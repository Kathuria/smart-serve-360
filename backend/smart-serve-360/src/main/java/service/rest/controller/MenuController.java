package service.rest.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import service.service.MenuService;

@RestController
public class MenuController {
    
    @Autowired
    private MenuService menuService;
    
    @PostMapping("/menu/update")
    public ResponseEntity<String> updateMenu() {
        
        String response = menuService.updateMenu();
        
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
