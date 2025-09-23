package myitems.backend.config;

import myitems.backend.model.Item;
import myitems.backend.repository.ItemRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

//verif si conserver Instant là et dans le if ou si tout supprimer
//import java.time.Instant;
import java.util.Arrays;

@Configuration
public class DataLoader {

    @Bean
    CommandLineRunner initDatabase(ItemRepository itemRepository) {
        return args -> {
            if (itemRepository.count() == 0) {
                Item i1 = new Item("Libro de Java", "Un libro sobre Java básico",
                        Arrays.asList("java", "programación")/*, Instant.now(), Instant.now()*/);
                Item i2 = new Item("Laptop", "Ordenador portátil", 
                        Arrays.asList("tecnología", "hardware")/*, Instant.now(), Instant.now()*/);
                Item i3 = new Item("Auriculares", "Auriculares inalámbricos", 
                        Arrays.asList("audio", "bluetooth")/*, Instant.now(), Instant.now()*/);

                itemRepository.saveAll(Arrays.asList(i1, i2, i3));
            }
        };
    }
}
