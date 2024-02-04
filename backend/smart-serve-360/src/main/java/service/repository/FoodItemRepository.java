package service.repository;

import java.util.List;
import java.util.UUID;

import org.springframework.data.repository.CrudRepository;

import service.model.FoodItem;

public interface FoodItemRepository extends CrudRepository<FoodItem, UUID> {
    
    public List<FoodItem> findAllByOnMenu(boolean onMenu);
}
