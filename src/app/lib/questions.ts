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
  // --- EXISTING HIGH-QUALITY QUESTIONS ---
  {
    id: 'q1',
    section: 'Normas de Tránsito Generales',
    topic: 'Jerarquía de señales',
    questionText: 'Según la jerarquía de las señales de tránsito en Colombia, ¿cuál tiene prioridad absoluta sobre las demás?',
    options: [
      { value: 'a', text: 'Las señales reglamentarias (rojas).' },
      { value: 'b', text: 'Las órdenes impartidas por los agentes de tránsito.' },
      { value: 'c', text: 'Los semáforos.' },
      { value: 'd', text: 'Las señales transitorias (naranjas).' }
    ],
    correctAnswer: 'b',
    explanation: 'Los agentes de tránsito cancelan y superan el valor de cualquier semáforo o señal física fija.',
    topic: 'Normas de Tránsito Generales'
  },
  // --- NEW MECANICA QUESTIONS ---
  {
    id: 'mq1',
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
    explanation: 'Para que un vehículo funcione necesita: 1) Motor (energía), 2) Transmisión (distribución), 3) Ruedas (movimiento).',
    topic: 'Mecánica Básica'
  },
  {
    id: 'mq2',
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
    explanation: 'El embrague desconecta o conecta el motor con la transmisión para permitir cambios de marcha.',
    topic: 'Mecánica Básica'
  },
  {
    id: 'mq3',
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
    explanation: 'El radiador enfría el líquido caliente proveniente del motor para evitar el sobrecalentamiento.',
    topic: 'Mecánica Básica'
  },
  {
    id: 'mq4',
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
    explanation: 'El aceite reduce la fricción y el desgaste entre las piezas metálicas internas del motor.',
    topic: 'Mecánica Básica'
  },
  {
    id: 'mq10',
    section: 'Mecánica Básica',
    topic: 'Ciclo del Motor',
    questionText: '¿Cuáles son los cuatro tiempos del motor de combustión interna?',
    options: [
      { value: 'a', text: 'Admisión, compresión, combustión y escape' },
      { value: 'b', text: 'Arranque, marcha, aceleración y frenado' },
      { value: 'c', text: 'Encendido, movimiento, parada y reversión' },
      { value: 'd', text: 'Succión, presión, explosión y salida' }
    ],
    correctAnswer: 'a',
    explanation: 'El ciclo Otto consta de: Admisión (entrada), Compresión (presión), Combustión (fuerza) y Escape (salida de gases).',
    topic: 'Mecánica Básica'
  },
  // --- NEW TRANSITO QUESTIONS ---
  {
    id: 'tq1',
    section: 'Tránsito y Normativa',
    topic: 'Señalización Horizontal',
    questionText: '¿Qué significa doble línea amarilla continua en el centro de una vía?',
    options: [
      { value: 'a', text: 'Se usa para dividir los sentidos de circulación únicamente' },
      { value: 'b', text: 'Que el asfalto está en mal estado' },
      { value: 'c', text: 'No debe ser traspasada ni se puede circular sobre ella (prohibido adelantar)' },
      { value: 'd', text: 'Que solo pueden circular vehículos particulares' }
    ],
    correctAnswer: 'c',
    explanation: 'La doble línea amarilla indica prohibición total de adelantamiento en ambos sentidos.',
    topic: 'Tránsito y Normativa'
  },
  {
    id: 'tq4',
    section: 'Tránsito y Normativa',
    topic: 'Multas y Sanciones',
    questionText: 'No detener el vehículo ante una señal de PARE tiene una multa aproximada de:',
    options: [
      { value: 'a', text: '10 SMLDV' },
      { value: 'b', text: '15 SMLDV' },
      { value: 'c', text: '30 SMLDV (Infracción tipo D.04)' },
      { value: 'd', text: '50 SMLDV' }
    ],
    correctAnswer: 'c',
    explanation: 'Pasarse un PARE es una de las infracciones más graves y costosas (D.04 en el Código Nacional).',
    topic: 'Tránsito y Normativa'
  },
  {
    id: 'tq6',
    section: 'Tránsito y Normativa',
    topic: 'Mantenimiento',
    questionText: 'Las llantas desde su fabricación tienen una fecha de vencimiento recomendada de:',
    options: [
      { value: 'a', text: 'Diez años' },
      { value: 'b', text: 'Cinco años' },
      { value: 'c', text: 'Seis años' },
      { value: 'd', text: 'No tienen fecha de vencimiento' }
    ],
    correctAnswer: 'a',
    explanation: 'Aunque el caucho puede durar visualmente, se recomienda no usar llantas con más de 10 años desde su fabricación.',
    topic: 'Tránsito y Normativa'
  },
  // --- NEW SEGURIDAD QUESTIONS ---
  {
    id: 'sq1',
    section: 'Seguridad y Conducción',
    topic: 'Alcoholimetría',
    questionText: 'Conducir en estado de embriaguez o bajo efectos de drogas implica:',
    options: [
      { value: 'a', text: 'Una multa de 5 SMLDV solamente' },
      { value: 'b', text: 'Llamado de atención pedagógico' },
      { value: 'c', text: 'Multa progresiva, suspensión de licencia e inmovilización' },
      { value: 'd', text: 'No tiene sanción si no hay accidente' }
    ],
    correctAnswer: 'c',
    explanation: 'La Ley 1696 endureció las penas, incluyendo multas millonarias y cancelación definitiva de licencia según el grado.',
    topic: 'Seguridad y Conducción'
  },
  {
    id: 'sq3',
    section: 'Seguridad y Conducción',
    topic: 'Frenado de Emergencia',
    questionText: '¿Cómo nota un conductor que hay una fuga de aire o líquido en el sistema de frenos?',
    options: [
      { value: 'a', text: 'El pedal del freno llega hasta el fondo con poca resistencia' },
      { value: 'b', text: 'El pedal del freno está muy duro' },
      { value: 'c', text: 'El vehículo acelera solo' },
      { value: 'd', text: 'El volante vibra al frenar' }
    ],
    correctAnswer: 'a',
    explanation: 'La pérdida de presión hidráulica hace que el pedal se "vaya al fondo" sin detener el vehículo.',
    topic: 'Seguridad y Conducción'
  }
];
