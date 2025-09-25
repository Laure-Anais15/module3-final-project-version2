package controller;

import model.CustomItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import service.ItemService;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/items")
public class ItemController {

    @Autowired
    private ItemService itemService;

    @GetMapping
    public ApiResponse list(@RequestParam(defaultValue = "1") int page,
                            @RequestParam(defaultValue = "10") int pageSize,
                            @RequestParam(required = false) String search) {
        Page<CustomItem> p = itemService.list(search, page, pageSize);
        return ApiResponse.of(p.getContent(), p.getNumber() + 1, p.getSize(), p.getTotalElements());
    }

    @GetMapping("/{id}")
    public ResponseEntity<CustomItem> getOne(@PathVariable Long id) {
        return itemService.findById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<CustomItem> create(@RequestBody CustomItem item) {
        CustomItem created = itemService.create(item);
        return ResponseEntity.status(201).body(created);
    }

    @PutMapping("/{id}")
    public ResponseEntity<CustomItem> update(@PathVariable Long id, @RequestBody CustomItem item) {
        CustomItem updated = itemService.update(id, item);
        return ResponseEntity.ok(updated);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        itemService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
