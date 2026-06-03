export interface ExamCard {
  question: string;
  answer: string;
  difficulty: 'easy' | 'medium' | 'hard';
  topic?: string;
}

export const EXAM_MODE_CARDS: ExamCard[] = [
  // Fundamental Definitions
  {
    topic: 'Definitions & Fundamentals',
    question: 'Define Direct Digital Control (DDC)',
    answer: 'A control system where a digital computer or microcontroller directly adjusts the control variables (e.g., valve position, motor speed) based on sensor feedback, without intermediate analog devices.',
    difficulty: 'easy'
  },
  {
    topic: 'Definitions & Fundamentals',
    question: 'Define Programmable Logic Controller (PLC)',
    answer: 'A ruggedized industrial digital computer designed for real-time control of manufacturing processes, assembly lines, or robotic devices, using ladder logic or other programming languages.',
    difficulty: 'medium'
  },
  {
    topic: 'Definitions & Fundamentals',
    question: 'What is a Modem (Modulator-Demodulator)?',
    answer: 'A device that converts digital data from a computer into analog signals for transmission over communication lines (e.g., telephone lines) and demodulates incoming analog signals back to digital data.',
    difficulty: 'easy'
  },
  {
    topic: 'Definitions & Fundamentals',
    question: 'Define SCADA System',
    answer: 'Supervisory Control and Data Acquisition - a high-level system for monitoring and controlling industrial processes across large geographical areas, collecting real-time data from remote sensors and allowing operator intervention.',
    difficulty: 'medium'
  },
  {
    topic: 'Definitions & Fundamentals',
    question: 'What is a Distributed Control System (DCS)?',
    answer: 'A control system where control elements are distributed throughout a plant rather than centralized, with local controllers communicating over a network for process automation.',
    difficulty: 'medium'
  },
  {
    topic: 'Definitions & Fundamentals',
    question: 'Define Actuator in control systems',
    answer: 'A device that converts a control signal into physical action (linear or rotary motion), such as a motor, solenoid, or pneumatic cylinder.',
    difficulty: 'easy'
  },
  {
    topic: 'Definitions & Fundamentals',
    question: 'What is Pulse Width Modulation (PWM)?',
    answer: 'A technique for controlling analog circuits by varying the duty cycle of a digital square wave, effectively adjusting average voltage or power to a load.',
    difficulty: 'hard'
  },
  {
    topic: 'Definitions & Fundamentals',
    question: 'Define Industrial Communication Protocols',
    answer: 'Formal sets of rules and conventions governing data exchange between devices in a communication network (e.g., Modbus, Profibus, Ethernet/IP).',
    difficulty: 'medium'
  },
  {
    topic: 'Definitions & Fundamentals',
    question: 'What is a Transducer?',
    answer: 'A device that converts one form of energy to another, often converting a physical quantity (pressure, temperature) into an electrical signal.',
    difficulty: 'easy'
  },
  {
    topic: 'Definitions & Fundamentals',
    question: 'Define Sensor in automation',
    answer: 'A device that detects or measures a physical property (light, temperature, position) and converts it into an output signal readable by control systems.',
    difficulty: 'easy'
  },

  // Robotics Questions
  {
    topic: 'Robotics',
    question: 'List the 6 basic components of a robot',
    answer: '1. Manipulator (arm) - mechanical structure with links and joints providing motion\n2. End effector (gripper/tool) - device attached to wrist for environment interaction\n3. Actuators - motors or cylinders providing movement\n4. Sensors - provide feedback on position, velocity, force, vision\n5. Controller (computer) - the brain processing sensor data and generating commands\n6. Power supply - provides electrical, pneumatic, or hydraulic energy',
    difficulty: 'medium'
  },
  {
    topic: 'Robotics',
    question: 'Explain Potentiometer sensor in robotics',
    answer: 'Measures angular or linear position by changing resistance. Simple and low-cost but subject to mechanical wear over time. Used in joint angle measurement of robotic arms for position feedback.',
    difficulty: 'easy'
  },
  {
    topic: 'Robotics',
    question: 'What is an Optical Encoder and how does it work?',
    answer: 'Provides digital position feedback using a rotating disk with slots and a light source/detector pair. Can be incremental (relative position changes) or absolute (absolute position). Used for precise motor shaft positioning and speed measurement.',
    difficulty: 'hard'
  },
  {
    topic: 'Robotics',
    question: 'How does an Ultrasonic sensor work in robotics?',
    answer: 'Emits high-frequency sound waves and measures the time-of-flight for echoes to return, calculating distance based on sound speed. Used for obstacle avoidance and navigation in mobile robots.',
    difficulty: 'medium'
  },
  {
    topic: 'Robotics',
    question: 'Describe Infrared (IR) sensor operation',
    answer: 'Uses IR light reflection to detect nearby objects without contact. Some types measure distance via triangulation principle. Common in line-following robots and proximity detection applications.',
    difficulty: 'medium'
  },
  {
    topic: 'Robotics',
    question: 'What is a Force/Torque sensor and its applications?',
    answer: 'Measures forces and moments applied to the robot\'s wrist or end effector using strain gauge technology. Essential for assembly operations, grinding, and delicate object handling tasks requiring force feedback control.',
    difficulty: 'hard'
  },
  {
    topic: 'Robotics',
    question: 'Explain Vision camera (CMOS/CCD) systems in robotics',
    answer: 'Captures images for object recognition, tracking, quality inspection, and visual servoing. Provides rich environmental data enabling intelligent manipulation and precise positioning tasks.',
    difficulty: 'hard'
  },
  {
    topic: 'Robotics',
    question: 'What is an Inertial Measurement Unit (IMU)?',
    answer: 'Combines accelerometers and gyroscopes (and sometimes magnetometers) to measure orientation, angular velocity, and linear acceleration. Used for balance and stability control in mobile and humanoid robots.',
    difficulty: 'hard'
  },

  // Control Systems
  {
    topic: 'Control Systems',
    question: 'Identify and explain the three input signals in control systems',
    answer: '1. Setpoint (Reference input) - the desired target value that the control system aims to achieve\n2. Feedback signal - the measured actual value from sensors used to compare against setpoint\n3. Disturbance input - unwanted external influences that affect system output and must be compensated',
    difficulty: 'hard'
  },
  {
    topic: 'Control Systems',
    question: 'What is the Nyquist Criterion?',
    answer: 'A graphical method for determining system stability by analyzing the frequency response plot. The system is stable if the Nyquist plot does not encircle the critical point (-1, 0) in the complex plane.',
    difficulty: 'hard'
  },
  {
    topic: 'Control Systems',
    question: 'Define system gain margin',
    answer: 'The amount by which the system gain can increase before the system becomes unstable. Measured at the frequency where phase equals -180°. Higher gain margin indicates better stability robustness and margin for error.',
    difficulty: 'hard'
  },
  {
    topic: 'Control Systems',
    question: 'Define phase margin',
    answer: 'The amount of additional phase lag needed at the crossover frequency to cause system instability. Expresses stability robustness in degrees and must be positive for asymptotically stable systems.',
    difficulty: 'hard'
  },
  {
    topic: 'Control Systems',
    question: 'What is steady-state error?',
    answer: 'The difference between the desired setpoint and the actual output after transient effects have died out and the system reaches equilibrium. Lower values indicate better control accuracy and system performance.',
    difficulty: 'medium'
  },
  {
    topic: 'Control Systems',
    question: 'Define and explain Bode Plot',
    answer: 'A frequency response diagram displaying magnitude (in decibels) and phase (in degrees) plotted against frequency on logarithmic scales. Used to analyze system stability, bandwidth, and performance characteristics.',
    difficulty: 'hard'
  },

  // Industrial Automation Overview
  {
    topic: 'Industrial Automation Overview',
    question: 'What is Industrial Automation?',
    answer: 'The use of various control systems including computers, robots, and specialized controllers to operate manufacturing processes and machinery. Replaces human intervention with automated systems for improved precision, efficiency, and safety.',
    difficulty: 'easy'
  },
  {
    topic: 'Industrial Automation Overview',
    question: 'List the major benefits of Industrial Automation',
    answer: '1. Minimization of Human Error - automated systems perform repetitive tasks with consistent high precision\n2. Reduced Production Costs - lowers labor costs and increases production speed\n3. Efficient Inventory Management - real-time tracking and automatic replenishment\n4. Real-Time Monitoring and Predictive Maintenance - early fault detection enables preventive maintenance\n5. Enhanced Quality and Consistency - standardized processes lead to uniform product quality\n6. Improved Safety - reduces human involvement in hazardous tasks',
    difficulty: 'medium'
  },
  {
    topic: 'Industrial Automation Overview',
    question: 'What is a PID Controller and explain its purpose?',
    answer: 'A Proportional-Integral-Derivative controller is a widely-used control loop feedback mechanism in industrial systems. It continuously calculates the error between desired setpoint and measured variable, applying corrective control through proportional (immediate response), integral (cumulative error correction), and derivative (predictive) adjustments.',
    difficulty: 'hard'
  },
  {
    topic: 'Industrial Automation Overview',
    question: 'Define Servo Motor',
    answer: 'A servo motor offers precise control of angular position and speed through feedback control. It combines an electric motor with a feedback sensor (encoder) and is fundamental in robotics, CNC machines, and precision automation applications.',
    difficulty: 'medium'
  },
  {
    topic: 'Industrial Automation Overview',
    question: 'What is Computer Numerical Control (CNC)?',
    answer: 'Involves computers controlling machine tools through preprogrammed sequences of instructions. CNC systems are critical for manufacturing tasks requiring high precision such as cutting, drilling, milling, and contouring operations.',
    difficulty: 'medium'
  },
  {
    topic: 'Industrial Automation Overview',
    question: 'Define Variable Frequency Drive (VFD)',
    answer: 'A device that adjusts the speed of an AC motor by varying the frequency and voltage supplied to it. Essential in applications where precise motor speed regulation improves energy efficiency and enables better process control.',
    difficulty: 'medium'
  }
];

export default EXAM_MODE_CARDS;
