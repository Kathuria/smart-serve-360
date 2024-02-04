package service.service;

import java.time.OffsetDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import service.model.FoodItem;
import service.model.FoodOrder;
import service.repository.FoodItemRepository;
import service.repository.FoodOrderRepository;

@Service
public class MenuService {
    
    @Autowired
    private FoodItemRepository foodItemRepo;
    
    @Autowired
    private FoodOrderRepository orderRepo;
    
    @Autowired
    private AIService aiService;
    
    public String updateMenu() {
        
        List<FoodItem> currentMenu = foodItemRepo.findAllByOnMenu(true);
        
        OffsetDateTime threeMonthsPrevious = OffsetDateTime.now().minusMonths(3);
        
        for (FoodItem item : currentMenu) {
            List<FoodOrder> foodOrderList = orderRepo.findAll();
            item.setCount((int) foodOrderList.stream().filter(order -> order.getFoodItem().getId()
                    .equals(item.getId()) && order.getOrderDate().compareTo(threeMonthsPrevious) < 0).count());
        }
        
        String removeResponse = aiService.chat(buildRemoveItemPrompt(currentMenu));
        
        FoodItem removeItem = currentMenu.stream().filter(item -> item.getName().equalsIgnoreCase(removeResponse))
                .findFirst().get();
        
        removeItem.setOnMenu(false);
        foodItemRepo.save(removeItem);
        
        String addResponse = aiService.chat(buildSuggestItemPrompt(currentMenu));
        
        FoodItem newItem = new FoodItem();
        newItem.setName(addResponse);
        newItem.setOnMenu(true);
        foodItemRepo.save(newItem);
        
        return removeResponse + " " + addResponse;
    }
    
    private String buildRemoveItemPrompt(List<FoodItem> menu) {
        
        StringBuilder sb = new StringBuilder();
        sb.append(
                "Response with 1 word an no punctation. Give the name of the food we should remove from the list given how many customers have ordered each item");
        
        for (FoodItem item : menu) {
            sb.append(", " + item.getName() + " " + item.getCount() + " order(s) ");
        }
        return sb.toString();
    }
    
    private String buildSuggestItemPrompt(List<FoodItem> menu) {
        
        StringBuilder sb = new StringBuilder();
        sb.append(
                "Response with 1 word an no punctation. Give the name of a food we should add to the menu given how many customers have ordered each item");
        
        for (FoodItem item : menu) {
            sb.append(", " + item.getName() + " " + item.getCount() + " order(s) ");
        }
        return sb.toString();
    }
}
