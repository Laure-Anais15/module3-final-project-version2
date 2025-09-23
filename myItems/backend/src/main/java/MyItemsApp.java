import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication(scanBasePackages = {"controller", "service", "config"})
@EnableJpaRepositories(basePackages = "repository")
@EntityScan(basePackages = "model")
public class MyItemsApp {
    public static void main(String[] args) {
        SpringApplication.run(MyItemsApp.class, args);
    }
}
/*
    Eres un programador experto. Vas a realizar un proyecto en Java spring boot. Las dependencias seleccionadas son las siguientes:

        COPIAR DEPENDENCIAS

    La estructura del proyecto es la siguiente

        INDICAR ESTRUCTURA DEL PROYECTO

    Quiero que desarrolles el código de forma completa, explicándomelo paso a paso. Sigue el modelo MVC.

 */