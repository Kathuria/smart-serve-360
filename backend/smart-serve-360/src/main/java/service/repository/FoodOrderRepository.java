package service.repository;

import java.util.List;
import java.util.UUID;

import org.springframework.data.repository.CrudRepository;

import service.model.FoodOrder;

public interface FoodOrderRepository extends CrudRepository<FoodOrder, UUID> {
    
    public List<FoodOrder> findAll();
}
