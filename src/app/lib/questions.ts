export interface Option {
  value: string;
  text: string;
}

export interface Question {
  id: string;
  section: string;
  questionText: string;
  options: Option[];
  correctAnswer: string;
  explanation: string;
  topic: string;
}

export const QUESTIONS: Question[] = [
  // --- BLOQUE 1: JERARQUÍA, ALCOHOL Y VÍAS ---
  {
    id: 'b1_1',
    section: 'Tránsito y Normativa',
    topic: 'Jerarquía Vial',
    questionText: 'Según la jerarquía de las señales de tránsito en Colombia, ¿cuál tiene prioridad sobre las demás?',
    options: [
      { value: 'a', text: 'Las señales reglamentarias' },
      { value: 'b', text: 'Los semáforos' },
      { value: 'c', text: 'Las órdenes impartidas por los agentes de tránsito' },
      { value: 'd', text: 'Las marcas viales' }
    ],
    correctAnswer: 'c',
    explanation: 'Las órdenes de los agentes de tránsito prevalecen sobre semáforos y cualquier otra señalización (Art. 111 CNT).'
  },
  {
    id: 'b1_2',
    section: 'Seguridad y Conducción',
    topic: 'Alcohol',
    questionText: '¿Cuál es el nivel máximo permitido de alcohol en sangre para conductores de servicio público, transporte escolar y de carga?',
    options: [
      { value: 'a', text: '20 mg de etanol/100 ml de sangre' },
      { value: 'b', text: '0 mg de etanol/100 ml de sangre (Tolerancia cero)' },
      { value: 'c', text: '40 mg de etanol/100 ml de sangre' },
      { value: 'd', text: '10 mg de etanol/100 ml de sangre' }
    ],
    correctAnswer: 'b',
    explanation: 'En Colombia rige la tolerancia cero absoluta para conductores de servicio público, escolar y de carga.'
  },
  {
    id: 'b1_3',
    section: 'Tránsito y Normativa',
    topic: 'Prelación',
    questionText: 'Al llegar a una intersección en forma de "X" donde no hay señales, semáforos ni agentes, ¿quién tiene la prelación de paso?',
    options: [
      { value: 'a', text: 'El vehículo que vaya más rápido' },
      { value: 'b', text: 'El vehículo que se encuentra a la derecha del otro conductor' },
      { value: 'c', text: 'El vehículo que transite por la vía más ancha' },
      { value: 'd', text: 'El vehículo que gire a la izquierda' }
    ],
    correctAnswer: 'b',
    explanation: 'En intersecciones no señalizadas, el vehículo que aparece por la derecha tiene la prelación.'
  },
  {
    id: 'b1_4',
    section: 'Tránsito y Normativa',
    topic: 'Revisión Técnico-Mecánica',
    questionText: '¿Cada cuánto tiempo se debe realizar la Revisión Técnico-Mecánica para un vehículo particular nuevo?',
    options: [
      { value: 'a', text: 'Cada año' },
      { value: 'b', text: 'Al cumplir los 6 años desde la matrícula' },
      { value: 'c', text: 'A los 2 años' },
      { value: 'd', text: 'A los 10 años' }
    ],
    correctAnswer: 'b',
    explanation: 'Según la normativa vigente, los vehículos particulares nuevos deben realizar su primera revisión al cumplirse 6 años de la matrícula.'
  },
  {
    id: 'b1_5',
    section: 'Seguridad y Conducción',
    topic: 'Posición de Giro',
    questionText: 'En una vía de doble sentido, si vas a realizar un giro a la izquierda, ¿en qué posición debes ubicar el vehículo?',
    options: [
      { value: 'a', text: 'En el carril derecho' },
      { value: 'b', text: 'En el centro de la calzada, pegado a la línea divisoria sin invadir' },
      { value: 'c', text: 'Sobre el andén' },
      { value: 'd', text: 'Totalmente a la izquierda' }
    ],
    correctAnswer: 'b',
    explanation: 'Se debe ocupar el centro de la calzada para permitir el flujo por la derecha y señalizar con tiempo.'
  },

  // --- BLOQUE 2: MECÁNICA BÁSICA ---
  {
    id: 'm1',
    section: 'Mecánica Básica',
    topic: 'Sistemas del Vehículo',
    questionText: '¿Cuáles son los tres elementos principales para que funcione un vehículo automotor?',
    options: [
      { value: 'a', text: 'Motor, transmisión y ruedas' },
      { value: 'b', text: 'Motor, gasolina y batería' },
      { value: 'c', text: 'Motor, radiador y aceite' },
      { value: 'd', text: 'Motor, combustible y alternador' }
    ],
    correctAnswer: 'a',
    explanation: 'Para que un vehículo funcione, necesita: Motor (energía), Transmisión (distribución) y Ruedas (movimiento).'
  },
  {
    id: 'm2',
    section: 'Mecánica Básica',
    topic: 'Transmisión',
    questionText: '¿Cuál es la función del embrague en el sistema de transmisión?',
    options: [
      { value: 'a', text: 'Aumentar la velocidad del vehículo' },
      { value: 'b', text: 'Permitir o evitar que el movimiento del motor pase a la transmisión' },
      { value: 'c', text: 'Enfriar el motor' },
      { value: 'd', text: 'Mantener presión en los neumáticos' }
    ],
    correctAnswer: 'b',
    explanation: 'El embrague conecta o desconecta el motor con la transmisión para permitir cambios de marcha.'
  },
  {
    id: 'm3',
    section: 'Mecánica Básica',
    topic: 'Suspensión',
    questionText: '¿Cuál es la función principal del sistema de suspensión del vehículo?',
    options: [
      { value: 'a', text: 'Generar potencia al motor' },
      { value: 'b', text: 'Absorber las irregularidades del terreno y mantener la estabilidad' },
      { value: 'c', text: 'Frenar el vehículo' },
      { value: 'd', text: 'Cambiar las marchas' }
    ],
    correctAnswer: 'b',
    explanation: 'La suspensión mantiene las llantas en contacto con el suelo y absorbe impactos para el confort y seguridad.'
  },
  {
    id: 'm4',
    section: 'Mecánica Básica',
    topic: 'Lubricación',
    questionText: '¿Cuál es la función del aceite en el motor?',
    options: [
      { value: 'a', text: 'Lubricar las partes móviles del motor' },
      { value: 'b', text: 'Refrigerar el motor' },
      { value: 'c', text: 'Proporcionar combustible' },
      { value: 'd', text: 'Generar chispas de ignición' }
    ],
    correctAnswer: 'a',
    explanation: 'El aceite lubrica las partes móviles del motor, reduciendo la fricción y el desgaste.'
  },
  {
    id: 'm5',
    section: 'Mecánica Básica',
    topic: 'Seguridad Pasiva',
    questionText: '¿Qué elementos se consideran parte del sistema de seguridad PASIVA en un vehículo?',
    options: [
      { value: 'a', text: 'Frenos ABS y dirección' },
      { value: 'b', text: 'Airbag, cinturón de seguridad y apoyacabezas' },
      { value: 'c', text: 'Espejos y luces' },
      { value: 'd', text: 'Llantas y suspensión' }
    ],
    correctAnswer: 'b',
    explanation: 'La seguridad pasiva actúa después del accidente para mitigar las lesiones de los ocupantes.'
  },

  // --- BLOQUE 3: NORMAS Y VELOCIDADES ---
  {
    id: 'b3_1',
    section: 'Tránsito y Normativa',
    topic: 'Velocidad Urbana',
    questionText: '¿Cuál es el límite de velocidad máximo permitido para vehículos particulares en vías urbanas en Colombia?',
    options: [
      { value: 'a', text: '60 km/h' },
      { value: 'b', text: '50 km/h' },
      { value: 'c', text: '40 km/h' },
      { value: 'd', text: '80 km/h' }
    ],
    correctAnswer: 'b',
    explanation: 'La Ley 2251 de 2022 (Ley Julián Esteban) fijó el límite general en zonas urbanas en 50 km/h.'
  },
  {
    id: 'b3_2',
    section: 'Tránsito y Normativa',
    topic: 'Adelantamiento',
    questionText: '¿En qué casos específicos está permitido adelantar a otro vehículo por la derecha en Colombia?',
    options: [
      { value: 'a', text: 'Nunca está permitido' },
      { value: 'b', text: 'En vías de tres o más carriles con el mismo sentido o si el de adelante gira a la izquierda' },
      { value: 'c', text: 'Siempre que haya espacio' },
      { value: 'd', text: 'Solo en autopistas' }
    ],
    correctAnswer: 'b',
    explanation: 'Se permite por la derecha en vías multicarril o cuando el vehículo precedente indica giro a la izquierda.'
  },
  {
    id: 'b3_3',
    section: 'Seguridad y Conducción',
    topic: 'Ciclistas',
    questionText: '¿Cuál es la distancia mínima lateral que debe dejar un conductor al adelantar a un ciclista?',
    options: [
      { value: 'a', text: '0.5 metros' },
      { value: 'b', text: '1.0 metros' },
      { value: 'c', text: '1.5 metros' },
      { value: 'd', text: '2.0 metros' }
    ],
    correctAnswer: 'c',
    explanation: 'La ley exige dejar un espacio mínimo de 1.5 metros de distancia lateral al adelantar ciclistas.'
  },
  {
    id: 'b3_4',
    section: 'Tránsito y Normativa',
    topic: 'Señalización Horizontal',
    questionText: 'Si encuentras una línea amarilla continua DOBLE en el centro de la vía, ¿qué significa?',
    options: [
      { value: 'a', text: 'Vía de un solo sentido' },
      { value: 'b', text: 'Doble sentido y prohibición absoluta de adelantar para ambos lados' },
      { value: 'c', text: 'Zona de parqueo' },
      { value: 'd', text: 'Vía en reparación' }
    ],
    correctAnswer: 'b',
    explanation: 'La doble línea amarilla continua indica que ningún sentido puede realizar maniobras de adelantamiento.'
  },
  {
    id: 'b3_5',
    section: 'Tránsito y Normativa',
    topic: 'Estacionamiento',
    questionText: '¿A qué distancia mínima de una esquina se permite estacionar un vehículo según el CNT?',
    options: [
      { value: 'a', text: '2 metros' },
      { value: 'b', text: '5 metros' },
      { value: 'c', text: '10 metros' },
      { value: 'd', text: '1 metro' }
    ],
    correctAnswer: 'b',
    explanation: 'Está prohibido estacionar a menos de 5 metros de una intersección o esquina.'
  },

  // --- BLOQUE 4: EMERGENCIAS Y DOCUMENTACIÓN ---
  {
    id: 'b4_1',
    section: 'Tránsito y Normativa',
    topic: 'Señalización',
    questionText: '¿Qué indica una señal reglamentaria circular con borde rojo y una flecha negra hacia arriba tachada?',
    options: [
      { value: 'a', text: 'Cuidado, vía en mal estado' },
      { value: 'b', text: 'Prohibido seguir de frente' },
      { value: 'c', text: 'Giro obligatorio' },
      { value: 'd', text: 'Vía cerrada' }
    ],
    correctAnswer: 'b',
    explanation: 'Es la señal SR-01, que indica la prohibición de continuar en la dirección que muestra la flecha.'
  },
  {
    id: 'b4_2',
    section: 'Seguridad y Conducción',
    topic: 'Emergencias',
    questionText: 'Si tu vehículo se vara en una carretera recta, ¿a qué distancia mínima debes colocar los triángulos?',
    options: [
      { value: 'a', text: '10 metros' },
      { value: 'b', text: 'Entre 50 y 100 metros hacia adelante y hacia atrás' },
      { value: 'c', text: 'Justo al lado del vehículo' },
      { value: 'd', text: 'A 200 metros' }
    ],
    correctAnswer: 'b',
    explanation: 'La distancia permite que otros conductores reaccionen a tiempo ante el obstáculo en la vía.'
  },
  {
    id: 'b4_3',
    section: 'Tránsito y Normativa',
    topic: 'Luces',
    questionText: '¿Cuál es el color de las luces de reversa obligatorio para todos los vehículos en Colombia?',
    options: [
      { value: 'a', text: 'Rojo' },
      { value: 'b', text: 'Blanco' },
      { value: 'c', text: 'Amarillo' },
      { value: 'd', text: 'Azul' }
    ],
    correctAnswer: 'b',
    explanation: 'Las luces de reversa deben ser siempre de color blanco para indicar la maniobra de retroceso.'
  },
  {
    id: 'b4_4',
    section: 'Tránsito y Normativa',
    topic: 'Semáforos',
    questionText: 'Cuando un semáforo cambia a luz amarilla, ¿qué debe hacer el conductor?',
    options: [
      { value: 'a', text: 'Acelerar para pasar rápido' },
      { value: 'b', text: 'Detener el vehículo, a menos que no pueda hacerlo de forma segura' },
      { value: 'c', text: 'Pitar para avisar' },
      { value: 'd', text: 'Seguir normalmente' }
    ],
    correctAnswer: 'b',
    explanation: 'La luz amarilla indica prevención y el deber de detenerse ante el inminente cambio a rojo.'
  },
  {
    id: 'b4_5',
    section: 'Tránsito y Normativa',
    topic: 'Documentación',
    questionText: '¿Cuál es el documento obligatorio que ampara daños corporales inmediatos en accidentes?',
    options: [
      { value: 'a', text: 'Licencia de conducción' },
      { value: 'b', text: 'SOAT' },
      { value: 'c', text: 'Seguro todo riesgo' },
      { value: 'd', text: 'Tarjeta de propiedad' }
    ],
    correctAnswer: 'b',
    explanation: 'El SOAT garantiza la atención médica de todas las víctimas de un accidente de tránsito de forma inmediata.'
  },

  // --- BLOQUE 5: PRIMEROS AUXILIOS Y CASOS ESPECIALES ---
  {
    id: 'b5_1',
    section: 'Seguridad y Conducción',
    topic: 'Primeros Auxilios',
    questionText: 'En un accidente con heridos, ¿qué significa el protocolo PAS?',
    options: [
      { value: 'a', text: 'Parar, Ayudar, Salir' },
      { value: 'b', text: 'Proteger, Avisar, Socorrer' },
      { value: 'c', text: 'Prevenir, Analizar, Socorrer' },
      { value: 'd', text: 'Prudencia, Auxilio, Seguridad' }
    ],
    correctAnswer: 'b',
    explanation: 'PAS: Proteger la escena, Avisar a las autoridades y Socorrer a las víctimas con primeros auxilios básicos.'
  },
  {
    id: 'b5_2',
    section: 'Seguridad y Conducción',
    topic: 'Puntos Ciegos',
    questionText: '¿Qué significa el término "Punto Ciego" en la conducción?',
    options: [
      { value: 'a', text: 'Manejar de noche' },
      { value: 'b', text: 'Áreas alrededor del vehículo que no pueden ser vistas por los espejos' },
      { value: 'c', text: 'Falla en las luces frontales' },
      { value: 'd', text: 'Un cruce peligroso' }
    ],
    correctAnswer: 'b',
    explanation: 'Son zonas de visión nula que requieren girar la cabeza o usar espejos convexos para ser detectadas.'
  },
  {
    id: 'b5_3',
    section: 'Mecánica Básica',
    topic: 'Llantas',
    questionText: '¿Cuál es la profundidad mínima legal permitida para el labrado de llantas de un vehículo particular?',
    options: [
      { value: 'a', text: '0.8 mm' },
      { value: 'b', text: '1.6 mm' },
      { value: 'c', text: '2.0 mm' },
      { value: 'd', text: '1.0 mm' }
    ],
    correctAnswer: 'b',
    explanation: 'El límite legal de desgaste para seguridad y evitar multas es de 1.6 mm.'
  },
  {
    id: 'b5_4',
    section: 'Tránsito y Normativa',
    topic: 'Choque Simple',
    questionText: 'En caso de un choque simple (solo daños materiales), ¿qué exige la ley actual colombiana?',
    options: [
      { value: 'a', text: 'Esperar al agente de tránsito sin mover los carros' },
      { value: 'b', text: 'Tomar evidencias y retirar los vehículos de inmediato para no bloquear' },
      { value: 'c', text: 'Pelear con el otro conductor' },
      { value: 'd', text: 'Llamar a una grúa privada' }
    ],
    correctAnswer: 'b',
    explanation: 'La Ley 2161 de 2021 obliga a retirar los vehículos en choques simples para garantizar la movilidad.'
  },
  {
    id: 'b5_5',
    section: 'Mecánica Básica',
    topic: 'Tablero',
    questionText: '¿Qué indica el encendido de la luz roja con forma de aceitera en el tablero?',
    options: [
      { value: 'a', text: 'Falta combustible' },
      { value: 'b', text: 'Baja presión de aceite, debe apagar el motor de inmediato' },
      { value: 'c', text: 'Cambio de aceite programado' },
      { value: 'd', text: 'Temperatura alta' }
    ],
    correctAnswer: 'b',
    explanation: 'Si este testigo se enciende, el motor corre riesgo de fundirse por falta de lubricación.'
  },

  // --- BLOQUE 6: INFRAESTRUCTURA VIAL ---
  {
    id: 'b6_1',
    section: 'Tránsito y Normativa',
    topic: 'Marcas Viales',
    questionText: '¿Qué significa una línea blanca discontinua (segmentada) en una vía?',
    options: [
      { value: 'a', text: 'Doble sentido' },
      { value: 'b', text: 'Un solo sentido y se permite el cambio de carril con precaución' },
      { value: 'c', text: 'Prohibido adelantar' },
      { value: 'd', text: 'Zona de peatones' }
    ],
    correctAnswer: 'b',
    explanation: 'El color blanco indica un solo sentido de circulación.'
  },
  {
    id: 'b6_2',
    section: 'Tránsito y Normativa',
    topic: 'Ojos de Gato',
    questionText: '¿Cuál es la función de los tachones u "ojos de gato" de color ROJO en el pavimento?',
    options: [
      { value: 'a', text: 'Decoración' },
      { value: 'b', text: 'Delimitar el borde derecho o zonas peligrosas donde está prohibido ingresar' },
      { value: 'c', text: 'Indicar que se puede parquear' },
      { value: 'd', text: 'Dividir carriles' }
    ],
    correctAnswer: 'b',
    explanation: 'El color rojo en tachones indica peligro o restricción de acceso.'
  },
  {
    id: 'b6_3',
    section: 'Tránsito y Normativa',
    topic: 'Señales Informativas',
    questionText: '¿Qué indica una señal de tránsito informativa que tiene un fondo de color café/marrón?',
    options: [
      { value: 'a', text: 'Servicios de mecánica' },
      { value: 'b', text: 'Sitios de interés turístico, histórico o recreativo' },
      { value: 'c', text: 'Vía cerrada' },
      { value: 'd', text: 'Restaurante cerca' }
    ],
    correctAnswer: 'b',
    explanation: 'El color café es exclusivo para información turística y ecológica.'
  },
  {
    id: 'b6_4',
    section: 'Tránsito y Normativa',
    topic: 'Carriles',
    questionText: 'En una calzada urbana de tres carriles, ¿por cuál carril deben transitar los vehículos de carga?',
    options: [
      { value: 'a', text: 'Por el carril izquierdo' },
      { value: 'b', text: 'Obligatoriamente por el carril derecho' },
      { value: 'c', text: 'Por el carril del medio' },
      { value: 'd', text: 'Por cualquier carril' }
    ],
    correctAnswer: 'b',
    explanation: 'Los vehículos pesados y lentos deben circular siempre por la derecha.'
  },
  {
    id: 'b6_5',
    section: 'Tránsito y Normativa',
    topic: 'Marca Antibloqueo',
    questionText: '¿Qué significa la cuadrícula amarilla pintada en medio de una intersección?',
    options: [
      { value: 'a', text: 'Zona de cargue' },
      { value: 'b', text: 'Indica que ningún vehículo puede quedar detenido sobre ella' },
      { value: 'c', text: 'Parada de bus' },
      { value: 'd', text: 'Cruce de ciclistas' }
    ],
    correctAnswer: 'b',
    explanation: 'Busca evitar el bloqueo del cruce cuando el tráfico se detiene al otro lado.'
  },

  // --- BLOQUE 7: CONDUCCIÓN PREVENTIVA ---
  {
    id: 'b7_1',
    section: 'Seguridad y Conducción',
    topic: 'Aquaplaning',
    questionText: 'Al conducir bajo lluvia intensa, ¿qué acción mitiga el riesgo de "aquaplaning"?',
    options: [
      { value: 'a', text: 'Aumentar la velocidad' },
      { value: 'b', text: 'Reducir la velocidad gradualmente y evitar frenazos bruscos' },
      { value: 'c', text: 'Pisar el freno a fondo' },
      { value: 'd', text: 'Encender las luces altas' }
    ],
    correctAnswer: 'b',
    explanation: 'Reducir la velocidad permite que el labrado de la llanta evacue el agua correctamente.'
  },
  {
    id: 'b7_2',
    section: 'Seguridad y Conducción',
    topic: 'Falla de Frenos',
    questionText: '¿Qué maniobra de emergencia debes hacer si el pedal del freno se va hasta el fondo?',
    options: [
      { value: 'a', text: 'Apagar el motor de inmediato' },
      { value: 'b', text: 'Bajar cambios progresivamente y usar el freno de mano suavemente' },
      { value: 'c', text: 'Saltar del vehículo' },
      { value: 'd', text: 'Poner el carro en neutro' }
    ],
    correctAnswer: 'b',
    explanation: 'La compresión del motor ayuda a reducir la velocidad sin bloquear las ruedas bruscamente.'
  },
  {
    id: 'b7_3',
    section: 'Seguridad y Conducción',
    topic: 'Distancia de Seguridad',
    questionText: '¿Cuál es el tiempo recomendado que se debe mantener con el vehículo de adelante?',
    options: [
      { value: 'a', text: '1 segundo' },
      { value: 'b', text: 'Mínimo 3 segundos de separación' },
      { value: 'c', text: '5 metros fijos' },
      { value: 'd', text: 'No importa la distancia' }
    ],
    correctAnswer: 'b',
    explanation: 'La regla de los 3 segundos compensa el tiempo de reacción y la distancia de frenado.'
  },
  {
    id: 'b7_4',
    section: 'Tránsito y Normativa',
    topic: 'Edad Legal',
    questionText: '¿A qué edad mínima se puede obtener la licencia para servicio particular en Colombia?',
    options: [
      { value: 'a', text: '18 años' },
      { value: 'b', text: '16 años (con autorización legal)' },
      { value: 'c', text: '21 años' },
      { value: 'd', text: '15 años' }
    ],
    correctAnswer: 'b',
    explanation: 'A los 16 años se puede obtener licencia de categoría A1, A2, B1 previa autorización de los padres.'
  },
  {
    id: 'b7_5',
    section: 'Tránsito y Normativa',
    topic: 'Prohibiciones',
    questionText: '¿Qué maniobra está estrictamente prohibida realizar en túneles, puentes y curvas?',
    options: [
      { value: 'a', text: 'Encender las luces' },
      { value: 'b', text: 'Adelantar a otros vehículos' },
      { value: 'c', text: 'Usar el limpiaparabrisas' },
      { value: 'd', text: 'Mirar por el retrovisor' }
    ],
    correctAnswer: 'b',
    explanation: 'Por falta de visibilidad y espacio de maniobra, el adelantamiento está prohibido en estas zonas.'
  },

  // --- BLOQUE 8: REFUERZO ---
  {
    id: 'b8_1',
    section: 'Tránsito y Normativa',
    topic: 'Vigencia Licencia',
    questionText: '¿Cuál es la vigencia de la licencia para servicio PARTICULAR para menores de 60 años?',
    options: [
      { value: 'a', text: '5 años' },
      { value: 'b', text: '10 años' },
      { value: 'c', text: '3 años' },
      { value: 'd', text: 'Indefinida' }
    ],
    correctAnswer: 'b',
    explanation: 'La licencia particular para menores de 60 años dura 10 años. Entre 60 y 80 años dura 5 años.'
  },
  {
    id: 'b8_2',
    section: 'Tránsito y Normativa',
    topic: 'Sanciones',
    questionText: '¿Qué sanción acarrea transitar con el SOAT o la Revisión vencidos?',
    options: [
      { value: 'a', text: 'Solo una multa' },
      { value: 'b', text: 'Multa económica e inmovilización del vehículo' },
      { value: 'c', text: 'Cárcel' },
      { value: 'd', text: 'Llamado de atención' }
    ],
    correctAnswer: 'b',
    explanation: 'Son infracciones tipo C que conllevan el traslado del vehículo a patios.'
  },
  {
    id: 'b8_3',
    section: 'Tránsito y Normativa',
    topic: 'Amonestación',
    questionText: '¿Qué diferencia existe entre las sanciones de "Multa" y "Amonestación"?',
    options: [
      { value: 'a', text: 'Son lo mismo' },
      { value: 'b', text: 'La multa es económica; la amonestación es asistir a un curso pedagógico' },
      { value: 'c', text: 'La multa es para particulares y amonestación para públicos' },
      { value: 'd', text: 'Ninguna de las anteriores' }
    ],
    correctAnswer: 'b',
    explanation: 'La amonestación es una sanción educativa obligatoria sin cobro de dinero inicial.'
  },
  {
    id: 'b8_4',
    section: 'Tránsito y Normativa',
    topic: 'Direccionales',
    questionText: '¿Con cuántos metros de anticipación se debe activar la direccional en zona urbana?',
    options: [
      { value: 'a', text: '10 metros' },
      { value: 'b', text: 'Mínimo 30 metros antes' },
      { value: 'c', text: 'Justo al girar' },
      { value: 'd', text: '60 metros' }
    ],
    correctAnswer: 'b',
    explanation: 'En zona urbana son 30 metros; en carretera o zona rural son 60 metros.'
  },
  {
    id: 'b8_5',
    section: 'Tránsito y Normativa',
    topic: 'Subsanar Falla',
    questionText: 'Si eres detenido por una falla mecánica menor y logras solucionarla en menos de 60 minutos:',
    options: [
      { value: 'a', text: 'Te perdonan la multa' },
      { value: 'b', text: 'Evitas la grúa, pero la multa se impone de igual manera' },
      { value: 'c', text: 'No sucede nada' },
      { value: 'd', text: 'Te llevan preso' }
    ],
    correctAnswer: 'b',
    explanation: 'Subsanar la falta evita el costo de grúa y patios, pero no anula la infracción cometida.'
  }
].sort(() => Math.random() - 0.5);
