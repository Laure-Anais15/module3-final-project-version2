package myitems.backend.repository;

import myitems.backend.model.Item;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ItemRepository extends JpaRepository<Item, Long> {

    @Query("SELECT DISTINCT i FROM Item i LEFT JOIN i.tags t " +
           "WHERE LOWER(i.title) LIKE LOWER(CONCAT('%', :q, '%')) " +
           "OR LOWER(t) LIKE LOWER(CONCAT('%', :q, '%'))")
    Page<Item> search(@Param("q") String q, Pageable pageable);
}
