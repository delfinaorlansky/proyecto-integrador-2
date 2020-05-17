CREATE DATABASE proyecto_integrador_2

CREATE TABLE usuarios  (
 id  INT (10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY , 
 nombre_de_usuario  VARCHAR (400) NOT NULL ,
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


INSERT INTO reseñas (id_pelicula , id_usuario , texto_de_reseña , fecha_de_creacion,
fecha_de_actualizacion , puntaje_sobre_pelicula) VALUES (330457, 3, "Frozen 2 es una buena película. Es una aventura sencilla con mucha magia y amor que sin duda encantará a los niños, pero los adultos y quienes han crecido con la primera historia de Anna 
y Elsa seguramente esperaban algo con más sustancia.", 20191122 , 20200110 , 90 ); 

INSERT INTO reseñas (id_pelicula , id_usuario , texto_de_reseña , fecha_de_creacion,
fecha_de_actualizacion , puntaje_sobre_pelicula) VALUES (338762, 1, " Bloodshot se trata de una historia bastante original que le da un tono diferente a las películas de super heroes a las cuales estamos acostumbrados. Pero, al no saber que camino tomar la película se desvía del punto y termina así en la lista de “Buenas ideas mal ejecutadas”. El principal problema recae en el guión
 pues este se queda corto con la capacidad de lo que la historia pudo ser.", 20200313 , 20200410 , 98 ); 

INSERT INTO reseñas (id_pelicula , id_usuario , texto_de_reseña , fecha_de_creacion,
fecha_de_actualizacion , puntaje_sobre_pelicula) VALUES (508439, 4, "Onward’ rescata la esencia de Pixar, tocando el corazón de aquellos que comparten su vida con un hermano, a través de un viaje
 literalmente épico, que va más allá del cuento de hadas. ", 20200306 , 20200420 , 80 ); 

INSERT INTO reseñas (id_pelicula , id_usuario , texto_de_reseña , fecha_de_creacion,
fecha_de_actualizacion , puntaje_sobre_pelicula) VALUES (530915, 5, "Aparece como si hubiera sido filmada en una toma perfecta, o dos, si incluye un lugar donde parece claro, probablemente se produjo un descanso. En realidad, hay docenas de cortes, pero el editor Lee Smith los oculta ingeniosamente,
y la toma continua más larga es de solo ocho minutos. Sí, es una hazaña técnica deslumbrante.", 20200110 , 20200422 , 89 );

INSERT INTO reseñas (id_pelicula , id_usuario , texto_de_reseña , fecha_de_creacion,
fecha_de_actualizacion , puntaje_sobre_pelicula) VALUES (38700, 3, "Bad Boys for Life nos recuerda de tanto en tanto lo anacrónico que resulta la forma de actuar de Mike y Marcus, incluso cuando su instinto les lleva a acertar en la decisión a tomar aunque luego la ejecución sea un tanto mejorable. Y esos roces entre sus métodos 
y los más avanzados tecnológicamente de la policía resultan simpáticos ", 20200117 , 20200210 , 100);

INSERT INTO reseñas (id_pelicula , id_usuario , texto_de_reseña , fecha_de_creacion,
fecha_de_actualizacion , puntaje_sobre_pelicula) VALUES (920, 2, "Para los que somos fans de las películas animadas (y particularmente las de Pixar) esta película es una verdadera joya (no a los niveles de Toy Story pero diría que está por encima de Bichos y Buscando a Nemo), sobre todo es de admirar lo expresivo que son los vehículos considerando que solo mueven las llantas, los ojos y la boca; también son admirables los paisajes que realizaron
 los maestros de Pixar, a pesar de estar hechos con CGI, se ven muy realistas. ", 20060609 , 20190124 , 97 ); 

INSERT INTO reseñas (id_pelicula , id_usuario , texto_de_reseña , fecha_de_creacion,
fecha_de_actualizacion , puntaje_sobre_pelicula) VALUES (475557, 5, "El resultado es una película que se hizo con enorme libertad, que no necesitó basarse en ningún arco de cómic y que tiene a uno de los más grandes actores de las últimas décadas en pantalla. Claro, esto no basta para hacer una buena película y Todd Phillips es un director que, a pesar de sus grandes pretensiones, no tiene la sensibilidad, profundidad y elocuencia del Scorsese que 
trató de emular. Sin embargo, Joker es una película sumamente interesante a pesar de su director; una película que no tiene por qué existir fuera del género que le dio vida; una película que, al inmiscuirse poco con el material de los cómics, crea una visión original, desgarradora y necesaria 
de un personaje esencial para la cultura popular contemporánea. ", 20191004 , 20191211 , 100 ); 

INSERT INTO reseñas (id_pelicula , id_usuario , texto_de_reseña , fecha_de_creacion,
fecha_de_actualizacion , puntaje_sobre_pelicula) VALUES (496243, 4, "La obra maestra del director surcoreano encuentra en la fotografía, la edición y el sub texto las armas perfectas para contar una historia que es tan profunda o ligera como el espectador pretenda
 y que satisface desde lo estético a lo dramático.  ", 20191101 , 20200121 , 91 ); 

INSERT INTO reseñas (id_pelicula , id_usuario , texto_de_reseña , fecha_de_creacion,
fecha_de_actualizacion , puntaje_sobre_pelicula) VALUES (582596, 1, "No es que el guión de la película se mate para trazar un punto de partida original (o meridianamente claro), pero no nos engañemos: no lo necesita. Un buen par de chistes para romper el hielo y entramos en situación. Los fans de David Spade pueden darse por satisfechos con su clásico personaje superado por los
 acontecimientos, aunque su matiz tierno de más ayuda mucho a su Tim. ", 20200513 , 20200514 , 90 );

INSERT INTO reseñas (id_pelicula , id_usuario , texto_de_reseña , fecha_de_creacion,
fecha_de_actualizacion , puntaje_sobre_pelicula) VALUES (299536, 5, "Avengers: Endgame es un final emotivo, divertido y perfectamente digno para la saga enormemente importante de Marvel en cine. Se dice fácil, pero aquí acaba una década. Con Avengers: Endgame llegamos al fin de una era. ... Tal vez el MCU no se acabe y seguramente esta máquina bien engrasada 
de billetes nunca parará.", 20180427 , 20200308 , 100 );

INSERT INTO reseñas (id_pelicula , id_usuario , texto_de_reseña , fecha_de_creacion,
fecha_de_actualizacion , puntaje_sobre_pelicula) VALUES (420817, 2, "Creo que lo mejor y más disfrutable de la cinta, es Will Smith quien roba cámara con sus canciones, su humor, además de gran ingenio que le imprime a este mágico personaje; y es bueno, porque en la cinta animada el personaje azul solía tener un carisma magnético y todo termina siendo el genio con sus interacciones
 con Aladdin, de nuevo vuelve a ocurrir con este magnífico personaje, 
con buenos complementos actorales con Mena Massoud y Naomi Scott.", 20190524 , 20200223 , 100 );

INSERT INTO reseñas (id_pelicula , id_usuario , texto_de_reseña , fecha_de_creacion,
fecha_de_actualizacion , puntaje_sobre_pelicula) VALUES (443791, 4, "Underwater es una propuesta que no encaja demasiado en el Hollywood actual, ya que es una película con espíritu de serie de b de terror pero contando para ello con un presupuesto de serie a -entre 50 y 80 millones según la fuente consultada-. El resultado es una estimable pesadilla 
submarina que da lo mejor de sí misma en su notable tramo final. ", 20200110 , 20200425 , 86 );

INSERT INTO reseñas (id_pelicula, id_usuario, texto_de_reseña, fecha_de_creacion, 
fecha_de_actualizacion, puntaje_sobre_pelicula) VALUES (570670, 1, "La nueva versión de 
El hombre invisible tiene un concepto brillante y una ejecución irregular. 
Pero tiene un concepto brillante, algo no tan común en el cine fantástico 
y de terror contemporáneo (valioso por otras razones), que de alguna manera 
arrasa con todo. ", 20200228,20200420, 100);

INSERT INTO reseñas (id_pelicula, id_usuario, texto_de_reseña, fecha_de_creacion, 
fecha_de_actualizacion, puntaje_sobre_pelicula) VALUES (539537, 2, "Nos encontramos 
con unas situaciones creadas a conveniencias del guion que rozan lo patético y todo 
ello con un humor de fondo introducido en la película sin lógica, así porque sí.",
20200227,20200422, 38);

INSERT INTO reseñas (id_pelicula, id_usuario, texto_de_reseña, fecha_de_creacion, 
fecha_de_actualizacion, puntaje_sobre_pelicula) VALUES (157336, 3, "La película 
se desarrolla en un futuro no especificado. El mundo está 
sobrepoblado, y una plaga está destruyendo las cosechas de 
miles de granjas y creando enormes tormentas de arena. 
Además, el nivel de nitrógeno en la atmósfera está subiendo, 
por lo que la humanidad tiene sus días contados.",
20140711,20191022, 95);

INSERT INTO reseñas (id_pelicula, id_usuario, texto_de_reseña, fecha_de_creacion, 
fecha_de_actualizacion, puntaje_sobre_pelicula) VALUES (512200, 4, "Jumanji: 
El Siguiente Nivel trae de regreso a los protagonistas de la anterior película. 
Gracias a la experiencia vivida dentro del videojuego, la mayoría de ellos se han 
convertido en mejores personas y actualmente gozan de la vida universitaria y 
nuevos proyectos de vida… Todos menos Spencer.",
20191213,20200122, 100);

INSERT INTO reseñas (id_pelicula, id_usuario, texto_de_reseña, fecha_de_creacion, 
fecha_de_actualizacion, puntaje_sobre_pelicula) VALUES (619264, 5, "El egoísmo que deja a 
la gente morir de hambre. Es en los momentos de pánico y 
desesperación cuando la envidia y la codicia salen a la luz 
y la nueva película El Hoyo en Netflix no podría haber llegado 
a nosotros en un mejor momento.",
20191108,20191112, 80);

INSERT INTO reseñas (id_pelicula, id_usuario, texto_de_reseña, fecha_de_creacion, 
fecha_de_actualizacion, puntaje_sobre_pelicula) VALUES (514847, 1, "La película nos 
sitúa en una pequeña comunidad de Dinamarca, que aparentemente 
está muy unida. El problema surge cuando una noticia rompe 
la tranquilidad del pueblo y la gente actúa de forma 
totalmente hostil con nuestro protagonista.",
20200313,20200501, 90);

INSERT INTO reseñas (id_pelicula, id_usuario, texto_de_reseña, fecha_de_creacion, 
fecha_de_actualizacion, puntaje_sobre_pelicula) VALUES (698320, 2, "En esta nueva 
aventura, el erizo azul deberá viajar hasta nuestro mundo para 
poder salvar el suyo. En su misión no estará solo, pues contará 
con la ayuda de su amigo humano Tom Wachowski (James Marsden), 
con quien intentará escapar del gobierno que quiere capturarlo, 
además de huir de las artimañas del villano Doctor Ivo Robonik (Jim Carrey).",
20200515,20200512, 95);

INSERT INTO reseñas (id_pelicula, id_usuario, texto_de_reseña, fecha_de_creacion, 
fecha_de_actualizacion, puntaje_sobre_pelicula) VALUES (420818, 3, "El rey leon nos 
lleva a la sabana africana donde un futuro rey ha nacido. Simba idolatra a su padre,
el rey Mufasa, y está entusiasmado con su destino real. Pero no todos en el reino 
celebran la llegada del nuevo cachorro. Scar, el hermano de Mufasa y antiguo heredero 
al trono, tiene sus propios planes. ",
20190719,20200301, 100);

INSERT INTO reseñas (id_pelicula, id_usuario, texto_de_reseña, fecha_de_creacion, 
fecha_de_actualizacion, puntaje_sobre_pelicula) VALUES (210577, 4, "El día de su quinto 
aniversario de boda, Nick Dunne (Ben Affleck) informa que su esposa 
Amy (Rosamund Pike) ha desaparecido misteriosamente. 
Pero pronto la presión policial y mediática hace que el 
retrato de felicidad doméstica que ofrece Nick empiece a 
tambalearse. Además, su extraña conducta lo convierte en 
sospechoso, y todo el mundo comienza a preguntase si Nick 
mató a su esposa.",
20141003,20180102, 60);

INSERT INTO reseñas (id_pelicula, id_usuario, texto_de_reseña, fecha_de_creacion, 
fecha_de_actualizacion, puntaje_sobre_pelicula) VALUES (244786, 5, "Whiplash es un 
thriller psicoanalítico que muestra una batalla feroz entre un estudiante de música 
obsesionado por llegar a la cima y un profesor de música que cree que sus métodos 
marciales son el único camino posible para encontrar al próximo Charlie Parker.", 
20141010,20202130, 75);

INSERT INTO reseñas (id_pelicula, id_usuario, texto_de_reseña, fecha_de_creacion, 
fecha_de_actualizacion, puntaje_sobre_pelicula) VALUES (155, 1, "Con la ayuda del 
teniente Jim Gordon (Gary Oldman) y el nuevo y comprometido fiscal del distrito Harvey Dent, 
Batman se propone destruir para siempre el crimen organizado en la ciudad de Gotham.", 
20080718,20200501, 85);

INSERT INTO reseñas (id_pelicula, id_usuario, texto_de_reseña, fecha_de_creacion, 
fecha_de_actualizacion, puntaje_sobre_pelicula) VALUES (293660, 2, "Deadpool no es 
superhéroe cualquiera, es uno que rompe los arquetipos de este tipo de personajes; 
es vulgar, desordenado, grotesco, irascible, violento", 
20160212,20200310, 100);

INSERT INTO reseñas (id_pelicula, id_usuario, texto_de_reseña, fecha_de_creacion, 
fecha_de_actualizacion, puntaje_sobre_pelicula) VALUES (269149, 4, "Zootrópolis nos 
cuenta la historia de una coneja llamada Judy Hopps que tiene un sueño que parece muy 
fuera del alcance para cualquier conejo, ser policía.", 
20160304,20191020, 98);

