package service;

import model.CustomItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;
import repository.ItemRepository;
import java.util.List;
import java.util.Optional;

@Service
public class ItemService {

    @Autowired
    private ItemRepository itemRepository;

    public Page<CustomItem> list(String search, int page, int pageSize) {
        Pageable pageable = PageRequest.of(page - 1, pageSize, Sort.by("createdAt").descending());
        if (search == null || search.isBlank()) return itemRepository.findAll(pageable);
        return itemRepository.search(search, pageable);
    }

    public CustomItem create(CustomItem item) {
        // validation minimal
        if (item.getTitle() == null || item.getTitle().isBlank()) {
            throw new IllegalArgumentException("title is required");
        }
        return itemRepository.save(item);
    }

    public Optional<CustomItem> findById(Long id) { return itemRepository.findById(id); }

    public CustomItem update(Long id, CustomItem update) {
        CustomItem existing = itemRepository.findById(id).orElseThrow(() -> new RuntimeException("Not found"));
        if (update.getTitle() != null) existing.setTitle(update.getTitle());
        existing.setDescription(update.getDescription());
        existing.setTags(update.getTags());
        return itemRepository.save(existing);
    }

    public void delete(Long id) { itemRepository.deleteById(id); }

    public List<CustomItem> getItems(String search) {
        if (search == null || search.isEmpty()) {
            return itemRepository.findAll();
        } else {
            return itemRepository.searchByTitleOrTags(search);
        }
    }
}
