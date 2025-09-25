MyBooks

Aplicación CRUD de un único recurso Item desarrollada con Spring Boot (backend) y React (frontend).

Permite:

Crear, listar, buscar, ver, editar y borrar items.

Filtrar por título y etiquetas (tags).

Manejo de errores HTTP (400/404/500) con mensajes claros en el frontend.

Arranque local
Requisitos previos

Java 17 o superior

Maven

Node.js (>=18) y npm

MySQL (en tu máquina o en Docker)

- Configuración de la base de datos

Crear la base de datos myitems en MySQL:

CREATE DATABASE myitems;

Revisar o modificar la configuración en
backend/src/main/resources/application.properties:

spring.datasource.url=jdbc:mysql://localhost:3314/myitems?useSSL=false&serverTimezone=UTC
spring.datasource.username=root
spring.datasource.password=ironhack
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect

- Variables de entorno recomendadas:

DB_URL=jdbc:mysql://localhost:3314/myitems?useSSL=false&serverTimezone=UTC
DB_USER=root
DB_PASSWORD=ironhack

Y en application.properties:

spring.datasource.url=${DB_URL}
spring.datasource.username=${DB_USER}
spring.datasource.password=${DB_PASSWORD}

Ejecutar el Backend (Spring Boot)

Desde la carpeta backend:

mvn spring-boot:run

El backend arrancará en: http://localhost:8080

Ejecutar el Frontend (React)

Desde la carpeta frontend:

npm install
npm run dev

El frontend estará en: http://localhost:5173

- Rutas del Backend

Healthcheck

GET /api/health → Verifica la conexión con la base de datos.

Items

GET /api/items?&search=[term] → Lista items con filtro por title o tags.

GET /api/items/{id} → Obtiene un item por ID.

POST /api/items → Crea un item nuevo.

{
"title": "Libro ejemplo",
"description": "Descripción opcional",
"tags": ["tag1", "tag2"]
}

PUT /api/items/{id} → Actualiza un item existente.

DELETE /api/items/{id} → Elimina un item por ID.

- Funcionalidades Frontend

Lista de items con buscador.

Formulario de creación con título obligatorio, descripción y etiquetas separadas por comas.

Vista detalle de cada item.

Edición de título y descripción.

Eliminación con confirmación.

Manejo de errores: mensajes claros cuando la API responde con error.
