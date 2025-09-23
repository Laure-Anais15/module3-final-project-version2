package myitems.backend.controller;

import myitems.backend.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api")
public class HealthController {

    @Autowired
    private ItemRepository itemRepository;

    @GetMapping("/health")
    public Map<String, String> health() {
        try {
            itemRepository.count(); 
            return Map.of("status", "ok", "detail", "Conexión abierta");
        } catch (Exception e) {
            return Map.of("status", "error", "detail", "Sin conexión con la DB");
        }
    }
}
