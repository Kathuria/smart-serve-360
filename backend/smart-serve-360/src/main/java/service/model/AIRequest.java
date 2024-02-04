package service.model;

import java.util.ArrayList;
import java.util.List;

import lombok.Data;

@Data
public class AIRequest {
    private List<AIMessage> messages = new ArrayList<>();
}
