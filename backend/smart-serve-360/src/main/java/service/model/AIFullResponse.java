package service.model;

import java.util.ArrayList;
import java.util.List;

import lombok.Data;

@Data
public class AIFullResponse {
    
    private List<AIChoice> choices = new ArrayList<>();
}
