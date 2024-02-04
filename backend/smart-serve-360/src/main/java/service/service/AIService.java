package service.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import service.model.AIFullResponse;
import service.model.AIMessage;
import service.model.AIRequest;

@Service
public class AIService {
    
    private static final String AZURE_AI_URL = "https://gen-ai-spike-instance.openai.azure.com/openai/deployments/gpt-35-turbo/chat/completions?api-version=2023-07-01-preview";
    
    @Autowired
    private RestTemplate restTemplate;
    
    public String chat(String prompt) {
        
        return restTemplate
                .exchange(AZURE_AI_URL, HttpMethod.POST, buildRequest(prompt), AIFullResponse.class)
                .getBody().getChoices().get(0).getMessage().getContent();
    }
    
    private HttpEntity<AIRequest> buildRequest(String message) {
        
        AIMessage aiMessage = new AIMessage();
        aiMessage.setRole("user");
        aiMessage.setContent(message);
        AIRequest request = new AIRequest();
        request.getMessages().add(aiMessage);
        
        HttpHeaders headers = new HttpHeaders();
        headers.set("api-key", "3f23369e9ab545e1a73988b598513894");
        
        HttpEntity<AIRequest> entity = new HttpEntity<AIRequest>(request, headers);
        
        return entity;
    }
}
