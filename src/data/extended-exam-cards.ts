/**
 * EXTENDED EXAM CARDS DATABASE
 * Comprehensive examination questions from all attached files
 * These cards are loaded from local data if not found in Supabase
 */

export interface ExamCardData {
  question: string;
  answer: string;
  difficulty: 'easy' | 'medium' | 'hard';
  topic: string;
}

export const EXTENDED_EXAM_CARDS: ExamCardData[] = [
  // Paper 1 - Automation Fundamentals
  {
    topic: 'Automation Fundamentals',
    question: 'What is Industrial Automation?',
    answer: 'Industrial automation is the use of various control systems such as computers, robots, and specialized controllers to operate processes and machinery in manufacturing and other industrial applications. It replaces human intervention with automated systems for improved precision, efficiency, and safety.',
    difficulty: 'easy'
  },
  {
    topic: 'Automation Fundamentals',
    question: 'List 5 benefits of Industrial Automation',
    answer: '1. Minimization of Human Error - automated systems perform repetitive tasks with high precision\n2. Reduced Production Costs - lowers labor costs and increases production speed\n3. Efficient Inventory Management - real-time tracking and replenishment\n4. Real-Time Monitoring and Predictive Maintenance - early fault detection and preventive maintenance\n5. Enhanced Quality and Consistency - standardized processes lead to uniform product quality',
    difficulty: 'medium'
  },
  {
    topic: 'Automation Fundamentals',
    question: 'What is a Programmable Logic Controller (PLC)?',
    answer: 'A PLC is a rugged, industrial computer specifically designed to control manufacturing processes and machinery. It uses ladder logic or other programming languages to process inputs from sensors and produce outputs to actuators. PLCs are noted for their reliability, ease of troubleshooting, and modular design.',
    difficulty: 'easy'
  },
  {
    topic: 'Automation Fundamentals',
    question: 'What does SCADA stand for and its purpose?',
    answer: 'SCADA stands for Supervisory Control and Data Acquisition. These systems provide real-time data collection and control from remote geographical locations. They integrate sensor data, process control, and historical data logging with graphical interfaces for operators. Example: Managing water treatment plants.',
    difficulty: 'medium'
  },
  {
    topic: 'Automation Fundamentals',
    question: 'Explain DCS (Distributed Control System)',
    answer: 'DCS uses a network of controllers distributed throughout an industrial plant, each handling a segment of the process. This decentralization increases reliability and allows for more sophisticated control strategies in large-scale, continuous processes. Example: Chemical processing in large refineries.',
    difficulty: 'medium'
  },
  {
    topic: 'Automation Fundamentals',
    question: 'What is Direct Digital Control (DDC)?',
    answer: 'DDC involves digital processors executing control algorithms directly on real-time process data. It is commonly used in building management systems, allowing for precise, computer-based control of heaters, air conditioning, and lighting.',
    difficulty: 'medium'
  },
  {
    topic: 'Automation Fundamentals',
    question: 'Define Human-Machine Interface (HMI)',
    answer: 'An HMI provides a graphical dashboard for operators to monitor system performance, view alarms, and input commands. It is the critical link between the human operator and automated equipment. Example: Touchscreen panels in a production facility displaying data trends and system status.',
    difficulty: 'easy'
  },
  {
    topic: 'Automation Fundamentals',
    question: 'What is a PID Controller and its purpose?',
    answer: 'The PID controller is a control loop feedback mechanism widely used in industrial control systems. It continuously calculates the error between a desired setpoint and a measured variable and applies corrective control through proportional, integral, and derivative adjustments. Example: Temperature control in an oven.',
    difficulty: 'hard'
  },

  // Automation System Types
  {
    topic: 'Automation System Types',
    question: 'What is Fixed Automation?',
    answer: 'Fixed Automation: The production process is entirely fixed, with machines operating in a set sequence. Characteristics: High initial investment, Extremely high production rates, Inflexible for changing product types. Example: Automotive body welding station where a robot performs the same weld sequence repeatedly.',
    difficulty: 'medium'
  },
  {
    topic: 'Automation System Types',
    question: 'Explain Programmable Automation',
    answer: 'Programmable Automation systems use programmable controllers to change the sequence of operations between production runs. Characteristics: Moderate flexibility, Suitable for batch production, Lower initial cost compared to fixed systems. Example: CNC machines reprogrammed to produce different parts as customer orders change.',
    difficulty: 'medium'
  },
  {
    topic: 'Automation System Types',
    question: 'What is Flexible Automation?',
    answer: 'Flexible Automation is designed to easily accommodate changes in the production process and can handle various tasks with minimal reconfiguration. Characteristics: High flexibility, Suitable for low- to medium-volume production varieties. Example: A robot cell in an electronics plant switching between assembling different models with a simple software update.',
    difficulty: 'medium'
  },
  {
    topic: 'Automation System Types',
    question: 'Define Integrated Automation',
    answer: 'In integrated automation, all production stages—from planning and scheduling to execution and quality control—are interconnected, often through enterprise-wide software systems. Characteristics: Seamless data flow, Real-time adjustments based on production information.',
    difficulty: 'hard'
  },

  // Sensors Section
  {
    topic: 'Sensors & Measurement',
    question: 'What are Temperature Sensors?',
    answer: 'Temperature sensors (e.g., thermocouples) detect heat levels and convert temperature differences into voltage signals. They are essential for monitoring and controlling thermal processes.',
    difficulty: 'easy'
  },
  {
    topic: 'Sensors & Measurement',
    question: 'Explain Pressure Sensors',
    answer: 'Pressure sensors often use piezoelectric or strain gauge technology to sense pressure changes. They convert mechanical pressure into electrical signals for processing and monitoring.',
    difficulty: 'medium'
  },
  {
    topic: 'Sensors & Measurement',
    question: 'What are Photoelectric Sensors?',
    answer: 'Photoelectric sensors detect the presence or absence of objects by measuring light intensity. They are widely used in sorting, counting, and positioning applications.',
    difficulty: 'easy'
  },
  {
    topic: 'Sensors & Measurement',
    question: 'How do Sensor systems work in automation?',
    answer: 'Sensors detect physical phenomena and convert them to electrical signals for processing. The process flow is: Physical Parameter → Sensor Device → Electrical Signal, which is then processed by the control system.',
    difficulty: 'medium'
  },

  // Transducers Section
  {
    topic: 'Transducers',
    question: 'What are Load Cells?',
    answer: 'Load cells convert force into an electrical output and are used in weighing systems. They provide accurate measurement of weight and force in automated processes.',
    difficulty: 'medium'
  },
  {
    topic: 'Transducers',
    question: 'Explain LVDT',
    answer: 'LVDT (Linear Variable Differential Transformer) converts linear displacement into a measurable electrical signal. It is widely used for position and level sensing in automation systems.',
    difficulty: 'hard'
  },
  {
    topic: 'Transducers',
    question: 'How do transducers work?',
    answer: 'Transducers convert energy from one form to another, acting as the bridge between the physical world and electronic systems. Process: Mechanical Input → Transducer → Electrical Output',
    difficulty: 'medium'
  },

  // Actuators Section
  {
    topic: 'Actuators & Motors',
    question: 'What are Electric Motors?',
    answer: 'Electric motors are actuators that provide rotary or linear motion. They receive electrical signals from PLCs and convert them into mechanical motion for machinery operation.',
    difficulty: 'easy'
  },
  {
    topic: 'Actuators & Motors',
    question: 'Explain Hydraulic Actuators',
    answer: 'Hydraulic actuators use pressurized fluid for high-power applications. They are employed where significant force output is required, such as in heavy machinery and material handling equipment.',
    difficulty: 'medium'
  },
  {
    topic: 'Actuators & Motors',
    question: 'What are Pneumatic Actuators?',
    answer: 'Pneumatic actuators use compressed air for rapid response movements. They are suitable for fast, repetitive operations and are commonly used in pick-and-place automation.',
    difficulty: 'easy'
  },
  {
    topic: 'Actuators & Motors',
    question: 'How do actuators function in a control system?',
    answer: 'Actuators receive control signals (often from a PLC) and convert them into physical motion or force. Process: Control Signal → Actuator → Mechanical Motion',
    difficulty: 'medium'
  },

  // PLCs - Advanced Topics
  {
    topic: 'PLCs - Programming & Design',
    question: 'What is a Programmable Logic Controller?',
    answer: 'A Programmable Logic Controller (PLC) is a rugged digital computer designed for use in industrial automation. It is built to withstand harsh environments (vibration, temperature extremes, electrical noise) and is used for real-time control of manufacturing processes and machinery.',
    difficulty: 'easy'
  },
  {
    topic: 'PLCs - Programming & Design',
    question: 'List applications of PLCs',
    answer: '1. Automotive production lines - controlling robotic arms for assembly, welding, painting\n2. Food and beverage production - managing conveyors, filling machines, packaging equipment\n3. Process industries - regulating temperature, pressure, flow in chemical plants\n4. Building automation - monitoring HVAC, lighting, security systems\n5. Material handling - coordinating conveyors, sorters, automated storage systems',
    difficulty: 'medium'
  },
  {
    topic: 'PLCs - Programming & Design',
    question: 'What programming languages are used in PLCs?',
    answer: 'PLCs are programmed using specialized languages including: Ladder Logic (LAD), Function Block Diagrams (FBD), Structured Text (ST), and Sequential Function Charts (SFC). Each language has specific advantages for different control tasks.',
    difficulty: 'hard'
  },
  {
    topic: 'PLCs - Programming & Design',
    question: 'List 4 advantages of PLCs',
    answer: '1. Reliability and Robustness - designed for industrial environments with resistance to dust, moisture, vibration\n2. Flexibility and Programmability - easily reprogrammed for different tasks\n3. Ease of Troubleshooting - diagnostic features simplify fault isolation\n4. Scalability - modular design and expandable I/O adapt to changing requirements',
    difficulty: 'medium'
  },
  {
    topic: 'PLCs - Programming & Design',
    question: 'What are disadvantages of PLCs?',
    answer: '1. Initial Cost - procurement and programming can be expensive\n2. Training Requirements - personnel need specific training to program and maintain\n3. Limited Processing Power - may have slower processing compared to general-purpose computers when handling complex algorithms',
    difficulty: 'medium'
  },
  {
    topic: 'PLCs - Programming & Design',
    question: 'Compare PLCs vs Relay Logic',
    answer: 'PLCs offer: Reprogrammability (unlike fixed relay logic), Reduced wiring complexity (relay logic requires extensive wiring), Diagnostic and monitoring tools (built-in diagnostics), Space and weight reduction (smaller than relay racks)',
    difficulty: 'hard'
  },
];

export default EXTENDED_EXAM_CARDS;
