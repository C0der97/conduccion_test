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
  // --- MECÁNICA BÁSICA (16 preguntas) ---
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
    explanation: 'Para que un vehículo funcione, necesita: 1) Motor (que genera energía), 2) Transmisión (que distribuye la energía), 3) Ruedas (que aplican el movimiento al terreno).',
    topic: 'Elementos del Vehículo'
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
    explanation: 'El embrague desconecta o conecta el motor con la transmisión. Cuando presionas el pedal, se desconecta y puedes cambiar de marcha.',
    topic: 'Embrague'
  },
  {
    id: 'm3',
    section: 'Mecánica Básica',
    topic: 'Refrigeración',
    questionText: '¿Cuál es la función principal del radiador?',
    options: [
      { value: 'a', text: 'Aumentar la potencia del motor' },
      { value: 'b', text: 'Enfriar el agua o líquido refrigerante que sale del motor' },
      { value: 'c', text: 'Mantener el aceite lubricante' },
      { value: 'd', text: 'Proveer combustible al motor' }
    ],
    correctAnswer: 'b',
    explanation: 'El radiador enfría el agua caliente que sale del motor para evitar el sobrecalentamiento.',
    topic: 'Radiador'
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
    explanation: 'El aceite lubrica todas las partes móviles del motor, reduciendo fricción y desgaste.',
    topic: 'Aceite'
  },
  {
    id: 'm5',
    section: 'Mecánica Básica',
    topic: 'Refrigeración',
    questionText: '¿Cuál es la función del tanque de expansión del refrigerante?',
    options: [
      { value: 'a', text: 'Generar presión y almacenar aceite' },
      { value: 'b', text: 'Recibir el líquido que se expande por calor y devolverlo al radiador cuando se enfría' },
      { value: 'c', text: 'Filtrar y purificar el combustible' },
      { value: 'd', text: 'Aumentar la presión del sistema de transmisión' }
    ],
    correctAnswer: 'b',
    explanation: 'El tanque de expansión recibe el líquido cuando se expande por calor y lo devuelve cuando se enfría.',
    topic: 'Tanque de Expansión'
  },
  {
    id: 'm6',
    section: 'Mecánica Básica',
    topic: 'Alimentación',
    questionText: '¿Cuáles son los 3 componentes principales del sistema de alimentación?',
    options: [
      { value: 'a', text: 'Motor, pistones y cilindros' },
      { value: 'b', text: 'Tanque de combustible, bomba de combustible e inyectores' },
      { value: 'c', text: 'Radiador, termostato y agua' },
      { value: 'd', text: 'Batería, alternador y motor de arranque' }
    ],
    correctAnswer: 'b',
    explanation: 'El sistema de alimentación tiene: 1) Tanque (almacena), 2) Bomba (transporta), 3) Inyectores (inyectan).',
    topic: 'Sistema de Alimentación'
  },
  {
    id: 'm7',
    section: 'Mecánica Básica',
    topic: 'Alimentación',
    questionText: '¿Cuál es la función del inyector en el sistema de combustible?',
    options: [
      { value: 'a', text: 'Almacenar el combustible' },
      { value: 'b', text: 'Transportar combustible al tanque' },
      { value: 'c', text: 'Inyectar combustible en la cámara de combustión' },
      { value: 'd', text: 'Filtrar impurezas del combustible' }
    ],
    correctAnswer: 'c',
    explanation: 'El inyector atomiza y pulveriza el combustible directamente en la cámara de combustión.',
    topic: 'Inyectores'
  },
  {
    id: 'm8',
    section: 'Mecánica Básica',
    topic: 'Motor',
    questionText: '¿Cuáles son las partes móviles principales del motor en orden?',
    options: [
      { value: 'a', text: 'Cigüeñal, pistón, bielas, válvulas' },
      { value: 'b', text: 'Válvulas, pistón, cigüeñal, bielas' },
      { value: 'c', text: 'Pistón, válvulas, bielas, cigüeñal' },
      { value: 'd', text: 'Cigüeñal, bielas, pistón, válvulas' }
    ],
    correctAnswer: 'a',
    explanation: 'El orden de transmisión de fuerza es: 1) Cigüeñal (gira), 2) Pistón (sube y baja), 3) Bielas (conectan), 4) Válvulas.',
    topic: 'Partes Móviles'
  },
  {
    id: 'm9',
    section: 'Mecánica Básica',
    topic: 'Motor',
    questionText: '¿Qué se entiende por "bloque del motor"?',
    options: [
      { value: 'a', text: 'Prisión donde se guardan piezas' },
      { value: 'b', text: 'La estructura que contiene los cilindros y partes del motor' },
      { value: 'c', text: 'Un tipo de transmisión automática' },
      { value: 'd', text: 'El sistema de frenos del vehículo' }
    ],
    correctAnswer: 'b',
    explanation: 'El bloque es la estructura principal donde se alojan los cilindros, pistones y partes móviles.',
    topic: 'Bloque del Motor'
  },
  {
    id: 'm10',
    section: 'Mecánica Básica',
    topic: 'Ciclo del Motor',
    questionText: '¿Cuáles son los cuatro tiempos del motor?',
    options: [
      { value: 'a', text: 'Admisión, compresión, combustión y escape' },
      { value: 'b', text: 'Arranque, marcha, aceleración y frenado' },
      { value: 'c', text: 'Encendido, movimiento, parada y reversión' },
      { value: 'd', text: 'Succión, presión, explosión y salida' }
    ],
    correctAnswer: 'a',
    explanation: 'Los 4 tiempos: 1) Admisión (entra mezcla), 2) Compresión (se comprime), 3) Combustión (explota), 4) Escape.',
    topic: 'Cuatro Tiempos'
  },
  {
    id: 'm11',
    section: 'Mecánica Básica',
    topic: 'Frenos',
    questionText: 'Si el líquido de frenos llega a nivel bajo, puede ocasionar:',
    options: [
      { value: 'a', text: 'Mayor velocidad del vehículo' },
      { value: 'b', text: 'Accidentes por fallo de frenos' },
      { value: 'c', text: 'Mayor consumo de combustible' },
      { value: 'd', text: 'Sobrecalentamiento del motor' }
    ],
    correctAnswer: 'b',
    explanation: 'El líquido de frenos es crítico. Si está bajo, los frenos pueden fallar completamente por falta de presión hidráulica.',
    topic: 'Líquido de Frenos'
  },
  {
    id: 'm12',
    section: 'Mecánica Básica',
    topic: 'Transmisión',
    questionText: '¿Cuándo puedes cambiar de marcha correctamente?',
    options: [
      { value: 'a', text: 'Cuando el motor está acelerado al máximo' },
      { value: 'b', text: 'Cuando el embrague está totalmente desconectado (pisas el pedal)' },
      { value: 'c', text: 'Cuando el vehículo está en movimiento rápido' },
      { value: 'd', text: 'En cualquier momento sin precaución' }
    ],
    correctAnswer: 'b',
    explanation: 'Debes cambiar cuando el embrague está completamente desconectado (pisas el pedal) para desacoplar el motor de la caja.',
    topic: 'Cambio de Marcha'
  },
  {
    id: 'm13',
    section: 'Mecánica Básica',
    topic: 'Refrigeración',
    questionText: '¿Cuál es la función del sistema de refrigeración?',
    options: [
      { value: 'a', text: 'Aumentar la potencia del motor' },
      { value: 'b', text: 'Mantener la temperatura del motor entre límites seguros' },
      { value: 'c', text: 'Generar movimiento adicional' },
      { value: 'd', text: 'Almacenar combustible' }
    ],
    correctAnswer: 'b',
    explanation: 'El motor no puede estar muy frío ni muy caliente. El sistema mantiene la temperatura óptima de operación.',
    topic: 'Sistema de Refrigeración'
  },
  {
    id: 'm14',
    section: 'Mecánica Básica',
    topic: 'Electricidad',
    questionText: '¿Cuál es la función del alternador?',
    options: [
      { value: 'a', text: 'Generar movimiento del vehículo' },
      { value: 'b', text: 'Transformar energía mecánica en eléctrica y recargar la batería' },
      { value: 'c', text: 'Enfriar el motor' },
      { value: 'd', text: 'Generar chispas de ignición' }
    ],
    correctAnswer: 'b',
    explanation: 'El alternador genera corriente eléctrica a partir del movimiento del motor para alimentar el vehículo y cargar la batería.',
    topic: 'Alternador'
  },
  {
    id: 'm15',
    section: 'Mecánica Básica',
    topic: 'Mantenimiento',
    questionText: 'El aceite de motor debe cambiarse habitualmente cada:',
    options: [
      { value: 'a', text: '5.000 kilómetros o 6 meses' },
      { value: 'b', text: '3.000 kilómetros o 6 meses' },
      { value: 'c', text: '2.000 kilómetros o 6 meses' },
      { value: 'd', text: '10.000 kilómetros o 1 año' }
    ],
    correctAnswer: 'a',
    explanation: 'Lo recomendado para la mayoría de vehículos es cada 5.000 km o 6 meses, lo que ocurra primero.',
    topic: 'Cambio de Aceite'
  },
  {
    id: 'm16',
    section: 'Mecánica Básica',
    topic: 'Electricidad',
    questionText: 'Si con el motor encendido se ilumina el testigo de carga de batería, significa:',
    options: [
      { value: 'a', text: 'El vehículo presenta falla eléctrica en fusibles' },
      { value: 'b', text: 'El nivel del líquido electrolítico está bajo' },
      { value: 'c', text: 'El alternador no le está enviando carga a la batería' },
      { value: 'd', text: 'Los bornes de la batería están sulfatados' }
    ],
    correctAnswer: 'c',
    explanation: 'Si el testigo se enciende con el motor en marcha, indica que el sistema de carga (alternador) está fallando.',
    topic: 'Testigo de Batería'
  },

  // --- TRÁNSITO Y NORMATIVA (14 preguntas) ---
  {
    id: 't1',
    section: 'Tránsito y Normativa',
    topic: 'Señalización',
    questionText: '¿Qué significa doble línea amarilla continua en el centro de una vía?',
    options: [
      { value: 'a', text: 'Se usa para dividir los sentidos de circulación únicamente' },
      { value: 'b', text: 'Que el asfalto está en mal estado' },
      { value: 'c', text: 'No debe ser traspasada ni se puede circular sobre ella' },
      { value: 'd', text: 'Que solo pueden circular vehículos particulares' }
    ],
    correctAnswer: 'c',
    explanation: 'La doble línea amarilla continua prohíbe el rebasamiento y adelantamiento en ambas direcciones.',
    topic: 'Señales Horizontales'
  },
  {
    id: 't2',
    section: 'Tránsito y Normativa',
    topic: 'Autoridades',
    questionText: '¿A cuál autoridad le corresponde conocer un siniestro con víctimas en un accidente?',
    options: [
      { value: 'a', text: 'El Ministerio de Transporte' },
      { value: 'b', text: 'La autoridad de tránsito (Agente de Tránsito)' },
      { value: 'c', text: 'Las aseguradoras' },
      { value: 'd', text: 'Las autoridades judiciales' }
    ],
    correctAnswer: 'b',
    explanation: 'La autoridad de tránsito es la encargada de conocer inicialmente y atender accidentes de tránsito.',
    topic: 'Autoridades'
  },
  {
    id: 't3',
    section: 'Tránsito y Normativa',
    topic: 'Licencia',
    questionText: '¿En cuál caso puede retener la licencia de conducción un agente de policía?',
    options: [
      { value: 'a', text: 'Cuando ocurre un accidente' },
      { value: 'b', text: 'Cuando el conductor infringe una norma de tránsito común' },
      { value: 'c', text: 'Cuando el conductor se encuentre en estado de embriaguez' },
      { value: 'd', text: 'En ningún caso, solamente una decisión judicial' }
    ],
    correctAnswer: 'c',
    explanation: 'La licencia se puede retener preventivamente en casos de embriaguez o bajo efectos de drogas.',
    topic: 'Retención de Licencia'
  },
  {
    id: 't4',
    section: 'Tránsito y Normativa',
    topic: 'Sanciones',
    questionText: 'No detener el vehículo ante una señal de PARE tiene una multa de:',
    options: [
      { value: 'a', text: '10 SMLDV' },
      { value: 'b', text: '15 SMLDV' },
      { value: 'c', text: '20-30 SMLDV (Infracción D.04)' },
      { value: 'd', text: '50 SMLDV' }
    ],
    correctAnswer: 'c',
    explanation: 'La multa por no respetar un PARE es de aproximadamente 30 SMLDV según el Código Nacional de Tránsito.',
    topic: 'Multas'
  },
  {
    id: 't5',
    section: 'Tránsito y Normativa',
    topic: 'Documentación',
    questionText: '¿Cuál es la vigencia del seguro obligatorio SOAT?',
    options: [
      { value: 'a', text: 'Dos años para vehículos de servicio público' },
      { value: 'b', text: 'Tres años para vehículos de servicio particular' },
      { value: 'c', text: 'Un año para todos los vehículos' },
      { value: 'd', text: 'Varía según el modelo del vehículo' }
    ],
    correctAnswer: 'c',
    explanation: 'La vigencia del SOAT es de un año para todos los vehículos automotores que circulan en el país.',
    topic: 'SOAT'
  },
  {
    id: 't6',
    section: 'Tránsito y Normativa',
    topic: 'Mantenimiento',
    questionText: 'Las llantas desde su fabricación tienen una fecha de vencimiento recomendada de:',
    options: [
      { value: 'a', text: 'Diez años' },
      { value: 'b', text: 'Cinco años' },
      { value: 'c', text: 'Ocho años' },
      { value: 'd', text: 'No tienen fecha de vencimiento' }
    ],
    correctAnswer: 'c',
    explanation: 'Se recomienda que las llantas no superen los 8-10 años de fabricación debido a la degradación del caucho.',
    topic: 'Vencimiento de Llantas'
  },
  {
    id: 't7',
    section: 'Tránsito y Normativa',
    topic: 'Licencia',
    questionText: '¿En dónde se debe solicitar el duplicado de licencia por pérdida o deterioro?',
    options: [
      { value: 'a', text: 'Ante la policía o guardia de tránsito' },
      { value: 'b', text: 'En el organismo de tránsito donde se la expidieron únicamente' },
      { value: 'c', text: 'Ante el Ministerio de Transporte' },
      { value: 'd', text: 'En cualquier organismo de tránsito autorizado' }
    ],
    correctAnswer: 'd',
    explanation: 'Se puede solicitar en cualquier organismo de tránsito autorizado que esté conectado al RUNT.',
    topic: 'Duplicado de Licencia'
  },
  {
    id: 't8',
    section: 'Tránsito y Normativa',
    topic: 'Sanciones',
    questionText: 'Si comete una infracción grabada por cámara, ¿qué puede suceder?',
    options: [
      { value: 'a', text: 'Solo lo pueden detener físicamente' },
      { value: 'b', text: 'Le imponen un comparendo (fotomulta)' },
      { value: 'c', text: 'El organismo de tránsito inicia investigación' },
      { value: 'd', text: 'Todas las anteriores' }
    ],
    correctAnswer: 'b',
    explanation: 'Las ayudas tecnológicas permiten imponer comparendos por infracciones detectadas por cámaras.',
    topic: 'Fotomultas'
  },
  {
    id: 't9',
    section: 'Tránsito y Normativa',
    topic: 'Señalización',
    questionText: '¿Cuáles son los semáforos según su clasificación?',
    options: [
      { value: 'a', text: 'Vehiculares, peatonales, especiales, de aproximación, direccionales' },
      { value: 'b', text: 'Vehiculares, peatonales, direccionales' },
      { value: 'c', text: 'Vehiculares, peatonales, intermitentes' },
      { value: 'd', text: 'Vehiculares, peatonales, especiales' }
    ],
    correctAnswer: 'a',
    explanation: 'La clasificación completa incluye vehiculares, peatonales, especiales, de aproximación y direccionales.',
    topic: 'Semáforos'
  },
  {
    id: 't10',
    section: 'Tránsito y Normativa',
    topic: 'Autoridades',
    questionText: '¿Quiénes son autoridad de tránsito en Colombia?',
    options: [
      { value: 'a', text: 'Los gobernadores y alcaldes' },
      { value: 'b', text: 'Las fuerzas militares' },
      { value: 'c', text: 'El ministro de transporte' },
      { value: 'd', text: 'Todas las anteriores' }
    ],
    correctAnswer: 'd',
    explanation: 'Según el código, los alcaldes, gobernadores y el Ministro son autoridades de tránsito en sus jurisdicciones.',
    topic: 'Autoridades'
  },
  {
    id: 't11',
    section: 'Tránsito y Normativa',
    topic: 'Consumo',
    questionText: 'El alto consumo de combustible se puede deber a:',
    options: [
      { value: 'a', text: 'Fallas en el sistema de dirección' },
      { value: 'b', text: 'Aceleraciones excesivas en curvas' },
      { value: 'c', text: 'Frecuentes frenadas y aceleraciones bruscas' },
      { value: 'd', text: 'Todas las anteriores' }
    ],
    correctAnswer: 'c',
    explanation: 'La conducción agresiva con frenazos y acelerones constantes es lo que más consume combustible.',
    topic: 'Consumo'
  },
  {
    id: 't12',
    section: 'Tránsito y Normativa',
    topic: 'Mecánica de Emergencia',
    questionText: '¿Cuál es la causa más probable por la que no gira el motor al intentar arrancar?',
    options: [
      { value: 'a', text: 'Falta de combustible' },
      { value: 'b', text: 'Batería con bajo nivel o descargada' },
      { value: 'c', text: 'Daño en el motor de arranque' },
      { value: 'd', text: 'Ambas b y c son correctas' }
    ],
    correctAnswer: 'd',
    explanation: 'Si el motor no gira físicamente, suele ser por falta de energía (batería) o falla del motor de arranque.',
    topic: 'Arranque'
  },
  {
    id: 't13',
    section: 'Tránsito y Normativa',
    topic: 'Mecánica de Emergencia',
    questionText: 'El motor se puede sobrecalentar por:',
    options: [
      { value: 'a', text: 'Insuficiente paso de agua al radiador' },
      { value: 'b', text: 'No colocar aditivo al combustible' },
      { value: 'c', text: 'Carga de batería baja' },
      { value: 'd', text: 'Sistema de refrigeración obstruido o fuga' }
    ],
    correctAnswer: 'd',
    explanation: 'Cualquier obstrucción o falta de líquido en el sistema de refrigeración causará sobrecalentamiento.',
    topic: 'Sobrecalentamiento'
  },
  {
    id: 't14',
    section: 'Tránsito y Normativa',
    topic: 'Mantenimiento',
    questionText: '¿A qué nivel debe estar el aceite según la varilla de medición?',
    options: [
      { value: 'a', text: 'En el nivel mínimo' },
      { value: 'b', text: 'En la mitad entre las marcas de mín y máx' },
      { value: 'c', text: 'En el nivel máximo sin superarlo' },
      { value: 'd', text: 'Por encima del nivel máximo' }
    ],
    correctAnswer: 'c',
    explanation: 'El nivel ideal es lo más cercano posible a la marca de máximo, sin llegar a superarla.',
    topic: 'Nivel de Aceite'
  },

  // --- SEGURIDAD Y CONDUCCIÓN (6 preguntas) ---
  {
    id: 's1',
    section: 'Seguridad y Conducción',
    topic: 'Embriaguez',
    questionText: 'Conducir en estado de embriaguez grado 1 implica una multa de:',
    options: [
      { value: 'a', text: '25 SMLDV' },
      { value: 'b', text: '30 SMLDV' },
      { value: 'c', text: '45 SMLDV' },
      { value: 'd', text: 'Más de 90 SMLDV (según reincidencia)' }
    ],
    correctAnswer: 'd',
    explanation: 'Las multas por embriaguez en Colombia son muy altas y progresivas según el grado y si es reincidente.',
    topic: 'Multas Embriaguez'
  },
  {
    id: 's2',
    section: 'Seguridad y Conducción',
    topic: 'Embriaguez',
    questionText: 'Un conductor se considera bajo influencia del alcohol legalmente desde:',
    options: [
      { value: 'a', text: '20 mg de etanol / 100 ml de sangre' },
      { value: 'b', text: '40 mg de etanol / 100 ml de sangre' },
      { value: 'c', text: '50 mg de etanol / 100 ml de sangre' },
      { value: 'd', text: '100 mg de etanol / 100 ml de sangre' }
    ],
    correctAnswer: 'a',
    explanation: 'En Colombia existe la política de "Tolerancia Cero", iniciándose sanciones desde los 20 mg.',
    topic: 'Grados Alcohol'
  },
  {
    id: 's3',
    section: 'Seguridad y Conducción',
    topic: 'Frenado',
    questionText: '¿Cómo nota un conductor que hay una fuga de líquido en el sistema de frenos?',
    options: [
      { value: 'a', text: 'El pedal del freno llega hasta el fondo con poca resistencia' },
      { value: 'b', text: 'El pedal del freno está muy duro' },
      { value: 'c', text: 'El vehículo frena bruscamente' },
      { value: 'd', text: 'El volante vibra al frenar' }
    ],
    correctAnswer: 'a',
    explanation: 'La pérdida de presión hidráulica hace que el pedal se "vaya al fondo" sin detener el vehículo efectivamente.',
    topic: 'Falla de Frenos'
  },
  {
    id: 's4',
    section: 'Seguridad y Conducción',
    topic: 'Seguridad Activa',
    questionText: 'Si se ilumina el testigo de temperatura roja, es recomendable:',
    options: [
      { value: 'a', text: 'Continuar conduciendo normalmente hasta llegar a casa' },
      { value: 'b', text: 'Acelerar para que el aire enfríe el motor' },
      { value: 'c', text: 'Detener el vehículo inmediatamente y dejar enfriar el motor' },
      { value: 'd', text: 'Bajar todas las ventanas para refrescar' }
    ],
    correctAnswer: 'c',
    explanation: 'Debe detener el motor de inmediato para evitar daños catastróficos por sobrecalentamiento.',
    topic: 'Testigo Temperatura'
  },
  {
    id: 's5',
    section: 'Seguridad y Conducción',
    topic: 'Conducción Preventiva',
    questionText: '¿Cuál es la importancia de revisar los espejos antes de cambiar de carril?',
    options: [
      { value: 'a', text: 'Para ver si el semáforo cambió' },
      { value: 'b', text: 'Para detectar vehículos en puntos ciegos' },
      { value: 'c', text: 'Para ajustar la visibilidad del habitáculo' },
      { value: 'd', text: 'Por estética del vehículo' }
    ],
    correctAnswer: 'b',
    explanation: 'Los espejos son esenciales para detectar otros actores viales y evitar colisiones laterales.',
    topic: 'Espejos'
  },
  {
    id: 's6',
    section: 'Seguridad y Conducción',
    topic: 'Equipo de Carretera',
    questionText: 'El equipo de prevención y seguridad (carretera) debe incluir:',
    options: [
      { value: 'a', text: 'Solo herramientas básicas' },
      { value: 'b', text: 'Extintor, señales reflectivas, botiquín, tacos y herramienta' },
      { value: 'c', text: 'Solo llanta de repuesto' },
      { value: 'd', text: 'Cualquier elemento de señalización' }
    ],
    correctAnswer: 'b',
    explanation: 'El equipo completo es obligatorio por ley e incluye extintor vigente, botiquín y señales de peligro.',
    topic: 'Equipo de Carretera'
  }
];
