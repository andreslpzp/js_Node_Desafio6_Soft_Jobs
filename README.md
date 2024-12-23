Documentación del Proyecto: Soft Jobs
Descripción del Proyecto
Soft Jobs es una plataforma diseñada para ayudar a la comunidad de desarrolladores juniors a conseguir trabajos cortos y sencillos, permitiéndoles acumular experiencia laboral y mejorar sus oportunidades. Este proyecto incluye un backend desarrollado en Node.js que proporciona autenticación y autorización de usuarios utilizando JSON Web Tokens (JWT).

Tecnologías Utilizadas
Node.js: Entorno de ejecución para JavaScript en el servidor.
Express: Framework para construir aplicaciones web y APIs.
PostgreSQL: Sistema de gestión de bases de datos relacional.
bcryptjs: Biblioteca para encriptar contraseñas.
jsonwebtoken: Biblioteca para manejar JWT.
dotenv: Para manejar variables de entorno.
morgan: Middleware para registrar las solicitudes HTTP.
Instalación
Requisitos Previos
Tener instalado Node.js (versión 14 o superior).
Tener instalado PostgreSQL y configurado en tu máquina.
Pasos de Instalación
Clona el repositorio:

BASH

git clone <URL_DEL_REPOSITORIO>
cd softjobs-backend
Instala las dependencias:

BASH

npm install
Configura la base de datos:

Ejecuta el siguiente script SQL en tu terminal psql para crear la base de datos y la tabla:
SQL

CREATE DATABASE softjobs;
\c softjobs;
CREATE TABLE usuarios ( id SERIAL PRIMARY KEY, email VARCHAR(50) NOT NULL, password VARCHAR(60) NOT NULL, rol VARCHAR(25), lenguage VARCHAR(20) );
Configura las variables de entorno:

Crea un archivo .env en la raíz del proyecto y agrega las siguientes variables:

DB_USER=tu_usuario
DB_HOST=localhost
DB_NAME=softjobs
DB_PASSWORD=tu_contraseña
DB_PORT=5432
JWT_SECRET=tu_secreto_jwt
Inicia el servidor:

BASH

node server.js
Uso de la API
La API proporciona las siguientes rutas para la gestión de usuarios:

1. Registro de Usuarios
Ruta: POST /usuarios
Descripción: Registra un nuevo usuario en la base de datos.
Cuerpo de la Solicitud:
JSON

{
    "email": "usuario@example.com",
    "password": "tu_contraseña",
    "rol": "desarrollador",
    "lenguage": "JavaScript"
}
Respuesta Exitosa:
Código: 201 Created
Cuerpo:
JSON

{
    "id": 1,
    "email": "usuario@example.com",
    "rol": "desarrollador",
    "lenguage": "JavaScript"
}
2. Login de Usuarios
Ruta: POST /usuarios/login
Descripción: Inicia sesión y devuelve un token JWT.
Cuerpo de la Solicitud:
JSON

{
    "email": "usuario@example.com",
    "password": "tu_contraseña"
}
Respuesta Exitosa:
Código: 200 OK
Cuerpo:
JSON

{
    "token": "tu_token_jwt"
}
3. Obtener Datos del Usuario Autenticado
Ruta: GET /usuarios
Descripción: Devuelve los datos del usuario autenticado.
Headers:
Authorization: Bearer tu_token_jwt
Respuesta Exitosa:
Código: 200 OK
Cuerpo:
JSON

{
    "id": 1,
    "email": "usuario@example.com",
    "rol": "desarrollador",
    "lenguage": "JavaScript"
}
Middlewares
validateUser: Middleware que valida la existencia de las credenciales en la ruta de registro.
authenticateToken: Middleware que verifica la validez del token JWT en las cabeceras.
Manejo de Errores
La API maneja errores y devuelve respuestas adecuadas en caso de fallos, como:

400 Bad Request: Cuando faltan credenciales requeridas.
401 Unauthorized: Cuando las credenciales son inválidas o el token no está presente.
403 Forbidden: Cuando el token es inválido.
500 Internal Server Error: Para errores inesperados en el servidor.

