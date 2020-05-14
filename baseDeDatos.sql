CREATE DATABASE proyecto_integrador_2

CREATE TABLE usuarios  (
 id  INT (10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY , 
 nombre_de_usuario  VARCHAR(400) NOT NULL ,
 email VARCHAR (400) ,
 password VARCHAR (400) ,
 fecha_de_nacimiento DATETIME 
);

CREATE TABLE reseñas  (
 id  INT (10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY , 
 id_pelicula INT UNSIGNED NOT NULL,
 id_usuario INT UNSIGNED NOT NULL,
 texto_de_reseña VARCHAR (1000) NOT NULL, 
 fecha_de_creacion DATETIME NOT NULL,  
 fecha_de_actualizacion DATETIME NOT NULL,
 puntaje_sobre_pelicula INT UNSIGNED NOT NULL

);

INSERT INTO usuarios (nombre_de_usuario, email,fecha_de_nacimiento, password ) VALUES ("Maria", "mariasosa@hotmail.com",
19890107, "secreto") ;
INSERT INTO usuarios (nombre_de_usuario, email,fecha_de_nacimiento,password  ) VALUES ("Camila", "camila@hotmail.com",
19900320, "micontraseña") ;
INSERT INTO usuarios (nombre_de_usuario, email,fecha_de_nacimiento, password ) VALUES ("Matias", "matiasloepz@gmail.com",
20010830, "holatodobien" ) ;
INSERT INTO usuarios (nombre_de_usuario, email,fecha_de_nacimiento, password ) VALUES ("Milagros", "milagros@gmail.com",
19971013, "mipassword") ;
INSERT INTO usuarios (nombre_de_usuario, email,fecha_de_nacimiento, password ) VALUES ("Lucas", "lucas@gmail.com",
19990420, "manzanas") ;

