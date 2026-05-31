import https from 'https';
import fs from 'fs';

const SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNlZndncXR0aHZybXdjbmFubmNyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTkxNjExOSwiZXhwIjoyMDk1NDkyMTE5fQ.JcpmmLi62yMr-TSLJGG5OHMp4o50wqDSIrTjLbUF7eg';

function insertData(table, records) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify(records);
    const options = {
      hostname: 'sefwgqtthvrmwcnanncr.supabase.co',
      path: `/rest/v1/${table}`,
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${SERVICE_KEY}`,
        'apikey': SERVICE_KEY,
        'Content-Type': 'application/json',
        'Prefer': 'return=minimal',
        'Content-Length': body.length
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, data }));
    });

    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

// Manually created cards from the migration - 25 sample cards from Paper 1
const sampleCards = [
  { topic_set_id: '11111111-1111-1111-1111-111111111111', order_index: 26, question: 'What is Industrial Automation?', answer: 'Industrial automation is the use of various control systems (computers, robots, controllers) to operate processes and machinery in manufacturing with improved precision, efficiency, and safety. It replaces human intervention with automated systems.' },
  { topic_set_id: '11111111-1111-1111-1111-111111111111', order_index: 27, question: 'Name six benefits of Industrial Automation.', answer: '1) Minimization of human error. 2) Reduced production costs. 3) Efficient inventory management. 4) Real-time monitoring and predictive maintenance. 5) Enhanced product quality and consistency. 6) Improved workplace safety.' },
  { topic_set_id: '11111111-1111-1111-1111-111111111111', order_index: 28, question: 'What is a Programmable Logic Controller (PLC)?', answer: 'A rugged industrial computer designed to control manufacturing processes using ladder logic or other programming languages. It processes inputs from sensors and produces outputs to actuators. PLCs are known for reliability, ease of troubleshooting, and modular design.' },
  { topic_set_id: '11111111-1111-1111-1111-111111111111', order_index: 29, question: 'Give an example of a PLC application.', answer: 'Example: Controlling an assembly line in car manufacturing where a PLC coordinates robotic welders, parts handling, and quality checks.' },
  { topic_set_id: '11111111-1111-1111-1111-111111111111', order_index: 30, question: 'What is SCADA?', answer: 'Supervisory Control and Data Acquisition. A system that provides real-time data collection and control from remote geographical locations. It integrates sensor data, process control, and historical data logging with graphical interfaces for operators.' },
  { topic_set_id: '11111111-1111-1111-1111-111111111111', order_index: 31, question: 'What is a Distributed Control System (DCS)?', answer: 'A system using a network of controllers distributed throughout an industrial plant. Each controller handles a segment of the process. DCS increases reliability and allows sophisticated control strategies in large-scale continuous processes.' },
  { topic_set_id: '11111111-1111-1111-1111-111111111111', order_index: 32, question: 'What is Direct Digital Control (DDC)?', answer: 'A control method where digital processors execute control algorithms directly on real-time process data. Commonly used in building management systems for precise control of heaters, air conditioning, and lighting.' },
  { topic_set_id: '11111111-1111-1111-1111-111111111111', order_index: 33, question: 'What is a Human-Machine Interface (HMI)?', answer: 'A graphical dashboard that allows operators to monitor system performance, view alarms, and input commands. It is the critical link between the human operator and automated equipment.' },
  { topic_set_id: '11111111-1111-1111-1111-111111111111', order_index: 34, question: 'What is a PID Controller?', answer: 'A control loop feedback mechanism widely used in industrial control systems. It continuously calculates error between desired setpoint and measured variable, applying corrective control through proportional, integral, and derivative adjustments.' },
  { topic_set_id: '11111111-1111-1111-1111-111111111111', order_index: 35, question: 'What is an Actuator?', answer: 'A device that converts control signals into physical motion. Depending on energy source, actuators may be electrical, hydraulic, or pneumatic. They are essential for moving robotic arms or operating valves.' },
  { topic_set_id: '11111111-1111-1111-1111-111111111111', order_index: 36, question: 'What is a Transducer?', answer: 'A device that converts one form of energy into another. In automation, it transforms physical signals (pressure, temperature) into electrical signals readable by PLCs or controllers.' },
  { topic_set_id: '11111111-1111-1111-1111-111111111111', order_index: 37, question: 'What are Industrial Protocols?', answer: 'Rules that define communication between devices in industrial networks. Standard protocols ensure sensors, controllers, and actuators exchange data reliably. Examples: Modbus, Ethernet/IP, Profibus, EtherCAT, ControlNet.' },
  { topic_set_id: '22222222-2222-2222-2222-222222222222', order_index: 1, question: 'What is a PID Controller?', answer: 'A feedback control mechanism that adjusts output based on proportional, integral, and derivative terms to minimize error between setpoint and process variable.' },
  { topic_set_id: '22222222-2222-2222-2222-222222222222', order_index: 2, question: 'Define the Proportional Term in PID control.', answer: 'The proportional term produces output proportional to current error. Gain Kp multiplies the error: output = Kp * error. Higher Kp values increase response speed but can cause overshoot.' },
  { topic_set_id: '22222222-2222-2222-2222-222222222222', order_index: 3, question: 'Define the Integral Term in PID control.', answer: 'The integral term eliminates steady-state error by accumulating past errors over time. It acts as a corrective mechanism when error persists. Ki * integral(error) helps the system reach the setpoint.' },
  { topic_set_id: '22222222-2222-2222-2222-222222222222', order_index: 4, question: 'Define the Derivative Term in PID control.', answer: 'The derivative term predicts future error by measuring the rate of error change. It dampens oscillations and improves stability. Kd * (d(error)/dt) provides predictive correction.' },
  { topic_set_id: '22222222-2222-2222-2222-222222222222', order_index: 5, question: 'What is a root locus diagram?', answer: 'A graphical representation showing how closed-loop poles move in the s-plane as a system parameter (typically gain K) varies. It visualizes system stability and response characteristics.' },
  { topic_set_id: '22222222-2222-2222-2222-222222222222', order_index: 6, question: 'What is a Bode plot?', answer: 'A logarithmic frequency response graph showing magnitude and phase of a transfer function across frequency range. Used to analyze stability margins and system frequency behavior.' },
  { topic_set_id: '22222222-2222-2222-2222-222222222222', order_index: 7, question: 'What are poles and zeros in control systems?', answer: 'Poles are values of s where the transfer function denominator equals zero (system dynamics). Zeros are where the numerator equals zero (system response zeros). Pole/zero placement determines system stability and response.' },
  { topic_set_id: '22222222-2222-2222-2222-222222222222', order_index: 8, question: 'What is system stability?', answer: 'A stable system returns to equilibrium after disturbance. In control theory, stability requires all closed-loop poles to be in the left-half of the s-plane (negative real parts).' }
];

async function seedCards() {
  console.log(`Seeding ${sampleCards.length} massive cards...`);
  
  const result = await insertData('cards', sampleCards);
  if (result.status === 201) {
    console.log('✓ Cards seeded successfully!');
    return true;
  } else {
    console.log(`Error ${result.status}:`, result.data.substring(0, 200));
    return false;
  }
}

seedCards().then(success => process.exit(success ? 0 : 1)).catch(e => {
  console.error(e);
  process.exit(1);
});
