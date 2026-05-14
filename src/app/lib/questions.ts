
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
  {
    id: 'q1',
    section: 'Bloque 1: Normas de Tránsito Generales',
    topic: 'Jerarquía de señales',
    questionText: '1. Según la jerarquía de las señales de tránsito en Colombia, ¿cuál tiene prioridad absoluta sobre las demás?',
    options: [
      { value: 'a', text: 'a) Las señales reglamentarias (rojas).' },
      { value: 'b', text: 'b) Las órdenes impartidas por los agentes de tránsito.' },
      { value: 'c', text: 'c) Los semáforos.' },
      { value: 'd', text: 'd) Las señales transitorias (naranjas).' }
    ],
    correctAnswer: 'b',
    explanation: 'Los agentes de tránsito cancelan y superan el valor de cualquier semáforo o señal física fija.',
    topic: 'Normas de Tránsito Generales'
  },
  {
    id: 'q2',
    section: 'Bloque 1: Normas de Tránsito Generales',
    topic: 'Alcoholimetría',
    questionText: '2. ¿Cuál es el nivel máximo permitido de alcohol en sangre para conductores de servicio público, transporte escolar y de carga?',
    options: [
      { value: 'a', text: 'a) 20 mg de etanol/100 ml de sangre total.' },
      { value: 'b', text: 'b) 40 mg de etanol/100 ml de sangre total.' },
      { value: 'c', text: 'c) 0 mg de etanol/100 ml de sangre total (Tolerancia cero absoluta).' },
      { value: 'd', text: 'd) Menos de 0.5 grados.' }
    ],
    correctAnswer: 'c',
    explanation: 'Cero tolerancia. Los conductores que prestan servicios viales públicos o de carga tienen prohibido ingerir licor.',
    topic: 'Normas de Tránsito Generales'
  },
  {
    id: 'q3',
    section: 'Bloque 1: Normas de Tránsito Generales',
    topic: 'Prelación en intersecciones',
    questionText: '3. Al llegar a una intersección donde no hay señales, semáforos ni agentes que regulen el paso, ¿quién tiene la prelación?',
    options: [
      { value: 'a', text: 'a) El vehículo que transita por la vía que parece más ancha.' },
      { value: 'b', text: 'b) El vehículo que se encuentra al lado derecho del otro conductor.' },
      { value: 'c', text: 'c) El vehículo que va a mayor velocidad o pite primero.' },
      { value: 'd', text: 'd) El vehículo de mayor tamaño físico.' }
    ],
    correctAnswer: 'b',
    explanation: 'Quien aparezca por el carril de la derecha posee la prioridad y derecho de paso reglamentario.',
    topic: 'Normas de Tránsito Generales'
  },
  {
    id: 'q4',
    section: 'Bloque 1: Normas de Tránsito Generales',
    topic: 'Revisión Técnico-Mecánica',
    questionText: '4. ¿Cada cuánto tiempo se debe realizar la Revisión Técnico-Mecánica para un vehículo particular NUEVO, contando desde su fecha de matrícula?',
    options: [
      { value: 'a', text: 'a) Al cumplir los 5 años.' },
      { value: 'b', text: 'b) Cada año desde el momento de la entrega de concesionario.' },
      { value: 'c', text: 'c) Al cumplir los 6 años de la fecha de matrícula.' },
      { value: 'd', text: 'd) Al cumplir los 2 años.' }
    ],
    correctAnswer: 'c',
    explanation: 'La Ley de Tránsito en Colombia fijó la primera revisión para vehículos particulares nuevos al cumplir los 6 años.',
    topic: 'Normas de Tránsito Generales'
  },
  {
    id: 'q5',
    section: 'Bloque 1: Normas de Tránsito Generales',
    topic: 'Giros',
    questionText: '5. En una vía de doble sentido de circulación, si vas a realizar un giro hacia la izquierda, ¿en qué posición de la calzada debes ubicar el vehículo?',
    options: [
      { value: 'a', text: 'a) Pegado por completo al andén derecho de la vía.' },
      { value: 'b', text: 'b) En el centro de la calzada, justo sobre la línea divisoria (sin invadir el carril del sentido opuesto).' },
      { value: 'c', text: 'c) Invadiendo por completo el carril izquierdo para recortar la curva.' },
      { value: 'd', text: 'd) En cualquier lado siempre y cuando tenga las luces de parqueo encendidas.' }
    ],
    correctAnswer: 'b',
    explanation: 'Se debe alinear el auto junto al eje medular de la vía para alertar el giro sin obstaculizar ni invadir contrasentidos.',
    topic: 'Normas de Tránsito Generales'
  },
  {
    id: 'q6',
    section: 'Bloque 2: Mecánica y Seguridad Vial',
    topic: 'Suspensión',
    questionText: '6. ¿Cuál es la función principal del sistema de suspensión de un vehículo?',
    options: [
      { value: 'a', text: 'a) Reducir la temperatura operativa del bloque del motor.' },
      { value: 'b', text: 'b) Absorber las irregularidades del terreno y mantener las ruedas adheridas al pavimento para dar estabilidad.' },
      { value: 'c', text: 'c) Detener la inercia del vehículo en la menor distancia lineal posible.' },
      { value: 'd', text: 'd) Transmitir el par motor directo del cigüeñal a los ejes.' }
    ],
    correctAnswer: 'b',
    explanation: 'El amortiguamiento y suspensión mantienen la huella de la llanta aferrada al suelo para no perder el control.',
    topic: 'Mecánica y Seguridad Vial'
  },
  {
    id: 'q7',
    section: 'Bloque 2: Mecánica y Seguridad Vial',
    topic: 'Sistema Eléctrico',
    questionText: '7. Si el testigo con silueta de batería permanece encendido en color rojo en el tablero mientras manejas, ¿qué falla se presenta?',
    options: [
      { value: 'a', text: 'a) La batería se encuentra cargada en su nivel óptimo.' },
      { value: 'b', text: 'b) El alternador no está generando carga o existe una falla severa en el sistema eléctrico del auto.' },
      { value: 'c', text: 'c) Se agotó el líquido refrigerante en el radiador.' },
      { value: 'd', text: 'd) El aceite del motor necesita ser sustituido de inmediato.' }
    ],
    correctAnswer: 'b',
    explanation: 'Advierte que el alternador interrumpió el suministro eléctrico y el auto se apagará cuando se gaste el remanente de batería.',
    topic: 'Mecánica y Seguridad Vial'
  },
  {
    id: 'q8',
    section: 'Bloque 2: Mecánica y Seguridad Vial',
    topic: 'Seguridad Pasiva',
    questionText: '8. ¿Qué elemento forma parte del sistema de seguridad PASIVA de un vehículo?',
    options: [
      { value: 'a', text: 'a) El sistema de frenos antibloqueo (ABS).' },
      { value: 'b', text: 'b) Los espejos retrovisores laterales.' },
      { value: 'c', text: 'c) Las bolsas de aire (Airbags) y el cinturón de seguridad.' },
      { value: 'd', text: 'd) La dirección asistida electrónicamente.' }
    ],
    correctAnswer: 'c',
    explanation: 'Las bolsas de aire y cinturones reducen lesiones una vez el siniestro de impacto ya se desató.',
    topic: 'Mecánica y Seguridad Vial'
  },
  {
    id: 'q9',
    section: 'Bloque 2: Mecánica y Seguridad Vial',
    topic: 'Llantas',
    questionText: '9. ¿A qué presión neumática se deben calibrar de forma correcta las llantas del automotor?',
    options: [
      { value: 'a', text: 'a) Exactamente a 35 PSI para cualquier tipo de carrocería.' },
      { value: 'b', text: 'b) A la presión específica recomendada por el fabricante del auto (ubicada en el manual o en el marco de la puerta).' },
      { value: 'c', text: 'c) Al máximo que resista la llanta para ahorrar gasolina en trayectos urbanos.' },
      { value: 'd', text: 'd) A la mitad de la capacidad que indica el flanco del neumático.' }
    ],
    correctAnswer: 'b',
    explanation: 'La presión correcta viene del constructor del automotor para asegurar el balance de tracción y confort.',
    topic: 'Mecánica y Seguridad Vial'
  },
  {
    id: 'q10',
    section: 'Bloque 2: Mecánica y Seguridad Vial',
    topic: 'Sistema de Frenos',
    questionText: '10. ¿Cuál es el propósito funcional y técnico del líquido de frenos?',
    options: [
      { value: 'a', text: 'a) Mantener lubricadas las pastillas de freno para mitigar chirridos.' },
      { value: 'b', text: 'b) Refrigerar el material de fricción de los discos de freno.' },
      { value: 'c', text: 'c) Transmitir la fuerza ejercida sobre el pedal de freno de forma hidráulica hacia las mordazas de las ruedas.' },
      { value: 'd', text: 'd) Limpiar internamente los conductos mecánicos del sistema de frenado.' }
    ],
    correctAnswer: 'c',
    explanation: 'El líquido de frenos es el fluido que transmite la presión hidráulica desde la bomba hacia las pinzas.',
    topic: 'Mecánica y Seguridad Vial'
  },
  {
    id: 'q11',
    section: 'Bloque 3: Límites de Velocidad y Señalización Vial',
    topic: 'Límites de Velocidad',
    questionText: '11. Según la Ley 2251 de 2022 (Ley Julián Esteban), ¿cuál es el límite máximo general para carros particulares en vías urbanas de Colombia?',
    options: [
      { value: 'a', text: 'a) 60 km/h' },
      { value: 'b', text: 'b) 50 km/h' },
      { value: 'c', text: 'c) 40 km/h' },
      { value: 'd', text: 'd) 30 km/h' }
    ],
    correctAnswer: 'b',
    explanation: 'La nueva ley estandarizó el límite urbano en 50 km/h para salvaguardar vidas.',
    topic: 'Límites de Velocidad y Señalización Vial'
  },
  {
    id: 'q12',
    section: 'Bloque 3: Límites de Velocidad y Señalización Vial',
    topic: 'Adelantamientos',
    questionText: '12. ¿En qué escenarios del tránsito nacional el Código de Tránsito autoriza adelantar por la calzada derecha?',
    options: [
      { value: 'a', text: 'a) Bajo ninguna circunstancia, siempre es de carácter obligatorio adelantar por la izquierda.' },
      { value: 'b', text: 'b) Cuando el vehículo precedente indique giro a la izquierda o en autopistas con tres o más carriles con el mismo sentido.' },
      { value: 'c', text: 'c) Únicamente si el vehículo de adelante marcha a una velocidad muy reducida.' },
      { value: 'd', text: 'd) Exclusivamente si te movilizas en una motocicleta o motocarro.' }
    ],
    correctAnswer: 'b',
    explanation: 'Existen excepciones técnicas donde se permite el rebase por la derecha.',
    topic: 'Límites de Velocidad y Señalización Vial'
  },
  {
    id: 'q13',
    section: 'Bloque 3: Límites de Velocidad y Señalización Vial',
    topic: 'Distancia con ciclistas',
    questionText: '13. ¿Qué distancia lateral mínima obligatoria debe mantener un automóvil al momento de realizar el adelantamiento de un ciclista?',
    options: [
      { value: 'a', text: 'a) 50 centímetros.' },
      { value: 'b', text: 'b) 1.0 metro.' },
      { value: 'c', text: 'c) 1.5 metros.' },
      { value: 'd', text: 'd) 2.0 metros.' }
    ],
    correctAnswer: 'c',
    explanation: 'La distancia de 1.5 metros es vital para evitar el efecto de succión y caídas.',
    topic: 'Límites de Velocidad y Señalización Vial'
  },
  {
    id: 'q14',
    section: 'Bloque 3: Límites de Velocidad y Señalización Vial',
    topic: 'Doble línea amarilla',
    questionText: '14. ¿Qué restricción aplica al encontrar dos líneas continuas de color amarillo paralelas pintadas en el eje central de una vía?',
    options: [
      { value: 'a', text: 'a) Señala que la calzada opera en un solo sentido de circulación vial.' },
      { value: 'b', text: 'b) Divide flujos opuestos e impone la prohibición total de adelantamiento en ambos sentidos de circulación.' },
      { value: 'c', text: 'c) Faculta al adelantamiento condicionado si no se aproximan autos de frente.' },
      { value: 'd', text: 'd) Avisa de la presencia inminente de reductores de velocidad tipo resalto.' }
    ],
    correctAnswer: 'b',
    explanation: 'Es una prohibición absoluta de invasión de carril contrario.',
    topic: 'Límites de Velocidad y Señalización Vial'
  },
  {
    id: 'q15',
    section: 'Bloque 3: Límites de Velocidad y Señalización Vial',
    topic: 'Parqueo en esquinas',
    questionText: '15. ¿A qué distancia métrica mínima con respecto a una esquina está permitido parquear un automóvil de forma regular?',
    options: [
      { value: 'a', text: 'a) A 2 metros de distancia.' },
      { value: 'b', text: 'b) A 5 metros de distancia mínimos de la bocacalle.' },
      { value: 'c', text: 'c) A 10 metros de distancia de la esquina.' },
      { value: 'd', text: 'd) El CNT no define distancia fija, solo prohíbe si bloquea la visual de un PARE.' }
    ],
    correctAnswer: 'b',
    explanation: 'Se requieren 5 metros para no obstruir el radio de giro de otros vehículos y la visibilidad.',
    topic: 'Límites de Velocidad y Señalización Vial'
  },
  {
    id: 'q16',
    section: 'Bloque 4: Formas, Colores y Dudas Críticas del Examen',
    topic: 'Señales Preventivas',
    questionText: '16. ¿Qué características visuales definen a las señales de tránsito PREVENTIVAS?',
    options: [
      { value: 'a', text: 'a) Tienen forma circular con bordes gruesos de color rojo.' },
      { value: 'b', text: 'b) Poseen forma de Rombo y fondo de color Amarillo.' },
      { value: 'c', text: 'c) Poseen forma rectangular alargada con fondos azules o verdes.' },
      { value: 'd', text: 'd) Tienen forma geométrica de rombo y un color naranja fosforescente.' }
    ],
    correctAnswer: 'b',
    explanation: 'Amarillo + Rombo = Prevención de peligros en la vía.',
    topic: 'Formas, Colores y Dudas Críticas'
  },
  {
    id: 'q17',
    section: 'Bloque 4: Formas, Colores y Dudas Críticas del Examen',
    topic: 'Menores en el asiento delantero',
    questionText: '17. ¿A qué edad mínima permite la Ley de Tránsito que un menor viaje en calidad de acompañante en el asiento delantero (copiloto)?',
    options: [
      { value: 'a', text: 'a) A partir de los 5 años de edad.' },
      { value: 'b', text: 'b) Desde que el menor cumpla los 8 años de edad.' },
      { value: 'c', text: 'c) Al cumplir los 10 años de edad mínimos.' },
      { value: 'd', text: 'd) Al cumplir 12 años, si cuenta con estatura superior a 1.50m.' }
    ],
    correctAnswer: 'c',
    explanation: 'Los 10 años son el límite legal para sentarse adelante por razones de seguridad de impacto del Airbag.',
    topic: 'Formas, Colores y Dudas Críticas'
  },
  {
    id: 'q18',
    section: 'Bloque 4: Formas, Colores y Dudas Críticas del Examen',
    topic: 'SOAT y Técnico-Mecánica',
    questionText: '18. ¿Qué consecuencia legal acarrea el circular con la póliza SOAT o el certificado de la Técnico-Mecánica vencidos?',
    options: [
      { value: 'a', text: 'a) Da derecho exclusivo a un llamado de atención pedagógico si se venció hace menos de una semana.' },
      { value: 'b', text: 'b) Implica una sanción económica monetaria (Infracción Tipo C) más la inmovilización del carro (Grúa y patios).' },
      { value: 'c', text: 'c) Se genera comparendo electrónico pero se permite el tránsito para poder ir a comprarlo.' },
      { value: 'd', text: 'd) El carro se retiene provisionalmente por 24 horas y luego se devuelve sin cobros.' }
    ],
    correctAnswer: 'b',
    explanation: 'Son documentos de porte obligatorio cuya ausencia inmoviliza el vehículo.',
    topic: 'Formas, Colores y Dudas Críticas'
  },
  {
    id: 'q19',
    section: 'Bloque 4: Formas, Colores y Dudas Críticas del Examen',
    topic: 'Amonestación vs Multa',
    questionText: '19. ¿Cuál es la diferencia legal que establece el CNT entre las sanciones por Amonestación y por Multa?',
    options: [
      { value: 'a', text: 'a) La multa implica privación legal de la libertad y la amonestación es trabajo comunitario.' },
      { value: 'b', text: 'b) La multa es de naturaleza pecuniaria (dinero). La amonestación obliga a tomar cursos viales pedagógicos bajo pena de convertirse en multa monetaria si se falta a ellos.' },
      { value: 'c', text: 'c) Son sinónimos idénticos según el Artículo 122 del Código de Tránsito.' },
      { value: 'd', text: 'd) La amonestación se borra del RUNT a los 30 días, la multa queda fija.' }
    ],
    correctAnswer: 'b',
    explanation: 'La amonestación es el paso previo educativo antes de la sanción económica.',
    topic: 'Formas, Colores y Dudas Críticas'
  },
  {
    id: 'q20',
    section: 'Bloque 4: Formas, Colores y Dudas Críticas del Examen',
    topic: 'Mecánica de Motores',
    questionText: '20. Con respecto a las tecnologías del motor, ¿por qué los bloques antiguos con Carburador exigían un cambio de aceite en menos kilometraje que los motores con Inyección Electrónica?',
    options: [
      { value: 'a', text: 'a) El carburador provoca que el lubricante se evapore por los tubos de escape.' },
      { value: 'b', text: 'b) La combustión por carburación es químicamente ineficiente, lo que acelera el desgaste, la suciedad y la degradación del aceite, forzando cambios entre los 3.000 a 5.000 km.' },
      { value: 'c', text: 'c) Las motorizaciones antiguas no integraban sistemas de filtrado magnético de aceite.' },
      { value: 'd', text: 'd) Es una mentira de los manuales mecánicos antiguos para elevar gastos de talleres.' }
    ],
    correctAnswer: 'b',
    explanation: 'La inyección electrónica optimiza la mezcla y mantiene el aceite limpio por más tiempo.',
    topic: 'Formas, Colores y Dudas Críticas'
  },
  {
    id: 'q21',
    section: 'Bloque 4: Formas, Colores y Dudas Críticas del Examen',
    topic: 'Plazo para subsanar',
    questionText: '21. Si cometes una falta catalogada como inmovilizable por un bombillo fundido, ¿qué plazo te confiere la normativa colombiana para "subsanar" el desperfecto en el lugar de los hechos?',
    options: [
      { value: 'a', text: 'a) Se otorgan un total de 15 minutos exactos.' },
      { value: 'b', text: 'b) Un término de hasta 60 minutos (1 hora) para corregir el daño y evitar la grúa hacia los patios, aunque el comparendo en papel sí se aplica.' },
      { value: 'c', text: 'c) No existe plazo legal, el agente ordena el enganche a la grúa inmediatamente.' },
      { value: 'd', text: 'd) Dispones del resto del día hábil y debes radicar pruebas virtuales en el RUNT.' }
    ],
    correctAnswer: 'b',
    explanation: 'El Artículo 125 del CNT permite este tiempo para evitar la grúa.',
    topic: 'Formas, Colores y Dudas Críticas'
  },
  {
    id: 'q22',
    section: 'Bloque 4: Formas, Colores y Dudas Críticas del Examen',
    topic: 'Vigencia de Licencia',
    questionText: '22. ¿Cuál es la vigencia oficial de una Licencia de Conducción para manejar vehículos de servicio PARTICULAR si el titular tiene entre 16 y 60 años?',
    options: [
      { value: 'a', text: 'a) Tiene una vigencia de 3 años.' },
      { value: 'b', text: 'b) Cuenta con una vigencia de 5 años.' },
      { value: 'c', text: 'c) Tiene una vigencia de 10 años.' },
      { value: 'd', text: 'd) Es de carácter indefinido, solo se suspende si acumulas fotomultas.' }
    ],
    correctAnswer: 'c',
    explanation: 'Para conductores particulares menores de 60 años, la renovación es cada 10 años.',
    topic: 'Formas, Colores y Dudas Críticas'
  },
  {
    id: 'q23',
    section: 'Bloque 4: Formas, Colores y Dudas Críticas del Examen',
    topic: 'Maniobras de giro',
    questionText: '23. Para ejecutar de forma segura y técnica una maniobra de giro en las calles de una ciudad, ¿cuál es el orden reglamentario de pasos y su distancia?',
    options: [
      { value: 'a', text: 'a) Activar la direccional, girar de manera inmediata el volante y vigilar espejos a los 10 metros del cruce.' },
      { value: 'b', text: 'b) Revisar los retrovisores y puntos ciegos, activar la luz direccional y encauzar la posición del auto con un mínimo de 30 metros de anticipación al cruce.' },
      { value: 'c', text: 'c) Poner la direccional 60 metros antes sin verificar espejos ya que tienes la prioridad en la vía.' },
      { value: 'd', text: 'd) Frenar el auto a cero, encender luces estacionarias de emergencia y proceder con el giro.' }
    ],
    correctAnswer: 'b',
    explanation: 'La anticipación es la base de la seguridad vial.',
    topic: 'Formas, Colores y Dudas Críticas'
  },
  {
    id: 'q24',
    section: 'Bloque 4: Formas, Colores y Dudas Críticas del Examen',
    topic: 'Señal SR-28',
    questionText: '24. La señal reglamentaria denominada SR-28 (Círculo blanco con bordes rojos y una equis "X" roja interior sobre un fondo azul o blanco) comunica:',
    options: [
      { value: 'a', text: 'a) Prohibición exclusiva para el parqueo de carros de transporte pesado.' },
      { value: 'b', text: 'b) Prohibido de forma total parquear y también detenerse temporalmente.' },
      { value: 'c', text: 'c) Finalización del tramo con límites estrictos de control de velocidad.' },
      { value: 'd', text: 'd) Área permitida de descargue logístico.' }
    ],
    correctAnswer: 'b',
    explanation: 'La "X" roja indica que ni siquiera la detención momentánea es permitida.',
    topic: 'Formas, Colores y Dudas Críticas'
  },
  {
    id: 'q25',
    section: 'Bloque 4: Formas, Colores y Dudas Críticas del Examen',
    topic: 'Señales Transitorias',
    questionText: '25. Las señales que cuentan con figuras geométricas de color naranja fosforescente pertenecen al grupo de las:',
    options: [
      { value: 'a', text: 'a) Señales preventivas permanentes.' },
      { value: 'b', text: 'b) Señales reglamentarias de carácter obligatorio.' },
      { value: 'c', text: 'c) Señales transitorias (utilizadas temporalmente por obras en la vía pública).' },
      { value: 'd', text: 'd) Señales informativas sobre rutas nacionales.' }
    ],
    correctAnswer: 'c',
    explanation: 'El naranja indica transitoriedad por trabajos u obstáculos temporales.',
    topic: 'Formas, Colores y Dudas Críticas'
  }
];
