package controller;

import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api")
public class HealthController {

    @GetMapping("/health")
    public Map<String, String> health() {
        try {
            return Map.of("status", "ok", "detail", "Conexión abierta");
        } catch (Exception e) {
            return Map.of("status", "error", "detail", "Sin conexión con la DB");
        }
    }
}
